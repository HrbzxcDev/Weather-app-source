import React, { useEffect, useState}  from 'react';
import { ThemeProvider } from 'styled-components';

//Layouts

import Header from './layouts/Header';
import Highlights from './layouts/Highlights';
import Sidebar from './layouts/Sidebar';
import Today from './layouts/Today';
import Week from './layouts/Week';
import Container from './layouts/Container';
import Spinner from './elements/Spinner';
import SpinnerContainer from './elements/SpinnerContainer';
import { StyledGlobal, StyledDashboard } from '../styles';
import { themeLight, themeDark } from '../constants';
import { useImageFetch } from '../hooks/useImageFetch';
import { useCoordinations } from '../hooks/useCoordinations';
import { useWeatherFetch} from '../hooks/useWeatherFetch';
import { useNightMode } from '../hooks/useNightMode';
import { SEARCH_BY_WORD } from '../api/ipa';
import { useTempUnit } from '../hooks/UseTempUnit';



const Dashboard = () => {

    const[nightMode, nightmodeChanged] = useNightMode();
    const[unitmode, unitModeChanged] = useTempUnit();
    const[image, fetchImage] = useImageFetch();
    const[{ lat, long }, loadingLocation, findCoordinates] = useCoordinations();
    const[weather, loading, error, fetchWeather, searchbyLocation, getWeatherLocation] = useWeatherFetch();
    const[showDays, setShowDays] = useState(false);
    const fetchCoordinates = () => {
        findCoordinates();
        getWeatherLocation(lat,long);
    }
    const nightmodeCallback = () => {
        nightmodeChanged();
    }
    const showDaysCallBack = (enabled) => {
        setShowDays(enabled);
    }
    const dosearchLocation = (searchTerm) => {
        searchbyLocation(searchTerm);
        fetchImage(`${SEARCH_BY_WORD}${weather.city}`); 
    }
    const unitTempCallBack = (enabled) =>{
        unitModeChanged(enabled);
       }
    
        //console.log("location", lat, long);
        //console.log('Weather', weather);
        
        useEffect(()=>{
            //default fetching..
            getWeatherLocation(lat,long);
            fetchImage(`${SEARCH_BY_WORD}${weather.city}`);
        },[lat,long])
  

    if (!weather) return <ThemeProvider theme={nightMode ? themeDark : themeLight} ><Spinner /><StyledGlobal /></ThemeProvider>

    return (
        <ThemeProvider theme={nightMode ? themeDark : themeLight}>
            <StyledDashboard>
                <Sidebar
                    findCoordinates={fetchCoordinates}
                    data={weather}
                    searchCallBack={dosearchLocation}
                    error={error}
                    image={image}
                    titleLocation={weather}
                    unitTemp = {unitmode}
                />
                <Container>
                    <Header
                        unitmode = {unitmode}
                        unitTempCallback = {unitTempCallBack}
                        nightmodeCallback = {nightmodeCallback}
                        nightMode={nightMode}
                        showDaysCallBack = {showDaysCallBack}
                        showActive = {showDays}
                    />
                    {loading || loadingLocation ? <SpinnerContainer />
                        : <>
                            {!showDays ? (<Week data={weather.daily} tempUnit = {unitmode}/>)
                            : (<Today tempUnit = {unitmode} data = {weather.hourly} /> )}
                            <Highlights data={weather.current} />     
                        
                        </>}
                </Container>
                <StyledGlobal />
            </StyledDashboard>
        </ThemeProvider>    

    )

}

export default Dashboard;

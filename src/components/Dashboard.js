import React, { useEffect, useState}  from 'react';
import { ThemeProvider } from 'styled-components';



const Dashboard = () => {

    const[nightmode, nightmodeChanged] = usenightmode();
    const[unitmode, unitModeChanged] = useTempUnit();
    const[image, fetchImage] = useImageFetch();
    const[{ lat, long }, loadingLocation, findCoordinates] = useCoordinations();
    const[weather, loading, error, fetchWeather, searchbyLoc, getWeatherLoc] = userWeatherFetch();
    const[showDays, setShowDays] = useState(false);
    const fetchCoordinates = () => {
        findCoordinates();
        getWeatherLoc(lat,long);
    }
    const nightmodeCallback = () => {
        nightmodeChanged();
    }
    const showDaysCallBack = (enabled) => {
        setShowDays(enabled);
    }
    const dosearchLocation = (searchTerm) => {
        searchbyLoc(searchTerm);
        fetchImage(`${SEARCH_BY_WORD}${weather.city}`); 
    }
    const useTempCallBack = (enabled) => {
        unitModeChanged(enabled);
        useEffect(()=>{

            getWeatherLoc(lat,long);
            fetchImage(`${SEARCH_BY_WORD}${weather.city}`);
        },[lat,long])
        
        
    }

}

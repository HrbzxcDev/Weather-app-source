import React from "react";
import SearchBar from "../elements/Searchbar";
import WeatherIcon from "../elements/WeatherIcon";
import Locationbox from "../elements/Locationbox";
import WeatherInfo from "../elements/WeatherInfo";
import { StyledSidebar } from "./../../styles";
import { countries } from "country-data";

const Sidebar = ({

    findCoordinates,
    searchCallback,
    image,
    titleLocation,
    error,
    data,
    unitTemp,

}) => {

    return (

        <StyledSidebar>
            <SearchBar
                findCoordinates={findCoordinates}
                searchCallback={searchCallback}
                error={error}
            />
            {data.weather[0] && <WeatherIcon Icon={data.weather[0].Icon} />}
            <WeatherInfo data={data} unit={unitTemp} />
            {titleLocation.country && (
                <Locationbox
                    image={image}
                    titleLocation={
                        titleLocation.city  + ", " + countries[titleLocation.country].name
                    }

                />
            )}
        </StyledSidebar>
    )
}

export default Sidebar;
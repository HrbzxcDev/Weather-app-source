// import { useState, useEffect } from "react";
// import { API_TEST } from '../api'

// export const useWeatherFetch = (searchCity, lat = '', long = '') => {
//     const [weather, setWeather] = useState('');
//     const [error, setError] = useState(false);
//     const [loading, setLoading] = useState(false);

//     const fetchWeather = async endpoint => {
//         try {
//             const result = await (await fetch(endpoint)).json();
//             return result;

//         } catch (error) {
//             console.log(error);
//         }
//     }


    
//     //get weather with lat and long
//     const getWeatherLocation = (lat, long) => {
//         setLoading(true);
//         if (lat && long) {
//             fetchWeather(`${SEARCH_BY_LOCATION}&lat=${lat}&lon=${long}`).then((res) => {
//                 //console.log('Getting api');
//                 setWeather({ ...res, city: res.name, country: res.sys.country });
//             });
//             fetchWeather(`${GET_NEXT_DAYS_HOURS}&lat=${lat}&lon=${long}`).then((res) => {
//                 setWeather(prev => ({ ...prev, daily: res.daily, hourly: res.hourly, current: res.current }));
//                 setLoading(false);
//             });
//         }

//     }



// }
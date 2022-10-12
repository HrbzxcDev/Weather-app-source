//OPENWEATHER & UNSPLASH KEYS
const API_APPID = process.env.REACT_APP_API_KEY_APPID;
const API_UNSPLASH = process.env.REACT_APP_API_KEY_UNSLPLASH;

const API_URL_APPID = "https://api.openweathermap.org/data/2.5/weather";
const DEFAULT_URL = `${API_URL_APPID}/?APPID=${API_APPID}&lat=14.599512&lon=120.984222`; //Manila Default
const SEARCH_BY_LOCATION = `${API_URL_APPID}?appid=${API_APPID}`;

const GET_NEXT_DAYS_HOURS =  `https://api.openweathermap.org/data/2.5/onecall?exclude=minutely&appid=${API_APPID}`; //&lat={lat}&lon={lon}
const DEF_N_D_H = `https://api.openweathermap.org/data/2.5/onecall?exclude=minutely&appid=${API_APPID}&lat=14.599512&lon=120.984222`;

//  UNSPLASH 
const URL_UNSPLASH = "https://api.unsplash.com/search/photos";
const SEARCH_BY_WORD = `${URL_UNSPLASH}?client_id=${API_UNSPLASH}&page=1&query=`;
const SEARCH_DEFAULT = `${URL_UNSPLASH}?client_id=${API_UNSPLASH}&page=1&query=Manila`;


export {
    API_APPID,
    API_UNSPLASH,
    API_URL_APPID,
    DEFAULT_URL,
    SEARCH_BY_LOCATION,
    GET_NEXT_DAYS_HOURS,
    DEF_N_D_H,
    URL_UNSPLASH,
    SEARCH_BY_WORD,
    SEARCH_DEFAULT
}
//*** OPEN WEATHER & UNSPLASH KEYS****//
const API_APPID = process.env.REACT_APP_API_KEY_APPID;
const API_UNPSLASH = process.env.REACT_APP_API_KEY_UNSPLASH;

// const API_URL_APPID = "https://api.openweathermap.org/data/2.5/weather";
// const DEFAULT_URL = `${API_URL_APPID}/?APPID=${API_APPID}&lat=41.390205&lon=2.154007`;
// const SEARCH_BY_LOCATION = `${API_URL_APPID}?appid=${API_APPID}`; //&lat={lat}&lon={lon}

const API_URL_APPID = "https://api.openweathermap.org/data/2.5/weather";
const DEFAULT_URL = `${API_URL_APPID}?lat=14.599512&lon=120.984222&appid=${API_APPID}`;
const SEARCH_BY_LOCATION = `${API_URL_APPID}?appid=${API_APPID}?lat=14.599512&lon=120.984222`; //&lat={lat}&lon={lon}



// https://api.openweathermap.org/data/2.5/weather?lat=41.390205&lon=2.154007&appid=52893fd63c8533459d397c687e178d6d

const GET_NEXT_DAYS_HOURS = `https://api.openweathermap.org/data/2.5/weather?exclude=minutely&appid=${API_APPID}`; //&lat={lat}&lon={lon}
const DEF_N_D_H = `https://api.openweathermap.org/data/2.5/weather?exclude=minutely&appid=${API_APPID}&lat=14.599512&lon=120.984222`;

// const GET_NEXT_DAYS_HOURS = `https://api.openweathermap.org/data/2.5/onecall?exclude=minutely&appid=${API_APPID}`; //&lat={lat}&lon={lon}
// const DEF_N_D_H = `https://api.openweathermap.org/data/2.5/onecall?exclude=minutely&appid=${API_APPID}&lat=41.390205&lon=2.154007`;



//*** UNSPLASH ****//
// const URL_UNSPLASH = "https://api.unsplash.com/search/photos";
const SEARCH_BY_WORD = `https://api.unsplash.com/search/photos?client_id=${API_UNPSLASH}`;
const SEARCH_DEFAULT = `https://api.unsplash.com/search/photos?client_id=${API_UNPSLASH}&page=1&query=nature`;


// https://api.unsplash.com/search/photos?client_id=zQBAMwwBJYv7a4vFQd7rKPOMr_mVoZC7OkIsHb4jMVY&page=1&query=nature

export {
  API_URL_APPID,
  API_APPID,
  DEFAULT_URL,
  SEARCH_BY_LOCATION,
  SEARCH_BY_WORD,
  SEARCH_DEFAULT,
  GET_NEXT_DAYS_HOURS,
  DEF_N_D_H,
};

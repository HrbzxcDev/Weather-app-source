import React from "react";
import Dashboard from "./components/Dashboard";

function App() {
  if(

    process.env.REACT_APP_API_KEY_APPID === undefined ||
    process.env.REACT_APP_API_KEY_UNSPLASH === undefined
  ) {
    return(
      <h4>

        Please add .env and and your API KEYS

      </h4>
    
    
    )
  }
  return (
    <div className="App">
      <Dashboard/>
    </div>
  );

}

export default App;
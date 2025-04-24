import './App.css';
import React from "react";
// import Welcome from './Components/Welcome';
// import CurrentDate from './Components/CurrentDate';
// import ReSize from './Components/ReSize';
import Weather from './Components/Weather';
function App() {
  return (
    <div className="App">

      {/* <Welcome/>
      <CurrentDate/> */}
      {/* <ReSize/> */}
      <h2>Welcome to our whether app</h2>
      <p>get the latest weather updates</p>
      <Weather/>
    </div>
  );
}

export default App;

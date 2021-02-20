
import React, { useState } from 'react';
import Axios from 'axios';

import DisplayWeather from './component/DisplayWeather';
const App =() =>{

  
  const [name,setName]=useState("");
  const [cityname, setCityname]=useState("");
  const [weather, setWeather]=useState([]);
  const API_KEY="a251d235e815c688bca0afb07c50a0f0";
  //const API_ID="5e74f4d7";
  const country="india";
  const url=`https://api.openweathermap.org/data/2.5/weather?q=${name},${country}&appid=${API_KEY}`;
  const getData= async()=>{
    const data =await Axios.get(url);
    console.log(data);
    console.log(data.data.name);
    setWeather(
      {
        data:data
      }
      );
  //  console.log(result.data.wind);
  //  console.log(result.data.wind.deg);
};
  const onChange=(e)=>{
    setName(e.target.value);
  };
  const onSubmit =(e) =>{
    setCityname(name);
    e.preventDefault();  
   getData();
  }
  return (
    <>
      <div>
        <h1>Enter City Name {cityname}</h1>
        <input type="text" 
         placeholder="Enter City Name"
         value={name}
         onChange={onChange}></input>
        <button onClick={onSubmit}>Search</button>
        {
          weather.data!=undefined?
          <div>
          <DisplayWeather data={weather.data}/>
          </div>
          :null
        }
      </div>
    </>

  );
};

export default App;

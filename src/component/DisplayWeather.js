import React from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
function DisplayWeather(props){

    const{data}=props;

    return (
      <div className="card">
         <h4 className="card-title">{data.data.name},{data.data.sys.country}.Wheather</h4>
         Temp:<h2>{Math.floor(data.data.main.temp-273.15)} </h2>
        <span>{data.data.weather[0].main}</span>
        </div>
    )
}
export default DisplayWeather;
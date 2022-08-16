import { useState } from "react"
import styled from "styled-components"
import CityComponent from "./modules/CityComponent"
import WeatherComponent from "./modules/WeatherInfoComponent"
import axios from 'axios'

const API_KEY = '45dff36aac13aef9c4d4f7edf49a1982'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  align-items: center;
  box-shadow: 0 3px 6px 0 #555;
  padding: 20px 10px;
  border-radius: 5px;
  width: 380px;
  background: white;
  font-family: Roboto;
`

const AppLabel = styled.span`
color: black;
font-size: 18px;
font-weight: bold;
`

function App() {
  const [city, updateCity] = useState()
  const [weather, updateWeather] = useState()

  const fetchWeather = async(e) => {
    e.preventDefault()
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);
    updateWeather(response.data);
  }

  return (
    <Container>
      <AppLabel> React Weather App </AppLabel>
      {weather ? (
      <WeatherComponent weather={weather}/>
      ) : (
        <CityComponent updateCity={updateCity} fetchWeather={fetchWeather}/>
      )}
    </Container>
  );
}

export default App;
import styled from "styled-components"

const WeatherLogo = styled.img`
    height: 140px;
    width: 140px;
    margin: 40px auto;
`
const ChooseCityLabel = styled.span`
    color: black;
    font-size: 18px;
    font-weight: bold;
    margin: 10px auto;
`

const SearchBox = styled.form`
    display: flex;
    flex-direction: row;
    border: solid black 1px;
    border-radius: 2px;
    color: black;
    margin: 20px auto;
    & input{
        padding: 10px;
        font-size: 18px;
        border: none;
        outline: none;
        font-weight: bold;
    }
    & button{
        color: white;
        background-color: black;
        padding: 10px;
        font-size: 18px;
        border: none;
        outline: none;
        font-weight: bold;
        cursor: pointer;
    }
`

const CityComponent = (props) => {
    const {updateCity, fetchWeather} = props
    return (
        <>
           <WeatherLogo src="/icons/perfect-day.svg"/>
           <ChooseCityLabel> Find weather of your city </ChooseCityLabel>
           <SearchBox onSubmit={fetchWeather}>
                <input 
                    placeholder="City" 
                    onChange={(e) => updateCity(e.target.value)}
                />
                <button type='submit'>Search</button>
           </SearchBox>
        </>
    )
}

export default CityComponent
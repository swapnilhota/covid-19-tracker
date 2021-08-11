
import { FormControl, MenuItem, Select } from '@material-ui/core';
import { useEffect, useState } from 'react';
import './App.css';
import InfoBox from './InfoBox';

function App() {

  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState('worldwide');

  useEffect(() => {
    //fetch countries data every time site loads
    const getCountriesData = async () => {
      await fetch("https://disease.sh/v3/covid-19/countries")
        .then((response) => response.json())
        .then((data) => {
          const countries = data.map((country) => (
            {
              name: country.country, //country name
              value: country.countryInfo.iso2 //country code
            }
          ))
          setCountries(countries);
        })
    }

    getCountriesData();
  }, []);

  const onCountryChange = (e) => {
    const countryCode = e.target.value;
    setCountry(countryCode);
  }

  return (
    <div className="app">
      <div className="app__header">
        <h1>COVID-19 TRACKER</h1>
        <FormControl className="app__dropdown">
          <Select variant="outlined" onChange={onCountryChange} value={country}>
            <MenuItem value="worldwide" >Worldwide</MenuItem>
            {
              countries.map(country => (
                <MenuItem value={country.value} >{country.name}</MenuItem>
              ))
            }
          </Select>
        </FormControl>
      </div>
      <div className="app__stats">
        <InfoBox title="Coronavirus Cases" cases={123} total={2000} />
        <InfoBox title="Recovered" cases={1234} total={3000} />
        <InfoBox title="Deaths" cases={12345} total={4000} />
      </div>
    </div>
  );
}

export default App;

import './App.css';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
// import countries from './countries.json'
import { Route, Routes } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {

  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios.get('https://ih-countries-api.herokuapp.com/countries')
      .then((resp) => {
        if (resp.status === 200) {
          setCountries(resp.data);
        }
      });
    return () => {

    };
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<CountriesList countries={countries} />} />
        <Route path="/:countryCode" element={<CountryDetails />} />
      </Routes>
    </div>
  );
}

export default App;

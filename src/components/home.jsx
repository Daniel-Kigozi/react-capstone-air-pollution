import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectAllCountries, changeContinent } from '../redux/countrySlice';
import CityCard from './city';

const HomePage = () => {
  const dispatch = useDispatch();
  const countriesArray = useSelector(selectAllCountries);
  // const [continent, setContinent] = useState('All');

  const handleContinentChange = (continent) => {
    dispatch(changeContinent(continent));
  };
  return (
    <>
      <button type="button" onClick={() => handleContinentChange('All')}>All</button>
      <button type="button" onClick={() => handleContinentChange('Africa')}>Africa</button>
      <button type="button" onClick={() => handleContinentChange('Asia')}>Asia</button>
      <button type="button" onClick={() => handleContinentChange('Europe')}>Europe</button>
      <button type="button" onClick={() => handleContinentChange('Oceania')}>Ocenia</button>
      <button type="button" onClick={() => handleContinentChange('Americas')}>Americas</button>

      <div className="header">
        <h2>Air Pollution</h2>
      </div>

      <div className="cont-city">
        {

countriesArray.map((country) => (
  <CityCard
    key={country.name}
    name={country.name}
    continent={country.continent}
    flag={country.flag}
    lat={country.lat}
    lon={country.lon}
  />
))
 }
      </div>
    </>
  );
};

export default HomePage;

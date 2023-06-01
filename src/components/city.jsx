import React from 'react';
// import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
// import { fetchPollutionData } from '../redux/pollutionSlice';

const CityCard = ({
  name, continent, flag, lat, lon,
}) => {
  // const dispatch = useDispatch();
  const navigation = useNavigate();
  const handleNav = (city) => {
    navigation(`${city}`, {
      state: {
        name, continent, lat, lon,
      },
    });
  };
  return (
    <div className="city-card">
      <h1>{name}</h1>
      <h2>{continent}</h2>
      <img src={flag} alt="country-flag" />
      <button type="button" className="view-polution-btn" onClick={() => handleNav('city')}>View-Pollution</button>
    </div>
  );
};

CityCard.propTypes = {
  name: PropTypes.string.isRequired,
  continent: PropTypes.string.isRequired,
  flag: PropTypes.string.isRequired,
  lat: PropTypes.string.isRequired,
  lon: PropTypes.string.isRequired,
};

export default CityCard;

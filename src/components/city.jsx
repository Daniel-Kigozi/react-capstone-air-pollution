import React from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const CityCard = ({ name, continent, flag }) => {
  const navigation = useNavigate();
  const handleNav = (city) => {
    navigation(`${city}`);
  };
  return (
    <>
      <h1>{name}</h1>
      <h2>{continent}</h2>
      <img src={flag} style={{ width: '150px', height: '150px' }} alt="" />
      <button type="button" className="view-polution-btn" onClick={() => handleNav('city')}>View-Pollution</button>
    </>
  );
};

CityCard.propTypes = {
  name: PropTypes.string.isRequired,
  continent: PropTypes.string.isRequired,
  flag: PropTypes.string.isRequired,
};

export default CityCard;

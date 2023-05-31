import React from 'react';
import { useNavigate } from 'react-router-dom';

const CityCard = () => {
  const navigation = useNavigate();
  const handleNav = (city) => {
    navigation(`${city}`);
  };
  return (
    <>
      <h1>City Name</h1>
      <h2>Country</h2>
      <button type="button" className="view-polution-btn" onClick={() => handleNav('city')}>View-Pollution</button>
    </>
  );
};

export default CityCard;

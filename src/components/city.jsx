import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const CityCard = ({
  name, continent, flag, lat, lon,
}) => {
  const navigation = useNavigate();
  const handleNav = (city) => {
    navigation(`${city}`, {
      state: {
        name, continent, lat, lon,
      },
    });
  };

  return (
    <div
      className="city-card"
      role="button"
      onClick={() => handleNav('city')}
      onKeyDown={(e) => {
        if (e.key === 'Enter') {
          handleNav('city');
        }
      }}
      tabIndex={0}
    >
      <FontAwesomeIcon className="right-arrow" icon={faArrowCircleRight} size="1xs" />
      <h4>{name}</h4>
      <p>
        lat:
        {lat}
      </p>
      <img src={flag} alt="country-flag" />
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

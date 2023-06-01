import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { fetchPollutionData, selectPollutionData } from '../redux/pollutionSlice';

const Pollution = () => {
  const location = useLocation();
  const data = location.state;
  const navigate = useNavigate();
  const handleGoBackButton = () => {
    navigate(-1);
  };

  const pollutionData = useSelector(selectPollutionData(data.name));
  const dispatch = useDispatch();

  useEffect(() => {
    if (!pollutionData) {
      dispatch(fetchPollutionData({ country: data.name, lat: data.lat, lon: data.lon }));
    }
  }, [data, dispatch, pollutionData]);

  return (
    <>
      <div className="polluted">
        <div className="pollution-details">
          <h1>{data.name}</h1>
          <h2>Pollution Data</h2>
          <p>Air Pollutants</p>
          <p>
            no :
            {pollutionData?.no}
          </p>
          <p>
            co :
            {pollutionData?.co}
          </p>
          <p>
            no2 :
            {pollutionData?.no2}
          </p>
          <br />
          <p>
            Air Quality:
            {pollutionData?.stringQuality}
          </p>
        </div>
      </div>
      <button type="button" onClick={handleGoBackButton}>Go Back</button>
    </>
  );
};

export default Pollution;

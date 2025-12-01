import React from 'react';

const FilterCafes = ({ stations }) => {
    return (
      <div className="controls">
        <select name="subway" id="subway">
          <option value="All">Все</option>
          {stations.map(station => (
            <option key={station.code} value={station.code}>{station.name}</option>
          ))}
        </select>
      </div>
    );
  };
  
  export default FilterCafes;

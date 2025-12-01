import React, { useState, useEffect } from 'react';
import FilterCafes from './FilterCafes'; 
import axios from 'axios';

const stations = [
    { name: "Арбатская", code: "Arbat" },
    { name: "Александровский сад", code: "Alexanders Garden" },
    { name: "Московская", code: "Moscow" },
    { name: "Парк Культуры", code: "Culture" },
    { name: "Театральная", code: "Theater" }
  ];



  const CafesTable = () => {
    const [cafes, setCafes] = useState([]);
  
    useEffect(() => {
      async function fetchData() {
        try {
          const response = await axios.get('/cafes'); 
          setCafes(response.data); 
        } catch (err) {
          console.error('Ошибка загрузки данных:', err.message);
        }
      }
      fetchData(); 
    }, []); 
    return (
      <div className="cafesTable">
        <FilterCafes stations={stations} /> {}
        <ul className="cardsList">
          {cafes.map((cafe, index) => (
            <li key={index} className="card">
              <img src={cafe.image ? cafe.image : "https://via.placeholder.com/150"} alt={cafe.name} />
              <h2>{cafe.name}</h2>
              <p>{cafe.description || ''}</p>
              <p>{cafe.address || ''}</p>
              <p>Subway: {cafe.subway || '—'}</p>
              <p>{cafe.openingHours || ''}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default CafesTable;

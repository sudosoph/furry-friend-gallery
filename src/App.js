import React, { useState, useEffect } from 'react';

// components
import DogCardInfo from './DogCardInfo';

// styles
import './App.css';

const loadDogPictures = async (dogsToLoad = 8) => {
  const apiBaseUrl = 'https://dog.ceo/api/breeds/image/random/';
  const response = await fetch(`${apiBaseUrl}${dogsToLoad}`);
  const data = await response?.json();
  const dogData = data.message.map(item => {
    let breed = item.replace('https://', '').split('/')[2];

    if (breed && breed!== '') {
      breed = breed.split('-').reverse().join(' ');
    }

    return {
      id: `dog_pic_${data.message.indexOf(item)}`,
      imgUrl: item,
      breed
    };
  });
  return dogData;
};

function App() {
  const [dogPictures, setDogPictures] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [numOfDogs, setNumOfDogs] = useState('');
  const [totalDogsSearched, setTotalDogsSearched] = useState(0);
  return (
    <>
      <h1>Welcome to Furry Friends Gallery</h1>
    </>
  );
}

export default App;

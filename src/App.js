import React from 'react'
import './App.css';
import Row from './Row'
import requests from './requests'
import Banner from './Banner';
import Nav from './Nav';


function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Row title="NETFLIX ORGINALS" fetchURL={requests.fetchNetflixOriginal} isLarge={true} />
      <Row title="Trending Now" fetchURL={requests.fetchTrending} />
      <Row title="Top Rated" fetchURL={requests.fetchTopRated} />
      <Row title="Action Movie" fetchURL={requests.fetchActionOriginal} />
      <Row title="Comedy movies" fetchURL={requests.fetchComedyOriginal} />
      <Row title="Horror Movies" fetchURL={requests.fetchHorrorOriginal} />
      <Row title="Romance Movies" fetchURL={requests.fetchRomanceOriginal} />
      <Row title="Documentaries" fetchURL={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';

import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import products from './data/products.js';

import Nav from './components/Nav.js';
import HomePage from './pages/HomePage.js';
import GalleryPage from './pages/GalleryPage.js';
import StaffPage from './pages/StaffPage.js';
import OrderPage from './pages/OrderPage.js';
import CreatePage from './pages/CreatePage.js';
import EditPage from './pages/EditPage.js';
import CollectionPage from './pages/CollectionPage.js';
import TopicsPage from './pages/TopicsPage.js';
import { FaSun } from "react-icons/fa"; 
import './App.css';

function App() {
  const [game, setGame] = useState([])
  return (

    <>
    <BrowserRouter>
      <header className="App-Header">
        <h1><i className="Logo" alt="sun icon"><FaSun /></i> Skye's Portfolio Project
          <i className="Logo" alt="sun icon"><FaSun /></i> 
        </h1>
      </header>

      <Nav />

      <main>
        <section className="article">

          <Routes>
            <Route path ="/" element={<HomePage />} />
            <Route path ="/topics" element={<TopicsPage />} />

            <Route path="/collection" element={<CollectionPage setGame={setGame} />} />
            <Route path="/add-game" element={<CreatePage />} />
            <Route path="/edit-game" element={< EditPage game={game} />} />


            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/order" element={<OrderPage products={products} />} />
            <Route path="/staff" element={<StaffPage />} />
          </Routes>

        </section>
      </main>

      <footer>
        <p>&copy; 2023 Posler, sourced from Canvas Modules 1-9. </p>
      </footer>
    </BrowserRouter>
    </>


  );
}

export default App;

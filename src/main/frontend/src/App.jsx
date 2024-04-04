import React from "react";
import { CookiesProvider } from "react-cookie";
import Cookie from './pages/Cookie';


import './App.css';

export default function App() {
  return (
    <div className="App-header">
      <CookiesProvider>
        <Cookie />
      </CookiesProvider>
    </div>
  )
}
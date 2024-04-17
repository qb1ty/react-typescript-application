import React from 'react';
import { MainContext } from './Context/Context';
import Navigation from './components/Header/Navigation/Navigation';
import './App.css'

const App: React.FC = () => {
  return (
    <MainContext>
      <Navigation />
    </MainContext>
  )
}

export default App
import React from 'react';
import './App.scss';
import { Item } from './components/Item';
import { ScssIcon, CssIcon} from './components/Icons/Icons';
import innjoyIcon from './images/innjoy.png';
import { Card } from './components/Card';

function App() {
  return (
    <div className="App">
      <div className="slider-thumb"></div>
      <header className="App__header">
        <ScssIcon />
        <ScssIcon />
      </header>

      <div className="slider-thumb2"></div>
      <Card image={innjoyIcon}>
        <ScssIcon />
        <CssIcon />
        <ScssIcon />
        <ScssIcon />
        <ScssIcon />
        <ScssIcon />
        <ScssIcon />
        <ScssIcon />
        <ScssIcon />
        <ScssIcon />
        <ScssIcon />
        <ScssIcon />
        <ScssIcon />
        <ScssIcon />
        <ScssIcon />
        <ScssIcon />
        <ScssIcon />
        <ScssIcon />
      </Card>

      <div className="App__field">

        <Item image={innjoyIcon}>
          <ScssIcon />
          <ScssIcon />
          <ScssIcon />
          <ScssIcon />
        </Item>

        <Item image={innjoyIcon}>
          <ScssIcon />
          <ScssIcon />
          <ScssIcon />
          <ScssIcon />
        </Item>

        <Item image={innjoyIcon}>
          <ScssIcon />
          <ScssIcon />
          <ScssIcon />
          <ScssIcon />
        </Item>
        <Item image={innjoyIcon}>
          <ScssIcon />
          <ScssIcon />
          <ScssIcon />
          <ScssIcon />
        </Item>
        <Item image={innjoyIcon}>
          <ScssIcon />
          <ScssIcon />
          <ScssIcon />
          <ScssIcon />
        </Item>
        <Item image={innjoyIcon}>
          <ScssIcon />
          <ScssIcon />
          <ScssIcon />
          <ScssIcon />
        </Item>

        <Item image={innjoyIcon}>
          <ScssIcon />
          <ScssIcon />
          <ScssIcon />
          <ScssIcon />
        </Item>
      </div>




    </div>
  );
}

export default App;

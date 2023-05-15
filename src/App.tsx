import React from 'react';
import './App.scss';
import { Item } from './components/Item';
import {
  ScssIcon,
  CssIcon,
  TsIcon,
  JsIcon,
  ReactIcon,
  ReduxIcon,
  HtmlIcon,
  LessIcon,
  GitIcon,
  JestIcon,
  FigmaIcon,
  JiraIcon,
  StoryBookIcon,
  NpmIcon
} from './components/Icons/Icons';
import innjoyIcon from './images/innjoy.png';
import metIcon from './icons/met2.png';
import diaIcon from './icons/dia.png';
import gameIcon from './icons/2048.svg.png';
import todoIcon from './icons/todo.jpg';
import potIcon from './icons/pot.svg';
import templateIcon from './icons/template.png';
import mobileIcon from './icons/LOGO.svg';
import { About } from './components/About';
import { projects } from './data/projects';
import { Color } from './types/Color';

function App() {
  return (
    <div className="App">
      <div className='App__about-me'>
        <About>
        <HtmlIcon />
          <CssIcon />
          <LessIcon />
          <ScssIcon />
          <JsIcon />
          <TsIcon />
          <ReactIcon />
          <ReduxIcon />
          <NpmIcon />
          <GitIcon color={Color.Hover} />
          <JestIcon />
          <FigmaIcon />
          <JiraIcon />
          <StoryBookIcon />
        </About>
      </div>

      <div className='App__my-projects'>
        <div className="App__item-list">
        <Item
            title='Phone catalog'
            image={mobileIcon}
            description='Mobile device app with search, pagination, cart, and favorite functionality using React and localStorage.'
            demoUrl='https://vanyachyzh.github.io/phone_catalog/'
            gitUrl='https://github.com/vanyachyzh/phone_catalog'
          >
          </Item>


          <Item
            title='MET'
            image={metIcon}
            description='Responsive landing page for Metropolitan Museum, featuring collections, exhibitions, and events, built with HTML/CSS/SCSS and BEM methodology.'
            gitUrl='https://github.com/vanyachyzh/landing_met'
            demoUrl='https://vanyachyzh.github.io/landing_met/'
          >
          </Item>

          <Item
            title='innjoy'
            image={innjoyIcon}
            description='React-based booking service for hotels, rooms, and villas worldwide, featuring filters, sorting, and reviews.'
            demoUrl='https://vanyachyzh.github.io/booking/'
            gitUrl='https://github.com/vanyachyzh/booking'
          >
          </Item>

          <Item
            title='Potr Pots'
            image={potIcon}
            description='E-commerce site with adaptive design. Sells pots, built using HTML/CSS/SCSS with BEM. Mobile, tablet, desktop, and 1600+ screens optimized.'
            demoUrl='https://vanyachyzh.github.io/potr_pots_landing/'
            gitUrl='https://github.com/vanyachyzh/potr_pots_landing'
          >
          </Item>

          <Item
            title='Todo app'
            image={todoIcon}
            description='A React TODO app with user accounts, task creation/editing/deletion, built using HTML, CSS, JS, React.js, SCSS, and TypeScript.'
            gitUrl='https://github.com/vanyachyzh/app_todo'
            demoUrl='https://vanyachyzh.github.io/app_todo/'
          >
          </Item>

          <Item
            title='2048 game'
            image={gameIcon}
            description='2048 game implemented in JS using OOP principles. Play by combining numbered tiles to reach 2048.'
            gitUrl='https://github.com/vanyachyzh/game_2048'
            demoUrl='https://vanyachyzh.github.io/game_2048/'
          >
          </Item>

          <Item
            title='Dia'
            image={diaIcon}
            description='Creative Agencys landing page built with HTML, CSS, and SCSS showcases the agency`s services, portfolio, and team with adaptive design'
            gitUrl='https://github.com/vanyachyzh/landing_dia'
            demoUrl='https://vanyachyzh.github.io/landing_dia/'
          >
          </Item>

          <Item
            title='Just Template'
            image={templateIcon}
            description='Template with searchable table of people.'
            gitUrl='https://github.com/vanyachyzh/dashboard-test'
            demoUrl='https://vanyachyzh.github.io/dashboard-test/'
          >
          </Item>
        </div>
      </div>
    </div>
  );
}

export default App;

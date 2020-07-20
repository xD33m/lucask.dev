import React from 'react';
import UnderConstruction from 'react-under-construction';
import 'react-under-construction/build/css/index.css';
import './App.css';
import chart from './assets/chart.svg';
import cat from './assets/cat.svg';
import space from './assets/space.jpg';
import time from './assets/time.svg';
import connection from './assets/connection.svg';

function App() {
  return (
    <UnderConstruction
      background={{
        image: space,
        textColor: '#fff',
        overlay: {
          color: '#000',
          opacity: '.7',
        },
      }}
      logo={{
        src: cat,
        alt: 'watch',
      }}
      title={{
        text: 'Lucas Keller',
      }}
      description={{
        text: 'This is just a placeholder :)',
      }}
      links={[
        // {
        //   url: "https://www.facebook.com/",
        //   image: "https://image.flaticon.com/icons/svg/220/220200.svg",
        // },
        {
          url: 'https:analytics.lucask.dev',
          image: chart,
        },
        {
          url: 'https://spanningtree.lucask.dev',
          image: connection,
        },
        {
          url: 'https://xd33m.github.io/',
          image: time,
        },
      ]}
    />
  );
}

export default App;

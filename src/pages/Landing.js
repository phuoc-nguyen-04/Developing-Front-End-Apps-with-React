import React from "https://esm.sh/react@18";
import { Link } from "https://esm.sh/react-router-dom@6?deps=react@18,react-dom@18";

export const Landing = () => {
  return (
    React.createElement('main', null,
      React.createElement('section', { className: 'hero' },
        React.createElement('div', { className: 'overlay' },
          React.createElement('div', { className: 'container content' },
            React.createElement('h1', null, 'Bring Nature Home'),
            React.createElement('p', null,
              'At GreenHaven Plants, we curate resilient, beautiful houseplants that ',
              'brighten spaces and purify air. From low-light champions to tropical ',
              'showpieces, we have the perfect plant for every corner of your home.'
            ),
            React.createElement('div', { className: 'cta' },
              React.createElement(Link, { to: '/products', className: 'btn' }, 'Get Started')
            )
          )
        )
      )
    )
  );
};



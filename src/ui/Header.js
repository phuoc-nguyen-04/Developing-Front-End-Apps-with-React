import React from "https://esm.sh/react@18";
import { Link, useLocation } from "https://esm.sh/react-router-dom@6?deps=react@18,react-dom@18";
import { useSelector } from "https://esm.sh/react-redux@9?deps=react@18,react-dom@18";
import { selectTotalCount } from "../store/store.js";

export const Header = () => {
  const totalCount = useSelector(selectTotalCount);
  const location = useLocation();

  return (
    React.createElement('header', { className: 'site-header' },
      React.createElement('div', { className: 'container bar' },
        React.createElement(Link, { to: '/', className: 'brand', 'aria-label': 'GreenHaven Plants Home' },
          React.createElement('span', { style: { fontSize: 22 } }, '🌿'),
          React.createElement('span', null, 'GreenHaven Plants')
        ),
        React.createElement('nav', { className: 'nav' },
          location.pathname !== '/products' && React.createElement(Link, { className: 'btn secondary', to: '/products' }, 'Shop'),
          location.pathname !== '/cart' && React.createElement(Link, { className: 'cart-pill', to: '/cart', 'aria-label': 'Shopping cart' },
            React.createElement('span', null, '🛒'),
            React.createElement('span', null, totalCount)
          )
        )
      )
    )
  );
};



import React from "https://esm.sh/react@18";
import { createRoot } from "https://esm.sh/react-dom@18/client";
import { HashRouter, Routes, Route, Link } from "https://esm.sh/react-router-dom@6?deps=react@18,react-dom@18";
import { Provider } from "https://esm.sh/react-redux@9?deps=react@18,react-dom@18";

import { store } from "./store/store.js";
import { Header } from "./ui/Header.js";
import { Landing } from "./pages/Landing.js";
import { Products } from "./pages/Products.js";
import { Cart } from "./pages/Cart.js";

const App = () => (
  React.createElement(Provider, { store },
    React.createElement(HashRouter, null,
      React.createElement(React.Fragment, null,
        React.createElement(Header, null),
        React.createElement(Routes, null,
          React.createElement(Route, { path: "/", element: React.createElement(Landing) }),
          React.createElement(Route, { path: "/products", element: React.createElement(Products) }),
          React.createElement(Route, { path: "/cart", element: React.createElement(Cart) }),
          React.createElement(Route, { path: "*", element: React.createElement(Landing) })
        )
      )
    )
  )
);

const root = createRoot(document.getElementById("root"));
root.render(React.createElement(App));



import React from "https://esm.sh/react@18";
import { useDispatch, useSelector } from "https://esm.sh/react-redux@9?deps=react@18,react-dom@18";
import { Link } from "https://esm.sh/react-router-dom@6?deps=react@18,react-dom@18";
import {
  selectItemsArray,
  selectTotalCount,
  selectTotalCost,
  increment,
  decrement,
  removeItem,
  clear,
} from "../store/store.js";

const CartItem = ({ item, onInc, onDec, onDelete }) => {
  return (
    React.createElement('div', { className: 'cart-item' },
      React.createElement('img', { src: item.image, alt: item.name }),
      React.createElement('div', { className: 'meta' },
        React.createElement('div', { style: { fontWeight: 700 } }, item.name),
        React.createElement('div', null, `Unit: $${item.price.toFixed(2)}`),
        React.createElement('div', { className: 'qty-controls' },
          React.createElement('button', { className: 'icon-btn', onClick: onDec, 'aria-label': `Decrease ${item.name}` }, '−'),
          React.createElement('div', null, `Qty: ${item.quantity}`),
          React.createElement('button', { className: 'icon-btn', onClick: onInc, 'aria-label': `Increase ${item.name}` }, '+'),
          React.createElement('button', { className: 'icon-btn', onClick: onDelete, 'aria-label': `Remove ${item.name}` }, '🗑️')
        )
      ),
      React.createElement('div', { className: 'total-line' }, `$${(item.price * item.quantity).toFixed(2)}`)
    )
  );
};

export const Cart = () => {
  const items = useSelector(selectItemsArray);
  const totalCount = useSelector(selectTotalCount);
  const totalCost = useSelector(selectTotalCost);
  const dispatch = useDispatch();

  return (
    React.createElement('main', { className: 'container cart-page' },
      React.createElement('div', { className: 'cart-summary' },
        React.createElement('div', null,
          React.createElement('div', { style: { fontWeight: 700 } }, 'Shopping Cart'),
          React.createElement('div', null, `Total plants: ${totalCount}`)
        ),
        React.createElement('div', { className: 'total-line' }, `Total: $${totalCost.toFixed(2)}`)
      ),
      React.createElement('div', { className: 'cart-list' },
        items.length === 0 && React.createElement('div', null,
          'Your cart is empty. ',
          React.createElement(Link, { to: '/products' }, 'Continue shopping'),
          '.'
        ),
        items.map((it) => (
          React.createElement(CartItem, {
            key: it.id,
            item: it,
            onInc: () => dispatch(increment(it.id)),
            onDec: () => dispatch(decrement(it.id)),
            onDelete: () => dispatch(removeItem(it.id))
          })
        ))
      ),
      React.createElement('div', { className: 'cart-actions' },
        React.createElement('button', { className: 'btn secondary', onClick: () => alert('Coming Soon') }, 'Checkout'),
        React.createElement(Link, { className: 'btn', to: '/products' }, 'Continue Shopping'),
        items.length > 0 && React.createElement('button', { className: 'btn secondary', onClick: () => dispatch(clear()) }, 'Clear Cart')
      )
    )
  );
};



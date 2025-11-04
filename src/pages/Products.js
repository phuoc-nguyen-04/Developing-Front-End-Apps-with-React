import React, { useMemo } from "https://esm.sh/react@18";
import { useDispatch, useSelector } from "https://esm.sh/react-redux@9?deps=react@18,react-dom@18";
import { products } from "../data/products.js";
import { addItem, selectItemIds } from "../store/store.js";

const ProductCard = ({ product, isInCart, onAdd }) => {
  return (
    React.createElement('div', { className: 'card' },
      React.createElement('img', { src: product.image, alt: product.name, loading: 'lazy' }),
      React.createElement('div', { className: 'body' },
        React.createElement('span', { className: 'category' }, product.category),
        React.createElement('div', { style: { display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 8 } },
          React.createElement('div', null,
            React.createElement('div', { style: { fontWeight: 700 } }, product.name),
            React.createElement('div', { className: 'price' }, `$${product.price.toFixed(2)}`)
          ),
          React.createElement('button', { className: 'btn', disabled: isInCart, onClick: onAdd, 'aria-disabled': isInCart }, isInCart ? 'Added' : 'Add to Cart')
        )
      )
    )
  );
};

export const Products = () => {
  const dispatch = useDispatch();
  const itemIdsInCart = useSelector(selectItemIds);

  const grouped = useMemo(() => {
    const map = new Map();
    for (const p of products) {
      if (!map.has(p.category)) map.set(p.category, []);
      map.get(p.category).push(p);
    }
    return Array.from(map.entries());
  }, []);

  return (
    React.createElement('main', { className: 'container', style: { padding: '20px 0 40px' } },
      grouped.map(([category, list]) => (
        React.createElement('section', { key: category },
          React.createElement('div', { className: 'section-title' }, category),
          React.createElement('div', { className: 'grid products' },
            list.map((p) => (
              React.createElement(ProductCard, {
                key: p.id,
                product: p,
                isInCart: itemIdsInCart.has(p.id),
                onAdd: () => dispatch(addItem({ id: p.id, name: p.name, price: p.price, image: p.image }))
              })
            ))
          )
        )
      ))
    )
  );
};



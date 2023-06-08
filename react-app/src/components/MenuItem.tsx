/* eslint-disable react/jsx-one-expression-per-line */

import { HTMLAttributes } from 'react';

import Menu from '../types/Menu';

type MenuItemProps = {
  food: Menu;
} & HTMLAttributes<Element>;

export default function MenuItem({ food, children }: MenuItemProps) {
  const { name, price } = food;

  return (
    <li>
      <span>
        {name}({price.toLocaleString()}원)
      </span>
      {children}
    </li>
  );
}

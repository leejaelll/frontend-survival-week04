import Menu from '../types/Menu';

export default function calculateTotalPrice(menu: Menu[]) {
  return menu.reduce((acc, cur) => acc + cur.price, 0);
}

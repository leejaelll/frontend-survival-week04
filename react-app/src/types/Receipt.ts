import Menu from './Menu';

interface Receipt {
  id: string;
  menu: Menu[];
  totalPrice: number;
}

export default Receipt;

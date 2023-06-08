/* eslint-disable comma-dangle */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable operator-linebreak */

import { useBoolean, useInterval, useLocalStorage } from 'usehooks-ts';

import './App.css';

import { useEffect } from 'react';
import useFetchRestaurants from './hooks/useFetchRestaurants';

import FilterableRestaurantTable from './components/FilterableRestaurantTable';
import Cart from './components/Cart';
import ReceiptPrinter from './components/ReceiptPrinter';

import Receipt from './types/Receipt';

const emptyReceipt = {} as Receipt;

export default function App() {
  const { value, setTrue, setFalse } = useBoolean(false);
  const restaurants = useFetchRestaurants();

  const [receipt, setReceipt] = useLocalStorage('receipt', emptyReceipt);

  useEffect(() => {
    setFalse();

    if (receipt.id) {
      setTrue();
    }
  }, [receipt]);

  useInterval(
    () => {
      if (receipt.id) {
        setReceipt(emptyReceipt);
        setFalse();
      }
    },
    value ? 5000 : null
  );

  return (
    <>
      <h1 className="title">푸드코트 키오스크</h1>
      <div className="wrapper">
        <FilterableRestaurantTable restaurants={restaurants} />
        <Cart setReceipt={setReceipt} />
        <ReceiptPrinter receipt={receipt} />
      </div>
    </>
  );
}

import Menu from '../types/Menu';

import calculateTotalPrice from '../utils/calculateTotalPrice';

const url = 'http://localhost:9999/orders';

export default function useCreateOrder() {
  const createOrder = async (menu: Menu[]) => {
    const totalPrice = calculateTotalPrice(menu);

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ menu, totalPrice }),
    });

    const { receipt } = await response.json();

    return receipt;
  };

  return {
    createOrder,
  };
}

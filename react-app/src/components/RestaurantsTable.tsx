/* eslint-disable operator-linebreak */
/* eslint-disable react/jsx-one-expression-per-line */

import { useLocalStorage } from 'usehooks-ts';

import Menu from '../types/Menu';
import Restaurant from '../types/Restaurant';

type RestaurantsTableProps = {
  restaurants: Restaurant[];
};

export default function RestaurantsTable({
  restaurants,
}: RestaurantsTableProps) {
  const [selectedFoods, selectFood] = useLocalStorage<Menu[]>('cart', []);

  const handleClickSelect = (food: Menu) => {
    selectFood([...selectedFoods, food]);
  };

  return (
    <table>
      <thead>
        <tr>
          <th>식당 이름</th>
          <th>종류</th>
          <th>메뉴</th>
        </tr>
      </thead>
      <tbody>
        {restaurants.map((restaurant) => (
          <tr key={restaurant.id}>
            <td>{restaurant.name}</td>
            <td>{restaurant.category}</td>
            <td>
              <ul>
                {restaurant.menu.map((menu) => (
                  <li key={menu.id}>
                    {menu.name} ({Number(menu.price).toLocaleString()}
                    원)
                    <button
                      type="button"
                      name={`#${menu.name}`}
                      onClick={() => handleClickSelect(menu)}
                    >
                      선택
                    </button>
                  </li>
                ))}
              </ul>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable indent */
/* eslint-disable operator-linebreak */
/* eslint-disable comma-dangle */

import Restaurant from '../types/Restaurant';

type filterRestaurantsProps = {
  searchText: string;
  filterCategory: string;
};

export default function filterRestaurants(
  restaurants: Restaurant[],
  { searchText, filterCategory }: filterRestaurantsProps
): Restaurant[] {
  const filteredRestaurants =
    filterCategory === '전체'
      ? restaurants
      : restaurants.filter(
          (restaurant) => restaurant.category === filterCategory
        );

  const normalize = (value: string) => value.trim().toLocaleLowerCase();
  const query = normalize(searchText);
  if (!query) {
    return filteredRestaurants;
  }

  return filteredRestaurants.filter((restaurant) =>
    normalize(restaurant.name).includes(query)
  );
}

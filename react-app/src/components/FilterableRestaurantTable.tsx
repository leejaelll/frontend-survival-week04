import { useState } from 'react';

import Restaurant from '../types/Restaurant';

import selectCategories from '../utils/selectCategories';
import filterRestaurants from '../utils/filterRestaurants';

import RestaurantsTable from './RestaurantsTable';
import SearchBar from './SearchBar';

type RestaurantsFieldProps = {
  restaurants: Restaurant[];
};

export default function FilterableRestaurantTable({
  restaurants,
}: RestaurantsFieldProps) {
  const [searchText, setSearchText] = useState<string>('');
  const [filterCategory, setFilterCategory] = useState<string>('전체');

  const filteredRestaurants = filterRestaurants(restaurants, {
    searchText,
    filterCategory,
  });

  const categories = selectCategories(restaurants);

  return (
    <div className="menu-search">
      <SearchBar
        categories={categories}
        searchText={searchText}
        setFilterCategory={setFilterCategory}
        setSearchText={setSearchText}
      />

      <RestaurantsTable restaurants={filteredRestaurants} />
    </div>
  );
}

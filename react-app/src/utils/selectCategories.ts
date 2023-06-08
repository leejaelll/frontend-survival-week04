import Restaurant from '../types/Restaurant';

export default function selectCategories(restaurants: Restaurant[]): string[] {
  return [...new Set(restaurants.map((restaurant) => restaurant.category))];
}

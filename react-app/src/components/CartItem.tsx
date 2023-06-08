import Menu from '../types/Menu';
import MenuItem from './MenuItem';

type CartItemProps = {
  food: Menu;
  index: number;
  onClickCancel: (index: number) => void;
};

export default function CartItem({
  food,
  index,
  onClickCancel,
}: CartItemProps) {
  return (
    <MenuItem food={food}>
      <button
        style={{ marginLeft: '.5rem' }}
        name={`#${food.name}`}
        type="button"
        onClick={() => onClickCancel(index)}
      >
        취소
      </button>
    </MenuItem>
  );
}

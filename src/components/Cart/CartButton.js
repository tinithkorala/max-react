import {useSelector} from 'react-redux';
import classes from './CartButton.module.css';

const CartButton = (props) => {

  const cartQuantity = useSelector(state => state.totalQuantity);

  return (
    <button className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartQuantity}</span>
    </button>
  );
};

export default CartButton;

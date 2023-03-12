import { Empty } from "antd";
import { useSelector } from "react-redux";
import { ICartItem } from "../../../interfaces";
import { IRootReducer } from "../../../redux";
import { getCart } from "../../../redux/selectors/cart.selectors";
import DropDownTemplateComponent from "../../TemplatesComponents/DropDownTemplateComponent";
import EmptyList from "../../TemplatesComponents/EmptyList";
import CartWithItems from "./CartWithItems";

interface Props {
  showCartElement: (state: boolean) => void;
}

const CartDropDown = ({ showCartElement, ...props }: Props) => {
  const cartItems = useSelector<IRootReducer, ICartItem[]>(getCart);

  return (
    <DropDownTemplateComponent
      showElement={showCartElement}
      stickySide="right"
      className="border-gray-100 gap-1"
    >
      {cartItems.length ? (
        <CartWithItems cartItems={cartItems} />
      ) : (
        <EmptyList width="[300px]" height="[300px]" descrip="Корзина пуста" />
      )}
    </DropDownTemplateComponent>
  );
};

export default CartDropDown;

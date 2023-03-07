import { Empty } from "antd";
import DropDownTemplateComponent from "../../TemplatesComponents/DropDownTemplateComponent";
import CartWithItems from "./CartWithItems";
import EmptyCart from "./EmptyCart";

interface Props {
  showCartElement: (state: boolean) => void;
}

const CartDropDown = ({ showCartElement, ...props }: Props) => {
  return (
    <DropDownTemplateComponent
      showElement={showCartElement}
      stickySide="right"
      className="border-gray-100 gap-1"
    >
      {true ? <CartWithItems /> : <EmptyCart />}
    </DropDownTemplateComponent>
  );
};

export default CartDropDown;

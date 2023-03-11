import { Empty } from "antd";
import DropDownTemplateComponent from "../../TemplatesComponents/DropDownTemplateComponent";
import EmptyList from "../../TemplatesComponents/EmptyList";
import CartWithItems from "./CartWithItems";

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
      {true ? <CartWithItems /> : <EmptyList width="[300px]" height="[300px]" descrip="Корзина пуста"/>}
    </DropDownTemplateComponent>
  );
};

export default CartDropDown;

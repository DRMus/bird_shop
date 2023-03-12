import WeightComponent from "../../TemplatesComponents/WeightComponent";
import ProductCounter from "../../TemplatesComponents/ProductCounter";
import { IProductItem } from "../../../interfaces/api";

interface Props {
  product: IProductItem;
  hasWeight: boolean;
  selectedWeight: number;
  selectedCount: number;
  weightHandler: (weight: number) => void;
  changeCount: (operation: "-" | "+") => void;
  onClickAdd: React.MouseEventHandler<HTMLButtonElement>
  onClickBuy: React.MouseEventHandler<HTMLButtonElement>
}

const ProductComponent = ({ weightHandler, changeCount, onClickAdd, onClickBuy, ...props }: Props) => {
  return (
    <div className="product-section w-full flex justify-between">
      <div className="product-section--image w-[40%] flex items-center justify-center">
        <img src={`${props.product.image}`} alt="Птички" className="object-contain bg-mgray" />
      </div>
      <div className="product-section--info w-[55%] overflow-hidden flex flex-col gap-7 pl-1">
        <div className="product-section--desc flex flex-col gap-5 min-h-[180px]">
          <p className="product-section--header text-bold text-4xl w-1/2">{props.product.name}</p>
          <p className="text-base w-4/5 whitespace-pre-line">
            {props.product.description}
          </p>
        </div>
        <div className="product-section--pay w-[45%] flex flex-col gap-7">
          {props.hasWeight && (
            <WeightComponent
              id={props.product.product_id as number}
              selectedWeight={props.selectedWeight}
              weightHandler={weightHandler}
              largeFont
            />
          )}
          <div className="product-section--cost text-4xl">
            <p>{(props.product.cost * props.selectedCount * (props.selectedWeight / 1000)).toFixed(1)} руб.</p>
          </div>
          <ProductCounter changeCount={changeCount} selectedCount={props.selectedCount} />
        </div>
        <div className="product-section--buy flex gap-5">
          <button className="w-fit text-lg text-white px-8 py-2 rounded-md bg-mgreen transition-colors hover:bg-mstronggreen active:bg-mgreen">
            Купить
          </button>
          <button className="w-fit text-lg text-mgreen px-8 py-2 rounded-md border border-mgreen transition-colors" onClick={onClickAdd}>
            Добавить в корзину
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductComponent;

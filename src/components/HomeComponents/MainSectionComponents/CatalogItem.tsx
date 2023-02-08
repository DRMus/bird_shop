import { ICatalogItem } from "../../../interfaces";

interface Props {
  item: ICatalogItem;
}

const CatalogItem = (props: Props) => {
  return (
    <div className="bg-white shadow-card flex flex-col gap-3 w-fit px-5 pt-5 pb-7 border border-gray-100 rounded-xl">
      <div className="home-catalog--photo">
        <img src={props.item.image} alt="Птицы" />
      </div>
      <div className="home-catalog--description flex flex-col h-32">
        <div className="grow flex flex-col gap-1">
          <p className="font-bold text-2xl">{props.item.firstDescription}</p>
          {props.item.secondDescription && (
            <p className="text-gray-500 text-sm">({props.item.secondDescription})</p>
          )}
        </div>
        <button className="w-fit text-lg text-white px-8 py-2 rounded-md bg-mgreen transition-colors hover:bg-mstronggreen active:bg-mgreen">
          Подробнее
        </button>
      </div>
    </div>
  );
};

export default CatalogItem;

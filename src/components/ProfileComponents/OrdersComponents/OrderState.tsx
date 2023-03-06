import classNames from "classnames";

interface Props {
  state: number;
}

const OrderState = (props: Props) => {
  return (
    <div
      className={classNames("text-base text-white px-8 py-2.5 rounded-xl", {
        "bg-mgreen": props.state === 2,
        "bg-mtextgray": props.state !== 2
      })}
    >
      {props.state === 2 ? "Отправлено" : "Отменено"}
    </div>
  );
};

export default OrderState;

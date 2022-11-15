type OrderedListProps = {
  list: Array<unknown>;
  onHandleListFn: (listItem: any, index: number) => JSX.Element;
};
export const OrderedList = ({ list, onHandleListFn }: OrderedListProps) => {
  return <ol>{list.map(onHandleListFn)}</ol>;
};

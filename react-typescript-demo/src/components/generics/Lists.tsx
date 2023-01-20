type ListsType<T> = {
  items: T[];
  onClick: (value: T) => void;
};

export const Lists = <T extends {}>({ items, onClick }: ListsType<T>) => {
  return (
    <div>
      <h2>List Of Items</h2>
      {items.map((item, index) => {
        return (
          <div key={index} onClick={() => onClick(item)}>
            {JSON.stringify(item)}
          </div>
        );
      })}
    </div>
  );
};

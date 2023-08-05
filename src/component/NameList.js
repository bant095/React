export const NameList = () => {
  const names = ["Bolaji", "Tobi", "Kemi"];
  return (
    <div>
      {names.map((name) => {
        return <h2 key={name}>{name}</h2>;
      })}
    </div>
  );
};

export const ChildComponent = (props) => {
  return (
    <div>
      <button onclick={props.greetHandler}>Greet Parent</button>
    </div>
  );
};

// export const UserGreeting = () => {
//   const isLoggedIn = true; //This can be change to fals (Boolean)
//   return <div>Welcome {isLoggedIn ? "Bolaji" : "Guest"}</div>;
// };

//If the users is not loggedIn we can display only welcome but we can display the user name as {Welcome Bolaji}
//This can be achieved using the && statement in below

export const UserGreeting = () => {
  const isLoggedIn = true; //Using tue or false will change this
  return <div>Welcome {isLoggedIn && "Bolaji"}</div>;
};

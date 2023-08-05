import "./App.css";
import { Inline } from "./component/Inline";
import { ClickHandler } from "./component/ClickHandler";
import { Greet } from "./component/Greet";
import { Message } from "./component/Message";
import { NameList } from "./component/NameList";
import { ParentComponent } from "./component/ParentComponent";
import { UserGreeting } from "./component/UserGreeting";

function App() {
  return (
    <div className="App">
      {/* <Greet name="Bolaji" />
      <Greet name="Alfred" />
      <Greet name="Bolaji" /> */}
      {/* <Message /> */}
      {/* <ClickHandler /> */}
      {/* <ParentComponent /> */}
      {/* <UserGreeting /> */}
      {/* <NameList /> */}
      {/* <StyleSheet /> */}
      <Inline />
    </div>
  );
}

export default App;

import {React , createContext} from "react";
import ContextA from "./components/ContextA";
import "./App.css";

export const UserContext = createContext();
export const ChannelContext = createContext ();
function App() {
  return (
    <div className="app">
      <UserContext.Provider value={"O.Ryan"}>
        <ChannelContext.Provider value={"Step By Step"} >
        <ContextA/>
        </ChannelContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;

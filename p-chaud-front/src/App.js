import Router from "./router";
import {UserProvider} from "./contexts/UserContext";

function App() {
  return (
      <UserProvider>
        <Router/>
      </UserProvider>
  );
}

export default App;

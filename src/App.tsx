import { Provider } from "react-redux";

import { store } from "./store";

import { SignIn } from "./pages/SignIn";
import { useState } from "react";
import { Counter } from "./pages/Counter/Counter";

function App() {
  const [path, setPath] = useState("Home");

  return (
    <Provider store={store}>
      <div className="p-4">
        <div className="flex">
          <h4 onClick={() => setPath("Home")} className="mr-2">
            Home
          </h4>

          <h4 onClick={() => setPath("Counter")}>Counter</h4>
        </div>

        {path === "Home" && <SignIn />}

        {path === "Counter" && <Counter />}
      </div>
    </Provider>
  );
}

export default App;

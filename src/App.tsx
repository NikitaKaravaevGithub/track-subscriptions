import { Provider } from "react-redux";

import { store, useAppDispatch, useAppSelector } from "./store";

import { SignIn } from "./pages/SignIn";
import { useEffect, useState } from "react";
import { Counter } from "./pages/Counter/Counter";
import { setProfileLoading, setProfile } from "./store/slices/profile";

import { MOCK_PROFILE } from "../mocks/profile.mock";

function App() {
  const [path, setPath] = useState("Home");

  const dispatch = useAppDispatch();

  const profile = useAppSelector((state) => state.profile.profile);

  useEffect(() => {
    if (!profile) {
      dispatch(setProfileLoading(true));

      setTimeout(() => {
        dispatch(setProfile(MOCK_PROFILE));

        dispatch(setProfileLoading(false));
      }, 2000);
    }
  }, []);

  return (
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
  );
}

export default App;

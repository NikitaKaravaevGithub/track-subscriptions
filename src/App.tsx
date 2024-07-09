import { memo, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "store";

import { SignIn } from "pages/SignIn";
import { Counter } from "pages/Counter/Counter";
import { setProfileLoading, setProfile } from "./store/slices/profile";

import { MOCK_PROFILE } from "../mocks/profile.mock";
import { Preloader } from "components/Preloader";

import "./index.css";

export const App = memo(() => {
  const [path, setPath] = useState("Home");

  const dispatch = useAppDispatch();

  const profile = useAppSelector((state) => state.profile.profile);
  const isLoadingProfile = useAppSelector((state) => state.profile.isLoading);

  useEffect(() => {
    if (!profile) {
      dispatch(setProfileLoading(true));

      setTimeout(() => {
        dispatch(setProfile(MOCK_PROFILE));

        dispatch(setProfileLoading(false));
      }, 60000);
    }
  }, [dispatch, profile]);

  return (
    <Preloader isLoading={isLoadingProfile}>
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
    </Preloader>
  );
});

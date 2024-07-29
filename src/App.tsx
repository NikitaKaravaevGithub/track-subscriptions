import { memo, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "store";

import { setProfileLoading, setProfile } from "./store/slices/profile";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { MOCK_PROFILE } from "../mocks/profile.mock";
import { Preloader } from "components/Preloader";

import "./index.css";
import { SignIn } from "pages/SignIn";

export const App = memo(() => {
  const dispatch = useAppDispatch();

  const profile = useAppSelector((state) => state.profile.profile);
  const isLoadingProfile = useAppSelector((state) => state.profile.isLoading);

  useEffect(() => {
    if (!profile) {
      dispatch(setProfileLoading(true));

      setTimeout(() => {
        dispatch(setProfile(MOCK_PROFILE));

        dispatch(setProfileLoading(false));
      }, 1000);
    }
  }, [dispatch, profile]);

  const router = createBrowserRouter([{ path: "/", element: <SignIn /> }]);

  return (
    <Preloader isLoading={isLoadingProfile}>
      <RouterProvider router={router} />
    </Preloader>
  );
});

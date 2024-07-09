import { memo } from "react";

import { PreloaderProps } from "./Preloader.model";

export const Preloader = memo(({ isLoading, children }: PreloaderProps) => {
  return isLoading ? (
    <div className="flex justify-center h-screen align-middle items-center">
      Loading...
    </div>
  ) : (
    children
  );
});

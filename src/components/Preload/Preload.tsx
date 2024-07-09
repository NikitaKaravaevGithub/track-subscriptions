import { memo } from "react";

import { PreloadProps } from "./Preload.model";

export const Preload = memo(({ isLoading, children }: PreloadProps) => {
  return isLoading ? (
    <div className="flex justify-center h-screen align-middle items-center">
      Loading...
    </div>
  ) : (
    children
  );
});

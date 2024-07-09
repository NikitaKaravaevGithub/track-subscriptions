import { memo } from "react";

import { PreloadProps } from "./Preload.model";

export const Preload = memo(({ isLoading, children }: PreloadProps) => {
  return isLoading ? <div>Loading...</div> : children;
});

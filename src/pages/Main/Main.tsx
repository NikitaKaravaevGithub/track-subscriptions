import { memo } from "react";

export const Main = memo(() => {
  return (
    <div className="p-4">
      <div className="flex">
        <h4 className="mr-2">Home</h4>

        <h4>Counter</h4>
      </div>
    </div>
  );
});

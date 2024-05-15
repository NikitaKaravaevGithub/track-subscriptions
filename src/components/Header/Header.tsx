import { memo } from "react";
import { useAppSelector } from "store";

export const Header = memo(() => {
  const profile = useAppSelector((state) => state.profile.profile);

  return (
    <div className="flex">
      <div>burger</div>
      <div>profile icon</div>
    </div>
  );
});

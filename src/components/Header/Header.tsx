import { memo } from "react";
import { useAppSelector } from "store";

export const Header = memo(() => {
  const profile = useAppSelector((state) => state.profile.profile);
  console.log("profile: ", profile);

  return (
    <div className="flex p-3 bg-indigo-600 text-white justify-between">
      <div>burger</div>
      {!!profile && <div>profile icon</div>}
    </div>
  );
});

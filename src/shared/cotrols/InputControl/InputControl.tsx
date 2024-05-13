import { memo } from "react";

import cn from "clsx";

import { InputControlProps } from "./InputControl.types";

export const InputControl: React.FC<InputControlProps> = memo(
  ({ label, className, ...props }) => {
    return (
      <div className={cn(className, "flex flex-col")}>
        <label htmlFor="">{label}</label>

        <input className="bg-slate-100" {...props} />
      </div>
    );
  }
);

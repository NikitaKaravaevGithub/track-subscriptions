import { memo } from "react";
import { RootState, useAppDispatch } from "../../store";
import { useSelector } from "react-redux";
import { decrement, increment } from "../../store/slices/counter";

export const Counter = memo(() => {
  const dispatch = useAppDispatch();

  const count = useSelector((state: RootState) => state.counter.value);
  return (
    <div>
      <h3>{count}</h3>

      <div className="flex">
        <button
          onClick={() => dispatch(increment())}
          className="bg-green-600 text-white p-2 mr-2"
        >
          Add
        </button>

        <button
          onClick={() => dispatch(decrement())}
          className="bg-red-600 text-white p-2"
        >
          Minus
        </button>
      </div>
    </div>
  );
});

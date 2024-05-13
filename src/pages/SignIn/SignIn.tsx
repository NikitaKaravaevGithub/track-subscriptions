import { memo } from "react";
import { InputControl } from "../../shared/cotrols/InputControl";

export const SignIn = memo(() => {
  return (
    <form className="flex flex-col justify-center w-100">
      <div className="flex flex-col">
        <InputControl name="login" className="mb-2" label="Логин" />

        <InputControl name="password" />
      </div>

      <div>
        <button>У вас нет аккаунта? Зарегистрироваться</button>
      </div>
    </form>
  );
});

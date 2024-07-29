import { memo } from "react";
import { InputControl } from "../../shared/cotrols/InputControl";

export const SignIn = memo(() => {
  return (
    <form className="flex flex-col items-center justify-center ">
      <div>
        <div className="flex flex-col">
          <InputControl name="login" className="mb-2" label="Логин" />

          <InputControl name="password" type="password" label="Пароль" />
        </div>

        <div className="mt-2 flex flex-col">
          <button type="submit">Войти</button>

          <button className="mt-2 ">
            У вас нет аккаунта? Зарегистрироваться
          </button>
        </div>
      </div>
    </form>
  );
});

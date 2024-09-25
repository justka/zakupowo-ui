import "./LayoutAfterLogin.scss";
import { LayoutAfterLoginInterface } from "./LayoutAfterLoginInterface.interface";

export function LayoutAfterLogin({ children }: LayoutAfterLoginInterface) {
  return (
    <div className="layoutAfterLogin__container">
      <div className="layoutAfterLogin__row layoutAfterLogin__row--up">
        navbar
      </div>
      <div className="layoutAfterLogin__row layoutAfterLogin__row--down">
        {children}
      </div>
    </div>
  );
}

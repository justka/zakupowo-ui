import "./LayoutBeforeLogin.scss";
import { LayoutBeforeLoginInterface } from "./LayoutBeforeLoginInterface.interface";

export function LayoutBeforeLogin({ children }: LayoutBeforeLoginInterface) {
  return (
    <div className="layoutBeforeLogin__container">
      <div className="layoutBeforeLogin__column layoutBeforeLogin__column--left"></div>
      <div className="layoutBeforeLogin__column layoutBeforeLogin__column--right">
        {children}
      </div>
    </div>
  );
}

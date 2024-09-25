import "./LayoutError404.scss";
import { LayoutError404Interface } from "./LayoutError404Interface.interface";

export function LayoutError404({ children }: LayoutError404Interface) {
  return <div className="layoutError404__container">{children}</div>;
}

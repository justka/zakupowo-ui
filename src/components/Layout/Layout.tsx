import "constants/layout";
import { LayoutInterface } from "./LayoutInterface.interface";
import { useLayout } from "./useLayout";

export function Layout({ children, layoutVariant }: LayoutInterface) {
  const { renderedLayout } = useLayout({ children, layoutVariant });

  return <>{renderedLayout()}</>;
}

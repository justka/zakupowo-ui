import { LayoutAfterLogin } from "components/LayoutAfterLogin/LayoutAfterLogin";
import { LayoutBeforeLogin } from "components/LayoutBeforeLogin/LayoutBeforeLogin";
import { LayoutError404 } from "components/LayoutError404/LayoutError404";
import { LAYOUT_VARIANT } from "constants/layout";
import { LayoutInterface } from "./LayoutInterface.interface";

export function useLayout({ children, layoutVariant }: LayoutInterface) {
  const renderedLayout = () => {
    switch (layoutVariant) {
      case LAYOUT_VARIANT.BEFORE_LOGIN: {
        return <LayoutBeforeLogin>{children}</LayoutBeforeLogin>;
      }
      case LAYOUT_VARIANT.AFTER_LOGIN: {
        return <LayoutAfterLogin>{children}</LayoutAfterLogin>;
      }
      case LAYOUT_VARIANT.ERROR_404_PAGE: {
        return <LayoutError404>{children}</LayoutError404>;
      }
      default: {
        return <>{children}</>;
      }
    }
  };

  return { renderedLayout };
}

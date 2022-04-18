import { FCC } from "../../types";

interface SlideTemplateProps {}

export const SlideTemplate: FCC<SlideTemplateProps> = ({ children }) => {
  return <div className="w-screen h-screen">{children}</div>;
};

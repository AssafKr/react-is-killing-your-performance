interface SlideTemplateProps {}

export const SlideTemplate: React.FC<SlideTemplateProps> = ({ children }) => {
  return <div className="w-screen h-screen">{children}</div>;
};

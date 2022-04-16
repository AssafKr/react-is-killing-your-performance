import { SlideTemplate } from "./SlidesTemplate";

export const SectionTitle: React.FC<{ title: string }> = ({ title }) => {
  return (
    <SlideTemplate>
      <div className="w-full h-full flex flex-col justify-center items-center ">
        <h1 className="font-aachen title-slide">{title}</h1>
      </div>
    </SlideTemplate>
  );
};

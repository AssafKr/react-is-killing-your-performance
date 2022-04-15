import { Star } from "phosphor-react";

export const ListItem: React.FC<{ content: string }> = ({ content }) => {
  return (
    <li>
      <Star size={"5vw"} weight="thin" />
      <h2>{content}</h2>
    </li>
  );
};

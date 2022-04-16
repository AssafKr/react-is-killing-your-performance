import { HandPointing, Star } from "phosphor-react";

export const ListItem: React.FC<{ content: string }> = ({ content }) => {
  return (
    <li>
      <HandPointing size={"5vw"} weight="thin" transform="rotate(90)" />
      <h2>{content}</h2>
    </li>
  );
};

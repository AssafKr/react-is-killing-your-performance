import { HandPointing, Star } from "phosphor-react";

export const ListItem: React.FC = ({ children }) => {
  return (
    <li>
      <HandPointing size={"5vw"} weight="thin" transform="rotate(90)" />
      <h2>{children}</h2>
    </li>
  );
};

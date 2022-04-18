import { HandPointing, Skull, Star } from "phosphor-react";

export const ListItem: React.FC = ({ children }) => {
  return (
    <li className="mb-[2vw]">
      <div className="w-[5vw]">
        <Skull size={"5vw"} weight="thin"  />
      </div>
      <h2>{children}</h2>
    </li>
  );
};

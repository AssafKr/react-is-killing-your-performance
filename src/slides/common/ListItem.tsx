import { Skull } from "phosphor-react";

export const ListItem: React.FC<{ Icon?: typeof Skull }> = ({
  children,
  Icon = Skull,
}) => {
  return (
    <li className="mb-[2vw]">
      <div className="w-[5vw]">
        <Icon size={"5vw"} weight="thin" />
      </div>
      <h2>{children}</h2>
    </li>
  );
};

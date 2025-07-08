import { GridItems } from "../constants";
import { ListItem } from "./ListItem";

export const Grid = () => {
  return (
    <div className="grid-container">
      {GridItems.map((grid) => (
        <ListItem
          key={`${grid.id}-${grid.title}`}
          title={grid.title}
          description={grid.description}
          icon={grid.icon}
        />
      ))}
    </div>
  );
};

import React from "react";
import type { GridItemType } from "../constants";

export const ListItem: React.FC<Omit<GridItemType, "id">> = (props) => {
  const { icon, title, description } = props;

  return (
    <div className="list-item-container">
      <div className="icon-wrapper">
        <img className="icon" width="24" height="24" src={icon} alt={title} />
      </div>
      <div className="info-wrapper">
        <strong className="title">{title}</strong>
        <p className="description">{description}</p>
      </div>
    </div>
  );
};

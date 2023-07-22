import mapRoutes from "constants/mapRoutes";
import React from "react";
import Style from "./Sidebar.style";

function Sidebar() {
  return (
    <Style>
      {mapRoutes[0].map((loc) => (
        <button>
          {loc.lat} & {loc.lng}
        </button>
      ))}
    </Style>
  );
}

export default Sidebar;

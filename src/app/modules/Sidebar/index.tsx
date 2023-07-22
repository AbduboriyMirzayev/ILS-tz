import mapRoutes from "constants/mapRoutes";
import React from "react";
import Style from "./Sidebar.style";
import { Table } from "antd";
import { routesColumns } from "./constants";
import { convertRoutesForTable } from "./helpers";
import { useAppDispatch } from "hooks/storeHooks";
import { SET_ROUTES, setSelectedRoutePoints } from "store/reducers/route";

function Sidebar() {
  const dispatch = useAppDispatch();
  const rowSelection = {
    onChange: (_: React.Key[], selectedRows: any[]) => {
      console.log(selectedRows);
      dispatch({
        type: SET_ROUTES,
        action: { points: selectedRows[0].pointes },
      });
    },
  };

  return (
    <Style>
      <Table
        columns={routesColumns}
        dataSource={convertRoutesForTable(mapRoutes)}
        rowSelection={{
          type: "radio",
          ...rowSelection,
        }}
        pagination={false}
      />
    </Style>
  );
}

export default Sidebar;

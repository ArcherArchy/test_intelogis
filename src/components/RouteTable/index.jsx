import React from "react";
import { Table } from "antd";
import { useSelectedRoute } from "../../hooks/useSelectedRoute";
import { DEFAULT_ROUTES } from "../../constants";

const columns = [
  {
    title: "Маршрут",
    dataIndex: "routeName",
    key: "routeName",
  },
  {
    title: "Точка 1 (lat, lng)",
    dataIndex: "routePoint1",
    key: "routePoint1",
  },
  {
    title: "Точка 2 (lat, lng)",
    dataIndex: "routePoint2",
    key: "routePoint2",
  },
  {
    title: "Точка 3 (lat, lng)",
    dataIndex: "routePoint3",
    key: "routePoint3",
  },
];

const RouteTable = () => {
  const [selectedRoute, setSelectedRoute] = useSelectedRoute();
  return (
    <Table
      columns={columns}
      dataSource={DEFAULT_ROUTES}
      onRow={(record, rowIndex) => {
        return {
          onClick: (event) => setSelectedRoute(rowIndex), // click row
        };
      }}
    
    />
  );
};
export default RouteTable;

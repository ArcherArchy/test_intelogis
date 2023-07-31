import { Layout } from "antd";
import { Provider } from "react-redux";

import { store } from "../store";
import RouteTable from "./RouteTable";
import Map from "./Map";
import MapWrapper from "./Map/MapWrapper";
import "./App.css";

const { Header, Sider, Content } = Layout;

function App() {
  return (
    <Provider store={store}>
      <Layout style={{ height: "100vh" }}>
        <Header style={{ backgroundColor: "blue" }}>Intelogis</Header>
        <Layout hasSider>
          <Sider style={{ backgroundColor: "blue" }} width={"35vw"}>
            <RouteTable />
          </Sider>
          <Content>
            <MapWrapper>
              <Map />
            </MapWrapper>
          </Content>
        </Layout>
      </Layout>
    </Provider>
  );
}

export default App;

import NavBar from "./components/NavBar";
import { Outlet, Link } from "react-router-dom";
import Layout, { Content, Header } from "antd/es/layout/layout";
import { FloatButton } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";

function App() {
  return (
    <>
      <Layout>
        <Header
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: "white",
            width: "100%",
          }}
        >
          <NavBar></NavBar>
        </Header>
        <Content>
          <Outlet></Outlet>
          <Link to="cart">
            <FloatButton
              shape="circle"
              type="primary"
              style={{ right: 100 }}
              icon={<ShoppingCartOutlined />}
            ></FloatButton>
          </Link>
        </Content>
      </Layout>
    </>
  );
}

export default App;

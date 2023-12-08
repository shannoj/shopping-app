import NavBar from "./components/NavBar";
import { Outlet } from "react-router-dom";
import Layout, { Content, Header } from "antd/es/layout/layout";

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
        </Content>
      </Layout>
    </>
  );
}

export default App;

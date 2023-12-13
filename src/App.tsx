import NavBar from "./components/NavBar";
import { Outlet } from "react-router-dom";
import Layout, { Content, Header } from "antd/es/layout/layout";
import { ReactNode } from "react";

interface AppProps {
  children: ReactNode
}
function App({children}: AppProps) {

  return (
    <>
      <Layout>
        <Header
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "white",
            width: "100%",
            margin: "0",
            padding: "0",
          }}
        >
          <NavBar></NavBar>
        </Header>
        <Content>
          <Outlet></Outlet>
            {children}
        </Content>
      </Layout>
    </>
  );
}

export default App;

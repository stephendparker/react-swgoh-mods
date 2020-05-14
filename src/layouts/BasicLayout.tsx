import React from "react";
import { Layout } from "antd";
import GlobalMenu from "../components/GlobalMenu";

interface IProps {
  children: React.ReactNode;
  // any other props that come into the component
}

const BaseLayout = ({ children }: IProps) => {
  return (
    <Layout>
      <Layout.Header
        style={{ position: "fixed", zIndex: 1, width: "100%", padding: "0" }}
      >
        <GlobalMenu />
      </Layout.Header>
      <Layout.Content
        className="site-layout-background"
        style={{ padding: "12px", marginTop: 64 }}
      >
        <div
          className="site-layout"
          style={{
            padding: 12,
            minHeight: "calc( 100vh - 64px - 24px )",
            backgroundColor: "#fff"
          }}
        >
          {children}
        </div>
      </Layout.Content>
    </Layout>
  );
};

export default BaseLayout;

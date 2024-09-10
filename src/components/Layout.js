import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import styled from "styled-components";

const Layout = ({ children }) => {
  return (
    <div>
      <HeaderBox>
        <Header />
      </HeaderBox>
      <main>{children}</main>
      <Footer />
    </div>
  );
};

const HeaderBox = styled.div`
  height: 60px;
`;
export default Layout;

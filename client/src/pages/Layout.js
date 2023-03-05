import { Outlet } from "react-router-dom";
import React, { Fragment } from "react";
import Footer from "../components/Footer";
import SideBar from "../components/Sidebar";
import Container from "../foundation/Container";

import '../css/Layout.css'

const Layout = () => {
    return (<Fragment>
        <SideBar />
        <Container>
            <Outlet />
            <Footer />
        </Container>
    </Fragment>
    );
};

export default Layout;

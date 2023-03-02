import { Outlet } from "react-router-dom";
import SideBar from "../components/Sidebar";
import '../css/Layout.css'

const Layout = () => {
    return (<div className="container">
        <SideBar />
        <div className="layout">
            <main>
                <Outlet />
            </main>
            <footer className="footer">
                <div>
                    <a href="#policy">Privacy Policy</a>
                    <a href="#term">Terms of Use</a>
                </div>
                <p>© <a href="https://github.com/luizhenriqque18" target="_blank" rel="noreferrer">luizhenriqque18</a>, 2023</p>
            </footer>
        </div>
    </div>
    );
};

export default Layout;

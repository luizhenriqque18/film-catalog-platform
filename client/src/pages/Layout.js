import { Link, Outlet } from "react-router-dom";
import '../css/Layout.css'

const Layout = () => {
    return (<div className="layout">
        <nav>
            <ul>
                <li>
                    <Link to="/catalogo">Catalogo</Link>
                </li>
                <li>
                    <Link to="/cadastro">Cadatro</Link>
                </li>
            </ul>
        </nav>
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
    );
};

export default Layout;

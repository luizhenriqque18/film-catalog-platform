import { Link, Outlet } from "react-router-dom";

const Layout = () => {
    return (<div>
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

        <hr />
        <Outlet />
        <footer><h1>Footer</h1></footer>
    </div>
    );
};

export default Layout;

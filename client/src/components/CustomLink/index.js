import { Link, useMatch, useResolvedPath } from "react-router-dom";
import '../../css/CustomLink.css';

const CustomLink = ({ children, to, ...props }) => {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });

    return (
        <Link
            className={`custom-link ${match ? 'custom-link--clicled' : ''}`}
            to={to}
            {...props}
        >
            {children}
        </Link>
    );
}

export default CustomLink;
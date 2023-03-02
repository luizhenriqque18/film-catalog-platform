import React from "react";

import CustomLink from "../CustomLink";
import { path } from "../../routes/path";

import "../../css/Sidebar.css";

const SideBar = () => {

    return <aside className={`sidebar`}>
        <ul>
            {
                path.map(p => <li><CustomLink to={p.link}>{p.icon} {p.label}</CustomLink></li>)
            }
        </ul>
    </aside>
}

export default SideBar;
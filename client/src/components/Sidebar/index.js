import React, { useEffect, useState } from "react";
import { RiArrowDropLeftLine } from "@react-icons/all-files/ri/RiArrowDropLeftLine";

import CustomLink from "../CustomLink";
import Button from "../Button";

import { path } from "../../routes/path";

import "../../css/Sidebar.css";
import classNames from "classnames";

const SideBar = () => {
    const [open, setOpen] = useState(true)
    const [enabledBtn, setEnabledBtn] = useState(false)

    const handleOpen = () => {
        setOpen(!open);
        setEnabledBtn(!enabledBtn)
    }

    const classSidebar = classNames('sidebar', {
        'sidebar--close': open
    })

    const classSidebarTopButton = classNames('sidebar__top--button', {
        'hovered': enabledBtn
    })

    useEffect(() => {
        if (enabledBtn) {
            var a = setTimeout(() => setEnabledBtn(!enabledBtn), 500)
        }
        return () => clearInterval(a)
    }, [enabledBtn])

    return <aside className={classSidebar}>
        <div className="sidebar__top">
            <Button fab primary className={classSidebarTopButton} onClick={handleOpen}><RiArrowDropLeftLine /></Button>
            <h3 className="sidebar__top--logo">C</h3>
        </div>
        <div className="sidebar__links">
            <ul>
                {
                    path.map((p, i) => <li key={i}><CustomLink to={p.link}>{p.icon} {p.label}</CustomLink></li>)
                }
            </ul>
        </div>
    </aside>
}

export default SideBar;
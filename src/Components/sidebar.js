import React from "react";
import '../App.css';
import { SideBarItems } from "./sidebaritems";

function Sidebar() {
    return (
        <div className="Sidebar">
            <div className="SidebarList">
                <input className="Adduser"></input>
                <button className="Addbutton">Add</button>
            </div>
            <ul className="SidebarList">
                {SideBarItems.map((val, key) => {
                    return (
                        <li key={key}
                            className="row"
                            id={window.location.pathname == val.link ? "active" : ""}
                            onClick={() => { window.location.pathname = val.link }}>
                            {" "}
                            <div id="title">{val.title}</div>
                        </li>
                    );
                })}
            </ul>
        </div>
    )
}

export default Sidebar
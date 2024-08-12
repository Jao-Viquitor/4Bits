import React, { useState } from "react";
import {getImageUrl} from "../utils/utils";

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="">
            <a className="" href="/">
                4 bits
            </a>
            <div className="">
                <img
                    className=""
                    src={
                        menuOpen
                            ? getImageUrl("nav/closeIcon.png")
                            : getImageUrl("nav/menuIcon.png")
                    }
                    alt="menu-button"
                    onClick={() => setMenuOpen(!menuOpen)}
                />
                <ul
                    className=""
                    onClick={() => setMenuOpen(false)}
                >
                    <li>
                        <a href="#about">About</a>
                    </li>
                    <li>
                        <a href="#experience">Experience</a>
                    </li>
                    <li>
                        <a href="#projects">Projects</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};
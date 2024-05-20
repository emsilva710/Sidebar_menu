import React, { useRef, useEffect } from "react";
import '../Sidebar/Menu.css';
import miImagen from '../Assets/logo.png';

const Menu = () => {
    const listRef = useRef([]);
    const toggleRef = useRef(null);
    const navegadorRef = useRef(null);
    const mainRef = useRef(null);

    useEffect(() => {
        // Function to handle mouse over on list items
        const handleMouseOver = (index) => {
            listRef.current.forEach((item, idx) => {
                if (item) {
                    item.classList.remove("hovered");
                    if (idx === index) {
                        item.classList.add("hovered");
                    }
                }
            });
        };

        // Add mouseover event listener to list items
        listRef.current.forEach((item, index) => {
            if (item) {
                const onMouseOver = () => handleMouseOver(index);
                item.addEventListener("mouseover", onMouseOver);
                item._onMouseOver = onMouseOver; // Save the event handler for later removal
            }
        });

        // Cleanup event listeners on unmount
        return () => {
            listRef.current.forEach((item) => {
                if (item && item._onMouseOver) {
                    item.removeEventListener("mouseover", item._onMouseOver);
                }
            });
        };
    }, []);

    useEffect(() => {
        // Function to handle toggle click
        const handleToggleClick = () => {
            if (navegadorRef.current && mainRef.current) {
                navegadorRef.current.classList.toggle("active");
                mainRef.current.classList.toggle("active");
            }
        };

        // Add click event listener to toggle button
        const toggleElement = toggleRef.current;
        if (toggleElement) {
            toggleElement.addEventListener("click", handleToggleClick);
        }

        // Cleanup event listener on unmount
        return () => {
            if (toggleElement) {
                toggleElement.removeEventListener("click", handleToggleClick);
            }
        };
    }, []);

    return (
        <div className="body">
            <div className="contenido">
                <div className="navegador" ref={navegadorRef}>
                    <ul>
                        <li ref={el => listRef.current[0] = el}>
                            <a href="#">
                                <span className="icono bx bxs-meteor"></span>
                                <span className="titulo">Inova8M</span>
                            </a>
                        </li>

                        <li ref={el => listRef.current[1] = el}>
                            <a href="#">
                                <span className="icono bx bx-home"></span>
                                <span className="titulo">Inicio</span>
                            </a>
                        </li>

                        <li ref={el => listRef.current[2] = el}>
                            <a href="#">
                                <span className="icono bx bx-task"></span>
                                <span className="titulo">Admision</span>
                            </a>
                        </li>

                        <li ref={el => listRef.current[3] = el}>
                            <a href="#">
                                <span className="icono bx bx-user"></span>
                                <span className="titulo">Usuarios</span>
                            </a>
                        </li>

                        <li ref={el => listRef.current[4] = el}>
                            <a href="#">
                                <span className="icono bx bx-paste"></span>
                                <span className="titulo">Roles</span>
                            </a>
                        </li>

                        <li ref={el => listRef.current[5] = el}>
                            <a href="#">
                                <span className="icono bx bx-log-in-circle"></span>
                                <span className="titulo">Cerrar Secion</span>
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="main" ref={mainRef}>
                    <div className="topbar">
                        <div className="toggle" ref={toggleRef}>
                            <span className="bx bx-menu"></span>
                        </div>
                        <div className="search">
                            <label>
                                <input type="text" placeholder="Buscar" />
                                <span className="bx bx-search-alt-2"></span>
                            </label>
                        </div>
                        <div className="logo_8m">
                            <img src={miImagen} alt="Descripción de la imagen" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Menu;

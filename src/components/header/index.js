import React,{ useState } from 'react'
import { Link } from 'gatsby';
import { ThemeSwitch } from '../theme-switch';
import styled from 'styled-components';
import './index.scss'

export const Header = ({ title, location, rootPath }) => {

    const isRoot = location.pathname === rootPath;

    const [click,setClick] = useState(false);

    const onClick = () => {
        setClick(!click);
    }

    return (
        <header>
            <div className="wrapper">
                <div className="top">
                    {
                        isRoot && (
                            <div className="title">
                                <Link to={"/"} className="link">
                                    {title}
                                </Link>
                            </div>
                        )
                    }
                    <Menu>
                        <nav className="menu">
                            <Item>TIL</Item>
                            <Item>TOPIC</Item>
                            <Item>Etc</Item>
                        </nav>
                        <div className="switch-mode-container">
                            <ThemeSwitch />
                        </div>
                        <div className="mobile-menu" onClick={onClick}>
                            <div className={"hamburger " + (click ? "is-active" : "")} id="hamburger-6">
                                <span className="line"></span>
                                <span className="line"></span>
                                <span className="line"></span>
                            </div>

                            <ul className={(click ? "click" : "none")}>
                                <li>fajefj</li>
                                <li>fajefj</li>
                                <li>fajefj</li>
                            </ul>
                        </div>
                    </Menu>
                </div>
            </div>  
        </header>
    )
}

const Menu = styled.div`
    display: flex;
    justify-content: space-around;
    float:left;

    .mobile-menu{
        display: none;
        border: none;
        margin-left:1rem;
    }

    .menu {
        display: flex;
        margin-right: 0.5rem;
    }

    @media screen and (max-width: 768px) {

        @keyframes fade-in {
            from {
                opacity: 0;
            }
            to {
                opacity: 1;
            }
        }

        @keyframes fade-out {
            from {
                opacity: 1;

            }
            to {
                opacity: 0;
            }
        }

        .menu {
            display: none;
        }

        .mobile-menu {
            display:block;
            position: relative;

            .click {
                position:absolute;
                background-color:#F4F7FB;
                opacity: 0.8;
                right: 0;
                width:80vw;
                animation: fade-in 1.2s;
                animation-fill-mode: forwards;
                list-style: none;
                display: flex;
                flex-direction: column;
                
                li{
                    position: relative;
                    width: 100%;
                    cursor: pointer;
                    text-align:center;

                }
            }

            .none {
                right: 0;
                width:calc(100% * 4);
                position:absolute;
                animation: fade-out 0.5s;
                animation-fill-mode: forwards;
                list-style: none;

                transition-property: width;
                transition-duration: 3s;
            }
        }
    }
`;

const Item = styled.a`
    padding: 0.2rem 0.7rem;
    font-size: 0.9rem;
`;
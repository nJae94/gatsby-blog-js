import React from 'react'
import { Link } from 'gatsby';
import { ThemeSwitch } from '../theme-switch';
import styled from 'styled-components';
import './index.scss'

export const Header = ({ title, location, rootPath }) => {

    const isRoot = location.pathname === rootPath;

    const MenuIcon = () => {
        return (
            <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24"
            viewBox="0 0 24 24">
                <path d="M4 22h-4v-4h4v4zm0-12h-4v4h4v-4zm0-8h-4v4h4v-4zm3 0v4h17v-4h-17zm0 12h17v-4h-17v4zm0 8h17v-4h-17v4z"/>
            </svg>
        )
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
                        
                        {/* <button className="mobile-menu">
                            <MenuIcon/>
                        </button> */}
                        <div className="mobile-menu ">
                            <span></span>
                            <span></span>
                            <span></span>
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
        .menu {
            display: none;
        }

        .mobile-menu {
            display:block;
            position: relative;
            width: 32px;
            height: 32px;

            span {
                position: absolute;
                left:0;
                width: 100%;
                height: 4px;
                background-color:#000;
                border-radius: 4px;

                &:nth-child(1)
                {
                    top:0;
                }
                
                &:nth-child(2)
                {
                    top:14px;
                }
                
                &:nth-child(3)
                {
                    bottom:0;
                }
            }
            .ative
            {
                span {
                    &:nth-child(1)
                    {
                        -webkit-transform: translateY(20px) rotate(-45deg);
                        transform : translateY(20px) rotate(-45deg);
                    }
                    &:nth-child(2)
                    {
                        opacity:0;
                    }
                    &:nth-child()
                    {
                        -webkit-transform: translateY(20px) rotate(45deg);
                        transform : translateY(20px) rotate(45deg);
                    }
                }
            }
        }
    }
`;

const Item = styled.a`
    padding: 0.2rem 0.7rem;
    font-size: 0.9rem;
`;
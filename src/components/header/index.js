import React, { useState } from "react"
import { Link } from "gatsby"
import { ThemeSwitch } from "../theme-switch"
import styled from "styled-components"
import "./index.scss"

export const Header = ({ title, location, rootPath, show }) => {
  const isRoot = location.pathname === rootPath

  const [click, setClick] = useState(false)

  const onClick = () => {
    setClick(!click)
  }

  const ListLink = props => <Item to={props.to}>{props.children}</Item>

  return (
    <header>
      <div className={`wrapper ${isRoot || show ? "show" : "hide"}`}>
        <div className="top">
          {
            <div className="title">
              <Link to={"/"} className="link">
                {title}
              </Link>
            </div>
          }
          <Menu>
            <nav className="menu">
              <ListLink to="/today/">TIL</ListLink>
              <ListLink to="/algorithm/">Algorithm</ListLink>
              <ListLink to="/about/">__About</ListLink>
            </nav>
            <div className="switch-mode-container">
              <ThemeSwitch />
            </div>
            <div className="mobile-menu" onClick={onClick}>
              <div
                className={"hamburger " + (click ? "is-active" : "")}
                id="hamburger-6"
              >
                <span className="line"></span>
                <span className="line"></span>
                <span className="line"></span>
              </div>

              <ul className={click ? "click" : "none"}>
                <li>
                  <ListLink to="/today/">TIL</ListLink>
                </li>
                <li>
                  <ListLink to="/algorithm/">Algorithm</ListLink>
                </li>
                <li>
                  <ListLink to="/about/">__About</ListLink>
                </li>
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
  float: left;

  .mobile-menu {
    display: none;
    border: none;
    margin-left: 1rem;
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
      display: block;
      position: relative;

      .click {
        position: absolute;
        background-color: #f4f7fb;

        right: -1rem;
        width: 100vw;
        animation: fade-in 1.2s;
        animation-fill-mode: forwards;
        list-style: none;
        display: flex;
        flex-direction: column;

        li {
          position: relative;
          width: 100%;
          cursor: pointer;
          text-align: center;
          border-bottom: 1px solid #efefef;
        }
      }

      .none {
        right: 0;
        width: calc(100% * 4);
        position: absolute;
        animation: fade-out 0.5s;
        animation-fill-mode: forwards;
        list-style: none;

        transition-property: width;
        transition-duration: 3s;
      }
    }
  }
`

const Item = styled(Link)`
  padding: 0.2rem 0.7rem;
  font-size: 0.9rem;
  text-decoration: none;

  &:hover {
    font-size: 1rem;
  }
`

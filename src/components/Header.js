import React, { useState } from "react";
import styled from "styled-components";
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';

function Header() {
    const [BurgerState, setBurgerState] = useState(false);
    return (
        <Container>
            <a href="">
                <img src="/images/logo.svg" alt="" />
            </a>
            <Menu>
                <a href="#1">Model S</a>
                <a href="#2">Model 3</a>
                <a href="#3">Model X</a>
                <a href="#4">Model Y</a>
                <a href="#5">Solar roof</a>
                <a href="#6">Solar Panels</a>
            </Menu>
            <RightMenu>
                <a href="">Shop</a>
                <a href="">Account</a>
                <IconButton onClick={() => {
                    setBurgerState(true);
                }}>
                    <MenuIcon />
                </IconButton>
            </RightMenu>
            <BurgerMenu show={BurgerState}>
                <ul>
                    <CloseWrapper >
                        <IconButton onClick={() => {
                            setBurgerState(false);
                        }}><CloseIcon /></IconButton>
                    </CloseWrapper>
                    <li><a href="">Existing Inventory </a></li>
                    <li><a href="">Used Inventory </a></li>
                    <li><a href="">Trade-in </a></li>
                    <li><a href="">Test Drive</a></li>
                    <li><a href="">Insurance </a></li>
                    <li><a href="">CyberTruck </a></li>
                    <li><a href="">Roadster </a></li>
                    <li><a href="">Semi </a></li>
                    <li><a href="">Charging </a></li>
                    <li><a href="">Powerwall </a></li>
                    <li><a href="">Comercial Energy </a></li>
                    <li><a href="">Utilities </a></li>
                    <li><a href="">Find Us </a></li>
                    <li><a href="">Support </a></li>
                    <li><a href="">Investor Relations </a></li>
                </ul>
            </BurgerMenu>
        </Container >
    );
}

export default Header;

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content:space-between;
  padding: 0 20px;
  top:0;
  left:0;
  right:0;
  z-index:9;
`;

const Menu = styled.div`
    display: flex;
    align-items: center;
    justify-content:center ; 
    flex:1;
    margin-left:3rem;

    a{
        font-weight:400;
        padding: 0 20px;
        flex-wrap: no-wrap;
        color:black;
    }

    a:hover{
        background-color:rgb(230,230,230);
    }

    @media(max-width:1024px){
        display:none;
    }
`;

const RightMenu = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;  

    a{
        text-transform:uppercase;
        padding: 0 10px;
        font-weight:400;
        color:black;
    }
    @media(max-width:425px){
        a{
            display:none;
        }
    }
`

const BurgerMenu = styled.div`
    z-index:1;
    ul{
        position: fixed;
        top:0;
        bottom:0;
        right:0;
        width:300px;
        list-style: none;
        padding:1rem 2rem 2rem 2rem;
        display:flex;
        flex-direction:column;
        background:white;
        height:100%
        bottom:0;
        transform:${props => props.show ? `translateX(0)` : `translateX(100%)`};
        transition: transform 0.2s ease-in;
    }

    li{
        padding:6px 10px;
        margin: 3px 0;
        text-align:left;
    }

    li:hover{
        background-color:#d4d7d7;
        border-radius:15px;
    }

    a{
        color:black;
        font-size:16px;
        font-weight:300;
    } 
`

const CloseWrapper = styled.div`
    display: flex;
    align-items:center;
    justify-content:flex-end;
`

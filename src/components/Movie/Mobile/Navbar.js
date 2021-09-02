import React from 'react';
import styled from 'styled-components';
import {Burger} from './Burger';

const Nav = styled.nav`
  padding: 0 5px;
  display: flex;
  justify-content: space-between;
  .logo {
    padding: 15px 0;
  }
`

export const Navbar = () => {

    return (
        <Nav>
            <div className="logo">
            <Burger/>
            </div>
         </Nav>
    )
}



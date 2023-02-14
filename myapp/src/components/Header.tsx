import '../css/header.css'
import React, { useState } from 'react';
import { Squash as Hamburger } from 'hamburger-react'
import { Button, Col, Row } from 'reactstrap';



export interface IHeaderProps {
}

export function Header (props: IHeaderProps) {

  return (
    <div className='Header'>
      <Hamburger size={20} distance="sm"></Hamburger>

      <div className='imgDiv'>
        <img src='https://www.clipartmax.com/png/middle/29-295911_cookbook-recipe-book-icon-png.png' />
      </div>

      <div>
        <Button>Login</Button>
        <Button>Sign Up</Button>
      </div>
    </div>
  );
}

import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { Nav } from './style';
import LogoUfmt from '../../assets/img/simbolo_ufmt _2x.png';

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  function handleToggleClick() {
    setMenuOpen(!menuOpen);
  }
  return (
    <Nav open={menuOpen}>
      <div className="brand-container">
        <a className="brand" href="/" tabIndex="0">
          <img src={LogoUfmt} alt="" />
          <h1> REduc | </h1>
          <small> Repositório Digital da Educação </small>
        </a>
        <button
          type="button"
          id="navbar-toggle"
          onClick={() => handleToggleClick(this)}
        >
          <FaBars />
        </button>
      </div>
      <ul id="main-nav">
        <li>
          <a href="oreduc">O REduc</a>
        </li>

        <li>
          <a href="equipe">Equipe</a>
        </li>
        <li>
          <a href="contato">Contato</a>
        </li>
      </ul>
    </Nav>
  );
}

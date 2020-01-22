import React, { Component } from 'react';
import { FaSearch, FaBars } from 'react-icons/fa';
import { Nav } from './style';
import LogoUfmt from '../../assets/img/simbolo_ufmt _2x.png';

export default class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false,
    };

    this.handleToggleClick = this.handleToggleClick.bind(this);
  }

  handleToggleClick(e) {
    e.preventDefault();
    const { menuOpen } = this.state;
    this.setState({ menuOpen: !menuOpen });
  }

  render() {
    const { menuOpen = false } = this.state;
    return (
      <Nav open={menuOpen}>
        <div className="brand-container">
          <a className="brand" href="/">
            <img src={LogoUfmt} alt="" />
            <h1> REduc | </h1>
            <small> Repositório Digital da UFMT</small>
          </a>
          <button
            type="button"
            id="navbar-toggle"
            onClick={this.handleToggleClick}
          >
            <FaBars />
          </button>
        </div>
        <ul id="main-nav">
          <li className="drop-down">
            <a href="#">O REduc</a>
            <ul>
              <li>
                <a href="#">A Revista</a>
              </li>
              <li>
                <a href="#">Editorial</a>
              </li>
              <li>
                <a href="#">Normas</a>
              </li>
            </ul>
          </li>

          <li>
            <a href="#">Tipos de Mídia</a>
          </li>
          <li>
            <a href="#">Equipe</a>
          </li>
          <li>
            <a href="#">Contato</a>
          </li>
        </ul>
      </Nav>
    );
  }
}

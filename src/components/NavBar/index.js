import React, { Component } from 'react';
import { FaBars } from 'react-icons/fa';
import { Nav } from './style';
import LogoUfmt from '../../assets/img/simbolo_ufmt _2x.png';

export default class NavBar extends Component {
  constructor(props) {
    super(props);
    const { background } = props;
    this.state = {
      menuOpen: false,
      background,
    };

    this.handleToggleClick = this.handleToggleClick.bind(this);
  }

  handleToggleClick(e) {
    e.preventDefault();
    const { menuOpen } = this.state;
    this.setState({ menuOpen: !menuOpen });
  }

  render() {
    const { menuOpen = false, background } = this.state;
    return (
      <Nav open={menuOpen} background={background}>
        <div className="brand-container">
          <a className="brand" href="/">
            <img src={LogoUfmt} alt="" />
            <h1> REduc | </h1>
            <small> Repositório Digital da Educação </small>
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
                <a href="#">O Repositório</a>
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

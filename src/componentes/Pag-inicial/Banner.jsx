import React from 'react';
import { Link } from 'react-router-dom';
import Imgbanner from "../img/vaga-emprego.jpg";
import './style.css';

export default function Banner() {
  return (
    <div className='banner-container'>
      <h2 className='banner-text'>Venha fazer parte da equipe!</h2>
      <div className="banner-img-container">
        <Link to="/Cadastro" className="banner-link">
          <img src={Imgbanner} alt="cadastrar" className="banner-img" />
          <span className="image-text">Cadastrar-se!</span>
        </Link>
      </div>
    </div>
  );
}



import React from 'react';
/*import { CircularProgressbar, buildStyles  } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import VisibilitySensor from "react-visibility-sensor";*/
import introLogo from '../intro-logo.png'

 const About = (props) => {
    
 	return (
    <section className="site-section" id="about">
      <div className="container">
          <div className="site-section__icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="33" height="7" viewBox="0 0 73.94 14.19">
              <polyline points="2.83 2.83 11.36 11.36 19.9 2.83 28.43 11.36 36.97 2.83 45.5 11.36 54.04 2.83 62.58 11.36 71.11 2.83" style={{ strokeDashoffset: "2e-05", strokeDasharray: "none" }}></polyline>
            </svg>
          </div>        
        <h1 className="site-heading">Sobre mim  </h1>
        <div className="about">
        <div className="row">
        <div className="about-intro">
        	<p>Olá, meu nome é Caio Teixeira, sou apaixonado por técnologia e desenvolvimento de software. Há mais ou menos 3 anos tenho trabalhado na área e tenho visto cada vez mais que escolhi a profissão certa. Amo os desafios da área, e se depender de mim, falo de código até para o meu bichinho de estimação.</p>
          <p>No meu tempo livre sou gamer, leitor de livros, mountain biker e namorado de uma linda desenvolvedora de software s2.</p>
        </div>	
        <div className="about-pic">
	    	<img src={ introLogo } alt="" className="pic"/>
	    </div>
	    </div>
	    </div>
      </div>
    </section>

 		)
 }

 export default About
 ;
import React from 'react';
import { Icon } from 'semantic-ui-react'

const Footer = () => {
var data = new Date();
  return(
  <footer className="site-footer site-footer--with-clipmask">
    <div className="site-footer__quote">"Talk is a cheap show me the code" - Linus Torvalds</div>
    <div className="site-social"> 
      <div className="site-social__list"> 
        <a href="https://www.facebook.com/caio.teixeira.5" className="site-social__link" target="_blank" rel="noopener noreferrer">
        <Icon name='facebook f' style={{color: '#fff', fontSize: '2.5rem', alignSelf: 'normal', marginTop: '5%', marginLeft: '5%'}}/>
        </a>
      </div> 
      <div className="site-social__list"> 
        <a href="https://github.com/CaioTeixeira95" className="site-social__link" target="_blank" rel="noopener noreferrer">
        <Icon name='github alternate' style={{color: '#fff', fontSize: '2.5rem', alignSelf: 'normal', marginTop: '5%', marginLeft: '5%'}}/>
        </a>
      </div>
      <div className="site-social__list"> 
        <a href="https://www.linkedin.com/in/caio-teixeira-7aa06183" className="site-social__link" target="_blank" rel="noopener noreferrer">
           <Icon name='linkedin' style={{color: '#fff', fontSize: '2.5rem', alignSelf: 'normal', marginTop: '5%', marginLeft: '5%'}}/>
        </a>
      </div>                   
    </div>
    <div className="site-footer__copyright"> Todos direitos reservados {data.getFullYear()}</div>
  </footer>
    )
}

export default Footer;
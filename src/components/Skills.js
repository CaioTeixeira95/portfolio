import React from 'react';
import SkillBar from 'react-skillbars';

 const Skills = (props) => {

    const data = props.portfolioData;
    let skillList;
   return (
    <section className="site-section" id="skills">
      <div className="container">
          <div className="site-section__icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="33" height="7" viewBox="0 0 73.94 14.19">
              <polyline points="2.83 2.83 11.36 11.36 19.9 2.83 28.43 11.36 36.97 2.83 45.5 11.36 54.04 2.83 62.58 11.36 71.11 2.83" style={{ strokeDashoffset: "2e-05", strokeDasharray: "none" }}></polyline>
            </svg>
          </div>        
        <h1 className="site-heading"> Habilidades  </h1>
        
        <div className="row">{ skillList }</div>
        <SkillBar skills={data.skills} colors = {{
  bar: '#4c0a1890',
  title: {
    text: '#4c0a18',
    background: '#fff'
  }
}}/>
      </div>
    </section>

     )
 }

 export default Skills;

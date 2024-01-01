import { Outlet, Link } from "react-router-dom";
export default function Home()
{
    return(
        <body>
      
    <header class="header">
        <div class="logo">
           <a href="#" class="logo-text"> TURNER </a>
        </div>
    
        <div class="navigation">
            <ul class="items">
                <li><Link to="/"><a>Home</a></Link></li>
                <li><Link to="/projects"><a>Projects</a></Link></li>
                <li><a href="#">Contact Us</a></li>
                <li><a href="#">Pricing</a></li>
            </ul>
        </div>
      </header>
      <section class="pic-n-short-about">
       
        
        <div class="short-about">
          <span class="about-text">My name in NDJANA ESSAGA GERMAIN DAVY,</span>
          <span class="about-text">born in yaounde on the 16th of february XXXX.</span>
          <span class="about-text"> I went though an anglophone system of education and had my GCE ADVANCED LEVEL.</span>
          <span class="about-text">At the university level, i did software engineering at the ICT UNIVERSITY.</span>
          <span class="about-text"> After 4 years, i had a bachelors degree of science in software engineering.</span> 
          <span class="about-text">Today, i am working as fullstack software engineer at ALPHA DIGITAL SERVICES.</span>
        </div>
        
        <div className="start-button">
        
          <a class="started" href="#">Get Started</a>
          
        </div>
        
      </section>

      
</body>
    )
}
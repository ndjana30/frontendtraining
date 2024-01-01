import { Outlet, Link } from "react-router-dom";
export default function Projects()
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
               
            </ul>
        </div>
      </header>
      
</body>
    )
}
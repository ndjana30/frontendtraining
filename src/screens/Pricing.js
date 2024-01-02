import { Outlet, Link } from "react-router-dom";
export default function Pricing()
{
    return (
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
            <section class="pricing-plans">
                <div class="plan">
                    <p class="name">
                        Free
                    </p>
                    <p class="amount">
                        $0
                    </p>
                </div>

                <div class="plan">
                    <p class="name">
                        Starter
                    </p>
                    <p class="amount">
                        20$
                    </p>
                </div>
                <div class="plan">
                    <p class="name">
                        Premium
                    </p>
                    <p class="amount">
                        $40
                    </p>
                </div>
                <div class="plan">
                    <p class="name">
                        Gold
                    </p>
                    <p class="amount">
                        $150
                    </p>
                </div>
            </section>
        </body>
    )
}
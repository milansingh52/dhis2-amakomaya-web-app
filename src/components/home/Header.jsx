import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const Header = () => {

    const [sticky, setSticky] = useState(false)
    useEffect(()=>{
        window.addEventListener('scroll', ()=>{
            window.scrollY > 50 ? setSticky(true) : setSticky(false);
        })
    }, []);

    return (
        <>
            <nav class={`navbar sticky-top navbar-expand-lg py-4 ${sticky ? 'dark-nav': ''}`}>
                <div class="container">
                    <div class="">
                        <Link to="/"><img src="./assets/logo_5.png" alt="Logo" height="50" class="d-inline-block align-top"/></Link>
                    </div>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0 text-center">
                            <li class="nav-item">
                                <a class="nav-link px-2" aria-current="page" href="#why">Why?</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link px-3" href="#plan">Plans</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link px-3" href="#customization_process">Customize</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link px-3" href="#faqs">FAQs</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link px-3" href="#contact-us">Support</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header;
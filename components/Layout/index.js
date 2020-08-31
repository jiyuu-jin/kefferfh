import React, {useEffect} from "react";
import Head from "next/head";
import Link from "next/link";

import $ from 'jquery';

if (typeof window !== 'undefined') {
    window.$ = $;
    window.jQuery = $;
    require('materialize-css');
}


const closeNav = () => {
    console.log("Closing the sidebar");
    $(".button-collapse").sidenav("close");
}

const Header = ({}) => {

    useEffect(() => {
        $('.dropdown-trigger').dropdown();
        $('.sidenav').sidenav();
    });


    return (
        <header className="header light-blue darken-4 z-depth-1">
            <ul id="dropdown1" className="dropdown-content">
                <li>
                    <Link href="/funeral"><a>Funeral</a></Link>
                </li>
                <li>
                    <Link href="/cremation"><a>Cremation</a></Link>
                </li>
                <li>
                    <Link href="/immediate-burial"><a>Immediate Burial</a></Link>
                </li>
            </ul>
            <Link href="/">
                <a>
                    <img alt="KefferFH" className="" src="/images/logo.png" />
                    <div className="logo-text">AND CREMATORY INC</div>
                </a>
            </Link>
            <nav className="light-blue darken-4">
                <div className="nav-wrapper">
                    <ul className="hide-on-med-and-down">
                        <li>
                            <Link href="/prices"><a>Price Lists</a></Link>
                        </li>
                        <li>
                            <a className="dropdown-trigger" href='#' data-target='dropdown1'>
                                Services
                            </a>
                        </li>
                        <li>
                            <a href="#contact">Contact</a>
                        </li>
                        <li>
                            <Link href="/florists"><a>Local Florists</a></Link>
                        </li>
                        <li>
                            <Link href="/about"><a>About</a></Link>
                        </li>
                    </ul>

                    <ul onClick={closeNav} id="nav-mobile" className="sidenav">
                        <li>
                            <Link href="/prices"><a>Price Lists</a></Link>
                        </li>
                        <li>
                            <Link href="/funeral"><a>Funeral</a></Link>
                        </li>
                        <li>
                            <Link href="/cremation"><a>Cremation</a></Link>
                        </li>
                        <li>
                            <Link href="/immediate-burial"><a>Immediate Burial</a></Link>
                        </li>
                        <li>
                            <a href="#contact">Contact</a>
                        </li>
                        <li>
                            <Link href="/florists"><a>Local Florists</a></Link>
                        </li>
                        <li>
                            <Link href="/about"><a>About</a></Link>
                        </li>
                    </ul>
                    <a data-target="nav-mobile" className="sidenav-trigger hide-on-large-and-up">
                        <i className="material-icons">menu</i>
                    </a>
                </div>
            </nav>
        </header>
    );
}

const Footer = ({}) => {
    return (
        <footer className="page-footer light-blue darken-4">
            <div className="foot-container">
                <div className="row">
                    <div className="col l6 s12">
                    <h5 className="white-text">About Us</h5>
                    <p className="grey-text text-lighten-4">
                        Since 1966 the John W. Keffer Funeral Home has offered a
                        professional, dignified service in keeping with individual or
                        family desires with a sincere effort to keep expenses as
                        reasonable as possible.
                    </p>
                </div>
                <div className="col l3 s12" />
                    <div className="col l3 s12">
                        <h5 className="white-text">Connect</h5>
                        <ul>
                            <li>
                                <a className="white-text" href="#!">
                                    Keffer Funeral Home Facebook
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer-copyright">
            <div className="container">
                Copyright © 2001-2020 John W. Keffer Funeral Home Inc. All Rights
                Reserved. - Created by{" "}
                <a className="brown-text text-lighten-3" href="http://pelkey.io">
                Zachary Pelkey
                </a>
            </div>
        </div>
    </footer>
    );
}

const Layout = ({children, title}) => (
    <div>
        <Head>
            <title>{title}</title>
            <meta charSet="utf-8" />
            <meta name="description" content="Eat well, and live sustainably with just the items in your fridge" />
            <meta name="og:title" content={"Keffer Funeral Home"} />
            <meta name='apple-mobile-web-app-capable' content='yes' />
            <meta name='apple-mobile-web-app-status-bar-style' content='default' />
            <meta name='mobile-web-app-capable' content='yes' />
            <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css" />
            <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
        </Head>
        <Header />
        <div>
            {children}
        </div>
        <Footer />
    </div>
);

export default Layout;

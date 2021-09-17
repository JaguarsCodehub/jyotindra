import React from 'react'
import "./index.css"

const Navbar = () => {
    return (
            <section>
                <header>
                    <ul>
                        <li>
                            <a className="logo"  href="">JKT</a>
                        </li>
                        <li>
                            <a href="/playground">Playground</a>
                        </li>
                        <li>
                            <a className="talk" href="/">Let's Talk</a>
                        </li>
                    </ul>
                </header>
            </section>
    )
}

export default Navbar

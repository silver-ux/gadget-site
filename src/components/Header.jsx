import React from 'react'

export const Header = () => {
    return (
        <header>
            <div class="container">
                <a class='logo' href="#">
                    <h1>Gadgets</h1>
                </a>
                <nav>
                    <ul>
                        <li class="nav-list"><a href="#">Home</a> </li>
                        <li class="nav-list"><a href="#">Products</a></li>
                        <li class="nav-list"><a href="#">Blog</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

import React from 'react'
import { Link } from 'gatsby';

const Header = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li><Link to="/"></Link>top</li>
                    <li><Link to="/about">About</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default Header

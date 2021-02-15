import React from "react"
import Header from '../components/header';
import Footer from '../components/footer';


const AboutPage = () => {
    return (
        <div>
                <Header />
            <h1>About Page</h1>
            <Footer />
        </div>
    )
}

export const query = graphl`
    query {
        site {
            siteMetadata {
                title
            }
        }
    }
`

export default AboutPage
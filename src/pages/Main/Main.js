import React from 'react'
import { Helmet } from 'react-helmet'

import { Navbar, Footer, Landing, About, Skills, Testimonials, Blog, Education, Experience, Contacts, Projects, Services, Achievement } from '../../components'
import { headerData } from '../../data/headerData'

function Main() {
    return (
        <div>
            <Helmet>
                <title>Lacina DRABO - Exploration</title>
            </Helmet>

            <Navbar />        
            <Landing />
            <About />
            <Education />
            <Skills />
            <Experience />
            <Achievement />
            <Services />
            <Contacts />
            <Footer />
        </div>
    )
}

export default Main

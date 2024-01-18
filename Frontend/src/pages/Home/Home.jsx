import Footer from '../../components/Footer/Footer';
import Hero from '../../components/Hero/Hero';
import Nav from '../../containers/Nav/Nav';
import Features from '../../components/Features/Features';

import './Home.scss';

export default function Home() {
    return (
        <div>
            <header>
            <Nav />
            </header>
            <main className='main'>
                <Hero />
                <Features />
            </main>
            <Footer />
        </div>    
    )
}
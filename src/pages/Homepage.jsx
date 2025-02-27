import Hero from '../components/Hero';
import Services from '../components/Services';
import Projects from '../components/Projects';
import FAQ from '../components/FAQ';
import Testi from '../components/Testi';
import HomeFeatures from "../components/FeaturesSection.jsx";
import Pricing from "../components/Pricing.jsx";

const Homepage = () => {
    return (
        <div>
            {/* Header Section */}

            <Hero />
            <div className='bg-[#030014]'>

            <HomeFeatures />

            {/*<Services />*/}
            <Projects />


            <Pricing/>

            <Testi />

            <div className="flex items-center justify-center py-10">
                <FAQ />

            </div>
            </div>

        </div>
    )
}

export default Homepage
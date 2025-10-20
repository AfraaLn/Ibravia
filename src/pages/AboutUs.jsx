import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";
import { TrustedCollaboration } from "../components/TrustedCollaboration";
import { WhyChooseUs } from "../components/WhyChooseUs";
import { HouseCollections } from "../components/HouseCollections";


export const AboutUs = () => {
    return <div className=" min-h-screen overflow-x-hidden">

        {/* Theme Toggle */}
        {/* <ThemeToggle /> */}

        {/*Navbar*/}
        <Navbar />


        {/*Main Content*/}
        <main>
            {/* <HeroSection />
            <TrustedCollaboration />
            <WhyChooseUs />
            <HouseCollections /> */}
        </main>
        {/*Footer*/}


    </div>;

}
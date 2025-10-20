import { ThemeToggle } from "../components/ThemeTooggle";
import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";
import { TrustedCollaboration } from "../components/TrustedCollaboration";
import { WhyChooseUs } from "../components/WhyChooseUs";
import { HouseCollections } from "../components/HouseCollections";


export const Home = () => {
    return <div className=" min-h-screen overflow-x-hidden">

        {/* Theme Toggle */}
        {/* <ThemeToggle /> */}

        {/*Navbar*/}
        <Navbar />


        {/*Main Content*/}
        <main>
            <HeroSection />
            <TrustedCollaboration />
            <WhyChooseUs />
            {/* <HouseSection/> */}
            <HouseCollections/>
        </main>
        {/*Footer*/}


    </div>;

}
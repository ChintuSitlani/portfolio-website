import HeroContent from "./HeroContent";
import HeroStats from "./HeroStats";
import BannerArrow from "../BannerArrow/BannerArrow";


export default function Hero() {
    return (
        <div className="relative flex flex-col w-full min-h-screen">
            <div className="container flex-1 flex justify-between items-center max-md:flex-col max-md:pt-10">
                {/* Left side content */}
                <HeroContent />

                {/* Desktop */}
                <div className="hidden md:flex md:flex-col md:justify-center md:items-end md:h-screen md:pr-8">
                    <HeroStats layout="col" />
                </div>

                {/* Mobile row - centered */}
                <div className="md:hidden container pb-10 px-6 flex justify-center">
                    <HeroStats layout="row" />
                </div>
            </div>


            {/* Scroll down arrow */}
            <BannerArrow />
        </div>
    )
}
import React from "react";

// components
import EntertainmentCardSlider from "../components/EntertainmentCarousel/EntCarousel.component";

import PosterSlider from "../components/PosterSlider/PosterSlider.component";

// config
import TempPosters from "../config/tempPosters.config";

const HomePage = () => {
    return(
    <>
        <div className="flex flex-col gap-4">
            <div className="container mx-auto px-4">
                <h1 className="text-2xl font-bold text-gray-800 my-3">The Best of Entertainment</h1>
                <EntertainmentCardSlider />
            </div>

            <div className="bg-bms-800 py-10">
                <div className="container mx-auto px-4 flex flex-col gap-3"> 
                    <div className="hidden md:flex">
                        <img src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png" alt="premiere image" className="w-full h-full" />
                    </div>
                    <PosterSlider images={TempPosters} title="Premieres" subtitle="Brand new release every friday" isDark />
                </div>
            </div>

            <div className="px-auto mx-4 container px-4 my-8">
            <PosterSlider images={TempPosters} title="Online Streaming Events" isDark={false} />
            </div>

            <div className="px-auto mx-4 container px-4 my-4">
            <PosterSlider images={TempPosters} title="Outdoor Events" isDark={false} />
            </div>
        </div>
    </>
    );
}

export default HomePage;
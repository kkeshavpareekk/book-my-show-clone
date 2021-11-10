import React from 'react';
import { FaCcVisa, FaCcApplePay } from "react-icons/fa";

//component
import MovieHero from '../components/MovieHero/MovieHero.component';
import Cast from '../components/Cast/cast.component';
import PosterSlider from '../components/PosterSlider/PosterSlider.component';

//configs
import TempPosters from "../config/tempPosters.config";


const MoviePage = () => {
    const settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
            },
          },
        ],
    };
    return (
        <>
            <MovieHero />
            <div className="my-12 container px-4 lg:ml-20 lg:w-2/3">
                <div className="flex flex-col items-start gap-3">
                    <h2 className="text-gray-800 font-bold text-2xl">About the Movie</h2>
                    <p>Tom Hardy returns to the big screen as the lethal protector Venom, one of MARVEL`s greatest and most complex characters. Directed by Andy Serkis, the film also stars Michelle Williams, Naomie Harris and Woody Harrelson, in the role of the villain Cletus Kasady/Carnage.</p>
                </div>

                <div className="my-8">
                    <hr />
                </div>

                <div className="my-8">
                    <h1 className="text-gray-800 font-bold text-2xl mb-3">Applicable Offers</h1>
                    <div className="flex flex-col gap-3 lg:flex-row">
                        <div className="flex items-start gap-2 bg-yellow-100 px-3 py-3 border-yellow-400 border-dashed border-2 rounded-md">
                            <div className="h-8 w-8">
                                <FaCcVisa className="h-full w-full" />
                            </div>
                            <div className="flex flex-col items-start">
                                <h3 className="text-gray-700 text-xl font-bold">Visa Stream Offer</h3>
                                <p className="text-gray-600">Get Flat 10% festive discount on Visa Cards</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-2 bg-yellow-100 px-3 py-3 border-yellow-400 border-dashed border-2 rounded-md">
                            <div className="h-8 w-8">
                                <FaCcApplePay className="h-full w-full" />
                            </div>
                            <div className="flex flex-col items-start">
                                <h3 className="text-gray-700 text-xl font-bold">Filmy Pass</h3>
                                <p className="text-gray-600">Get Flat 10% festive discount on Filmy Cards</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="my-8">
                    <h2 className="text-gray-800 font-bold text-2xl mb-4">Cast and Crew</h2>
                    <div className="flex flex-wrap gap-4">
                        <Cast image="https://in.bmscdn.com/iedb/artist/images/website/poster/large/tom-hardy-8994-24-03-2017-12-37-04.jpg" castName="Tom Hardy" role="Venom" />
                        <Cast image="https://in.bmscdn.com/iedb/artist/images/website/poster/large/reid-scott-1095987-04-10-2018-12-39-35.jpg" castName="Reid Scott" role="Dan Lewis" />
                        <Cast image="https://in.bmscdn.com/iedb/artist/images/website/poster/large/michelle-williams-1472-14-10-2016-05-24-50.jpg" castName="Michelle Williams" role="Anne Weying" />
                    </div>
                </div>

                <div className="my-8">
                    <hr />
                </div>
                <div className="my-8">
                    <PosterSlider config={settings} images={TempPosters} title="You Might Also like.." isDark={false} />
                </div>
                <div className="my-8">
                    <hr />
                </div>
                <div className="my-8">
                    <PosterSlider config={settings} images={TempPosters} title="BMS XCLUSIV" isDark={false} />
                </div>
                
            </div>


        </>
    );
};

export default MoviePage;


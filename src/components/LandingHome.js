import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import '../skeleton.css';
const LandingHome = () => {
    const [isLoading, setIsLoading] = useState(true);

    const skeletonTimeout = 500; // timeout in ms
    const navigate = useNavigate();
    useEffect(() => {
        const loadData = async () => {
            setIsLoading(true);
            await new Promise(resolve => setTimeout(resolve, skeletonTimeout));
            setIsLoading(false);
        };

        loadData();
    }, []);

    const goToBookAppointment = () => {
        navigate('/book-appointment');
    };

    const renderLandingHome = () => {
        if (isLoading) {
            return (
                <div className='bg-cover bg-center h-[900px] font-serif relative'>
                    <div className='absolute inset-0'>
                        <Skeleton className='h-full w-full animate-pulse z-0 opacity-10' />
                    </div>
                    <div className='flex flex-col w-full h-1/3 p-5 place-items-center'>
                        <div className='flex flex-row gap-8 md:gap-12 items-center mb-4 text-gray-200 text-xl drop-shadow-md'>
                            <div className='w-[52px] h-[28px] lg:w-[64px]'>
                                <Skeleton className='h-full animate-pulse z-0' />
                            </div>
                            <div className='w-[52px] h-[28px] lg:w-[64px]'>
                                <Skeleton className='h-full animate-pulse z-0' />
                            </div>
                            <div className='hidden lg:flex items-center mb-3 mx-3'>
                                <div className='h-[200px] w-[200px] mr-1'>
                                    <Skeleton className='h-full animate-pulse z-0' />
                                </div>
                                <div className='w-[100px] h-[40px] mr-1'>
                                    <Skeleton className='h-full animate-pulse z-0' />
                                </div>
                                <div className='w-[64px] h-[40px]'>
                                    <Skeleton className='h-full animate-pulse z-0' />
                                </div>
                            </div>
                            <div className='w-[52px] h-[28px] lg:w-[64px]'>
                                <Skeleton className='h-full animate-pulse z-0' />
                            </div>
                            <div className='w-[52px] h-[28px] lg:w-[64px]'>
                                <Skeleton className='h-full animate-pulse z-0' />
                            </div>
                        </div>
                        <div className='lg:hidden flex items-center mb-4 text-white text-xl'>
                            <div className='h-[125px] w-[125px] mr-1'>
                                <Skeleton className='h-full animate-pulse z-0' />
                            </div>
                            <div className='w-[100px] h-[40px] mr-1'>
                                <Skeleton className='h-full animate-pulse z-0' />
                            </div>
                            <div className='w-[64px] h-[40px]'>
                                <Skeleton className='h-full animate-pulse z-0' />
                            </div>
                        </div>
                    </div>
                    <div className='flex max-w-screen-xl mx-auto h-1/3 py-5 px-10 items-center justify-center sm:justify-start'>
                        <div className='flex flex-col gap-3 text-5xl'>
                            <h1 className='w-[260px] h-[48px]'>
                                <Skeleton className='h-full animate-pulse z-0' />
                            </h1>
                            <h2 className='w-[260px] h-[48px]'>
                                <Skeleton className='h-full animate-pulse z-0' />
                            </h2>
                            <h1 className='w-[260px] h-[48px]'>
                                <Skeleton className='h-full animate-pulse z-0' />
                            </h1>
                        </div>
                    </div>
                    <div className='flex w-full h-1/3 p-5 place-content-center justify-center items-center'>
                        <div className='text-4xl rounded-lg w-[220px] h-[68px]'>
                            <Skeleton className='h-full animate-pulse z-0' />
                        </div>
                    </div>
                </div>
            );
        }
        return (
            <div className='bg-cover bg-center h-[900px] font-serif' style={{ backgroundImage: 'url(/images/DogInAChair-desat.jpg)' }}>
                <div className='flex flex-col w-full h-1/3 p-5 place-items-center'>
                    <div className='flex flex-row gap-8 md:gap-12 items-center mb-4 text-gray-200 text-xl drop-shadow-md'>
                        <a href="#home" className='underline hover:text-hoverRed'>Home</a>
                        <a href="#services" className='underline hover:text-hoverRed'>Services</a>
                        <a href="/" className='hidden lg:flex items-center mb-3 mx-3'>
                            <img src='/images/BarberDogSymbol.png' alt='BarberDog Logo' className='h-[200px] w-[200px]' />
                            <span className='text-white text-6xl'>Barber</span>
                            <span className='text-barberRed text-6xl'>Dog</span>
                        </a>
                        <a href="#gallery" className='underline hover:text-hoverRed'>Gallery</a>
                        <a href="#contact" className='underline hover:text-hoverRed'>Contact</a>
                    </div>
                    <div className='lg:hidden flex items-center mb-4 text-white text-xl'>
                        <a href="/" className='flex items-center mb-3 mx-3'>
                            <img src='/images/BarberDogSymbol.png' alt='BarberDog Logo' className='h-[125px] w-[125px]' />
                            <span className='text-white text-4xl'>Barber</span>
                            <span className='text-barberRed text-4xl'>Dog</span>
                        </a>
                    </div>
                </div>
                <div className='flex max-w-screen-xl mx-auto h-1/3 py-5 px-10 items-center justify-center sm:justify-start'>
                    <div className='flex flex-col gap-3 text-5xl'>
                        <h1 className='text-white font-bold'>
                            HAIR CARE.
                        </h1>
                        <h2 className='text-white font-bold'>
                            FOR DOGS,
                        </h2>
                        <h1 className='text-barberRed font-bold'>
                            BY DOGS.
                        </h1>
                    </div>
                </div>
                <div className='flex w-full h-1/3 p-5 place-content-center justify-center items-center'>
                    <a href="/book-appointment" className='border-barberRed text-white hover:text-hoverRed text-4xl py-3 px-7 rounded-lg border-2'>
                        Book Now
                    </a>
                </div>
            </div>
        );
    };

    return (
        renderLandingHome()
    );
};

export default LandingHome;

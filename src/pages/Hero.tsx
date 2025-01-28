'use client'

import { useRef, useState, useCallback } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Footer from "@/components/footer";

const Image = ({ src, alt, width, height, className }) => (
    <img src={src} alt={alt} width={width} height={height} className={className} />
);

export default function Hero() {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [isDown, setIsDown] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    const handleMouseDown = useCallback((e: React.MouseEvent) => {
        if (!scrollContainerRef.current) return;
        setIsDown(true);
        setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
        setScrollLeft(scrollContainerRef.current.scrollLeft);
    }, []);

    const handleMouseLeave = useCallback(() => {
        setIsDown(false);
    }, []);

    const handleMouseUp = useCallback(() => {
        setIsDown(false);
    }, []);

    const handleMouseMove = useCallback((e: React.MouseEvent) => {
        if (!isDown || !scrollContainerRef.current) return;
        e.preventDefault();
        const x = e.pageX - scrollContainerRef.current.offsetLeft;
        const walk = (x - startX) * 3; //scroll-fast
        scrollContainerRef.current.scrollLeft = scrollLeft - walk;
    }, [isDown, startX, scrollLeft]);

    return (

        <>
            <div className='min-h-screen w-full mt-12 px-4 md:px-8'>
                <h1 className="text-4xl md:text-5xl font-bold text-center">"Celebrate Memories That Last"</h1>
                <h2 className="text-lg md:text-xl mt-4 text-center max-w-2xl mx-auto">En-qr-Ave allows you to create a digital legacy for yourself or your loved ones, preserving photos, stories, and memories in a meaningful way.</h2>
                <div className="flex items-center justify-center">
                    <Button className="w-full md:w-3/4 lg:w-1/2 mt-8">Get yours now</Button>
                </div>

                <div
                    className="h-80 w-full flex gap-8 overflow-x-auto mt-8 cursor-grab active:cursor-grabbing scrollbar-hide"
                    ref={scrollContainerRef}
                    onMouseDown={handleMouseDown}
                    onMouseLeave={handleMouseLeave}
                    onMouseUp={handleMouseUp}
                    onMouseMove={handleMouseMove}
                >
                    {[1, 2, 3, 4, 5].map((i) => (
                        <Card key={i} className="flex-shrink-0 w-80 h-full overflow-hidden">
                            <Image 
                                src={`https://placehold.co/420x420?text=${i}`}
                                alt={`Placeholder ${i}`}
                                width={420}
                                height={420}
                                className="object-cover w-full h-full"
                            />
                        </Card>
                    ))}
                </div>

                <div className="text-center mt-16">
                    <h1 className="text-4xl font-semibold mb-12">Why En-qr-Ave?</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <Card className="flex-shrink-0 w-full h-full overflow-hidden">
                            <Image 
                                src="https://placehold.co/420x420?text=Capture Life's Moments"
                                alt="Preserve Memories"
                                width={420}
                                height={420}
                                className="object-cover w-full h-64"
                            />
                            <div className="p-4">
                                <h2 className="text-2xl font-semibold">Capture Life's Moments</h2>
                                <p className="mt-4">En-qr-Ave helps you preserve every special occasion, big or small. From family milestones to personal achievements, store it all in one easy-to-access space.</p>
                            </div>
                        </Card>

                        <Card className="flex-shrink-0 w-full h-full overflow-hidden">
                            <Image 
                                src="https://placehold.co/420x420?text=Share What Matters"
                                alt="Preserve Memories"
                                width={420}
                                height={420}
                                className="object-cover w-full h-64"
                            />
                            <div className="p-4">
                                <h2 className="text-2xl font-semibold">Share What Matters</h2>
                                <p className="mt-4">En-qr-Ave lets you share memories in a unique way. Give loved ones a digital token that connects them instantly to photos, videos, and stories – anytime, anywhere.</p>
                            </div>
                        </Card>

                        <Card className="flex-shrink-0 w-full h-full overflow-hidden">
                            <Image 
                                src="https://placehold.co/420x420?text=Preserve+Memories"
                                alt="Preserve Memories"
                                width={420}
                                height={420}
                                className="object-cover w-full h-64"
                            />
                            <div className="p-4">
                                <h2 className="text-2xl font-semibold">For Every Chapter of Life</h2>
                                <p className="mt-4">Whether it's a wedding, newborn, business, or beloved pet, En-qr-Ave offers custom token cards designed to hold memories for every stage and celebration in life.</p>
                            </div>
                        </Card>
                    </div>
                </div>

                <div className="mt-16 flex flex-col lg:flex-row w-full min-h-[480px]">
                    <div className="min-h-[240px] lg:min-h-[480px] w-full lg:w-1/2 flex flex-col justify-center">
                        <h1 className="text-4xl md:text-6xl lg:text-8xl font-semibold text-center lg:text-left">Life Time Promo</h1>
                        <span className="flex justify-center lg:justify-start gap-4 mt-4">
                            <Button>
                                Buy Now!
                            </Button>
                            <Button variant="secondary">
                                Check Promo
                            </Button>
                        </span>
                    </div>
                    <div className="min-h-[240px] lg:min-h-[480px] w-full lg:w-1/2 flex items-center justify-center mt-8 lg:mt-0">
                        <img src="https://placehold.co/420x420" className="h-full w-full rounded object-cover" alt="Promo" />
                    </div>
                </div>

            
            </div>

            <Footer />
        </>
    );
}


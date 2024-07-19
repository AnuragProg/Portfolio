'use client';
import animationData from '@/lottie/hero.json';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import Image from 'next/image';

const Lottie = dynamic(()=>import('lottie-react'), {ssr: false});

export default function Hero(){
    return (
        <section className="w-full flex-grow flex flex-col md:flex-row justify-around items-center p-4">
            <Lottie 
                animationData={animationData}
                loop={true}
            />
            <div className="flex flex-col items-center md:items-start justify-center space-y-4">
                <div className="space-y-2 flex flex-col items-center md:items-start">
                    <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Anurag Singh</h1>
                    <p className="max-w-[600px] text-muted-foreground md:text-xl">Software Developer</p>
                </div>
                <p className="max-w-[600px] text-muted-foreground md:text-lg">
                    Hey there, got some time to visit this site, lemme tell you about myself, I am Anurag, with a passion for building stuff and solving problems and it just so happens to be through software.
                </p>
                <Link href="/AnuragResume.pdf" download className="flex justify-center items-center space-x-2 px-6 py-4 bg-blue-500 text-white rounded-xl hover:bg-blue-700 font-bold">
                    <Image 
                        src={'/download.svg'}
                        alt=''
                        height={25}
                        width={25}
                    />
                    <span>Download Resume</span>
                </Link>
            </div>
        </section>
    );
}



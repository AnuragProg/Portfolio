import Image from "next/image";


export default function SocialLinks(){
    const socials = [
        {image: '/github.png', link: 'https://github.com/AnuragProg', name: 'Github'},
        {image: '/linkedin.png', link: 'https://linkedin.com/in/anurag-singh-bisht', name: 'LinkedIn'},
        {image: '/twitter.png', link: 'https://x.com/AnuragS22916715', name: 'Twitter'},
    ];
    const Socials = socials.map((social, idx)=>
        <a href={social.link} target="_blank" key={idx}>
            <Image
                className="rounded-full bg-white p-2 shadow shadow-black w-14 h-14 md:h-16 md:w-16"
                height={70}
                width={70}
                src={social.image}
                alt={social.name}
            />
        </a>
    );
    return (
        <section>
            <div className="hidden md:absolute bottom-5 left-5 md:flex flex-col space-y-2">
                {Socials}
            </div>
            <div className="md:hidden absolute top-20 left-5 flex flex-col space-y-2">
                {Socials}
            </div>
        </section>
    );
}

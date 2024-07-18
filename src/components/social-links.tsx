import Image from "next/image";


export default function SocialLinks(){
    const socials = [
        {image: '/github.png', link: 'https://github.com/AnuragProg', name: 'Github'},
        {image: '/linkedin.png', link: 'https://linkedin.com/in/anurag-singh-bisht', name: 'LinkedIn'},
        {image: '/twitter.png', link: 'https://x.com/AnuragS22916715', name: 'Twitter'},
    ];
    return (
        <section className="absolute bottom-5 left-5 flex flex-col space-y-2">
            {
                socials.map((social, idx)=>
                    <a href={social.link} target="_blank" key={idx}>
                        <Image
                            className="rounded-full"
                            height={70}
                            width={70}
                            src={social.image}
                            alt={social.name}
                        />
                    </a>
                )
            }
        </section>
    );
}

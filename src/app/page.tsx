import NavBar from "@/components/navbar";
import Hero from "@/components/hero";
import Experience from "@/components/experience";
import Projects from "@/components/projects";
import SocialLinks from "@/components/social-links";
//import Contact from "@/components/contact";


export default async function Home() {
   return (
      <main className="space-y-14 pb-5">
        <section className="flex flex-col h-screen w-full">
            <SocialLinks />
            <NavBar />
            <Hero />
        </section>
        <Experience />
        <Projects />
      </main>
   );
}

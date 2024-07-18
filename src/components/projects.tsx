import { Card, CardHeader, CardFooter, CardTitle, CardContent } from '@/components/utils/card';
import { Badge } from '@/components/utils/badge';
import Image from 'next/image';
import clsx from 'clsx';

export default function Projects(){
    const projects = [
        {
            name: 'PrintIt',
            description: 'Printit is a platform built in microservices architecture to streamline the printout process eliminating the need to queue in front of shops.',
            tags: ['Rust', 'Typescript', 'Go', 'Python', 'Microservices', 'Kafka', 'Docker', 'MongoDB', 'PostgreSQL', 'Redis', 'gRPC'],
            image: '/printit-microservices-monorepo.png',
            url: 'https://github.com/AnuragProg/printit-microservices-monorepo',
        },
        {
            name: 'Job Ki Khoj',
            description: 'Printit is a platform built in microservices architecture to streamline the printout process eliminating the need to queue in front of shops.',
            tags: ['Typescript', 'Python', 'Docker', 'MongoDB', 'Redis', 'gRPC'],
            image: '/job-ki-khoj.png',
            url: 'https://github.com/Job-Ki-Khoj-Smart-India-Hackathon-2023/backend-monorepo',
        },
        {
            name: 'SSH Portfolio',
            description: 'A portfolio tui served through ssh.',
            tags: ['Go', 'ELM architecture'],
            image: '/ssh-portfolio.png',
            url: 'https://github.com/AnuragProg/ssh-portfolio',
        },
        {
            name: 'More...',
            description: 'Checkout more projects on Github.',
            tags: [],
            image: '/more-on-github.jpg',
            url: 'https://github.com/AnuragProg',
        }
    ];
    return (
        <section id="projects" className="w-full flex flex-col items-start justify-start px-14">
            <h1 className="text-5xl font-bold mb-3">Projects</h1>
            <span className="text-2xl block font-normal text-gray-400 mb-10"> Check out some of the projects I've worked on and the technologies I've used.</span>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 animate-fade-in-up">
                {
                    projects.map((project, idx)=>
                        <a href={project.url} target='_blank' key={idx}>
                            <Card>
                              <CardHeader>
                                <CardTitle>{project.name}</CardTitle>
                              </CardHeader>
                              <CardContent>
                                <div className="space-y-2">
                                  <p>{project.description}</p>
                                  <div className={clsx(
                                      {
                                          "grid-cols-4": project.tags.length > 4,
                                          "flex": project.tags.length <= 4,
                                      },
                                      "gap-2",
                                  )}>
                                    {project.tags.map((tag, idx)=><Badge className='bg-black text-white m-1'  key={idx}>{tag}</Badge>)}
                                  </div>
                                </div>
                              </CardContent>
                              {
                                project.image != '' && 
                                  <CardFooter>
                                    <Image src={project.image} width="640" height="360" alt={project.name} className="rounded-lg" />
                                  </CardFooter>
                              }
                            </Card>
                        </a>
                    )
                }
          </div>
        </section>
    );
}

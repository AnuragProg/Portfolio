
export default function Experience(){
    const exps = [
        {
            timeline: 'Apr 2024 - Present',
            position: 'Backend Developer Intern',
            company: 'Contineu AI',
            description: 'Building backend for construction project management platform',
        },
        {
            timeline: 'Apr 2023 - Aug 2023',
            position: 'Full Stack Developer Intern',
            company: 'Isostats Energy',
            description: "Built a mark calculation application to calculate mark values for United State's MISO Market",
        },
        {
            timeline: 'Sep 2022 - Feb 2023',
            position: 'Android Developer Intern',
            company: 'QuickGhy',
            description: 'Contributed on development of android apps to connect service provider and customer to facilitate home care services',
        },
    ];
    return (
        <section id="experience" className="w-full h-screen flex flex-col items-start justify-center px-14 pt-8">
            <h1 className="text-5xl font-bold mb-3">Experience</h1>
            <span className="text-2xl block font-normal text-gray-400 mb-10">Here's a summary of my professional experience and the companies I've worked for.</span>
            <ol className="relative border-s border-gray-200">                  
                {
                    exps.map((exp, idx)=>
                         <li className="mb-10 ms-4" key={idx}>
                             <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white"></div>
                              <time className="block text-sm font-normal text-gray-400">
                                {exp.timeline}
                              </time>
                              <h3 className="text-lg font-semibold text-gray-900">{exp.position}</h3>
                              <h4 className="text-md font-medium text-gray-700">{exp.company}</h4>
                              <p className="mt-1 text-base font-normal text-gray-500">{exp.description}</p>
                         </li>
                    )
                }
            </ol>
        </section>
    );
}

import Link from "next/link"



export default function NavBar(){
    return (
        <header className="top-0 left-0 z-50 w-full bg-background shadow-md">
            <div className="container mx-auto flex h-16 items-center justify-end px-4 md:px-6">
                <nav className="w-full flex items-center justify-center md:justify-end space-x-6">
                    <Link
                        href="#experience"
                        className="text-sm font-medium text-muted-foreground hover:underline hover:underline-offset-4"
                    >
                        Experience
                    </Link>
                    <Link
                        href="#projects"
                        className="text-sm font-medium text-muted-foreground hover:underline hover:underline-offset-4"
                    >
                        Projects
                    </Link>
                    <Link
                        href="mailto:anuragcollege7@gmail.com"
                        className="text-sm font-medium text-muted-foreground hover:underline hover:underline-offset-4"
                    >
                        Contact
                    </Link>
                </nav>
            </div>
        </header>
    )
}

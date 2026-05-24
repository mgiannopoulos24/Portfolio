import ad from '@/assets/a&d.png';
import ais from '@/assets/ais.png';
import chronio from '@/assets/chronio.png';
import codingclub from '@/assets/codingclub.png';
import connectify from '@/assets/connectify.png';
import cv from '@/assets/cv.png';
import mystudies from '@/assets/mystudies.png';
import student from '@/assets/student.png';
import technotes from '@/assets/technotes.png';
import cmforge from '@/assets/cmforge.jpg';
import ProjectCard from '@/components/ProjectCard';
import type { Project } from '@/components/ProjectCard';
import Github from '@/components/common/Github';
import LinkedIn from '@/components/common/LinkedIn';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import projectsData from '@/data/projects.json';
import { ExternalLink } from 'lucide-react';

const imageMap: { [key: string]: string } = {
  ad,
  ais,
  cv,
  mystudies,
  student,
  chronio,
  codingclub,
  connectify,
  technotes,
  cmforge,
};

export default function Portfolio() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { label: 'About', id: 'about' },
    { label: 'Volunteering', id: 'volunteering' },
    { label: 'Skills', id: 'skills' },
    { label: 'Projects', id: 'projects' },
  ];

  return (
    <div className="bg-background min-h-screen">
      <nav className="bg-background fixed top-0 z-50 w-full border-b">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
          <button
            onClick={() => scrollToSection('about')}
            className="cursor-pointer text-sm font-medium"
          >
            Marios Giannopoulos
          </button>
          <div className="flex gap-4 md:gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-muted-foreground hover:text-foreground cursor-pointer text-xs transition-colors md:text-sm"
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      <section id="about" className="mx-auto max-w-4xl px-6 pt-28 pb-24">
        <div className="max-w-xl">
          <h1 className="mb-1 text-2xl font-medium tracking-tight">Marios Giannopoulos</h1>
          <p className="text-muted-foreground mb-4 text-sm">CS Student @ University of Athens</p>
          <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
            CS Student at the University of Athens, passionate about web development, cybersecurity,
            and AI.
          </p>
          <div className="flex space-x-4">
            <a
              href="https://github.com/mgiannopoulos24"
              className="text-muted-foreground hover:text-foreground transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/mgiannopoulos24/"
              className="text-muted-foreground hover:text-foreground transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedIn className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-muted-foreground mb-4 text-xs font-medium tracking-widest uppercase">
            Experience
          </h3>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-sm font-medium">Web Developer</CardTitle>
                <CardDescription className="text-xs">
                  digitalnest &middot; Jul 2025 &ndash; Present
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-xs">
                  Technical support on WordPress sites, plugin development, collaboration with
                  marketing and design teams, and custom design site development.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-sm font-medium">Computer Science Student</CardTitle>
                <CardDescription className="text-xs">
                  University of Athens, Dept. of Informatics and Telecommunications &middot; 2020
                  &ndash; Present
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-xs">
                  Studying Computer Science with focus on software engineering, cybersecurity, and
                  web technologies.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-12" id="volunteering">
          <h3 className="text-muted-foreground mb-4 text-xs font-medium tracking-widest uppercase">
            Volunteering
          </h3>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-sm font-medium">Translator</CardTitle>
                    <CardDescription className="text-xs">
                      PyGreece &middot; 2024 &ndash; Present
                    </CardDescription>
                  </div>
                  <a
                    href="https://github.com/pygreece/python-docs-gr"
                    className="text-muted-foreground hover:text-foreground"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-xs">
                  Translating Python documentation and resources into Greek to make Python more
                  accessible to the Greek-speaking community.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-sm font-medium">Frontend Web Developer</CardTitle>
                <CardDescription className="text-xs">
                  University of Athens &middot; 2024 &ndash; Present
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-xs">
                  Contributing to web projects at the University of Athens, focusing on frontend
                  development with React and TypeScript.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-sm font-medium">Open Source Contributor</CardTitle>
                    <CardDescription className="text-xs">
                      Various GitHub Projects &middot; 2023 &ndash; Present
                    </CardDescription>
                  </div>
                  <a
                    href="https://github.com/mgiannopoulos24?tab=repositories&q=&type=fork&language=&sort="
                    className="text-muted-foreground hover:text-foreground"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-xs">
                  Active contributor to open source projects, particularly in frontend development
                  and developer tools.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-sm font-medium">Cyber Security Instructor</CardTitle>
                    <CardDescription className="text-xs">
                      University of Athens &middot; 2024 &ndash; Present
                    </CardDescription>
                  </div>
                  <a
                    href="https://github.com/mgiannopoulos24?tab=repositories&q=&type=fork&language=&sort="
                    className="text-muted-foreground hover:text-foreground"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-xs">
                  Helping create and organize CTF challenges. Also helped in the development of an
                  Attack & Defense visualization platform.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="skills" className="mx-auto max-w-4xl px-6 pb-24">
        <h3 className="text-muted-foreground mb-6 text-xs font-medium tracking-widest uppercase">
          Skills
        </h3>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-sm font-medium">Frontend</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-1.5">
                {[
                  'React',
                  'TypeScript',
                  'JavaScript',
                  'HTML/CSS',
                  'Tailwind CSS',
                  'Vite',
                  'Node.js',
                  'WordPress',
                  'PHP',
                ].map((skill) => (
                  <Badge key={skill} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-sm font-medium">Backend &amp; Tools</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-1.5">
                {[
                  'Python',
                  'Git',
                  'REST APIs',
                  'SQLite3',
                  'PostgreSQL',
                  'Firebase',
                  'Docker',
                  'Postman',
                ].map((skill) => (
                  <Badge key={skill} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-sm font-medium">Cybersecurity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-1.5">
                {[
                  'Network Security',
                  'Penetration Testing',
                  'Wireshark',
                  'Kali Linux',
                  'OWASP',
                ].map((skill) => (
                  <Badge key={skill} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-sm font-medium">AI &amp; LLMs</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-1.5">
                {[
                  'Prompt Engineering',
                  'Automation',
                  'Google Gemini API',
                  'Use of all major AI models',
                ].map((skill) => (
                  <Badge key={skill} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-4xl px-6 pb-24">
        <h3 className="text-muted-foreground mb-6 text-xs font-medium tracking-widest uppercase">
          Projects
        </h3>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projectsData
            .sort((a, b) => {
              const hasWip = (status: string[] | undefined) => status?.includes('wip') ?? false;
              const aHasWip = hasWip(a.status);
              const bHasWip = hasWip(b.status);
              if (aHasWip && !bHasWip) return 1;
              if (!aHasWip && bHasWip) return -1;
              return 0;
            })
            .map((projectInfo) => {
              const project = { ...projectInfo, image: imageMap[projectInfo.imageKey] } as Project;
              return <ProjectCard key={project.name} project={project} />;
            })}
        </div>
      </section>

      <footer className="border-t px-6 py-8">
        <p className="text-muted-foreground text-center text-xs">
          &copy; {new Date().getFullYear()} Marios Giannopoulos
        </p>
      </footer>
    </div>
  );
}

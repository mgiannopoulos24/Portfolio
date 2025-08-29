import ad from '@/assets/a&d.png';
import ais from '@/assets/ais.png';
import cv from '@/assets/cv.png';
import v3 from '@/assets/mystudies.png';
import student from '@/assets/student.png';
import chronio from '@/assets/chronio.png';
import codingclub from '@/assets/codingclub.png';
import connectify from '@/assets/connectify.png';
import ProjectCard from '@/components/ProjectCard';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import projectsData from '@/data/projects.json';
import { Code, Database, ExternalLink, Github, Globe, Linkedin, Mail, Palette } from 'lucide-react';

const imageMap: { [key: string]: string } = {
  ad,
  ais,
  cv,
  v3,
  student,
  chronio,
  codingclub,
  connectify
};

export default function Portfolio() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 z-50 w-full border-b bg-background/80 backdrop-blur-sm">
        <div className="w-full px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-bold">Marios Giannopoulos</h1>
            <div className="hidden space-x-6 md:flex">
              <Button
                onClick={() => scrollToSection('about')}
                className="cursor-pointer text-sm transition-colors hover:text-white hover:border-transparent"
              >
                About
              </Button>
              <Button
                onClick={() => scrollToSection('volunteering')}
                className="cursor-pointer text-sm transition-colors hover:text-white hover:border-transparent"
              >
                Volunteering
              </Button>
              <Button
                onClick={() => scrollToSection('skills')}
                className="cursor-pointer text-sm transition-colors hover:text-white hover:border-transparent"
              >
                Skills
              </Button>
              <Button
                onClick={() => scrollToSection('projects')}
                className="cursor-pointer text-sm transition-colors hover:text-white hover:border-transparent"
              >
                Projects
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero/About Section */}
      <section id="about" className="px-6 pb-16 pt-20">
        <div className="w-full">
          <div className="grid items-center gap-8 md:grid-cols-3">
            <div className="space-y-6 md:col-span-2">
              <div>
                <h2 className="mb-4 text-4xl font-bold md:text-5xl">
                  Hi, I'm <span className="text-primary">Marios</span>
                </h2>
                <p className="mb-6 text-xl text-muted-foreground">Computer Science Student</p>
                <p className="leading-relaxed text-muted-foreground">
                  CS Student at the University of Athens, passionate about web development,
                  cybersecurity, and AI.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                {/* <Button onClick={() => scrollToSection('contact')}>
                  <Mail className="mr-2 h-4 w-4" />
                  Get In Touch
                </Button> */}
              </div>

              <div className="flex space-x-4">
                <a
                  href="https://github.com/mgiannopoulos24"
                  className="text-muted-foreground transition-colors hover:text-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/marios-giannopoulos-0b9994294/"
                  className="text-muted-foreground transition-colors hover:text-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Experience Timeline */}
          <div className="mt-16">
            <h3 className="mb-8 text-2xl font-bold">Experience & Education</h3>
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle>Computer Science Student</CardTitle>
                      <CardDescription>
                        University of Athens, Dept. of Informatics and Telecommunications • 2020 -
                        Present
                      </CardDescription>
                    </div>
                    <Badge variant="secondary">Current</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Studying Computer Science with focus on software engineering, cybersecurity, and
                    web technologies. Relevant coursework includes Data Structures, Algorithms, Web
                    Development, Computer Networks, and Cyber Security.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Volunteering Section */}
          <div className="mt-16" id="volunteering">
            <h3 className="mb-8 text-2xl font-bold">Volunteering & Community</h3>
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle>Translator</CardTitle>
                      <CardDescription>PyGreece • 2024 - Present</CardDescription>
                    </div>
                    <Badge variant="outline">Ongoing</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Volunteering as a translator for PyGreece, helping to translate Python
                    documentation and resources into Greek. Aiming to make Python more accessible to
                    the Greek-speaking community.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle>Frontend Web Developer</CardTitle>
                      <CardDescription>University of Athens • 2024 - Present</CardDescription>
                    </div>
                    <Badge variant="outline">Ongoing</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Contributing to various web projects at the University of Athens, focusing on
                    frontend development using React and TypeScript.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle>Open Source Contributor</CardTitle>
                      <CardDescription>Various GitHub Projects • 2023 - Present</CardDescription>
                    </div>
                    <div className="flex space-x-2">
                      <Badge variant="outline">Ongoing</Badge>
                      <a
                        href="https://github.com/mgiannopoulos24?tab=repositories&q=&type=fork&language=&sort="
                        className="text-muted-foreground hover:text-primary"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Active contributor to open source projects, particularly in frontend development
                    and developer tools. Contributed bug fixes, documentation improvements, and new
                    features to help the community.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Separator />

      {/* Skills Section */}
      <section id="skills" className="px-6 py-16">
        <div className="w-full">
          <h2 className="mb-12 text-center text-3xl font-bold">Skills & Technologies</h2>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card className="text-center">
              <CardHeader>
                <Code className="mx-auto mb-2 h-8 w-8 text-primary" />
                <CardTitle className="text-lg">Frontend</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap justify-center gap-2">
                  <Badge variant="secondary">React</Badge>
                  <Badge variant="secondary">TypeScript</Badge>
                  <Badge variant="secondary">JavaScript</Badge>
                  <Badge variant="secondary">HTML/CSS</Badge>
                  <Badge variant="secondary">Tailwind CSS</Badge>
                  <Badge variant="secondary">Vite</Badge>
                  <Badge variant="secondary">Node.js</Badge>
                  <Badge variant="secondary">WordPress</Badge>
                  <Badge variant="secondary">PHP</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Database className="mx-auto mb-2 h-8 w-8 text-primary" />
                <CardTitle className="text-lg">Backend & Tools</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap justify-center gap-2">
                  <Badge variant="secondary">Python</Badge>
                  <Badge variant="secondary">Git</Badge>
                  <Badge variant="secondary">REST APIs</Badge>
                  <Badge variant="secondary">SQLite3</Badge>
                  <Badge variant="secondary">PostgreSQL</Badge>
                  <Badge variant="secondary">Firebase</Badge>
                  <Badge variant="secondary">Docker</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Globe className="mx-auto mb-2 h-8 w-8 text-primary" />
                <CardTitle className="text-lg">Cybersecurity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap justify-center gap-2">
                  <Badge variant="secondary">Network Security</Badge>
                  <Badge variant="secondary">Penetration Testing</Badge>
                  <Badge variant="secondary">Wireshark</Badge>
                  <Badge variant="secondary">Kali Linux</Badge>
                  <Badge variant="secondary">OWASP</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Palette className="mx-auto mb-2 h-8 w-8 text-primary" />
                <CardTitle className="text-lg">AI & LLMs</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap justify-center gap-2">
                  <Badge variant="secondary">Prompt Engineering</Badge>
                  <Badge variant="secondary">Automation</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Separator />

      {/* Projects Section */}
      <section id="projects" className="px-6 py-16">
        <div className="w-full">
          <h2 className="mb-12 text-center text-3xl font-bold">Featured Projects</h2>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projectsData
              .sort((a, b) => {
                // Helper function to check if a project has WIP status
                const hasWip = (status: string | string[] | undefined) => {
                  if (!status) return false;
                  return Array.isArray(status) ? status.includes('wip') : status === 'wip';
                };

                const aHasWip = hasWip(a.status);
                const bHasWip = hasWip(b.status);

                // Completed projects (non-WIP) come first
                if (aHasWip && !bHasWip) return 1;
                if (!aHasWip && bHasWip) return -1;
                return 0; // Keep original order for projects with same status
              })
              .map((projectInfo) => {
                const project = {
                  ...projectInfo,
                  status: projectInfo.status,
                  image: imageMap[projectInfo.imageKey],
                };
                return <ProjectCard key={project.name} project={project} />;
              })}
          </div>
        </div>
      </section>

      <Separator />

      {/* Footer */}
      <footer className="border-t px-6 py-8">
        <div className="w-full text-center">
          <p className="text-muted-foreground">
            © {new Date().getFullYear()} Marios Giannopoulos. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

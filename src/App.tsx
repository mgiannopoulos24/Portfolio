import ad from '@/assets/a&d.png';
import ais from '@/assets/ais.png';
import cv from '@/assets/cv.png';
import v3 from '@/assets/mystudies.png';
import student from '@/assets/student.png';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Textarea } from '@/components/ui/textarea';
import {
  Code,
  Database,
  Download,
  ExternalLink,
  Github,
  Globe,
  Linkedin,
  Mail,
  MapPin,
  Palette,
  Phone,
} from 'lucide-react';

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
                className="cursor-pointer text-sm transition-colors hover:text-white"
              >
                About
              </Button>
              <Button
                onClick={() => scrollToSection('volunteering')}
                className="cursor-pointer text-sm transition-colors hover:text-white"
              >
                Volunteering
              </Button>
              <Button
                onClick={() => scrollToSection('skills')}
                className="cursor-pointer text-sm transition-colors hover:text-white"
              >
                Skills
              </Button>
              <Button
                onClick={() => scrollToSection('projects')}
                className="cursor-pointer text-sm transition-colors hover:text-white"
              >
                Projects
              </Button>
              {/* <button 
                onClick={() => scrollToSection('contact')}
                className="text-sm hover:text-primary transition-colors cursor-pointer"
              >
                Contact
              </button> */}
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
                <Button onClick={() => scrollToSection('contact')}>
                  <Mail className="mr-2 h-4 w-4" />
                  Get In Touch
                </Button>
                <Button variant="outline" asChild>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <Download className="mr-2 h-4 w-4" />
                    Download CV
                  </a>
                </Button>
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
                {/* <a
                  href="mailto:john@example.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail className="w-5 h-5" />
                </a> */}
              </div>
            </div>

            {/* <div className="flex justify-center">
              <div className="relative">
                <img
                  src="/placeholder.svg?height=300&width=300"
                  alt="Profile"
                  width={300}
                  height={300}
                  className="rounded-full border-4 border-primary/20"
                />
              </div>
            </div> */}
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
                    <Badge variant="outline">Ongoing</Badge>
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
                  <Badge variant="secondary">Node.js</Badge>
                  <Badge variant="secondary">Python</Badge>
                  <Badge variant="secondary">Git</Badge>
                  <Badge variant="secondary">REST APIs</Badge>
                  <Badge variant="secondary">SQLite3</Badge>
                  <Badge variant="secondary">PostgreSQL</Badge>
                  <Badge variant="secondary">Firebase</Badge>
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

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="group transition-shadow hover:shadow-lg">
              <div className="relative overflow-hidden">
                <img
                  src={cv}
                  alt="Personal Portfolio Website"
                  width={400}
                  height={240}
                  className="h-56 w-full object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  Personal Portfolio Website
                  <div className="flex space-x-2">
                    <a
                      href="https://github.com/mgiannopoulos24/Portfolio"
                      className="text-muted-foreground hover:text-primary"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="h-4 w-4" />
                    </a>
                    {/* <a
                      href="https://example.com"
                      className="text-muted-foreground hover:text-primary"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a> */}
                  </div>
                </CardTitle>
                <CardDescription>
                  Responsive portfolio website showcasing my projects and skills
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-1">
                  <Badge variant="outline" className="text-xs">
                    React
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Vite
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Tailwind CSS
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    TypeScript
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="group transition-shadow hover:shadow-lg">
              <div className="relative overflow-hidden">
                <img
                  src={ad}
                  alt="AI Chat Assistant"
                  width={400}
                  height={240}
                  className="h-48 w-full object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  Attack-Defense CTF Visualization
                  <div className="flex space-x-2">
                    <a
                      href="https://github.com/hackintro/attack-defense-ui"
                      className="text-muted-foreground hover:text-primary"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="h-4 w-4" />
                    </a>
                  </div>
                </CardTitle>
                <CardDescription>
                  Interactive visualization tool for an Attack and Defend competition, built with
                  React, Google Charts and D3.js
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-1">
                  <Badge variant="outline" className="text-xs">
                    React
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    D3.js
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Google Charts
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Vite
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    TypeScript
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="group transition-shadow hover:shadow-lg">
              <div className="relative overflow-hidden">
                <img
                  src={v3}
                  alt="Security Vulnerability Scanner"
                  width={400}
                  height={240}
                  className="h-48 w-full object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  My Studies
                  <div className="flex space-x-2">
                    {/* <a href="https://github.com" className="text-muted-foreground hover:text-primary" target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4" />
                    </a> */}
                    <a
                      href="https://my-studies-nkua.netlify.app/"
                      className="text-muted-foreground hover:text-primary"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                </CardTitle>
                <CardDescription>
                  Role-based web application for the management of student services in a university
                  environment
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-1">
                  <Badge variant="outline" className="text-xs">
                    React
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Vite
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Tailwind CSS
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    TypeScript
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Firebase
                  </Badge>
                </div>
              </CardContent>
            </Card>

            {/* WIP Projects */}
            <Card className="group transition-shadow hover:shadow-lg">
              <div className="relative overflow-hidden">
                <img
                  src={student}
                  alt="WIP Project"
                  width={400}
                  height={240}
                  className="h-48 w-full object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  My Studies App (React Native)
                  <div className="flex space-x-2">
                    <Badge variant="destructive" className="text-xs">
                      WIP
                    </Badge>
                  </div>
                </CardTitle>
                <CardDescription>
                  A mobile app based on the My Studies web application, providing a seamless
                  experience for students to manage their academic life on the go.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-1">
                  <Badge variant="outline" className="text-xs">
                    React Native
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    TypeScript
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Firebase
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Expo
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Tailwind CSS
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="group transition-shadow hover:shadow-lg">
              <div className="relative overflow-hidden">
                <img
                  src={student}
                  alt="WIP Project"
                  width={400}
                  height={240}
                  className="h-48 w-full object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  My Studies App (Kotlin)
                  <div className="flex space-x-2">
                    <Badge variant="destructive" className="text-xs">
                      WIP
                    </Badge>
                  </div>
                </CardTitle>
                <CardDescription>
                  Another version of the previously mentioned mobile app.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-1">
                  <Badge variant="outline" className="text-xs">
                    Kotlin
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Android
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Firebase
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Jetpack Compose
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Material Design
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="group transition-shadow hover:shadow-lg">
              <div className="relative overflow-hidden">
                <img
                  src={student}
                  alt="WIP Project"
                  width={400}
                  height={240}
                  className="h-48 w-full object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  New Cool Project
                  <div className="flex space-x-2">
                    <Badge variant="destructive" className="text-xs">
                      WIP
                    </Badge>
                  </div>
                </CardTitle>
                <CardDescription>
                  Upcoming project about reviewing and rating courses and professors at the
                  University of Athens (and in the future more universities).
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-1">
                  <Badge variant="outline" className="text-xs">
                    React
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    TypeScript
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Tailwind CSS
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    SQLite
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Rust
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Docker
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="group transition-shadow hover:shadow-lg">
              <div className="relative overflow-hidden">
                <img
                  src={ais}
                  alt="WIP Project"
                  width={400}
                  height={240}
                  className="h-48 w-full object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  New Cool Project
                  <div className="flex space-x-2">
                    <Badge variant="destructive" className="text-xs">
                      WIP
                    </Badge>
                  </div>
                </CardTitle>
                <CardDescription>
                  Upcoming project for real time monitoring of ships and their routes, using AIS
                  data.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-1">
                  <Badge variant="outline" className="text-xs">
                    React
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    TypeScript
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Tailwind CSS
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    PostgreSQL
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Java
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Spring Boot
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Docker
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Apache Kafka
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="group transition-shadow hover:shadow-lg">
              <div className="relative overflow-hidden">
                <img
                  src={student}
                  alt="WIP Project"
                  width={400}
                  height={240}
                  className="h-48 w-full object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  New Cool Project
                  <div className="flex space-x-2">
                    <Badge variant="destructive" className="text-xs">
                      WIP
                    </Badge>
                  </div>
                </CardTitle>
                <CardDescription>
                  Upcoming project similar to LinkedIn, focusing on professional networking and
                  connections.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-1">
                  <Badge variant="outline" className="text-xs">
                    React
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    TypeScript
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Tailwind CSS
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    PostgreSQL
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Java
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Spring Boot
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Docker
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Separator />

      {/* Contact Section */}
      {/* <section id="contact" className="py-16 px-6">
        <div className="w-full max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Get In Touch</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-4">Let's work together</h3>
                <p className="text-muted-foreground mb-6">
                  I'm always interested in new opportunities, interesting projects, and connecting with fellow
                  developers. Whether you want to collaborate on a project, discuss tech, or just say hi, feel free to
                  reach out!
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-primary" />
                  <span>[your-email]@di.uoa.gr</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-primary" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span>San Francisco, CA</span>
                </div>
              </div>

              <div className="flex space-x-4 pt-4">
                <a href="https://github.com" className="text-muted-foreground hover:text-primary transition-colors" target="_blank" rel="noopener noreferrer">
                  <Github className="w-6 h-6" />
                </a>
                <a
                  href="https://linkedin.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a
                  href="mailto:john@example.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Send a Message</CardTitle>
                <CardDescription>Fill out the form below and I'll get back to you as soon as possible.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Doe" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="john@example.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" placeholder="Project Inquiry" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" placeholder="Tell me about your project..." className="min-h-[120px]" />
                </div>
                <Button className="w-full">
                  <Mail className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section> */}

      {/* Footer */}
      <footer className="border-t px-6 py-8">
        <div className="w-full text-center">
          <p className="text-muted-foreground">
            &copy; {new Date().getFullYear()} Marios Giannopoulos. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Download,
  Code,
  Palette,
  Database,
  Globe,
} from "lucide-react"

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
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-sm border-b z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold">John Doe</h1>
            <div className="hidden md:flex space-x-6">
              <button 
                onClick={() => scrollToSection('about')}
                className="text-sm hover:text-primary transition-colors cursor-pointer"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('volunteering')}
                className="text-sm hover:text-primary transition-colors cursor-pointer"
              >
                Volunteering
              </button>
              <button 
                onClick={() => scrollToSection('skills')}
                className="text-sm hover:text-primary transition-colors cursor-pointer"
              >
                Skills
              </button>
              <button 
                onClick={() => scrollToSection('projects')}
                className="text-sm hover:text-primary transition-colors cursor-pointer"
              >
                Projects
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-sm hover:text-primary transition-colors cursor-pointer"
              >
                Contact
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero/About Section */}
      <section id="about" className="pt-20 pb-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-2 space-y-6">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                  Hi, I'm <span className="text-primary">[Your Name]</span>
                </h2>
                <p className="text-xl text-muted-foreground mb-6">Computer Science Student</p>
                <p className="text-muted-foreground leading-relaxed">
                  Computer Science student at the Department of Informatics and Telecommunications, University of
                  Athens. Passionate about Front-end Development and Cybersecurity, I enjoy building intuitive user
                  interfaces while ensuring systems are secure and resilient. I frequently work with Large Language
                  Models (LLMs), leveraging their capabilities to solve problems, automate tasks, and explore innovative
                  solutions in tech.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <Button onClick={() => scrollToSection('contact')}>
                  <Mail className="w-4 h-4 mr-2" />
                  Get In Touch
                </Button>
                <Button variant="outline" asChild>
                  <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                    <Download className="w-4 h-4 mr-2" />
                    Download CV
                  </a>
                </Button>
              </div>

              <div className="flex space-x-4">
                <a href="https://github.com" className="text-muted-foreground hover:text-primary transition-colors" target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://linkedin.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="mailto:john@example.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="relative">
                <img
                  src="/placeholder.svg?height=300&width=300"
                  alt="Profile"
                  width={300}
                  height={300}
                  className="rounded-full border-4 border-primary/20"
                />
              </div>
            </div>
          </div>

          {/* Experience Timeline */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold mb-8">Experience & Education</h3>
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>Computer Science Student</CardTitle>
                      <CardDescription>
                        University of Athens, Dept. of Informatics and Telecommunications • 2021 - Present
                      </CardDescription>
                    </div>
                    <Badge variant="secondary">Current</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Studying Computer Science with focus on software engineering, cybersecurity, and web technologies.
                    Relevant coursework includes Data Structures, Algorithms, Web Development, and Network Security.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Frontend Development Intern</CardTitle>
                  <CardDescription>Local Tech Company • Summer 2024</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Developed responsive web interfaces using React and TypeScript. Collaborated with senior developers
                    to implement user-friendly features and improve application performance.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Freelance Web Developer</CardTitle>
                  <CardDescription>Various Clients • 2023 - Present</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Created websites for small businesses and personal projects. Focused on modern frontend technologies
                    and responsive design principles.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Volunteering Section */}
          <div className="mt-16" id="volunteering">
            <h3 className="text-2xl font-bold mb-8">Volunteering & Community</h3>
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>Open Source Contributor</CardTitle>
                      <CardDescription>Various GitHub Projects • 2023 - Present</CardDescription>
                    </div>
                    <Badge variant="outline">Ongoing</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Active contributor to open source projects, particularly in frontend development and developer
                    tools. Contributed bug fixes, documentation improvements, and new features to help the community.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>University Study Group Leader</CardTitle>
                  <CardDescription>University of Athens • 2023 - Present</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Organize and lead study sessions for fellow CS students in web development and cybersecurity topics.
                    Help peers understand complex concepts and work through challenging assignments.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Tech Community Member</CardTitle>
                  <CardDescription>Local Developer Meetups • 2022 - Present</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Regular attendee and occasional speaker at local tech meetups. Enjoy meeting new people, exploring
                    new codebases, and learning from experienced developers in the community.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Separator />

      {/* Skills Section */}
      <section id="skills" className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">Skills & Technologies</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardHeader>
                <Code className="w-8 h-8 mx-auto text-primary mb-2" />
                <CardTitle className="text-lg">Frontend</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 justify-center">
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
                <Database className="w-8 h-8 mx-auto text-primary mb-2" />
                <CardTitle className="text-lg">Backend & Tools</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 justify-center">
                  <Badge variant="secondary">Node.js</Badge>
                  <Badge variant="secondary">Python</Badge>
                  <Badge variant="secondary">Git</Badge>
                  <Badge variant="secondary">REST APIs</Badge>
                  <Badge variant="secondary">Firebase</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Globe className="w-8 h-8 mx-auto text-primary mb-2" />
                <CardTitle className="text-lg">Cybersecurity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 justify-center">
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
                <Palette className="w-8 h-8 mx-auto text-primary mb-2" />
                <CardTitle className="text-lg">AI & LLMs</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 justify-center">
                  <Badge variant="secondary">OpenAI API</Badge>
                  <Badge variant="secondary">LangChain</Badge>
                  <Badge variant="secondary">Prompt Engineering</Badge>
                  <Badge variant="secondary">AI Integration</Badge>
                  <Badge variant="secondary">Automation</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Separator />

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="group hover:shadow-lg transition-shadow">
              <div className="relative overflow-hidden">
                <img
                  src="/placeholder.svg?height=200&width=400"
                  alt="Personal Portfolio Website"
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
                />
              </div>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  Personal Portfolio Website
                  <div className="flex space-x-2">
                    <a href="https://github.com" className="text-muted-foreground hover:text-primary" target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4" />
                    </a>
                    <a href="https://example.com" className="text-muted-foreground hover:text-primary" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </CardTitle>
                <CardDescription>Responsive portfolio website showcasing my projects and skills</CardDescription>
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

            <Card className="group hover:shadow-lg transition-shadow">
              <div className="relative overflow-hidden">
                <img
                  src="/placeholder.svg?height=200&width=400"
                  alt="AI Chat Assistant"
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
                />
              </div>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  AI Chat Assistant
                  <div className="flex space-x-2">
                    <a href="https://github.com" className="text-muted-foreground hover:text-primary" target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4" />
                    </a>
                    <a href="https://example.com" className="text-muted-foreground hover:text-primary" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </CardTitle>
                <CardDescription>Web application integrating OpenAI API for intelligent conversations</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-1">
                  <Badge variant="outline" className="text-xs">
                    React
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    OpenAI API
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Node.js
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Express
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow">
              <div className="relative overflow-hidden">
                <img
                  src="/placeholder.svg?height=200&width=400"
                  alt="Security Vulnerability Scanner"
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
                />
              </div>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  Security Vulnerability Scanner
                  <div className="flex space-x-2">
                    <a href="https://github.com" className="text-muted-foreground hover:text-primary" target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4" />
                    </a>
                  </div>
                </CardTitle>
                <CardDescription>Python tool for automated web application security testing</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-1">
                  <Badge variant="outline" className="text-xs">
                    Python
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Security Testing
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    OWASP
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Automation
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Separator />

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
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
      </section>

      {/* Footer */}
      <footer className="border-t py-8 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <p className="text-muted-foreground">© {new Date().getFullYear()} John Doe. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

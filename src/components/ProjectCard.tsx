import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  image: string;
  title: string;
  description: string;
  tags: string[];
  status?: string;
  githubUrl?: string;
  liveUrl?: string;
}

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="h-full"
    >
      <Card className="group flex h-full flex-col transition-shadow hover:shadow-lg">
        <div className="relative overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="h-56 w-full object-cover transition-transform group-hover:scale-105"
          />
        </div>
        <CardHeader>
          <CardTitle className="flex items-start justify-between">
            <span className="flex-1">{project.title}</span>
            <div className="ml-2 flex flex-shrink-0 items-center space-x-2">
              {project.status === 'wip' && (
                <Badge variant="destructive" className="text-xs">
                  WIP
                </Badge>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  className="text-muted-foreground transition-colors hover:text-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-4 w-4" />
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  className="text-muted-foreground transition-colors hover:text-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="h-4 w-4" />
                </a>
              )}
            </div>
          </CardTitle>
          <CardDescription>{project.description}</CardDescription>
        </CardHeader>
        <CardContent className="mt-auto flex flex-col">
          <div className="flex flex-wrap gap-1">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="outline" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

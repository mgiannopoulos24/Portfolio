import Github from './common/Github';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, ExternalLink, Hammer, RefreshCw, Users } from 'lucide-react';

export interface Project {
  name: string;
  image: string;
  title: string;
  description: string;
  tags: string[];
  status?: string[];
  githubUrl?: string;
  liveUrl?: string;
}

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const statuses = project.status ?? [];

  return (
    <Card className="flex h-full flex-col">
      <div className="relative overflow-hidden">
        <img src={project.image} alt={project.title} className="h-48 w-full object-cover" />
        <div className="absolute top-2 left-2 flex flex-col items-start gap-1">
          {statuses.map((status) => {
            if (status === 'wip') {
              return (
                <Badge
                  key={status}
                  variant="default"
                  className="flex items-center gap-1 text-[12px]"
                >
                  <Hammer className="h-3 w-3" />
                  WIP
                </Badge>
              );
            }
            if (status === 'collaborative') {
              return (
                <Badge
                  key={status}
                  variant="default"
                  className="flex items-center gap-1 text-[12px]"
                >
                  <Users className="h-3 w-3" />
                  Collaborative
                </Badge>
              );
            }
            if (status === 'completed') {
              return (
                <Badge
                  key={status}
                  variant="default"
                  className="flex items-center gap-1 text-[12px]"
                >
                  <Check className="h-3 w-3" />
                  Completed
                </Badge>
              );
            }
            if (status === 'repeatable') {
              return (
                <Badge
                  key={status}
                  variant="default"
                  className="flex items-center gap-1 text-[12px]"
                >
                  <RefreshCw className="h-3 w-3" />
                  Repeatable
                </Badge>
              );
            }
            return null;
          })}
        </div>
      </div>
      <CardHeader>
        <div className="flex items-start justify-between gap-2">
          <CardTitle className="text-sm font-medium">{project.title}</CardTitle>
          <div className="flex shrink-0 items-center gap-2">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                className="text-muted-foreground hover:text-foreground transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-3.5 w-3.5" />
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                className="text-muted-foreground hover:text-foreground transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            )}
          </div>
        </div>
        <CardDescription className="text-sm">{project.description}</CardDescription>
      </CardHeader>
      <CardContent className="mt-auto">
        <div className="flex flex-wrap gap-1">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="outline" className="text-[12px]">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

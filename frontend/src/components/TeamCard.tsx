import { Github, Linkedin, Download, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import KaggleIcon from "@/components/icons/KaggleIcon";


interface TeamCardProps {
  member: {
    id: number;
    name: string;
    role: string;
    image: string;
    bio: string;
    skills: string[];
    github: string;
    linkedin: string;
    kaggle: string;
    cvLink: string;
  };
}

const TeamCard = ({ member }: TeamCardProps) => {
  return (
    <div className="group bg-card rounded-xl overflow-hidden border border-border card-hover">
      {/* Image */}
      <div className="relative h-80 overflow-hidden">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-60"></div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <div>
          <h3 className="text-xl font-semibold">{member.name}</h3>
          <p className="text-primary text-sm font-medium">{member.role}</p>
        </div>

        <p className="text-muted-foreground text-sm">{member.bio}</p>

        {/* Skills */}
        <div className="space-y-2">
          <p className="text-sm font-semibold">Skills</p>
          <div className="flex flex-wrap gap-2">
            {member.skills.map((skill, index) => (
              <Badge key={index} variant="secondary" className="text-xs">
                {skill}
              </Badge>
            ))}
          </div>
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-between pt-4 border-t border-border">
          <div className="flex space-x-2">
            <a
              href={member.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-colors flex items-center justify-center"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-colors flex items-center justify-center"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href={member.kaggle}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-colors flex items-center justify-center"
            >
              <KaggleIcon className="h-4 w-4" />
            </a>
          </div>

          <a href={member.cvLink} download>
            <Button size="sm" variant="outline">
              <Download className="mr-2 h-4 w-4" />
              CV
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;

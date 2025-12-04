import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Github, ExternalLink, Users } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/data/projects";

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find(p => p.id === Number(id));

  if (!project) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="container mx-auto px-4 pt-32 pb-20 text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Link to="/projects">
            <Button>Back to Projects</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-5xl">
          {/* Back Button */}
          <Link to="/projects" className="inline-flex items-center text-muted-foreground hover:text-primary mb-8 transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Projects
          </Link>

          {/* Header */}
          <div className="space-y-6 mb-12 animate-fade-in">
            <div className="flex flex-wrap items-center gap-3">
              <Badge className="bg-primary text-primary-foreground">
                {project.category}
              </Badge>
              {project.featured && (
                <Badge variant="secondary">Featured</Badge>
              )}
            </div>

            <h1 className="text-4xl md:text-5xl font-bold">{project.title}</h1>
            
            <p className="text-xl text-muted-foreground">
              {project.shortDescription}
            </p>

            {/* Technologies */}
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <Badge key={index} variant="outline">
                  {tech}
                </Badge>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
              {project.githubLink && (
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                  <Button className="gradient-primary text-white">
                    <Github className="mr-2 h-5 w-5" />
                    View on GitHub
                  </Button>
                </a>
              )}
              {project.demoVideo && (
                <a href={project.demoVideo} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline">
                    <ExternalLink className="mr-2 h-5 w-5" />
                    Watch Demo
                  </Button>
                </a>
              )}
            </div>
          </div>

          {/* Project Image */}
          <div className="mb-12 rounded-xl overflow-hidden shadow-xl animate-slide-up">
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-[400px] object-cover"
            />
          </div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Main Content */}
            <div className="md:col-span-2 space-y-8">
              {/* Description */}
              <div>
                <h2 className="text-2xl font-bold mb-4">Overview</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {project.fullDescription}
                </p>
              </div>

              {/* Challenges */}
              <div>
                <h2 className="text-2xl font-bold mb-4">Challenges</h2>
                <ul className="space-y-3">
                  {project.challenges.map((challenge, index) => (
                    <li key={index} className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-muted-foreground">{challenge}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Solutions */}
              <div>
                <h2 className="text-2xl font-bold mb-4">Solutions</h2>
                <ul className="space-y-3">
                  {project.solutions.map((solution, index) => (
                    <li key={index} className="flex items-start">
                      <span className="w-2 h-2 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-muted-foreground">{solution}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Results */}
              <div className="bg-card p-6 rounded-xl border border-border">
                <h3 className="font-semibold mb-4">Results</h3>
                <div className="space-y-3">
                  {Object.entries(project.results).map(([key, value]: [string, string | number]) => (
                    <div key={key}>
                      <p className="text-sm text-muted-foreground capitalize">
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </p>
                      <p className="text-lg font-semibold text-primary">{String(value)}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Dataset Info */}
              <div className="bg-card p-6 rounded-xl border border-border">
                <h3 className="font-semibold mb-4">Dataset</h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm text-muted-foreground">Name</p>
                    <p className="font-medium">{project.dataset.name}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Size</p>
                    <p className="font-medium">{project.dataset.size}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Classes</p>
                    <p className="font-medium">{project.dataset.classes}</p>
                  </div>
                  <p className="text-sm text-muted-foreground pt-2">
                    {project.dataset.description}
                  </p>
                </div>
              </div>

              {/* Team Members */}
              <div className="bg-card p-6 rounded-xl border border-border">
                <h3 className="font-semibold mb-4 flex items-center">
                  <Users className="mr-2 h-5 w-5" />
                  Team Members
                </h3>
                <ul className="space-y-2">
                  {project.teamMembers.map((member, index) => (
                    <li key={index} className="text-muted-foreground">
                      {member}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProjectDetail;

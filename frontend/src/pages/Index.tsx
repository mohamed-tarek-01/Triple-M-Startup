import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TeamCard from "@/components/TeamCard";
import ProjectCard from "@/components/ProjectCard";
import { teamMembers } from "@/data/team";
import { projects } from "@/data/projects";
import heroBg from "@/assets/hero-bg.jpg";

const Index = () => {
  const featuredProjects = projects.filter(p => p.featured).slice(0, 3);
  const teamPreview = teamMembers.slice(0, 3);

  const techStack = [
  "Python", "TensorFlow", "Keras", "PyTorch", 
  "Scikit-learn", "OpenCV", "YOLO", 
  "U-Net", "Transfer Learning", "LSTM", "Transformers", 
  "Flask", "Streamlit", "FastAPI",
  "Pandas", "NumPy", "Matplotlib", "Seaborn", "Altair", "Plotly",
  "Tkinter", "Playwright", "ImageIO", "Pillow", "Joblib", "Pickle",
  "SQL", "HTML", "CSS", "JavaScript", "PHP", "C/C++",
  "Data Augmentation"
  ];



  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div 
          className="absolute inset-0 z-0 opacity-20"
          style={{
            backgroundImage: `url(${heroBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background z-0"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
            <Badge className="mx-auto w-fit bg-primary/10 text-primary border-primary/20">
              <Sparkles className="mr-2 h-3 w-3" />
              AI Innovation & Software Solutions
            </Badge>
            
            <h1 className="text-5xl md:text-7xl font-bold">
              We Build{" "}
              <span className="text-gradient">
                Intelligent Software
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We are an AI-driven startup building intelligent solutions in computer vision,
              natural language processing, automation, and data intelligence.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/projects">
                <Button size="lg" className="gradient-primary text-white group">
                  View Projects
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline">
                  Get in Touch
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Team Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-4xl font-bold">Meet Our Team</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
               A dedicated group of engineers, researchers, and innovators building real-world AI solutions.
               Our team blends expertise in software engineering, machine learning, system design, and business strategy.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {teamPreview.map((member) => (
              <TeamCard key={member.id} member={member} />
            ))}
          </div>

          <div className="text-center">
            <Link to="/team">
              <Button variant="outline" size="lg">
                View Full Team
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-4xl font-bold">Featured Projects</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Showcasing our latest work in AI, machine learning, and intelligent systems.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          <div className="text-center">
            <Link to="/projects">
              <Button variant="outline" size="lg">
                View All Projects
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-4xl font-bold">Technologies We Use</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Leveraging modern tools and frameworks to build robust AI solutions.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {techStack.map((tech, index) => (
              <div
                key={index}
                className="px-6 py-3 bg-card rounded-lg border border-border hover:border-primary transition-colors cursor-default"
              >
                <span className="font-medium">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Demo Placeholder */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Badge className="mx-auto w-fit bg-accent text-accent-foreground">
              Coming Soon
            </Badge>
            <h2 className="text-4xl font-bold">Live AI Model Demos</h2>
            <p className="text-muted-foreground text-lg">
              Soon you'll be able to interact with our AI models directly in your browser. 
              Test object detection, sentiment analysis, and more in real-time!
            </p>
            <div className="h-64 bg-card/50 rounded-xl border-2 border-dashed border-border flex items-center justify-center">
              <p className="text-muted-foreground">Interactive demo area</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TeamCard from "@/components/TeamCard";
import { teamMembers } from "@/data/team";

const Team = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16 space-y-4 max-w-3xl mx-auto animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold">
              Our <span className="text-gradient">Team</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Meet the talented individuals behind our innovative AI projects. 
              Each member brings unique expertise in machine learning, computer vision, 
              and software development.
            </p>
          </div>

          {/* Team Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 animate-slide-up">
            {teamMembers.map((member) => (
              <TeamCard key={member.id} member={member} />
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-20 text-center space-y-6 p-8 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl">
            <h2 className="text-3xl font-bold">Want to Collaborate?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We're always open to new projects, research collaborations, and opportunities. 
              Feel free to reach out if you'd like to work together!
            </p>
            <a href="/contact">
              <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity">
                Contact Us
              </button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Team;

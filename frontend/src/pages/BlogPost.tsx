import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { blogPosts } from "@/data/blog";
import Image from "@/components/Image";

const BlogPost = () => {
  const { id } = useParams();
  const post = blogPosts.find(p => p.id === Number(id));

  if (!post) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="container mx-auto px-4 pt-32 pb-20 text-center">
          <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
          <Link to="/blog">
            <Button>Back to Blog</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar />

      <article className="pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Back Button */}
          <Link to="/blog" className="inline-flex items-center text-muted-foreground hover:text-primary mb-8 transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Link>

          {/* Header */}
          <div className="space-y-6 mb-12 animate-fade-in">
            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag, index) => (
                <Badge key={index} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              {post.title}
            </h1>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-6 text-muted-foreground">
              <span className="flex items-center">
                <User className="mr-2 h-4 w-4" />
                {post.author}
              </span>
              <span className="flex items-center">
                <Calendar className="mr-2 h-4 w-4" />
                {post.date}
              </span>
              <span className="flex items-center">
                <Clock className="mr-2 h-4 w-4" />
                {post.readTime}
              </span>
            </div>
          </div>

          {/* Featured Image */}
          <div className="mb-12 rounded-xl overflow-hidden shadow-xl animate-slide-up">
            <Image 
              src={post.image} 
              alt={post.title}
              className="w-full h-[400px] object-cover"
            />
          </div>

          {/* Content */}
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <div 
              dangerouslySetInnerHTML={{ 
                __html: post.content.split('\n').map(line => {
                  if (line.startsWith('# ')) {
                    return `<h1>${line.slice(2)}</h1>`;
                  } else if (line.startsWith('## ')) {
                    return `<h2>${line.slice(3)}</h2>`;
                  } else if (line.startsWith('### ')) {
                    return `<h3>${line.slice(4)}</h3>`;
                  } else if (line.startsWith('```')) {
                    return '<pre><code>';
                  } else if (line.includes('```')) {
                    return '</code></pre>';
                  } else if (line.startsWith('- ')) {
                    return `<li>${line.slice(2)}</li>`;
                  } else if (line.match(/^\d+\./)) {
                    return `<li>${line.replace(/^\d+\.\s*/, '')}</li>`;
                  } else if (line.trim() === '') {
                    return '<br />';
                  } else {
                    return `<p>${line}</p>`;
                  }
                }).join('\n')
              }} 
            />
          </div>

          {/* Author Bio */}
          <div className="mt-16 p-6 bg-muted/30 rounded-xl border border-border">
            <h3 className="font-semibold mb-2">About the Author</h3>
            <p className="text-muted-foreground">
              <strong>{post.author}</strong> is a member of our AI team, 
              passionate about sharing knowledge and building innovative solutions.
            </p>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default BlogPost;

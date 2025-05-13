
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Github, Linkedin, Mail } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="bg-navy-light">
      <div className="section-container">
        <h2 className="section-title">Get In Touch</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          <div>
            <h3 className="text-xl font-semibold mb-4">Let's Chat</h3>
            <p className="text-muted-foreground mb-6">
              Whether you have a project in mind, a question about my work, or just want to connect,
              I'd love to hear from you. My inbox is always open!
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="bg-teal/10 p-3 rounded-full mr-4">
                  <Mail className="h-5 w-5 text-teal" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <a href="mailto:hello@johndeveloper.com" className="text-white hover:text-teal transition-colors">
                    hello@johndeveloper.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="bg-teal/10 p-3 rounded-full mr-4">
                  <Linkedin className="h-5 w-5 text-teal" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">LinkedIn</p>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-teal transition-colors">
                    linkedin.com/in/johndeveloper
                  </a>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="bg-teal/10 p-3 rounded-full mr-4">
                  <Github className="h-5 w-5 text-teal" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">GitHub</p>
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-teal transition-colors">
                    github.com/johndeveloper
                  </a>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <p className="text-muted-foreground mb-4">Or connect with me on social media:</p>
              <div className="flex space-x-4">
                <Button size="icon" variant="outline" asChild>
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <Github className="h-5 w-5" />
                  </a>
                </Button>
                <Button size="icon" variant="outline" asChild>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <Linkedin className="h-5 w-5" />
                  </a>
                </Button>
                <Button size="icon" variant="outline" asChild>
                  <a href="mailto:hello@johndeveloper.com" aria-label="Email">
                    <Mail className="h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
          
          <div>
            <form onSubmit={handleSubmit} className="bg-navy p-8 rounded-xl border border-muted shadow-lg">
              <div className="mb-6">
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Your Name
                </label>
                <Input
                  id="name"
                  name="name"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-navy-light border-muted"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Your Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-navy-light border-muted"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Your Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="I'd like to discuss a project..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="min-h-[120px] bg-navy-light border-muted"
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

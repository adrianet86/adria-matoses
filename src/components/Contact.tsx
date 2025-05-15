
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Github, Gitlab, Linkedin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { personalInfo } from "@/data/personalInfo";

const Contact = () => {
  const { toast } = useToast();
  const { t } = useLanguage();
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch("https://formspree.io/f/mvgadvnv", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        toast({
          title: t.contact.messageSent,
          description: t.contact.messageSentDesc,
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem sending your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="navy-light-bg">
      <div className="section-container">
        <h2 className="section-title">{t.contact.title}</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          <div>
            <h3 className="text-xl font-semibold mb-4">{t.contact.subtitle}</h3>
            <p className="text-muted-foreground mb-6">
              {t.contact.description}
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="bg-teal/10 p-3 rounded-full mr-4">
                  <Linkedin className="h-5 w-5 text-teal" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{t.contact.linkedinLabel}</p>
                  <a href={`https://${personalInfo.linkedin}`} target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-teal transition-colors">
                    {personalInfo.linkedin}
                  </a>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="bg-teal/10 p-3 rounded-full mr-4">
                  <Github className="h-5 w-5 text-teal" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{t.contact.githubLabel}</p>
                  <a href={`https://${personalInfo.github}`} target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-teal transition-colors">
                    {personalInfo.github}
                  </a>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="bg-teal/10 p-3 rounded-full mr-4">
                  <Gitlab className="h-5 w-5 text-teal" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{t.contact.gitlabLabel}</p>
                  <a href={`https://${personalInfo.gitlab}`} target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-teal transition-colors">
                    {personalInfo.gitlab}
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <form onSubmit={handleSubmit} className="bg-card p-8 rounded-xl border border-muted shadow-lg">
              <div className="mb-6">
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  {t.contact.formName}
                </label>
                <Input
                  id="name"
                  name="name"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-background border-muted"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  {t.contact.formEmail}
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-background border-muted"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  {t.contact.formMessage}
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder={t.contact.formMessagePlaceholder}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="min-h-[120px] bg-background border-muted"
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? t.contact.sending : t.contact.sendMessage}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

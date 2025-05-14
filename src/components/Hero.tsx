
import { Button } from "@/components/ui/button";
import { ArrowDownCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { personalInfo } from "@/data/personalInfo";

const Hero = () => {
  const { t, language } = useLanguage();

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center pt-20 bg-navy">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-6 animate-fade-in">
            <div className="space-y-2">
              <p className="text-teal text-lg font-mono">{t.hero.greeting}</p>
              <h1 className="text-5xl sm:text-7xl font-bold text-white">
                {personalInfo.name}
              </h1>
              <h2 className="text-3xl sm:text-5xl font-bold text-muted-foreground">
                {t.hero.jobTitle}
              </h2>
            </div>

            <div className="code-block">
              <pre className="text-code-foreground">
                <code>{`const developer = {
  skills: ["React", "TypeScript", "Node.js"],
  passion: "${t.hero.passion}",
  currentlyLearning: "${t.hero.currentlyLearning}"
};`}</code>
              </pre>
            </div>

            <p className="text-muted-foreground text-lg max-w-xl">
              {t.hero.description}
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button size="lg" onClick={scrollToAbout}>
                {t.header.about}
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#projects">
                  {t.header.projects}
                </a>
              </Button>
            </div>
          </div>

          <div className="hidden lg:flex justify-center">
            <div className="w-[450px] h-[450px] relative">
              <div className="absolute inset-0 bg-teal/10 rounded-full blur-3xl"></div>
              <div className="relative bg-navy-light border border-teal/20 rounded-xl overflow-hidden shadow-xl">
                <div className="bg-navy-dark px-4 py-3 flex items-center gap-2 border-b border-muted">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="text-xs text-center font-mono text-muted-foreground bg-navy-light/70 rounded px-2 py-1 flex-grow">
                    developer.profile
                  </div>
                </div>
                <div className="p-6 font-mono text-sm">
                  <div className="text-blue-400 mb-2">class <span className="text-green-400">Developer</span> {"{"}</div>
                  <div className="pl-4">
                    <div className="text-yellow-300">constructor() {"{"}</div>
                    <div className="pl-4">
                      <div className="text-purple-400">this<span className="text-white">.</span>name <span className="text-white">=</span> <span className="text-green-300">"{personalInfo.name}"</span>;</div>
                      <div className="text-purple-400">this<span className="text-white">.</span>title <span className="text-white">=</span> <span className="text-green-300">"{personalInfo.title[language]}"</span>;</div>
                      <div className="text-purple-400">this<span className="text-white">.</span>location <span className="text-white">=</span> <span className="text-green-300">"{personalInfo.location[language]}"</span>;</div>
                    </div>
                    <div className="text-yellow-300">{"}"}</div>
                  </div>
                  <div className="mt-2 pl-4">
                    <div className="text-blue-400">skills() {"{"}</div>
                    <div className="pl-4">
                      <div className="text-purple-400">return <span className="text-white">[</span></div>
                      <div className="pl-4">
                        {personalInfo.skills.slice(0, 5).map((skill, i) => (
                          <div key={i} className="text-green-300">"{skill}"</div>
                        ))}
                      </div>
                      <div className="text-purple-400 pl-2"><span className="text-white">]</span>;</div>
                    </div>
                    <div className="text-blue-400">{"}"}</div>
                  </div>
                  <div className="text-blue-400 mt-2">{"}"}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden sm:block animate-bounce">
          <button 
            onClick={scrollToAbout} 
            className="text-muted-foreground hover:text-teal transition-colors"
            aria-label="Scroll down"
          >
            <ArrowDownCircle className="h-8 w-8" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;

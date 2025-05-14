
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { personalInfo } from "@/data/personalInfo";
import { Briefcase, Calendar } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const Experience = () => {
  const { t, language } = useLanguage();
  const [expandedItem, setExpandedItem] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedItem(expandedItem === index ? null : index);
  };

  return (
    <section id="experience" className="bg-navy">
      <div className="section-container">
        <h2 className="section-title">{t.experience.title}</h2>

        <div className="mt-10 space-y-6">
          {personalInfo.experiences.map((exp, index) => (
            <div 
              key={index} 
              className={`bg-navy-light border border-muted rounded-lg p-6 transition-all duration-300 ${
                expandedItem === index ? "shadow-xl shadow-teal/5" : "hover:shadow-lg"
              }`}
            >
              <div 
                className="flex flex-col md:flex-row md:items-center justify-between cursor-pointer"
                onClick={() => toggleExpand(index)}
              >
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white">{exp.company}</h3>
                  <p className="text-teal font-medium mt-1">{exp.position[language]}</p>
                </div>
                <div className="mt-2 md:mt-0 flex items-center text-muted-foreground">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span className="text-sm">{exp.period}</span>
                </div>
              </div>

              <div className={`mt-4 transition-all duration-300 overflow-hidden ${
                expandedItem === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
              }`}>
                <div className="pt-4 border-t border-muted">
                  <h4 className="text-sm uppercase tracking-wider text-muted-foreground mb-3">
                    {t.experience.responsibilities}
                  </h4>
                  <ul className="space-y-2">
                    {exp.description[language].map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-teal mr-2 mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[250px]">{t.experience.title}</TableHead>
                <TableHead>{t.experience.responsibilities}</TableHead>
                <TableHead className="text-right">Period</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {personalInfo.experiences.map((exp, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">
                    <div className="font-bold">{exp.company}</div>
                    <div className="text-sm text-teal mt-1">{exp.position[language]}</div>
                  </TableCell>
                  <TableCell>
                    <ul className="list-disc list-inside text-sm">
                      {exp.description[language].map((item, i) => (
                        <li key={i} className="my-1">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </TableCell>
                  <TableCell className="text-right">
                    <Badge variant="outline" className="bg-navy-light">
                      <Calendar className="h-3 w-3 mr-1" />
                      {exp.period}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </section>
  );
};

export default Experience;

import { Github, Linkedin, Mail, ExternalLink, Code2, Briefcase } from 'lucide-react';

function App() {
  const projects = [
    {
      title: "Sales Analytics Dashboard",
      description: "Interactive data visualization dashboard built with React, TypeScript, and Recharts. Features real-time metrics, multiple chart types, and responsive design.",
      tech: ["React", "TypeScript", "Recharts", "Tailwind CSS"],
      liveUrl: "#", // Replace with your deployed dashboard URL
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop" // Placeholder - replace with screenshot
    },
    // You can add more projects here later
  ];

  const skills = {
    frontend: ["React", "Vue.js", "TypeScript", "JavaScript", "HTML/CSS", "Tailwind CSS", "Redux"],
    backend: ["Node.js", "Java", "Spring", "PostgreSQL", "MongoDB", "REST APIs"],
    tools: ["Git", "Docker", "AWS", "Vite", "Webpack"]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <header className="bg-white shadow-sm">
        <nav className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">André Diniz</h1>
          <div className="flex gap-4">
            <a 
              href="https://www.linkedin.com/in/andredin/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="https://github.com/YOUR_GITHUB" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transition-colors"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a 
              href="mailto:andrediniz1310@gmail.com"
              className="text-gray-600 hover:text-red-600 transition-colors"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </div>
        </nav>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-16">
        {/* Hero/About Section */}
        <section className="mb-20 animate-fade-in">
          <div className="text-center mb-8">
            <h2 className="text-5xl font-bold text-gray-900 mb-4">
              Full-Stack Developer
            </h2>
            <p className="text-xl text-gray-600 mb-6">
              Building clean, efficient web applications with React, TypeScript, and modern tools
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <a 
                href="https://www.fiverr.com/YOUR_FIVERR_USERNAME" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors inline-flex items-center gap-2"
              >
                <Briefcase size={20} />
                Hire Me on Fiverr
              </a>
              <a 
                href="#contact"
                className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors inline-flex items-center gap-2"
              >
                <Mail size={20} />
                Get In Touch
              </a>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">About Me</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              I'm a full-stack developer with experience building scalable web applications. 
              My focus is on creating user-friendly interfaces with React and TypeScript, while 
              maintaining robust backend services.
            </p>
            <p className="text-gray-700 leading-relaxed">
              I've worked on healthcare systems, logistics dashboards, and e-commerce platforms, 
              always prioritizing clean code, performance, and user experience. Currently available 
              for freelance projects and remote opportunities.
            </p>
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-20 animate-slide-up">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Skills & Technologies</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-2 mb-4">
                <Code2 className="text-blue-500" size={24} />
                <h3 className="text-xl font-bold text-gray-800">Frontend</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.frontend.map(skill => (
                  <span key={skill} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-2 mb-4">
                <Code2 className="text-green-500" size={24} />
                <h3 className="text-xl font-bold text-gray-800">Backend</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.backend.map(skill => (
                  <span key={skill} className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-2 mb-4">
                <Code2 className="text-purple-500" size={24} />
                <h3 className="text-xl font-bold text-gray-800">Tools</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.tools.map(skill => (
                  <span key={skill} className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="mb-20 animate-slide-up">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Featured Projects</h2>
          <div className="grid md:grid-cols-1 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="md:flex">
                  <div className="md:w-2/5">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>
                  <div className="p-8 md:w-3/5">
                    <h3 className="text-2xl font-bold text-gray-800 mb-3">{project.title}</h3>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map(tech => (
                        <span key={tech} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <a 
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
                    >
                      View Live Demo
                      <ExternalLink size={18} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <p className="text-gray-600 italic">More projects coming soon...</p>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="bg-white rounded-xl shadow-lg p-8 max-w-3xl mx-auto animate-slide-up">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Let's Work Together</h2>
          <p className="text-gray-700 text-center mb-8">
            I'm available for freelance projects and remote opportunities. 
            Whether you need a React developer or full-stack expertise, I'd love to hear from you.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:andrediniz1310@gmail.com"
              className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors text-center inline-flex items-center justify-center gap-2"
            >
              <Mail size={20} />
              Email Me
            </a>
            <a 
              href="https://www.linkedin.com/in/andredin/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-700 hover:bg-gray-800 text-white px-8 py-3 rounded-lg font-semibold transition-colors text-center inline-flex items-center justify-center gap-2"
            >
              <Linkedin size={20} />
              LinkedIn
            </a>
            <a 
              href="https://www.fiverr.com/YOUR_FIVERR_USERNAME"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors text-center inline-flex items-center justify-center gap-2"
            >
              <Briefcase size={20} />
              Fiverr
            </a>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-200">
            <div className="grid md:grid-cols-2 gap-4 text-center md:text-left">
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Location</h4>
                <p className="text-gray-600">Kitchener, ON, Canada</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Availability</h4>
                <p className="text-gray-600">Available for remote work</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-gray-400">
            © 2024 André Martini Diniz. Built with React + TypeScript + Tailwind CSS
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Based in Kitchener, ON | Available for remote opportunities
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;

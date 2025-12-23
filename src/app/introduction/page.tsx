import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { CursorGlow } from "@/components/cursor-glow";
import { Code2, Layers, FileText, Zap, Bot, Globe } from "lucide-react";

export default function IntroductionPage() {
  return (
    <main className="scanlines relative min-h-screen overflow-hidden">
      <CursorGlow />
      <div className="relative z-10">
        <Header />

        {/* Hero Section */}
        <section className="relative min-h-[60vh] px-4 pt-28 pb-16 sm:px-6 sm:pt-32 sm:pb-20">
          <div className="mx-auto max-w-4xl">
            <div className="space-y-6 sm:space-y-8">
              <div className="space-y-2">
                <p className="text-muted-foreground font-mono text-xs tracking-[0.2em] uppercase sm:tracking-[0.3em]">
                  About Me
                </p>
                <h1 className="text-4xl font-bold tracking-tight text-balance sm:text-5xl lg:text-6xl">
                  Hi, I&apos;m{" "}
                  <span className="text-primary">Heet Viradiya</span>
                </h1>
              </div>

              <p className="text-muted-foreground max-w-3xl text-base leading-relaxed sm:text-lg">
                Enthusiastic IT diploma student with hands-on experience in
                React, Tailwind CSS, and modern web development. Strong
                foundation in software testing, cloud concepts, and scalable UI
                development. Passionate about building responsive apps and
                exploring areas like AI, DevOps, and automation.
              </p>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="relative px-4 py-16 sm:px-6 sm:py-20">
          <div className="mx-auto max-w-4xl">
            <div className="border-border/50 bg-card/50 space-y-8 rounded border p-6 backdrop-blur-sm sm:p-10">
              <div className="space-y-4">
                <p className="text-primary font-mono text-xs tracking-[0.2em] uppercase sm:tracking-[0.3em]">
                  Profile Summary
                </p>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  IT Student & Web Developer
                </h2>
              </div>

              <div className="text-muted-foreground space-y-6 text-base leading-relaxed sm:text-lg">
                <p>
                  I&apos;m currently pursuing my Diploma in Information
                  Technology at G.M.I.U. (2023-2026), based in Bhavnagar, India.
                  My journey in tech started with a curiosity for how things
                  work on the web, and has evolved into a passion for building
                  modern, responsive applications.
                </p>

                <p>
                  Through internships at Strats360 Technolabs LLP and AAN Web
                  Solution, I&apos;ve gained practical experience in web
                  development fundamentals, React JS, Firebase, and version
                  control with Git. I believe in learning by building, which is
                  why I&apos;ve created projects like Roomily, Present Perfect,
                  and FinTrackX.
                </p>

                <p>
                  Beyond coding, I&apos;m exploring AI tools, DevOps practices,
                  and automation technologies. I&apos;m motivated to contribute
                  innovative thinking and technical skills to software
                  engineering and quality assurance projects.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="relative px-4 py-16 sm:px-6 sm:py-20">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 space-y-4 text-center">
              <p className="text-primary font-mono text-xs tracking-[0.2em] uppercase sm:tracking-[0.3em]">
                Technical Skills
              </p>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                What I Work With
              </h2>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  icon: Code2,
                  title: "React JS",
                  description:
                    "Building modern, component-based user interfaces with React, hooks, and state management for scalable applications.",
                },
                {
                  icon: Layers,
                  title: "Tailwind CSS & Shadcn/UI",
                  description:
                    "Creating beautiful, responsive designs with utility-first CSS and accessible component libraries.",
                },
                {
                  icon: FileText,
                  title: "Firebase",
                  description:
                    "Real-time databases, authentication, cloud functions, and serverless backend services for web applications.",
                },
                {
                  icon: Zap,
                  title: "Next.js",
                  description:
                    "Server-side rendering, static site generation, and full-stack React applications with the latest Next.js features.",
                },
                {
                  icon: Bot,
                  title: "AI Tools & IDEs",
                  description:
                    "Leveraging AI-powered development tools and IDEs to enhance productivity and code quality.",
                },
                {
                  icon: Globe,
                  title: "Git & Version Control",
                  description:
                    "Collaborative development with Git, GitHub, and proper version control practices for team projects.",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="group border-border/50 bg-card/50 hover:border-primary/50 hover:bg-card/80 rounded border p-6 backdrop-blur-sm transition-all duration-300"
                >
                  <div className="border-primary/30 bg-primary/10 text-primary group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground mb-4 flex h-12 w-12 items-center justify-center rounded border transition-all duration-300">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-foreground mb-2 font-mono text-sm font-semibold tracking-wider uppercase">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </main>
  );
}

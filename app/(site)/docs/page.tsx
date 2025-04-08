import SidebarLink from "@/components/Docs/SidebarLink";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Docs - Vivid View",
  description: "EMPOWERING STUDENTS FOR A COMPETITIVE FUTURE"
};

export default function DocsPage() {
  return (
    <>
      <section className="pb-16 pt-24 md:pb-20 md:pt-28 lg:pb-24 lg:pt-32">
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 lg:w-1/4">
              <div className="sticky top-[74px] rounded-lg border border-white p-4 shadow-solid-4 transition-all dark:border-strokedark dark:bg-blacksection">
                <ul className="space-y-2">
                  <SidebarLink />
                </ul>
              </div>
            </div>

            <div className="w-full px-4 lg:w-3/4">
              <div className="blog-details blog-details-docs shadow-three dark:bg-gray-dark rounded-sm bg-white px-8 py-11 sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]">
                <h1 className="mb-8 text-3xl font-bold">Beyond Curriculum Technical Guide</h1>

                {/* Platform Architecture Section */}
                <div className="mb-12">
                  <h2 className="mb-6 text-2xl font-semibold">Platform Architecture</h2>
                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {[
                      { name: "Next.js 14", desc: "React framework for server-side rendering" },
                      { name: "Node.js 18", desc: "JavaScript runtime for backend services" },
                      { name: "MongoDB Atlas", desc: "Fully-managed cloud database" },
                      { name: "AWS EC2", desc: "Scalable cloud infrastructure" }
                    ].map((tech, i) => (
                      <div key={i} className="rounded-lg border border-stroke p-6 shadow-solid-4 dark:border-strokedark dark:bg-blacksection">
                        <h3 className="mb-2 text-lg font-medium">{tech.name}</h3>
                        <p className="text-body-color dark:text-body-color-dark text-sm">{tech.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Core Features Section */}
                <div className="mb-12">
                  <h2 className="mb-6 text-2xl font-semibold">Core Features</h2>
                  <div className="grid gap-6 md:grid-cols-2">
                    {[
                      { 
                        icon: "M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z",
                        title: "Modular Content System", 
                        desc: "Flexible course architecture with reusable learning components"
                      },
                      { 
                        icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
                        title: "Real-time Analytics", 
                        desc: "Comprehensive dashboards tracking student engagement"
                      },
                      { 
                        icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
                        title: "Secure Authentication", 
                        desc: "JWT-based auth with institutional SSO integration"
                      },
                      { 
                        icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
                        title: "Scheduling System", 
                        desc: "Intelligent course scheduling with conflict detection"
                      }
                    ].map((feature, i) => (
                      <div key={i} className="rounded-lg border border-stroke p-6 shadow-solid-4 dark:border-strokedark dark:bg-blacksection">
                        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white">
                          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={feature.icon} />
                          </svg>
                        </div>
                        <h3 className="mb-3 text-xl font-medium">{feature.title}</h3>
                        <p className="text-body-color dark:text-body-color-dark">{feature.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Implementation Process Section - Simplified */}
                <div className="mb-12">
                  <h2 className="mb-6 text-2xl font-semibold">Implementation Process</h2>
                  <div className="grid gap-6 md:grid-cols-3">
                    {[
                      {
                        title: "Planning Phase",
                        items: [
                          "Requirements analysis",
                          "System architecture review",
                          "Resource allocation"
                        ]
                      },
                      {
                        title: "Integration Phase",
                        items: [
                          "Data migration",
                          "API connections",
                          "System testing"
                        ]
                      },
                      {
                        title: "Deployment Phase",
                        items: [
                          "User training",
                          "Performance monitoring",
                          "Feedback collection"
                        ]
                      }
                    ].map((phase, i) => (
                      <div key={i} className="rounded-lg border border-stroke p-6 shadow-solid-4 dark:border-strokedark dark:bg-blacksection">
                        <h3 className="mb-4 text-xl font-medium">{phase.title}</h3>
                        <ul className="space-y-3">
                          {phase.items.map((item, j) => (
                            <li key={j} className="flex items-start">
                              <span className="mr-3 mt-1.5 flex h-2 w-2 rounded-full bg-primary"></span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technical Support Section */}
                <div className="mb-12">
                  <h2 className="mb-6 text-2xl font-semibold">Technical Support</h2>
                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="rounded-lg border border-stroke p-6 shadow-solid-4 dark:border-strokedark dark:bg-blacksection">
                      <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white">
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <h3 className="mb-4 text-xl font-medium">Support Channels</h3>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <span className="mr-3 mt-1.5 flex h-2 w-2 rounded-full bg-primary"></span>
                          <span>Email: support@beyond.edu</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-3 mt-1.5 flex h-2 w-2 rounded-full bg-primary"></span>
                          <span>24/7 Helpdesk Portal</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-3 mt-1.5 flex h-2 w-2 rounded-full bg-primary"></span>
                          <span>Dedicated Account Manager</span>
                        </li>
                      </ul>
                    </div>

                    <div className="rounded-lg border border-stroke p-6 shadow-solid-4 dark:border-strokedark dark:bg-blacksection">
                      <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white">
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </div>
                      <h3 className="mb-4 text-xl font-medium">Security & Compliance</h3>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <span className="mr-3 mt-1.5 flex h-2 w-2 rounded-full bg-primary"></span>
                          <span>Regular security audits</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-3 mt-1.5 flex h-2 w-2 rounded-full bg-primary"></span>
                          <span>GDPR compliant data handling</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-3 mt-1.5 flex h-2 w-2 rounded-full bg-primary"></span>
                          <span>Encrypted data transmission</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
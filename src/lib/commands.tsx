export const getCommandList = () => {
  return [
    'help', 'name', 'whoami', 'summary', 'resume', 'clear',
    'experience', 'skills', 'projects', 'education', 'certifications', 
    'achievements', 'contact', 'email', 'linkedin', 'github', 
    'matrix', 'echo'
  ];
};

export const parseCommand = (command: string): JSX.Element | string => {
  const lowerCmd = command.toLowerCase().trim();
  
  // Handle echo command first
  const echoMatch = lowerCmd.match(/^echo\s+(.+)/);
  if (echoMatch) {
    return echoMatch[1];
  }

  switch (lowerCmd) {
    case 'help':
      return `
┌─────────────────────────────────────────────────────────────┐
│ AVAILABLE COMMANDS                                          │
└─────────────────────────────────────────────────────────────┘

🧍 Personal Info:
  name              Display name in ASCII art
  whoami            A quirky line about me
  summary           Brief introduction
  resume            View and download my resume
  clear             Clear the terminal

💼 Professional:
  experience        Work experience timeline
  skills            Technical skills and expertise
  projects          Featured projects
  education         Academic qualifications
  certifications    Professional certificates
  achievements      Awards and accomplishments

🌐 Contact & Social:
  contact           All contact information
  email             Email address
  linkedin          LinkedIn profile
  github            GitHub profile

🧪 Fun:
  matrix            Run the Matrix
  echo [text]       Echo back your text
  help              Show this help message
      `;

    case 'name':
      return `
  ██████╗██╗  ██╗ █████╗ ██╗   ██╗ █████╗ ███╗   ██╗
 ██╔════╝██║  ██║██╔══██╗╚██╗ ██╔╝██╔══██╗████╗  ██║
 ██║     ███████║███████║ ╚████╔╝ ███████║██╔██╗ ██║
 ██║     ██╔══██║██╔══██║  ╚██╔╝  ██╔══██║██║╚██╗██║
 ╚██████╗██║  ██║██║  ██║   ██║   ██║  ██║██║ ╚████║
  ╚═════╝╚═╝  ╚═╝╚═╝  ╚═╝   ╚═╝   ╚═╝  ╚═╝╚═╝  ╚═══╝
                                                      
 ██████╗  █████╗ ███╗   ██╗██████╗  █████╗ ██████╗  █████╗ 
 ██╔══██╗██╔══██╗████╗  ██║██╔══██╗██╔══██╗██╔══██╗██╔══██╗
 ██████╔╝███████║██╔██╗ ██║██████╔╝███████║██████╔╝███████║
 ██╔══██╗██╔══██║██║╚██╗██║██╔═══╝ ██╔══██║██╔══██╗██╔══██║
 ██║  ██║██║  ██║██║ ╚████║██║     ██║  ██║██║  ██║██║  ██║
 ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝╚═╝     ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝

      `;

    case 'whoami':
      return "Chayan — SDET who builds reliable automation, eliminates regressions, debugs fast, and solves systemic engineering problems.";

    case 'resume':
      return (
        <div>
          <pre>{`┌─────────────────────────────────────────────────────────────┐
│ RESUME                                                      │
└─────────────────────────────────────────────────────────────┘

My resume is available for download:
`}</pre>
          <a 
            href="/resume.pdf" 
            download="Chayan_Ranpara_Resume.pdf"
            className="text-accent hover:underline cursor-pointer inline-block my-2"
            onClick={(e) => {
              // Check if file exists, otherwise alert user
              fetch('/resume.pdf', { method: 'HEAD' })
                .catch(() => {
                  e.preventDefault();
                  alert('Resume PDF not found. Please add resume.pdf to your public folder.');
                });
            }}
          >
            → Download Resume (PDF)
          </a>
          <pre>{`
You can also view my complete profile using commands like:
  • experience
  • skills
  • education
  • certifications`}</pre>
        </div>
      );

    case 'summary':
      return `
┌─────────────────────────────────────────────────────────────┐
│ ABOUT ME                                                    │
└─────────────────────────────────────────────────────────────┘

Hello! I'm Chayan D Ranpara, a passionate and results-driven 
Software Development Engineer in Test dedicated to ensuring 
extraordinary product quality for critical customer-facing 
applications.
I have a proven record of enhancing software quality by driving
initiatives that slashed testing cycles from 4 days to 1, built a 
QA dashboard that cut reporting time by 70%, and accelerated release 
validation by 40% through CI/CD integration. Expert in designing robust 
end‐to‐end automation frameworks using Python, C#, Playwright, Appium, 
and BDD tools like SpecFlow. A proactive problem‐solver with a strong 
commitment to innovation, efficiency, and ownership.

> "Quality is not an act, it is a habit." - Aristotle
      `;

    case 'experience':
      return `
┌─────────────────────────────────────────────────────────────┐
│ WORK EXPERIENCE                                             │
└─────────────────────────────────────────────────────────────┘

▸ Software Developer in Test
  SOTI Inc, Gurgaon | Mar 2024 - Present
  
  • Owned quality of customer-facing mobile applications, 
    architecting automation strategy for iOS and Android that 
    reduced regression testing cycles from 4 days to 1
    
  • Designed and developed a centralized QA dashboard to track automated vs. 
    manual test cases and release status across UI automation, pipelines, and 
    manual runs. Integrated GitHub and Azure DevOps data into a database for 
    real‐time updates within seconds, cutting reporting time by 70%.
    
  • Collaborated with multi-functional teams to implement full 
    CI/CD pipeline integration, accelerating release validation 
    by 40%
    
  • Built an in-house cross-platform device farm supporting parallel test
    execution on Android, and iOS devices, eliminating dependency on third-party
    providers and saving the company millions in annual licensing and 
    infrastructure costs.

▸ Associate Quality Engineer
  Intellicus Technologies, Noida | Aug 2023 - Feb 2024
  
  • Developed and implemented 200+ automated test cases for critical web 
    application modules, reducing manual testing effort by 50% and accelerating 
    regression cycles, directly contributing to faster release timelines
    
  • Led end-to-end database validation for 20+ complex ETL workflows, ensuring 
    seamless data integration and verifying 15+ business-critical reports with 
    99.5% data accuracy, which minimized post-deployment defects and improved
    client trust.
    
  • Designed and executed API automation frameworks using Postman and Rest
    Assured, implementing 10+ core API test suites that improved CI/CD pipeline
    efficiency by 60%, enabling faster feedback loops and early defect detection.
      `;

    case 'skills':
      return `
┌─────────────────────────────────────────────────────────────┐
│ TECHNICAL SKILLS                                            │
└─────────────────────────────────────────────────────────────┘

Languages:
  ▸ Python, Core Java, C#, C++, SQL

Automation Frameworks:
  ▸ Playwright, Selenium, Appium
  ▸ Rest Assured, SpecFlow

Platforms & Ecosystems:
  ▸ Web Testing
  ▸ API/Web Services Testing
  ▸ iOS & Android Mobile Testing

CI/CD, Build & Cloud:
  ▸ Jenkins, Git, Maven
  ▸ Docker, Kubernetes
  ▸ AWS (Basic)

Performance Testing:
  ▸ JMeter (Basic)
  ▸ Gatling (Familiar)

Other:
  ▸ Test Automation Architecture
  ▸ Quality Engineering
  ▸ Root Cause Analysis
  ▸ Agile/Scrum Methodologies
      `;

    case 'projects':
      return `
┌─────────────────────────────────────────────────────────────┐
│ FEATURED PROJECTS                                           │
└─────────────────────────────────────────────────────────────┘

▸ Diverse Chat Application
  Built a multi-user real-time chat using React and Firebase, with 
  Firebase Auth and Firestore for secure auth and persistent messaging. 
  Integrated LibreTranslate with caching and batching for low-latency, 
  on-the-fly translation and added message deduplication for reliable delivery.
  Tech stack: React, Firebase (Auth, Firestore), LibreTranslate
  → View on GitHub: github.com/godziy

▸ Covid Vaccine Availability Bot
  Implemented a Python service that scrapes CoWIN via Selenium, applies user 
  filters, and sends WhatsApp alerts through Twilio. Includes retry/error handling 
  and a lightweight state store to prevent duplicate notifications; scheduled with 
  APScheduler/cron.
  Tech: Python, Selenium, Twilio, APScheduler/cron
  → View on GitHub: github.com/godziy

▸ TagForge
  Built a .NET 7 API to create label templates using drag and drop functionality,
  with the feature to auto fill data using uploaded excel files after mapping 
  columns to excel headers, and generate bulk filled templates with can be printed 
  and exported in pdf in bulk; Angular frontend provides interactive mapping,
  preview, and export. Backend supports async generation, validation, and 
  streaming downloads for large batches.
  Tech: .NET 7, Angular, Excel processing 
  → View on GitHub: github.com/godziy

▸ Delhi Metro Route & Fare Finder
  Modeled the network as a weighted graph and implemented Dijkstra (priority 
  queue) to compute shortest routes and distance-based fares; BFS/DFS utilities
  and unit tests validate results. Station nodes store metadata for transfers 
  and corridor info.
  Tech: Java, Graph algorithms (Dijkstra, BFS, DFS)
  → View on GitHub: github.com/godziy

→ View All Projects: github.com/godziy
      `;

    case 'education':
      return `
┌─────────────────────────────────────────────────────────────┐
│ EDUCATION                                                   │
└─────────────────────────────────────────────────────────────┘

▸ B.Tech in Computer Science and Engineering
  DIT University, Dehradun
  Aug 2019 - May 2023
  CGPA: 7.69/10
  
  Focused on software engineering, algorithms, data structures, networks,
  object oriented programming, and operating systems.
      `;

    case 'certifications':
      return `
┌─────────────────────────────────────────────────────────────┐
│ CERTIFICATIONS                                              │
└─────────────────────────────────────────────────────────────┘

▸ Meta Database Engineer
  Coursera | Meta
  Comprehensive database design and engineering certification

▸ Atlassian Version Control with Git
  Coursera | Atlassian
  Advanced Git workflows and version control best practices
      `;

    case 'achievements':
      return `
┌─────────────────────────────────────────────────────────────┐
│ AWARDS & ACHIEVEMENTS                                       │
└─────────────────────────────────────────────────────────────┘

  Star of the Month (4x)
   Awarded four times for outstanding performance and 
   contributions to product quality

  ACM ICPC National Finalist
   Demonstrated strong problem-solving and analytical skills
   at national competitive programming level

  Top Global Ranking in CodeChef
   Achieved a Global Rank of 174 out of 4,000 coders in CodeChef 
   Starters 48 Div 2 

  Top Global Ranking in Leetcode
   Achieved an All-India Rank of 72 and a Global Rank of 449 out of 
   19,400+ participants in a LeetCode biweekly contest 104

  Top Global Ranking in Coding Ninjas
   Achieved a Global Rank 3 out of 16000+ participants in Coding 
   Ninjas Weekly Contest 80

  Significant milestone in Leetcode
   Solved 550+ LeetCode problems, strengthening core skills in algorithms, 
   data structures, and problem-solving.
      `;

    case 'contact':
      return `
┌─────────────────────────────────────────────────────────────┐
│ CONTACT INFORMATION                                         │
└─────────────────────────────────────────────────────────────┘

▸ Email:     chayanranparacr@gmail.com
▸ Phone:     +91 8789645990
▸ GitHub:    github.com/godziy
▸ LinkedIn:  linkedin.com/in/chayan-ranpara

Feel free to reach out for collaborations or just to say hi!
      `;

    case 'email':
      return ` Email: chayanranparacr@gmail.com

You can also reach me at: chayanranparacr@gmail.com`;

    case 'linkedin':
      return ` LinkedIn: linkedin.com/in/chayan-ranpara

→ Visit: https://linkedin.com/in/chayan-ranpara`;

    case 'github':
      return ` GitHub: github.com/godziy

→ Visit: https://github.com/godziy`;

    case 'matrix':
      return 'MATRIX_EFFECT';

    case 'clear':
      return 'CLEAR_TERMINAL';

    default:
      return `bash: ${command}: command not found

Type 'help' to see available commands`;
  }
};
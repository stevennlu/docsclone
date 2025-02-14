export const templates = [
    { id:"blank", label:"Blank Document", imageUrl: "/blank-document.svg",initialContent:``},
    { id:"resume", label:"Resume", imageUrl: "/resume.svg", 
    initialContent: `<h1>[Your Name]</h1>
<p><strong>Address:</strong> [Your Address] | <strong>Email:</strong> [Your Email] | <strong>Phone:</strong> [Your Phone Number]</p>
<p><strong>LinkedIn:</strong> [LinkedIn URL] | <strong>GitHub:</strong> [GitHub URL] | <strong>Portfolio:</strong> [Portfolio URL]</p>

<h2>Summary</h2>
<p>A [your profession] with [X years] of experience in [industry/skills]. Passionate about [relevant field] and skilled in [key competencies].</p>

<h2>Experience</h2>
<h3>[Job Title] - [Company Name]</h3>
<p>[Start Date] - [End Date]</p>
<ul>
    <li>Bullet point describing achievement</li>
    <li>Bullet point describing a key responsibility</li>
    <li>Bullet point highlighting an impact</li>
</ul>

<h2>Education</h2>
<p>[Degree] | [University Name] | [Graduation Year]</p>

<h2>Skills</h2>
<ul>
    <li>Skill 1</li>
    <li>Skill 2</li>
    <li>Skill 3</li>
</ul>

<h2>Projects</h2>
<h3>[Project Name]</h3>
<p>Brief description of the project and its impact.</p>

<h2>Certifications</h2>
<p>[List relevant certifications]</p>

<h2>References</h2>
<p>Available upon request.</p>

`
},


    
    { id:"project-proposal", label:"Project Proposal", imageUrl: "project-proposal.svg", 
    initialContent: `<h1>Project Proposal: [Project Title]</h1>
<p><strong>Prepared by:</strong> [Your Name]</p>
<p><strong>Date:</strong> [MM/DD/YYYY]</p>

<h2>1. Introduction</h2>
<p>Brief introduction to the project, its purpose, and the problem it aims to solve.</p>

<h2>2. Objectives</h2>
<ul>
    <li>Objective 1</li>
    <li>Objective 2</li>
    <li>Objective 3</li>
</ul>

<h2>3. Scope</h2>
<p>Define what is included in the project and what is outside the scope.</p>

<h2>4. Timeline</h2>
<p>Expected timeline for project phases:</p>
<ul>
    <li>Phase 1 - Research & Planning: [Start Date] - [End Date]</li>
    <li>Phase 2 - Development: [Start Date] - [End Date]</li>
    <li>Phase 3 - Testing & Deployment: [Start Date] - [End Date]</li>
</ul>

<h2>5. Budget</h2>
<p>Estimated cost and resource allocation for the project.</p>

<h2>6. Conclusion</h2>
<p>Summary and final thoughts.</p>
`

},
    
{ id:"letter", label:"Letter Document", imageUrl: "/letter.svg", 
    initialContent:`<p>[Your Name]</p>
<p>[Your Address]</p>
<p>[City, State, Zip Code]</p>
<p>[Your Email]</p>
<p>[Date]</p>

<p>[Recipient's Name]</p>
<p>[Recipient's Address]</p>
<p>[City, State, Zip Code]</p>

<h2>Subject: [Letter Subject]</h2>

<p>Dear [Recipient's Name],</p>

<p>Introduction paragraph stating the purpose of the letter.</p>

<p>Body paragraph(s) elaborating on the topic.</p>

<p>Conclusion paragraph with a call to action or closing remarks.</p>

<p>Sincerely,</p>
<p>[Your Name]</p>
`},
    
{ id:"business-letter", label:"Business Letter", imageUrl: "business-letter.svg", 
    initialContent: `<p>[Your Company Name]</p>
<p>[Your Address]</p>
<p>[City, State, Zip Code]</p>
<p>[Your Email]</p>
<p>[Your Phone Number]</p>
<p>[Date]</p>

<p>[Recipient's Name]</p>
<p>[Recipient's Company]</p>
<p>[Recipient's Address]</p>
<p>[City, State, Zip Code]</p>

<h2>Subject: [Business Letter Subject]</h2>

<p>Dear [Recipient's Name],</p>

<p>Introduction paragraph explaining the reason for the business letter.</p>

<p>Body paragraph(s) detailing the request, information, or proposal.</p>

<p>Conclusion with next steps or call to action.</p>

<p>Sincerely,</p>
<p>[Your Name]</p>
<p>[Your Position]</p>
`},
    { id:"cover-letter", label:"Cover Letter", imageUrl: "cover-letter.svg", 
        initialContent: `<p>[Your Name]</p>
<p>[Your Address]</p>
<p>[City, State, Zip Code]</p>
<p>[Your Email]</p>
<p>[Your Phone Number]</p>
<p>[Date]</p>

<p>[Hiring Manager's Name]</p>
<p>[Company Name]</p>
<p>[Company Address]</p>
<p>[City, State, Zip Code]</p>

<h2>Subject: Application for [Job Title]</h2>

<p>Dear [Hiring Manager's Name],</p>

<p>I am excited to apply for the [Job Title] position at [Company Name]. With [X years] of experience in [relevant field], I am confident that my skills align well with your team’s needs.</p>

<p>In my previous role as [Previous Job Title] at [Previous Company], I [mention an accomplishment or key skill]. I am particularly skilled in [mention a relevant skill] and passionate about [mention something relevant to the company].</p>

<p>I would love the opportunity to further discuss how I can contribute to [Company Name]. Thank you for your time and consideration.</p>

<p>Sincerely,</p>
<p>[Your Name]</p>
`},
    { id:"software-proposal", label:"Software Development Proposal", imageUrl: "/software-proposal.svg", 
        initialContent: `<h1>Software Development Proposal</h1>
<p><strong>Submitted by:</strong> [Your Name/Company]</p>
<p><strong>Date:</strong> [MM/DD/YYYY]</p>

<h2>1. Executive Summary</h2>
<p>Overview of the software project, its purpose, and expected benefits.</p>

<h2>2. Project Objectives</h2>
<ul>
    <li>Objective 1</li>
    <li>Objective 2</li>
    <li>Objective 3</li>
</ul>

<h2>3. Features & Functionalities</h2>
<p>List and describe key features of the proposed software.</p>
<ul>
    <li>Feature 1: Description</li>
    <li>Feature 2: Description</li>
    <li>Feature 3: Description</li>
</ul>

<h2>4. Technology Stack</h2>
<p>Proposed technologies for development:</p>
<ul>
    <li>Frontend: [Technology Name]</li>
    <li>Backend: [Technology Name]</li>
    <li>Database: [Technology Name]</li>
</ul>

<h2>5. Timeline & Milestones</h2>
<p>Proposed development timeline:</p>
<ul>
    <li>Phase 1 - Requirements & Planning: [Start Date] - [End Date]</li>
    <li>Phase 2 - Development & Testing: [Start Date] - [End Date]</li>
    <li>Phase 3 - Deployment & Maintenance: [Start Date] - [End Date]</li>
</ul>

<h2>6. Budget & Cost Estimation</h2>
<p>Estimated project cost and payment structure.</p>

<h2>7. Conclusion</h2>
<p>Summary and next steps.</p>
`},

    ];
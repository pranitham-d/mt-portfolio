import { 
  PortfolioData, 
  CoreCompetencyCategory, 
  Skill, 
  Experience, 
  Project, 
  Achievement, 
  Education, 
  Certification 
} from '../types';

export const personalInfo: PortfolioData = {
  name: "PRANITHAM DEVARAKONDA",
  title: "IT Systems Engineer & Administrator",
  headline: "Infrastructure, Virtualization, Backup & Automation",
  summary: "Results-driven IT Systems Engineer with 2+ years of experience administering large-scale, mission-critical infrastructure spanning 1,300+ physical hosts and 330+ cloud-hosted servers across Windows, Linux (RHEL), and Microsoft Azure environments. Hands-on expertise in virtualization (Nutanix, VMware), enterprise backup and disaster recovery (Cohesity, IBM TSM, Veeam), storage (NetApp ONTAP), and core network services (Infoblox). Proven record of maintaining 100% SLA compliance while driving automation initiatives with Power Automate, Ansible, Python, and Bash to streamline operations and reporting. Skilled at building Power BI dashboards for executive-level visibility, performing root-cause analysis on complex, multi-domain infrastructure issues, and collaborating cross-functionally in fast-paced enterprise and managed-services environments. Detail-oriented, automation-minded, and committed to continuous improvement and service delivery excellence.",
  contact: {
    phone: "+91 8096054500",
    email: "pranitham12374@gmail.com",
    location: "Hyderabad, Telangana, India",
    website: "https://pranithamdevarakonda.netlify.app",
    linkedin: "https://linkedin.com/in/pranitham-devarakonda",
    github: "https://github.com/pranitham-d"
  },
  profileImage: "https://lh3.googleusercontent.com/d/160XudLb8S7YOj83qyqFvItiQ546YSdeM",
  resumeUrl: "https://drive.google.com/uc?export=download&id=1T0GnrrvWR8teOti3Gc8DiAv0hZsC8n08"
};

export const coreCompetencies: CoreCompetencyCategory[] = [
  {
    category: "Server & Systems Administration",
    skills: [
      "Windows Server & Linux (RHEL 7/8/9) Administration",
      "Physical & Virtual Server Management (1,300+ hosts)",
      "Patch Management & Compliance"
    ]
  },
  {
    category: "Virtualization & Cloud",
    skills: [
      "Nutanix AHV",
      "VMware vSphere",
      "Microsoft Azure (VM Provisioning, Snapshots, Resource Management)"
    ]
  },
  {
    category: "Backup, Storage & Recovery",
    skills: [
      "Cohesity",
      "IBM Tivoli Storage Manager (TSM)",
      "Veeam Backup & Replication",
      "NetApp ONTAP"
    ]
  },
  {
    category: "Networking",
    skills: [
      "Infoblox (DNS / DHCP / IPAM)",
      "Network & Connectivity Troubleshooting"
    ]
  },
  {
    category: "Automation & Scripting",
    skills: [
      "Ansible",
      "Python",
      "Bash Scripting",
      "Microsoft Power Automate"
    ]
  },
  {
    category: "Monitoring, Reporting & ITSM",
    skills: [
      "Power BI (Live SQL Server Dashboards)",
      "ServiceNow",
      "Splunk",
      "SLA Management",
      "Incident & Root Cause Analysis"
    ]
  }
];

export const skillsData: Skill[] = [
  { name: "Linux (RHEL 7/8/9) Admin", level: 95, category: "Infrastructure" },
  { name: "Windows Server Management", level: 92, category: "Infrastructure" },
  { name: "Physical Hosts (1,300+)", level: 94, category: "Infrastructure" },
  { name: "Microsoft Azure Operations", level: 88, category: "Cloud & Virtualization" },
  { name: "VMware vSphere & Nutanix AHV", level: 88, category: "Cloud & Virtualization" },
  { name: "Cohesity, TSM & Veeam Backup", level: 86, category: "Storage & Backup" },
  { name: "NetApp ONTAP Storage", level: 84, category: "Storage & Backup" },
  { name: "Infoblox (DNS / DHCP / IPAM)", level: 88, category: "Networking" },
  { name: "Ansible & Bash Automation", level: 92, category: "Automation & Scripting" },
  { name: "Python & Power Automate", level: 88, category: "Automation & Scripting" },
  { name: "Power BI & Live SQL Dashboards", level: 90, category: "Monitoring & ITSM" },
  { name: "ServiceNow & Incident Management", level: 86, category: "Monitoring & ITSM" }
];

export const experienceData: Experience[] = [
  {
    company: "Micron Technology",
    role: "IT Eng Systems Management",
    period: "Feb 2026 – Present",
    location: "Hyderabad, India",
    description: [
      "Administer and support enterprise infrastructure of 1,300+ physical servers across Windows and Linux environments, ensuring high availability, performance, and security compliance.",
      "Manage enterprise backup and disaster recovery operations using Cohesity, IBM Tivoli Storage Manager (TSM), and Veeam, safeguarding critical business data and enabling rapid recovery.",
      "Administer virtualization platforms including Nutanix AHV and VMware vSphere, supporting provisioning, capacity planning, and performance optimization across the hybrid environment.",
      "Manage enterprise storage on NetApp ONTAP and core network services (DNS/DHCP/IPAM) via Infoblox to support critical infrastructure.",
      "Troubleshoot and resolve complex, multi-domain infrastructure issues across server, storage, backup, and network layers, consistently maintaining 100% SLA compliance.",
      "Design and build Power BI dashboards with live SQL Server connections for real-time infrastructure health monitoring and executive-level reporting.",
      "Develop Power Automate workflows to automate recurring administrative tasks and reporting, improving operational efficiency and reducing manual effort.",
      "Deliver Tier 2/3 issue resolution for end users and represent infrastructure status and progress in senior management review calls."
    ]
  },
  {
    company: "Cloud4c Services",
    role: "Linux Engineer",
    period: "Jun 2024 – Feb 2026",
    location: "Hyderabad, India",
    description: [
      "Administered and monitored a large-scale infrastructure of approximately 330 Linux servers, ensuring optimal performance, availability, and security through 24×7 operational support for client environments.",
      "Performed regular patch management and updates, minimizing vulnerabilities and maintaining compliance across environments.",
      "Supported build and deployment operations, including provisioning new virtual machines and configuring Veritas Clusters for high availability.",
      "Troubleshot system issues, performed root cause analysis, and implemented corrective actions to maintain service continuity.",
      "Applied Ansible automation for routine task execution and system configuration, improving operational efficiency."
    ]
  },
  {
    company: "Cloud4c Services",
    role: "Digital Ops Intern",
    period: "Feb 2024 – May 2024",
    location: "Hyderabad, India",
    description: [
      "Worked on ServiceNow ticket categorization and triaging while actively monitoring event alerts (CPU, memory, I/O) to support incident response and escalation.",
      "Gained practical experience with Azure operations, including snapshot management and basic resource administration.",
      "Assisted in vulnerability management analysis to help teams identify and prioritize security risks across server environments.",
      "Collaborated with cross-functional teams to ensure infrastructure stability and support resolution of service-affecting issues."
    ]
  }
];

export const projectsData: Project[] = [
  {
    title: "Patch Management Automation for Linux Kernels using Ansible",
    description: [
      "Automated the end-to-end patch management lifecycle for Linux virtual machines using Ansible, including installation of the latest kernel and critical security updates to mitigate vulnerabilities and improve system stability.",
      "Built automation logic to identify and remove outdated kernels, conserving storage and maintaining compliance.",
      "Reduced manual administrative overhead while strengthening security posture in an Azure cloud-based environment."
    ],
    technologies: ["Ansible", "Linux (RHEL 7/8/9)", "Security Updates", "Kernel Management", "Azure VMs"],
    techSummary: "Ansible, Linux (RHEL 7/8/9), Security Updates, Kernel Management, Azure Virtual Machines",
    imageUrl: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?q=80&w=800&auto=format&fit=crop",
    githubUrl: "https://github.com/pranitham-d"
  },
  {
    title: "Power Automate Reporting & Workflow Automation",
    description: [
      "Designed and built Power Automate flows to automatically generate customized reports and status summaries for infrastructure and operations teams.",
      "Streamlined recurring manual reporting tasks, reducing turnaround time and freeing up capacity for higher-priority troubleshooting and project work."
    ],
    technologies: ["Power Automate", "SharePoint", "Excel", "Workflow Automation"],
    techSummary: "Microsoft Power Automate, SharePoint/Excel Integrations",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
    githubUrl: "https://github.com/pranitham-d"
  },
  {
    title: "Power BI Infrastructure Monitoring Dashboards",
    description: [
      "Built Power BI dashboards with live SQL Server connections to provide real-time, high-level visibility into infrastructure health, SLA metrics, and operational KPIs for management review.",
      "Enabled faster, data-driven decision-making for infrastructure and leadership teams."
    ],
    technologies: ["Power BI", "SQL Server", "Live Connections", "Executive Reporting"],
    techSummary: "Power BI, SQL Server (Live Connection)",
    imageUrl: "https://images.unsplash.com/photo-1543286386-713bdd548da4?q=80&w=800&auto=format&fit=crop",
    githubUrl: "https://github.com/pranitham-d"
  },
  {
    title: "Smart Plant Watering System (IoT)",
    description: [
      "Designed an IoT-based automated irrigation system using soil moisture sensors to trigger watering based on real-time readings.",
      "Architected for extensibility with dynamic moisture thresholds, an LCD status display, and data logging for historical tracking.",
      "Demonstrated end-to-end sensor-based decision-making and hardware automation."
    ],
    technologies: ["Microcontrollers", "Soil Moisture Sensors", "IoT", "Embedded Hardware"],
    techSummary: "Microcontrollers, Soil Moisture Sensors, IoT",
    imageUrl: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=800&auto=format&fit=crop",
    githubUrl: "https://github.com/pranitham-d"
  },
  {
    title: "Mini Tech Activities & Small-Scale Tools",
    description: [
      "Ansible Playbook Generator, URL Shortener, and other small-scale automation and web tools built to explore new frameworks and tools."
    ],
    technologies: ["Ansible", "Python", "Web Tools", "Automation Generators"],
    techSummary: "Ansible Playbook Generator, URL Shortener, Web Tools",
    imageUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800&auto=format&fit=crop",
    githubUrl: "https://github.com/pranitham-d"
  }
];

export const achievementsData: Achievement[] = [
  {
    title: "1,300+ Physical Hosts & 330+ Cloud Nodes",
    detail: "Managed and administered large-scale mission-critical infrastructure across enterprise and managed-services environments."
  },
  {
    title: "100% SLA Compliance",
    detail: "Consistently maintained 100% SLA compliance across all infrastructure, virtualization, and support engagements."
  },
  {
    title: "Process & Reporting Automation",
    detail: "Self-initiated and delivered multiple automation workflows (Power Automate, Ansible) streamlining daily operations and reporting."
  },
  {
    title: "Proactive Leadership & Ownership",
    detail: "Proactively led project and automation initiatives beyond assigned responsibilities, demonstrating strong ownership."
  },
  {
    title: "Executive Representation",
    detail: "Regularly presented infrastructure status, health metrics, and progress updates in senior management review calls."
  }
];

export const educationData: Education = {
  degree: "Bachelor of Technology",
  field: "Information Technology",
  institution: "Anurag University",
  location: "Hyderabad",
  cgpa: "8.7",
  period: "Sep 2020 – Jun 2024"
};

export const certificationsData: Certification[] = [
  {
    name: "LFS101 – Introduction to Linux",
    issuer: "The Linux Foundation"
  },
  {
    name: "Intermediate Python Certification",
    issuer: "Kaggle"
  },
  {
    name: "HTML, CSS and JavaScript for Web Developers",
    issuer: "Johns Hopkins University"
  },
  {
    name: "SOC & Cloud Security Fundamentals",
    issuer: "Palo Alto Networks"
  },
  {
    name: "TalentNext course on Java Full Stack",
    issuer: "Wipro"
  }
];

export const interestsData: string[] = [
  "IoT & Embedded Systems",
  "Microcontrollers",
  "Japanese Language Learning",
  "Exploring New Technology Stacks"
];


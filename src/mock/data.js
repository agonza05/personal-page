import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Alberto Gonzalez | Network Engineer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Personal site', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Alberto Gonzalez',
  subtitle: "I'm an experienced Network Engineer (and a hobbyist developer).",
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    'I am Network Engineer with experience managing and troubleshooting multi-vendor environments, providing technical support to data-center and campus networks and ensuring smooth operation of network infrastructure.',
  paragraphTwo:
    'I usually work installing, configuring and maintaining devices that include Palo Alto firewalls, F5 load balancers, Cisco Nexus switches, Cisco ASR routers, Cisco ASA firewalls, Meraki Access Points, Cisco Identity Service Engine, Cisco Application Centric Infrastructure, Juniper Pulse Secure SSLVPN and ExtraHop network visibility appliance.',
  paragraphThree:
    'I have great understanding of the incident, change and problem management processes.',
  resume: './Alberto_Gonzalez_CV.docx', // 'https://www.linkedin.com/in/agonza05/', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'cisco_ansible.jpeg',
    title: 'Pipeline for Cisco ASA',
    info:
      'Design and implementation of a piepline for configuration deployment of Cisco ASA firewalls using ansible. Features of the pipeline include: deployment of base configuration and snippets, creation of new IPSec tunnels using templates and addition or removal of NAT rules.',
    info2: '',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'terraform_f5_2.jpg',
    title: 'Automation for F5 LTM',
    info:
      'Declare, create and configure virtual services on F5 BIG-IP LTM using terraform. Creation of Infrastructure as Code files used by the provider to automate the deployment of new virtual services and reducing the number of manual configuration updates.',
    info2: '',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'cisco_ise_3.jpg',
    title: 'Deployment of Cisco ISE',
    info:
      'Implementation and configuration of two clusters of Cisco ISE appliances. Device hardening and policy configuration implemented to enable role-based access control to the network infastructure using Multi Factor Authentication.',
    info2: '',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'gonzalez.alberto@outlook.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/agonza05/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/agonza05',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};

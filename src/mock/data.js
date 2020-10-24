import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Alberto Gonzalez | Network Engineer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'My personal site', // e.g: Welcome to my website
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
  resume: 'https://www.linkedin.com/in/agonza05/', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
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

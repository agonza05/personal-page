import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Alberto Gonzalez | Network Engineer | Munich, Germany', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description:
    'Network Engineer with experience managing environments which include Palo Alto FWs, F5 LBs, Cisco Nexus, ASR, ASA, ACI, Meraki and Cisco ISE.', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Alberto Gonzalez',
  subtitle: "I'm an experienced Network Engineer.",
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    'I am a Network Engineer with experience managing and troubleshooting multi-vendor environments, providing technical support to data-center and campus networks and ensuring smooth operation of network infrastructure.',
  paragraphTwo:
    'I usually work installing, configuring and maintaining devices that include Palo Alto firewalls, F5 load balancers, Cisco Nexus switches, Cisco ASR routers, Cisco ASA firewalls, Meraki Access Points, Cisco Identity Service Engine, Cisco Application Centric Infrastructure, Juniper Pulse Secure SSLVPN and ExtraHop network visibility appliance.',
  paragraphThree: 'Feel free to download my up-to-date cv.',
  resume: 'https://cv.agonza.net', // 'https://www.linkedin.com/in/agonza05/', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'migrating_to_aci.jpg',
    title: 'Legacy network migration to Cisco ACI',
    info:
      'Plan and implementation of a DC migration from legacy network technologies to Cisco ACI. Activities included review current configration, plan migration strategy, prepare configuration scripts, physically relocate devices and configure new fabric policies on ACI.',
    info2: '',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'cisco_ansible.jpeg',
    title: 'Pipeline for Cisco ASA',
    info:
      'Design and implementation of an ansible pipeline for configuration deployment of Cisco ASA firewalls. Features include: deployment of configuration snippets or complete configuration backup, creation of new IPSec tunnels using templates and addition or removal of NAT rules.',
    info2: '',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'terraform_f5_2.jpg',
    title: 'Automation for F5 LTM',
    info:
      'Creation and configuration of virtual services on F5 BIG-IP LTM using terraform. Declaration of Infrastructure as Code files used by the provider to automate the deployment of new virtual services and reducing the number of manual configuration updates.',
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

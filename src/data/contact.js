import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { googlescholar } from '@fortawesome/free-brands-svg-icons/google';
// import { faFacebookF } from '@fortawesome/free-brands-svg-icons/faFacebookF';
// import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram';
// import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';
// import { faAngellist } from '@fortawesome/free-brands-svg-icons/faAngellist';
import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons/faEnvelope';
// See https://fontawesome.com/icons?d=gallery&s=brands,regular&m=free
// to add other icons.

const data = [
  {
    link: 'https://github.com/yz-cnsdqz',
    label: 'Github',
    icon: faGithub,
  },
  {
    link: 'https://scholar.google.com/citations?user=5VpkLO8AAAAJ&hl=en',
    label: 'GoogleScholar',
    icon: googlescholar,
  },
  // {
  //   link: 'https://www.instagram.com/dangelosaurus/',
  //   label: 'Instagram',
  //   icon: faInstagram,
  // },
  {
    link: 'https://www.linkedin.com/in/yan-zhang-3119b11a/',
    label: 'LinkedIn',
    icon: faLinkedinIn,
  },
  // {
  //   link: 'https://angel.co/michael-d-angelo',
  //   label: 'Angel List',
  //   icon: faAngellist,
  // },
  {
    link: 'https://twitter.com/cnsdqzyz',
    label: 'Twitter',
    icon: faTwitter,
  },
  {
    link: 'mailto:yan.zhang@inf.ethz.ch',
    label: 'Email',
    icon: faEnvelope,
  },
];

export default data;

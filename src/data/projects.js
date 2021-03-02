// TODO Add a couple lines about each project
const data = [
  {
    title: 'We are More than Our Joints: Predicting how 3D Bodies Move',
    subtitle: 'CVPR 2021',
    link: 'https://neuralbodies.github.io/LEAP/',
    image: '/images/projects/MOJO.jpg',
    date: '2021-03-01',
    desc:
      'Contributions:'
      + '(1) A new marker-based 3D body representation.'
      + '(2) VAE with latent DCT frequencies for motion modeling.'
      + '(3) Re-projection scheme to eliminate RNN accumulation error.',
  },
  {
    title: 'LEAP: Learning Articulated Occupancy of People',
    subtitle: 'CVPR 2021',
    link: 'https://neuralbodies.github.io/LEAP/',
    image: '/images/projects/LEAP.jpg',
    date: '2021-03-01',
    desc:
      'Contributions:'
      + '(1) Fast occupency query of a 3D human body.'
      + '(2) Learned linear blend skinning weights.'
      + '(3) Differentiable occupency modeling to solve mesh inter-penetration.',
  },
  {
    title: '4D Human Body Capture from Egocentric Video via 3D Scene Grounding',
    subtitle: 'arxiv 2021',
    link: 'https://aptx4869lm.github.io/4DEgocentricBodyCapture/',
    image: '/images/projects/Cap4D.jpg',
    date: '2021-02-01',
    desc:
      'Contributions:'
      + '(1) 3D body and scene capture from a in-the-wild video.'
      + '(2) Person-ground interaction modelling',
  },
  {
    title: 'Perpetual Motion: Generating Unbounded Human Motion',
    subtitle: 'arxiv 2020',
    image: '/images/projects/perpetual_motion.jpg',
    date: '2020-06-15',
    desc:
      'Contributions: '
      + '(1) A conditional VAE to couple global trajectory and local pose.'
      + '(2) A robust KL-divergence term to avoid posterior collapse',
  },
  {
    title: 'PLACE: Proximity Learning of Articulation and Contact in 3D Environments',
    subtitle: '3DV 2020',
    link: 'https://sanweiliti.github.io/PLACE/PLACE.html',
    image: '/images/projects/PLACE.jpg',
    date: '2020-11-25',
    desc:
      'Contributions: '
      + '(1) State-of-the-art technique to put 3D bodies in 3D scenes.'
      + '(2) Basis point set to model human-scene interactions.',
  },
  {
    title: 'Grasping Field: Learning Implicit Representations for Human Grasps (best paper award)',
    subtitle: '3DV 2020',
    link: 'https://github.com/korrawe/grasping_field',
    image: '/images/projects/grasping_field.jpg',
    date: '2020-11-25',
    desc:
      'Contributions: '
      + '(1) Simple and effective implicit representation of hand-object interaction.'
      + '(2) Generating hand grasping given an objects. Comparable to ground truth.',
  },
  {
    title: 'Generating 3D People in Scenes without People (oral)',
    subtitle: 'CVPR 2020',
    link: 'https://ps.is.mpg.de/publications/smpl-x-conditional-vae-prox-scene-constraints',
    image: '/images/projects/PSI.jpg',
    date: '2020-06-19',
    desc:
      'Contributions: '
      + '(1) First work to generate various 3D body meshes in 3D scenes.'
      + '(2) Benchmarking this task with datasets and evaluation metrics.',
  },
  {
    title: 'Frontal Low-rank Random Tensors for Fine-grained Action Segmentation',
    subtitle: 'arxiv 2019',
    image: '/images/projects/low_rank.jpg',
    date: '2019-12-01',
    desc:
      'Contributions: '
      + '(1) A novel compact bilinear pooling layer for action segmentation.'
      + '(2) Theories on how to use random projection to approximate reproducing kernels in Hilbert space.',
  },
  {
    title: 'Local Temporal Bilinear Pooling for Fine-Grained Action Parsing',
    subtitle: 'CVPR 2019',
    image: '/images/projects/LTBP.jpg',
    date: '2019-07-01',
    desc:
      'Contributions: '
      + '(1) Showing that high-order information is useful for fine-grained action segmentation.'
      + '(2) Lossless data dimension reduction.',
  },
  {
    title: 'Local Temporal Bilinear Pooling for Fine-Grained Action Parsing',
    subtitle: 'CVPR 2019',
    image: '/images/projects/LTBP.jpg',
    date: '2019-07-01',
    desc:
      'Contributions: '
      + '(1) Showing that high-order information is useful for fine-grained action segmentation.'
      + '(2) Lossless data dimension reduction.',
  },
];

export default data;

// TODO Add a couple lines about each project
const data = [
  {
    title: 'We are More than Our Joints: Predicting how 3D Bodies Move',
    subtitle: 'CVPR 2021',
    link: 'https://yz-cnsdqz.github.io/MOJO/MOJO.html',
    image: '/images/projects/MOJO-teaser.png',
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
    image: '/images/projects/leap-teaser.png',
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
    image: '/images/projects/FPVCapture.png',
    date: '2021-02-01',
    desc:
      'Contributions:'
      + '(1) 3D body and scene capture from a in-the-wild video.'
      + '(2) Person-ground interaction modelling',
  },
  {
    title: 'Perpetual Motion: Generating Unbounded Human Motion',
    subtitle: 'arxiv 2020',
    image: '/images/projects/PM-teaser.png',
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
    image: '/images/projects/PLACE-teaser.png',
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
    image: '/images/projects/GF-teaser.png',
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
    image: '/images/projects/PSI-teaser.png',
    date: '2020-06-19',
    desc:
      'Contributions: '
      + '(1) First work to generate various 3D body meshes in 3D scenes.'
      + '(2) Benchmarking this task with datasets and evaluation metrics.',
  },
  {
    title: 'Frontal Low-rank Random Tensors for Fine-grained Action Segmentation',
    subtitle: 'arxiv 2019',
    image: '/images/projects/FLRT-teaser.png',
    date: '2019-12-01',
    desc:
      'Contributions: '
      + '(1) A novel compact bilinear pooling layer for action segmentation.'
      + '(2) Theories on how to use random projection to approximate reproducing kernels in Hilbert space.',
  },
  {
    title: 'Local Temporal Bilinear Pooling for Fine-Grained Action Parsing',
    subtitle: 'CVPR 2019',
    link: 'https://ps.is.tuebingen.mpg.de/publications/bilinear2018',
    image: '/images/projects/lbp-teaser.png',
    date: '2019-07-01',
    desc:
      'Contributions: '
      + '(1) Showing that high-order information is useful for fine-grained action segmentation.'
      + '(2) Lossless data dimension reduction.',
  },
  {
    title: 'Multi-modal Pain Intensity Recognition based on the SenseEmotion Database',
    subtitle: 'IEEE Trans. on Affective Computing',
    image: '/images/projects/SensePain-teaser.png',
    date: '2019-01-31',
    desc:
      'Contributions: '
      + '(1) Pain intensity recognition from facial videos.'
      + '(2) A coherent story including the dataset, methods and benchmarks.',
  },
  {
    title: 'An Empirical Study Towards Understanding How Deep Convolutional Nets Recognize Falls',
    subtitle: 'ECCVW 2018',
    image: '/images/projects/acvr2018.PNG',
    date: '2018-10-31',
    desc:
      'Contributions: '
      + '(1) Evaluating how reliable recognizing falling from videos with CNNs.'
      + '(2) Appearance and optical flow are complementary.',
  },
  {
    title: 'Human Motion Parsing by Hierarchical Dynamic Clustering',
    subtitle: 'BMVC 2018',
    image: '/images/projects/HDC.jpg',
    date: '2018-9-31',
    desc:
      'Contributions: '
      + '(1) Unsupervised temporal mocap data segmentation without deep learning method'
      + '(2) Computational cost is very low.',
  },
  {
    title: 'Temporal Human Action Segmentation via Dynamic Clustering',
    subtitle: 'arxiv 2018',
    image: '/images/projects/dc.png',
    date: '2018-8-31',
    desc:
      'Contributions: '
      + '(1) A new unsupervised clustering algorithm'
      + '(2) Faster and better than k-means and spectual clustering for time series processing',
  },
  {
    title: 'Continuous Activity Understanding based on Accumulative Pose-Context Visual Patterns',
    subtitle: 'IPTA 2017',
    image: '/images/projects/earlyrecog.png',
    date: '2017-12-11',
    desc:
      'Contributions: '
      + '(1) Recognizing an action before it happens.'
      + '(2) Providing a fast method for daily living behavior continous understanding.',
  },
  {
    title: 'Visual Confusion Recognition in Movement Patterns from Walking Path and Motion Energy',
    subtitle: 'ICOST 2017',
    image: '/images/projects/confusion.png',
    date: '2017-10-05',
    desc:
      'Contributions: '
      + '(1) Proposing a dataset of people searching items in a cluttered environment.'
      + '(2) Tracking the human body and estimating the 3D global trajectory.'
      + '(3) A novel feature of global trajectories and mental confusion understanding.',
  },
  {
    title: 'The SenseEmotion Database: A Multimodal Database for the Development and Systematic Validation of an Automatic Pain- and Emotion-Recognition System',
    subtitle: 'IAPRW 2016',
    image: '/images/projects/senseemotion.png',
    date: '2016-12-04',
    desc:
      'Contributions: '
      + '(1) A comprehensive dataset for pain and emotion recognition.',
  },
  {
    title: 'Tissue Classification for Laparoscopic Image Understanding Based on Multispectral Texture Analysis',
    subtitle: 'SPIE MI 2016',
    image: '/images/projects/spie.png',
    date: '2016-12-04',
    desc:
      'Contributions: '
      + '(1) Real ex-vivo tissue samples for method evaluation.'
      + '(2) A multispectual local binary pattern descriptor is proposed.',
  },
  {
    title: 'Improving Two-Thumb Text Entry on Touchscreen Devices',
    subtitle: 'ACM SIGCHI',
    image: '/images/projects/textentry.png',
    date: '2013-05-01',
    desc:
      'Contributions: ' 
      + '(1) Global optimization for layout design'
      + '(2) Computational modelling according to Fitts Law',
  },
];

export default data;

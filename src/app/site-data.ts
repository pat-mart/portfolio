export const navigation = [
  { label: "About", href: "/home" },
  { label: "Projects", href: "/projects" },
  { label: "Blog", href: "/blog-landing" },
];

export const profile = {
  name: "Patrick Martin",
  initials: "PM",
  role: "Computer Science student",
  bio: "UMass Amherst undergrad interested in CS research.",
  location: "Massachusetts · New York",
  affiliation: "UMass Amherst",
  github: "https://github.com/pat-mart",
  linkedin: "https://www.linkedin.com/in/patrick-g-martin/",
};

export const projects = [
  {
    title: "TensorDining",
    description:
      "A custom PyTorch neural network, supported by an automated data-collection and labeling pipeline. Current work focuses on improving the model's accuracy.",
    href: "https://github.com/FRC3950/GymSauna",
    technologies: ["Python", "PyTorch", "Machine learning"],
  },
  {
    title: "Tuneminal",
    description:
      "A chromatic tuner and metronome written in Go. It uses PortAudio to manage audio buffers generated without an external sound file.",
    href: "https://github.com/pat-mart/tune-minal",
    technologies: ["Go", "PortAudio", "Digital audio"],
  },
  {
    title: "Alpha for Astronomy",
    description:
      "A Flutter iOS application for planning astronomy observations, accompanied by an open-source Dart library for astronomical calculations.",
    href: "https://github.com/pat-mart/alpha_app",
    technologies: ["Flutter", "Dart", "iOS"],
  },
];

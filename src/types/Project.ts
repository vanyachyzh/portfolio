export type Project = {
  title: string,
  description: string
  logo: string,
  technologies: (string[] | (() => JSX.Element))[],
  gitLink: string,
  demoLink: string
};

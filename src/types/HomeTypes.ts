export type TitleProps = {
  text: string;
  width?: string;
  extraClases?: string;
  animateWords?: boolean;
};

export type ContactBtnProps = {
  name: string;
  url: string;
  hoverColor: string;
  pointColor: string;
};

export type MailBtnProps = {
  text: string;
  toggleModal: () => void;
};

export type ProjectCardProps = {
  name: string;
  logo: string;
  bgImage: string;
  color: string;
  url: string;
  isFirst: boolean;
  isHovered: boolean;
  isDimmed: boolean;
  hoveredColor: string | null;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  index: number;
  backImg?: string;
  tech?: ProjectTech[];
  deploy?: string;
  description?: string;
};
interface ProjectTech {
  name: string;
  icon: string;
}

export interface GithubProfileButtonProps {
  username: string;
  frontText?: string;
  hoverText?: string;
  target?: "_blank" | "_self";
}

export type HomeBtnProps = {
  parentMethod: () => void;
  text?: string;
};

export type ToggleBtnProps = {
  onToggle: () => void;
  isAboutPage: boolean;
};

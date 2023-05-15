import { ReactNode } from 'react';
import './About.scss';
import MyPhoto from './../../images/me.jpg';
import { TelegramIcon, GmailIcon, LinkedInIcon, GitIcon } from './../Icons/Icons';
import { Color } from '../../types/Color';

type Props = {
  children?: ReactNode,
}

export const About: React.FC<Props> = ({
  children,
}) => {
  return (
    <div className='about'>
      <img
        src={MyPhoto}
        className="about__photo"
      />

      <div className="about__technology-list">
        {children}
      </div>

      <h3 className="about__name">
        Ivan Chyzh
      </h3>

      <span className="about__description">
        Hello stranger! 👋
        <br />
        I am a frontend engineer, passionate
        about digital products that help people experience everyday life, not endure it.
      </span>

      <div className="about__social-links">


        <a
          target='__blank'
          className="about__social-link"
          href="mailto:ivan.chyzh.fe@gmail.com"
        >
          <GmailIcon />
        </a>

        <a
          target='__blank'
          className="about__social-link"
          href="http://www.linkedin.com/in/ivan-chyzh-8b927722a"
        >
          <LinkedInIcon />
        </a>

        <a
          target='__blank'
          className="about__social-link"
          href="http://t.me/ivan_chyzh"
        >
          <TelegramIcon />
        </a>

        <a
          target='__blank'
          className="about__social-link"
          href="https://github.com/vanyachyzh"
        >
          <GitIcon color={Color.Black} />
        </a>
      </div>
    </div>
  )
};

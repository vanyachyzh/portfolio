import { ReactNode, useState } from 'react';
import './Item.scss';
import { GitIcon } from '../Icons/Icons';
import { Color } from '../../types/Color';
import { truncateString } from '../../helpers/truncateString';

type Props = {
  children?: ReactNode,
  title: string,
  image: string,
  description: string,
  gitUrl?: string,
  demoUrl?: string,
}

export const Item: React.FC<Props> = ({
  children,
  image,
  description,
  title,
  gitUrl,
  demoUrl
}) => {
  const [iconColor, setIconColor] = useState(Color.Default)

  return (
    <div className='item'>
      <img className="item__image" src={image} alt="Logo" />

      <div className="item__info">
        <h3 className="item__title">{title}</h3>

        <span className="item__description">
          {truncateString(description, 86)}
        </span>
      </div>

      <div className="item__technology-list">
        {children}
      </div>

      <a
        target='__blank'
        className="item__demo-link"
        href={demoUrl}>
        DEMO
      </a>

      <a
        target='__blank'
        onMouseEnter={() => setIconColor(Color.Hover)}
        onMouseLeave={() => setIconColor(Color.Default)}
        href={gitUrl}
        className="item__git-link"
      >
        <GitIcon color={iconColor} />
      </a>
    </div>
  )
}
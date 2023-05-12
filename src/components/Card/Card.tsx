import { ReactNode } from 'react';
import './Card.scss';
import MyPhoto from './../../images/my-photo.jpg';

type Props = {
  children?: ReactNode,
  image: string
}

export const Card: React.FC<Props> = ({
  children,
  image
}) => {
  return (
    <div className='card'>
      <button
        style={{ backgroundImage: `url(${MyPhoto})` }}
        className="card__button"
      >
      </button>

      <div className="card__stack">
        {children}
      </div>

      <div className="card__info">
        <h3 className="card__title">Ivan Chyzh</h3>
        <span className="card__desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur perferendis, sapiente illo </span>
      </div>
    </div>
  )
}
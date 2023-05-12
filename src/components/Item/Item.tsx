import { ReactNode } from 'react';
import './Item.scss';
import { GitIcon } from '../Icons/Icons';

type Props = {
  children?: ReactNode,
  type?: 'plain' | 'complex',
  image: string
}

export const Item: React.FC<Props> = ({
  children,
  type = 'complex',
  image,
}) => {
  return (
    <div className='item'>
      <button
        style={{ backgroundImage: `url(${image})` }}
        className="item__button">
      </button>

      {type === 'complex' && (
        <>
          <div className="item__info">
            <h3 className="item__title">MET Museum</h3>
            <span className="item__desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur perferendis, sapiente illo </span>

            <div className="item__git">
            <GitIcon />
            </div>

          </div>

          <div className="item__stack">
            {children}
          </div>
        </>
      )}
    </div>
  )
}
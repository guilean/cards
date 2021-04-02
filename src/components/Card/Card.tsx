import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Props } from './Card.types';

export const Card = ({ title, image, description, afterLoad }: Props) => (
  <LazyLoadImage
    className='w-full rounded-lg'
    src={image}
    alt={`${title} ${description}`}
    afterLoad={afterLoad}
  />
);

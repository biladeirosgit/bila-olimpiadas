import React from 'react';
import { avatarSrc } from '../utils/images';

const SIZES = { sm: 32, md: 50, lg: 64 };

const Avatar = ({ name, size = 'md', className = '' }) => {
    const px = SIZES[size] || size;
    return (
        <img
            src={avatarSrc(name)}
            alt={name}
            loading="lazy"
            className={`avatar ${className}`}
            style={{ width: px, height: px, borderRadius: '50%' }}
        />
    );
};

export default Avatar;

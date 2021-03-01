import React from 'react';
import '../styles/Navbar.scss';

// Icon imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubAlt } from '@fortawesome/free-brands-svg-icons';
import { faMeteor, faHashtag, faVideo } from '@fortawesome/free-solid-svg-icons';
import { faImages } from '@fortawesome/free-regular-svg-icons';

// Main-Component
const Navbar = () => {
    return (
        <div className='Navbar'>
            <Item title='Home' icon={<FontAwesomeIcon icon={faMeteor} />} />
            <Item title='Trending' icon={<FontAwesomeIcon icon={faHashtag} />} />
            <Item title='Images' icon={<FontAwesomeIcon icon={faImages} />} />
            <Item title='Videos' icon={<FontAwesomeIcon icon={faVideo} />} />
            <Item title='GitHub' icon={<FontAwesomeIcon icon={faGithubAlt} />} />
        </div>
    );
};

export default Navbar;

// Sub-Components
const Item = (props) => {
    return (
        <div className='item'>
            {props.icon}
            <p className='title'>{props.title}</p>
        </div>
    );
};

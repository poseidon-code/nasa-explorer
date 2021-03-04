import '../styles/Navbar.scss';

// Icon imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubAlt } from '@fortawesome/free-brands-svg-icons';
import { faMeteor, faHashtag, faVideo } from '@fortawesome/free-solid-svg-icons';
import { faImages } from '@fortawesome/free-regular-svg-icons';
import { NavLink } from 'react-router-dom';

// Main-Component
const Navbar = () => {
    return (
        <div className='Navbar'>
            <Item title='Home' to='/' icon={<FontAwesomeIcon icon={faMeteor} />} />
            <Item title='Trending' to='/trending' icon={<FontAwesomeIcon icon={faHashtag} />} />
            <Item title='Images' to='/images' icon={<FontAwesomeIcon icon={faImages} />} />
            <Item title='Videos' to='/videos' icon={<FontAwesomeIcon icon={faVideo} />} />
            <a href='https://www.github.com/poseidon-code' target='_blank' rel='noreferrer noopener' className='item'>
                <FontAwesomeIcon icon={faGithubAlt} />
                <p className='title'>GitHub</p>
            </a>
        </div>
    );
};

export default Navbar;

// Sub-Components
const Item = (props) => {
    return (
        <NavLink to={props.to}>
            <div className='item'>
                {props.icon}
                <p className='title'>{props.title}</p>
            </div>
        </NavLink>
    );
};

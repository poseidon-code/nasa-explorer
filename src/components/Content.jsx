import { useState, useRef } from 'react';
import Loading from './Loading';
import NotFound from './NotFound';
import Search from './Search';
import Navbar from './Navbar';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faHeart, faSearch } from '@fortawesome/free-solid-svg-icons';
import '../styles/Content.scss';

const Content = () => {
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(false);
    const inputRef = useRef();

    const searchHandler = async () => {
        setImages([]);
        setLoading(true);
        await getImage(inputRef.current.value);
    };

    const getImage = async (query) => {
        const response = await fetch(`https://images-api.nasa.gov/search?q=${query}&media_type=image`);
        const result = await response.json();
        if (result.collection.metadata.total_hits === 0) setImages(null);
        else {
            const data = result.collection.items.map((item, index) => {
                let value = {};
                let nasaID = item.data[0].nasa_id;
                value.id = index;
                value.thumbnail = item.links[0].href;
                value.link = `https://images-assets.nasa.gov/image/${nasaID}/${nasaID}~orig.jpg`;
                // value.love = 217;
                return value;
            });
            setImages(data);
        }
        setLoading(false);
    };

    return (
        <>
            <h1>
                <span role='img' aria-label='rocket'>
                    🚀
                </span>
                nasa.explorer
            </h1>
            <Search>
                <input
                    type='text'
                    ref={inputRef}
                    placeholder='explore universe...'
                    onKeyPress={(e) => {
                        if (e.key === 'Enter') searchHandler();
                    }}
                />
                <button className='search_button' onClick={searchHandler}>
                    <FontAwesomeIcon icon={faSearch} />
                </button>
            </Search>

            <div className='content'>
                <Navbar />
                {loading ? (
                    <Loading />
                ) : images ? (
                    <div className='Images'>
                        {images.map((item) => (
                            <Card image={item.thumbnail} key={item.id} love={item.love} download={item.link} />
                        ))}
                    </div>
                ) : (
                    <NotFound />
                )}
            </div>
        </>
    );
};

export default Content;

const Card = (props) => {
    return (
        <div className='card'>
            <img src={props.image} alt='images' />
            <a className='options download' href={props.download} target='_blank' rel='noopener noreferrer'>
                <FontAwesomeIcon icon={faDownload} />
            </a>
            {/* <div className="options love">
        <FontAwesomeIcon icon={faHeart} />
        <p>{props.love}</p>
      </div> */}
        </div>
    );
};

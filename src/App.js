import Images from './pages/Images';
import './styles/index.scss';

const App = () => {
    return (
        <div className='wrapper'>
            <a href='https://www.github.com/poseidon-code/nasa-explorer' target='_blank' rel='noopener noreferrer'>
                <span role='img' aria-label='rocket'>
                    🚀
                </span>
                nasa.explorer
            </a>
            <Images />
        </div>
    );
};

export default App;

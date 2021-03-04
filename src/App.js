import { Switch, Route, Redirect } from 'react-router-dom';

import Images from './pages/Images';
import Home from './pages/Home';
import Videos from './pages/Videos';
import Trending from './pages/Trending';

import Navbar from './components/Navbar';

import './styles/index.scss';

const App = () => {
    return (
        <div className='wrapper'>
            <h1>
                <span role='img' aria-label='rocket'>
                    🚀
                </span>
                nasa.explorer
            </h1>
            <Navbar />
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/images' component={Images} />
                <Route path='/videos' component={Videos} />
                <Route path='/trending' component={Trending} />
                <Route path='*' exact>
                    <Redirect to='/' />
                </Route>
            </Switch>
        </div>
    );
};

export default App;

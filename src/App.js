import logo from './logo.svg';
import './App.scss';

import Navigation from './Navigation.js';
import { Button } from 'react-bootstrap';

function App() {
    return (<div className="App">
        <Navigation/>
        <Button>Welcome</Button>
    </div>);
}

export default App;

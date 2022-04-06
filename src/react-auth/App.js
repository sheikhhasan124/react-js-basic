import React from 'react';
import app from './firebase.init';
import {getAuth} from 'firebase/auth'


const auth = getAuth(app)

const App = () => {
    return (
        <div>
            <button>google sign in</button>
        </div>
    );
};

export default App;
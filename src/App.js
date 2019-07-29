import React from 'react';
import Spinner from './Spinner';
import runSyncExample from './SyncExample';
import runAsyncExample from './AsyncExample';
import runAsyncBestExample from './AsyncBestExample';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
    return (
        <div className="App">
            <ul className="nav justify-content-center">
                <li className="nav-item">
                    <a className="nav-link active" href="#" onClick={runSyncExample}>Sync Example</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#" onClick={runAsyncExample}>Async Example</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#" onClick={runAsyncBestExample}>Async Best Example</a>
                </li>
            </ul>
            <div>
                <div id="story" />
                <Spinner isVisible='false' />
            </div>
        </div>
    );
}

export default App;

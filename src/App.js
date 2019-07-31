import React from 'react';
import Spinner from './Spinner';
import {resetPageContent} from './Utils';
import runSyncExample from './SyncExample';
import runAsyncExample from './AsyncExample';
import runAsyncBestExample from './AsyncBestExample';
import 'bootstrap/dist/css/bootstrap.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.runSyncExample = this.runSyncExample.bind(this);
        this.runAsyncExample = this.runAsyncExample.bind(this);
        this.runAsyncBestExample = this.runAsyncBestExample.bind(this);
        this.startSpinner = this.startSpinner.bind(this);
        this.stopSpinner = this.stopSpinner.bind(this);
        this.state = {isBusy : false}
    }

    runSyncExample(e) {
        e.preventDefault();

        resetPageContent();

        runSyncExample(this.startSpinner, this.stopSpinner);
    }

    runAsyncExample(e) {
        e.preventDefault();

        resetPageContent();

        runAsyncExample(this.startSpinner, this.stopSpinner);
    }

    runAsyncBestExample(e) {
        e.preventDefault();

        resetPageContent();

        runAsyncBestExample(this.startSpinner, this.stopSpinner);
    }

    startSpinner() {
        this.setState((state, props) => {
            return { isBusy: true }
        });
    }

    stopSpinner() {
        this.setState((state, props) => {
            return { isBusy: false }
        });
    }

    render() {
        return <div className="App">
            <ul className="nav justify-content-center">
                <li className="nav-item">
                    <a className="nav-link active" href="#" onClick={this.runSyncExample}>Sync Example</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#" onClick={this.runAsyncExample}>Async Example</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#" onClick={this.runAsyncBestExample}>Async Best Example</a>
                </li>
            </ul>
            <div>
                <div id="story" />
                <Spinner isVisible={this.state.isBusy} />
            </div>
        </div>;
    }
}

export default App;

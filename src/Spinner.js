import 'bootstrap/dist/css/bootstrap.css';
import React from "react";

class Spinner extends React.Component {
    render() {
        let className = 'd-none';
        if (this.props.isVisible === 'true') { //props value is string!
            className = 'd-flex';
        }
        return <div id="spinner" className={`justify-content-center ${className}`}>
            <div className="spinner-border text-primary" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div>;
    }
}

export default Spinner;
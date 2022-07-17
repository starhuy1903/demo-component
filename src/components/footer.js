import React, {Component} from 'react';

class Footer extends Component {
    render() {
        return (
            <div className={"py-4 bg-dark"}>
                <div className="container">
                    <p className="m-0 text-center text-white">Copyright &copy; Your Website 2022</p>
                </div>
            </div>
        );
    }
}

export default Footer;
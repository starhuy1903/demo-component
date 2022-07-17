import React, {Component} from 'react';

class Banner extends Component {
    render() {
        return (
            <div className={"banner py-5 "}>
                <div className="container px-lg-5">
                    <div className="p-4 p-lg-5 bg-light rounded-3 text-start">
                        <div className="m-4 m-lg-5">
                            <h1 className={"display-5 fw-bold"}>A Warm Welcome!</h1>
                            <p className={"fs-4"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aut consequatur deserunt dolorem eveniet ipsa, labore quae ratione. Cumque, magni.</p>
                            <button className={"btn btn-primary btn-lg"}>Call to action</button>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default Banner;
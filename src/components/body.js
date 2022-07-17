import React, {Component} from 'react';
import Banner from "./banner";
import ItemList from "./itemList";

class Body extends Component {
    render() {
        return (
            <div className={"body container"}>
                <Banner/>
                <ItemList/>
            </div>
        );
    }
}

export default Body;
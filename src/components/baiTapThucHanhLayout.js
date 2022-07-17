import React, {Component} from 'react';
import Header from "./header";
import Body from "./body";
import Footer from "./footer";

class BaiTapThucHanhLayout extends Component {
    render() {
        return (
            <div className={"main"}>
                <Header/>
                <Body/>
                <Footer/>
            </div>
        );
    }
}

export default BaiTapThucHanhLayout;
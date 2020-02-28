import React, {Component} from 'react';
import "./style.css";
import ArrowImg from "../../../arrow.png";

class WidgetItem extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <>
                {this.props.title ? 
                    <div class="itembox">
                        <div class="itemboxtitle">
                            {this.props.title}
                        </div>
                        <h1>{this.props.topText}</h1>
                        <img src={ArrowImg} />
                        <p>{this.props.bottomText}</p>
                    </div> : null }
            </>
        )
    }
}

export default WidgetItem;
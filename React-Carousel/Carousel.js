import React, {Component} from "react";
import "./Carousel.css";
import * as logic from "./logic.js";


class Carousel extends Component {

    componentDidMount(){
        const script = document.createElement("script");
        script.src = logic;
        script.type = 'text/javascript';
        script.async = true;

        document.body.appendChild(script);
    }

    render(){
        return (
            <React.Fragment>
                <section>
                    <div className="gridWrapper" id="grid">
                    <h2 className="portfolioHeader">Portfolio</h2>
                        {/* Images */}
                        <div className="box scaleIn" id="box-1"></div>
                        <div className="box scaleIn" id="box-2"></div>
                        <div className="box scaleIn" id="box-3"></div>
                        <div className="box scaleIn" id="box-4"></div>
                        <div className="box scaleIn" id="box-5"></div>
                        <div className="box scaleIn" id="box-6"></div>
                    </div>
                </section>


                <section className="iconSection">
                    {/* Buttons & Controls */}
                    <div className="iconWrap" id="play">
                        <i className="icon far fa-play-circle"></i>
                    </div>
                    <div className="iconWrap" id="pause">
                        <i className="icon far fa-pause-circle"></i>
                    </div>
                    <div className="iconWrap" id="shuffle">
                        <i className="icon fas fa-random"></i>
                    </div>   
                </section>

            </React.Fragment>
        )
    }
}

export default Carousel;

import React from "react";

function Awards() {
    return ( 
        <div className="container mt-5 mb-5">
            <div className="row">
                <div className="col-6 p-5">
                    <img src="media/image/largestBroker.svg"/>

                </div>

                <div className="col-6 p-5">
                    <h1>Largest broker in India</h1>
                    <p className="mb-5">2+ million Zerodha clients contribute to over 15% of all retails order volumes in India daily by trading and investing in:</p>

                    <div className="row mt-5">
                        <div className="col-6">
                            <ul>
                                <li>Features and Options</li>
                                <li>Commodity derivatives</li>
                                <li>Currency derivatives</li>    
                            </ul>
                        </div>

                        <div className="col-6">
                            <ul>
                                <li>Stocks & IPO</li>
                                <li>Direct mutual funds</li>
                                <li>Bonds and Govt. Securities</li>
                            </ul>
                            
                        </div>

                    </div>

                    <img src="media/image/pressLogos.png" style={{width:"90%"}}  alt="Press Logo"/>

                </div>
            </div>
        </div>
     );
}

export default Awards;
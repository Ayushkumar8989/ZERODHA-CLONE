import React from "react";

function Education() {
    return ( 
        <div className="container p-5 mt-5">
            <div className="row">
                <div className="col-6">
                    <img src="media/image/education.svg" alt="education"/>
                </div>
                <div className="col-6">
                    <h1 className="mb-5 fs-2">Free and open market education</h1>
                    <p className="text-muted">Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                    <a style={{textDecoration:"none"}} href="" className="mb-3">Varsity <i class="fa-solid fa-arrow-right-long"></i></a>

                    <p className="mt-4 text-muted">TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                    <a style={{textDecoration:"none"}} href="">TradingQ&A <i class="fa-solid fa-arrow-right-long"></i></a>
                </div>
            </div>
        </div>
     );
}

export default Education

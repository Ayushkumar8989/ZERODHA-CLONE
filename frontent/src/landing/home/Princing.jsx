import React from "react";

function Princing() {
    return ( 
        <div className="container p-5">
            <div className="row">
                <div className="col-5 p-4">
                    <h1 className="mb-3 fs-2">Unbeatable pricing</h1>
                    <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                    <a href="" style={{textDecoration:"none", width:"90%"}}>See pricing <i class="fa-solid fa-arrow-right-long"></i> </a>
                </div>
                <div className="col-7 p-4">
                    <div className="row">
                        <div className="col-4">
                            <img src="media/image/Account-opening.svg" alt="Account-opening" />
                            <p className="text-muted text-center"> Free account opening</p>
                        </div>
                        <div className="col-4">
                            <img src="media/image/Equity-delivery.svg" />
                            <p className="text-muted text-center">Free equity delivery and direct mutual funds</p>
                        </div>
                        <div className="col-4">
                            <img src="media/image/Intraday.svg" />
                            <p className="text-muted text-center">Intraday and F&O</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Princing;
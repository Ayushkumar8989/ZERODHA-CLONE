function Hero(){
    return(
        <div className="container mb-5">
            <div className="row text-center mt-5 p-5">
                <h2 className="fs-3">Charges</h2>
                <h4 className="text-muted fs-3">List of all charges and taxes</h4>
            </div>

            <div className="row text-center">
                <div className="col-4 p-5">
                    <img src="media/image/Equity-delivery.svg" />
                    <h2 className="fs-3">Free equity delivery</h2>
                    <p className="text-muted">All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                </div>
                <div className="col-4 p-5">
                    <img src="media/image/intradayTrades.svg" />
                    <h2 className="fs-3">Intraday and F&O trades</h2>
                    <p className="text-muted">Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                </div>
                <div className="col-4 p-5">
                    <img src="media/image/Equity-delivery.svg" />
                    <h2 className="fs-3">Free direct MF</h2>
                    <p className="text-muted">All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                </div>
            </div>



        </div>
    )
}

export default Hero;
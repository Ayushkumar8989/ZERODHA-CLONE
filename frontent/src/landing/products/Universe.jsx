function Universe() {
    return ( 
        <div className="container text-center">
            <div className="row">
                <h1>The Zerodha Universe</h1>
                <p>Extend your trading and investment experience even further with our partner platforms</p>

                <div className="col-4 p-3">
                    <img src="media/image/zerodhaFundhouse.png"  style={{ width: '50%' }}/>
                    <p className="text-muted">our asset management venture that is creating simple and transparent index funds to help you save for your goals.</p>
                </div>
                <div className="col-4 p-3">
                    <img src="media/image/sensibullLogo.svg" style={{ width: '50%' }}/>
                    <p className="text-muted">Options trading platform that lets you create strategies, analyze positions, and examine data points like open interest, FII/DII, and more.</p>
                </div>
                <div className="col-4 p-3">
                    <img src="media/image/tijori.svg" style={{ width: '30%' }}/>
                    <p className="text-muted">Investment research platform that offers detailed insight on stocks, sectors, supply chains, and more.</p>
                </div>


                <div className="col-4 p-3 mt-3">
                    <img src="media/image/streakLogo.png"  style={{ width: '50%' }}/>
                    <p className="text-muted">Systematic trading platform that allows you to create and backtest strategies without coding.</p>
                </div>
                <div className="col-4 p-3 mt-3">
                    <img src="media/image/smallcaseLogo.png" style={{ width: '50%' }}/>
                    <p className="text-muted">Thematic inversting platform that helps you invest in diversified baskets of stocks on ETFs.</p>
                </div>
                <div className="col-4 p-3 mt-3">
                    <img src="media/image/dittoLogo.png" style={{ width: '30%' }}/>
                    <p className="text-muted">Personalized advice on life and health insurance. No spam and no mis-selling.</p>
                </div>
            </div>

            <button className="p-2 btn btn-primary fs-5"  style={{width:"20%", margin:"0 auto"}}>Sign up for free</button>


        </div>
     );
}

export default Universe;
function Hero() {
    return (
        <section className="container-fluid" id="supportHero">
            <div className="p-5" id="supportWrapper">
                <h3>Support Portal</h3>
                <a href="#" style={{ color: "white" }}>
                    Track Tickets
                </a>
            </div>

            <div className="row p-5">
                <div className="col-6 p-5">
                    <h1 className="fs-3">
                        Search for an answer or browse help topics
                        to create a ticket.
                    </h1>

                    <input
                        type="text"
                        className="form-control mt-4 mb-3"
                        placeholder="Eg. how do I activate F&O"
                    />

                    <div className="d-flex flex-wrap gap-3">
                        <a href="#">Track account opening</a>
                        <a href="#">Track segment activation</a>
                        <a href="#">Intraday margin</a>
                        <a href="#">Kite user manual</a>
                    </div>
                </div>

                <div className="col-6 p-5">
                    <h1 className="fs-3">Featured</h1>
                    <ol>
                        <li>
                            <a href="#" style={{color: "white"}}>1. Current Takeovers and Delisting - January 2024</a>
                        </li>
                        <li>
                            <a href="#" style={{color: "white"}}>2. Latest Intraday leverages - MIS & CO</a>
                        </li>
                    </ol>
                </div>
            </div>
        </section>
    );
}

export default Hero;
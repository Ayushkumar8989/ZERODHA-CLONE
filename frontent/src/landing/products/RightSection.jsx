function RightSection({
    Title,
    Description,
    learnmore,
    imageURL
}) {
    return ( 
        <div className="container mt-5">
            <div className="row">
                <div className="col-6 p-5 mt-5">
                    <h1>{Title}</h1>
                    <p>{Description}</p>
                    <a href= {learnmore} style={{textDecoration: "none"}}>{learnmore} <i class="fa-solid fa-arrow-right-long"></i></a>
                </div>

                <div className="col-6">
                    <img src={imageURL} style={{width:"70%"}} />
                </div>
            </div>
        </div>
     );
}

export default RightSection;
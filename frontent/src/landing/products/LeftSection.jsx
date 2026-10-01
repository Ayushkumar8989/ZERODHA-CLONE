function LeftSection({
    imageURL, 
    productName, 
    productDescription, 
    tryDemo, 
    learnMore, 
    googlePlay, 
    appStore
}) {
    return ( 
        <div className="container mt-5">
            <div className="row">
                <div className="col-6 p-5">
                    <img src={imageURL}  style={{width:"100%"}}/>
                </div>
                <div className="col-6 p-5">
                    <h1>{productName}</h1>
                    <p>{productDescription}</p>
                    <div>
                        <a href={tryDemo} style={{textDecoration:"none", marginRight : "90px"}}>Try Demo <i class="fa-solid fa-arrow-right-long"></i></a>
                        <a href={learnMore} style={{textDecoration:"none"}}>Learn More <i class="fa-solid fa-arrow-right-long"></i></a>
                    </div>

                    <div className="mt-3">
                        <a href="googlePlay" style={{marginRight:"50px"}}>
                            <img src="media/image/googlePlayBadge.svg"/>
                        </a>
                        <a href="googlePlay">
                            <img src="media/image/appstoreBadge.svg"/>
                        </a>
                    </div>
            
                </div>
            </div>
        </div>
     );
}

export default LeftSection;
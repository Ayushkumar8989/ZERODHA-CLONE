// import "./BuyActionWindow.css";
// import { Link } from "react-router-dom";
// import { useState } from "react";
// import axios from "axios";

// import GeneralContext from "./GeneralContext";


// function BuyActionWindow({ uid }) {
//     const [stockQuantity, setStockQuantity] = useState(1);
//     const [stockPrice, setStockPrice] = useState(0.0);

//     const handleBuyClick = () => {
//         axios.post("http://localhost:3001/newOrder", {
//             name: uid,
//             qty: stockQuantity,
//             price: stockPrice,
//             mode: "BUY",
//         });

//         GeneralContext.closeBuyWindow();
//     };

//     const handleCancelClick = () => {
//         GeneralContext.closeBuyWindow();
//     };

//     return (
//         <div className="container" id="buy-window" draggable="true">
//             <div className="regular-order">
//                 <div className="inputs">
//                     <fieldset>
//                         <legend>Qty.</legend>
//                         <input type="number" name="qty" id="qty" 
//                         onChange={(e) => setStockQuantity(e.target.value)}
//                         value={stockQuantity}
//                         />
//                     </fieldset>

//                     <fieldset>
//                         <legend>Price</legend>
//                         <input type="number" name="price" id="price" step="0.05"
//                         onChange={(e) => setStockPrice(e.target.value)}
//                         value={stockPrice}
//                         />
//                     </fieldset>

//                 </div>

//             </div>

//             <div className="buttons">
//                 <span>
//                     Margin required ₹140.65
//                 </span>
//                 <div>

//                     <Link className="btn btn-blue" onClick={handleBuyClick}>Buy</Link>
//                     <Link to="" className="btn btn-grey" onClick={handleCancelClick}>Cancel</Link>

                

//                 </div>

//             </div>
//         </div>
//     );
// }

// export default BuyActionWindow;



















// import "./BuyActionWindow.css";
// import { useState } from "react";
// import axios from "axios";

// import { useGeneralContext } from "./GeneralContext";

// function BuyActionWindow({ uid }) {

//     const { closeBuyWindow } = useGeneralContext();

//     const [stockQuantity, setStockQuantity] = useState(1);
//     const [stockPrice, setStockPrice] = useState(0);

//     const handleBuyClick = async () => {
//         try {
//             const response = await axios.post(
//                 "http://localhost:3001/newOrder",
//                 {
//                     name: uid,
//                     qty: Number(stockQuantity),
//                     price: Number(stockPrice),
//                     mode: "BUY",
//                 }
//             );

//             console.log(response.data);

//             closeBuyWindow();

//         } catch (error) {
//             console.error("Error placing order:", error);
//         }
//     };

//     const handleCancelClick = () => {
//         closeBuyWindow();
//     };

//     return (
//         <div
//             className="container"
//             id="buy-window"
//             draggable="true"
//         >

//             <div className="regular-order">

//                 <div className="inputs">

//                     <fieldset>
//                         <legend>Qty.</legend>

//                         <input
//                             type="number"
//                             name="qty"
//                             id="qty"
//                             min="1"
//                             value={stockQuantity}
//                             onChange={(e) =>
//                                 setStockQuantity(e.target.value)
//                             }
//                         />
//                     </fieldset>

//                     <fieldset>
//                         <legend>Price</legend>

//                         <input
//                             type="number"
//                             name="price"
//                             id="price"
//                             step="0.05"
//                             min="0"
//                             value={stockPrice}
//                             onChange={(e) =>
//                                 setStockPrice(e.target.value)
//                             }
//                         />
//                     </fieldset>

//                 </div>

//             </div>

//             <div className="buttons">

//                 <span>
//                     Margin required ₹140.65
//                 </span>

//                 <div>

//                     <button
//                         className="btn btn-blue"
//                         onClick={handleBuyClick}
//                     >
//                         Buy
//                     </button>

//                     <button
//                         className="btn btn-grey"
//                         onClick={handleCancelClick}
//                     >
//                         Cancel
//                     </button>

//                 </div>

//             </div>

//         </div>
//     );
// }

// export default BuyActionWindow;



import "./BuyActionWindow.css";
import { useState } from "react";
import axios from "axios";

import { useGeneralContext } from "./GeneralContext";

function BuyActionWindow({ uid }) {

    const { closeBuyWindow } = useGeneralContext();

    const [stockQuantity, setStockQuantity] = useState(1);
    const [stockPrice, setStockPrice] = useState(0);

    const handleBuyClick = async () => {

        try {

            const response = await axios.post(
                "http://localhost:3001/newOrder",
                {
                    name: uid,
                    qty: Number(stockQuantity),
                    price: Number(stockPrice),
                    mode: "BUY",
                }
            );

            console.log("Order placed:", response.data);

            closeBuyWindow();

        } catch (error) {

            console.error(
                "Error placing order:",
                error.response?.data || error.message
            );

        }
    };

    const handleCancelClick = () => {
        closeBuyWindow();
    };

    return (
        <div
            className="container"
            id="buy-window"
            draggable="true"
        >

            <div className="regular-order">

                <h3>Buy {uid}</h3>

                <div className="inputs">

                    <fieldset>
                        <legend>Qty.</legend>

                        <input
                            type="number"
                            name="qty"
                            id="qty"
                            min="1"
                            value={stockQuantity}
                            onChange={(e) =>
                                setStockQuantity(e.target.value)
                            }
                        />
                    </fieldset>

                    <fieldset>
                        <legend>Price</legend>

                        <input
                            type="number"
                            name="price"
                            id="price"
                            step="0.05"
                            min="0"
                            value={stockPrice}
                            onChange={(e) =>
                                setStockPrice(e.target.value)
                            }
                        />
                    </fieldset>

                </div>

            </div>

            <div className="buttons">

                <span>
                    Margin required ₹140.65
                </span>

                <div>

                    <button
                        className="btn btn-blue"
                        onClick={handleBuyClick}
                    >
                        Buy
                    </button>

                    <button
                        className="btn btn-grey"
                        onClick={handleCancelClick}
                    >
                        Cancel
                    </button>

                </div>

            </div>

        </div>
    );
}

export default BuyActionWindow;

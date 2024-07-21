import React from "react";
import image from "../logo/airbnb-logo.png"



export const Header = () => {
    return (
        <>
            <div className="columns-2 mb-5 py-4">
                <img alt="airbnb" className="p-7" style={{height: "100px", width: "200px" }}
                 src={image} />
                {/* <div className="border-s-sky-50 shadow-md rounded-full inline-block p-3 w-20 h-10 blur-0">

                </div> */}
            </div>
        </>
    )
}
import React from "react";
import {useContext} from "react";
import {reactMainContext} from "../App"
import { Button, Divider } from "@mui/material";
import { MapContainer, TileLayer, Popup, Marker, Tooltip} from 'react-leaflet'
import "leaflet/dist/leaflet.css"
import L from "leaflet";
import image from "../logo/marker.png"

export const BodyGrid = () => {
    const {dataDetails} = useContext(reactMainContext);
    const markerIcon = new L.Icon({
      iconUrl: image,
      iconSize: [40, 40],
      iconAnchor: [17, 46], //[left/right, top/bottom]
      popupAnchor: [0, -46], //[left/right, top/bottom]
    });
    return (
        <>
            <div className="flex flex-col items-center shadow-sm shadow-gray-400 mx-56 h-auto mb-10">
              <div className="h-auto mx-8">
                 <div className="text-center">
                    <p className="p-2 text-5xl font-bold">{dataDetails.name}</p>
                  </div>
                  <div className="flex justify-center items-center">
                    <img src={dataDetails.images.picture_url} className="rounded-md h-" style={{width: "900px"}}/>
                  </div>
                  <div className="grid grid-flow-col grid-cols-2 mx-8">
                    <div className="p-4">
                      <div className="rounded-lg shadow-md p-3 my-4">
                      <p> Room in {dataDetails.address.street}</p>
                        <p> Property Type: <span className="font-bold">{dataDetails.property_type}</span>.</p>
                        <p> Room Type: <span className="font-bold">{dataDetails.room_type}</span>.</p>
                        <p> <span className="font-bold">{dataDetails.bed_type}</span> Type</p>
                        <p> {dataDetails.beds} beds . {dataDetails.bedrooms} bedrooms . {dataDetails.bathrooms} bathrooms {dataDetails.accommodates} guests</p>
                        {Object.keys(dataDetails.review_scores).length > 0 && <p>{dataDetails.review_scores.review_scores_rating}% Rating . <span className="underline">{dataDetails.number_of_reviews} Reviews</span></p>}
                      </div>
                        <p className="rounded-lg shadow-md p-3 my-4">{dataDetails.summary}</p>
                    </div>
                    <div className="m-5 min-h-80 shadow-md">
                        <div className="p-3">
                            <div className="p-2 shadow-md text-center rounded-md my-3">Price: ₹ {dataDetails.price} night</div>
                            <Button sx={{marginY: "10px", width: "100%"}} variant="contained" color="error"> Reserve </Button>
                            <div className="grid grid-flow-col grid-cols-2">
                                <div>
                                    <p>Min night: <span className="font-bold underline">₹{dataDetails.price} x {dataDetails.minimum_nights}</span></p>
                                    {/* <p>Max night: <span className="font-bold underline">₹{dataDetails.price}x {dataDetails.maximum_nights}</span> </p> */}
                                    {dataDetails.security_deposit > 0 && <p>Security deposit: </p>}
                                    {dataDetails.cleaning_fee && <p>Cleaning fees: </p>}
                                </div>
                                <div>
                                    <p>₹ {dataDetails.price * dataDetails.minimum_nights}</p> 
                                    {dataDetails.security_deposit > 0 ? dataDetails.security_deposit && <p>₹ {dataDetails.security_deposit}</p>: ''}
                                    {dataDetails.cleaning_fee && <p>₹ {dataDetails.cleaning_fee}</p>}
                                </div>
                            </div>
                            <Divider sx={{marginTop: "10px"}}></Divider> 
                        </div>
                        <div className="grid grid-cols-2 p-3">
                            <p>Total before taxes</p>
                            <p>₹ {dataDetails.price * dataDetails.minimum_nights + (dataDetails.security_deposit? dataDetails.security_deposit: 0) + (dataDetails.cleaning_fee ? dataDetails.cleaning_fee: 0)}</p>
                        </div>
                        <Divider sx={{marginTop: "10px"}}></Divider>
                    </div>
                </div>
                <hr/>
                <div className="ml-10 mt-5 font-bold" style={{fontSize: "20px"}}>
                        What its Place Offers for amenities
                </div>
                <div className="grid grid-flow-col grid-cols-2 shadow-md min-h-96 gap-5 mx-8 my-8">
                  <div className="p-6">
                    <ol className="text-center">
                      {dataDetails.amenities.slice(0, Math.round(dataDetails.amenities.length / 2)).map((item)=> 
                              <li className="p-1 shadow-md bg-gray-300 m-1 text-blue-800">{item}</li>
                      )}
                    </ol>
                  </div>
                  <div className="p-6">
                    <ol className="text-center">
                      {dataDetails.amenities.slice(Math.round(dataDetails.amenities.length / 2, dataDetails.amenities.length), ).map((item)=> 
                              <li className="p-1 shadow-md bg-gray-300 m-1 text-blue-800">{item}</li>
                    )}
                    </ol>   
                  </div>  
                </div>
                <hr/>
                {Object.keys(dataDetails.review_scores).length > 0 && <div className="mx-8 grid grid-flow-col grid-cols-6 my-10 gap-36 h-28">
                  <div className="bg-gradient-to-r from-cyan-500 to-blue-500 shadow-md w-32 h-28 text-center pt-7 rounded-full text-white">
                    <div className="col-span-1">Cleanliness</div>
                    <div className="col-span-1">{dataDetails.review_scores.review_scores_cleanliness/2}.0...</div>
                  </div>
                  <div className=" bg-gradient-to-r from-cyan-600 to-blue-400 shadow-md w-32 h-28 text-center pt-7 rounded-full text-white">
                    <div className="col-span-1">Accuracy</div>
                    <div className="col-span-1">{dataDetails.review_scores.review_scores_accuracy/2}.0...</div>
                  </div>
                  <div className="bg-gradient-to-r from-cyan-500 to-blue-300 shadow-md w-32 h-28 text-center pt-7 rounded-full text-white">
                    <div className="col-span-1">Check In</div>
                    <div className="col-span-1">{dataDetails.review_scores.review_scores_checkin/2}.0...</div>
                  </div>
                  <div className="bg-gradient-to-r from-cyan-500 to-blue-300  shadow-md w-32 h-28 text-center pt-7 rounded-full text-white">
                    <div className="col-span-1">Communication</div>
                    <div className="col-span-1">{dataDetails.review_scores.review_scores_communication/2}.0...</div>
                  </div>
                  <div className="bg-gradient-to-r from-cyan-500 to-blue-300  shadow-md w-32 h-28 text-center pt-7 rounded-full text-white">
                    <div className="col-span-1">Location</div>
                    <div className="col-span-1">{dataDetails.review_scores.review_scores_location/2}.0...</div>
                  </div>
                  <div className="bg-gradient-to-r from-cyan-500 to-blue-300 shadow-md w-32 h-28 text-center pt-7 rounded-full text-white">
                    <div className="col-span-1">Value</div>
                    <div className="col-span-1">{dataDetails.review_scores.review_scores_value/2}.0...</div>
                  </div>
                </div> 
                }
                {Object.keys(dataDetails.review_scores).length > 0 &&
                <div className="bg-gradient-to-t from-blue-50 to-cyan-600 shadow-md mx-8 text-center rounded-lg my-10" style={{fontSize: "30px"}}>
                  <div className="col-span-1 text-white">Review Rating... </div>
                  <div className="col-span-1 text-white">{dataDetails.review_scores.review_scores_rating}% </div>
                </div>
                }
                <hr/>
                {dataDetails.reviews.map((item)=>
                    <>
                      <div className="grid grid-flow-col grid-cols-2 mx-8 my-5">
                        <div className="col-span-1">
                          <div className="text-xlfont-bold shadow-md  rounded-md bg-gray-400 text-white inline-block p-2">{item.reviewer_name}</div>
                          <div>{item.date}</div>
                        </div>
                        <div className="col-span-1">
                          <div>{item.comments}</div>
                        </div>
                      </div>
                      <hr/>
                    </>
                  )}

                <div className="shadow-md mx-8 my-10">
                  <div className="space-y-2 p-3 font-bold">
                    <p className="col-span-1">Where you’ll be</p>
                    <p className="col-span-1">{dataDetails.address.country_code} - {dataDetails.address.street}</p>
                  </div>
                  <MapContainer boundsOptions={{padding: "point"}} center={{ lat: dataDetails.address.location.coordinates[1], lng: dataDetails.address.location.coordinates[0] }} zoom={20} scrollWheelZoom={true} style={{width: "100%", height: "500px"}} >
                    <TileLayer
                      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={{lat: dataDetails.address.location.coordinates[1], lng: dataDetails.address.location.coordinates[0]}} icon={markerIcon}>
                        <Tooltip>
                          <b>Exact Location provided after booking</b>
                        </Tooltip>
                    </Marker>
                  </MapContainer>
                </div>
                <hr className="my-10"/>
                <div className="shadow-md my-10 py-10">
                  <p className="p-3 font-bold">Meet Your Host</p>
                  <div className="shadow-md m-5 [&>*]:shadow-md [&>*]:my-5 [&>*]:bg-gray-400 [&>*]:py-3 [&>*]:text-white">
                    {/* <img src={"https://a0.muscache.com/im/pictures/541be9c6-f170-4994-9a2b-83094cd25781.jpg?aki_policy=profile_x_medium"} className="rounded-full h-40 w-40 mx-20 my-5" /> */}
                    <p className="text-center"><span className="text-black">Host Name:</span> {dataDetails.host.host_name}{dataDetails.host.host_is_superhost ? "(SuperHost)": ""}</p>
                    <p className="text-center"><span className="text-black">Host Location: </span> {dataDetails.host.host_location}</p>
                    <p className="text-center"><span className="text-black">Total Reviews: </span> {dataDetails.number_of_reviews}</p>
                    {dataDetails.host.host_about && <p className="text-center"><span className="text-black">Host About:  </span>{dataDetails.host.host_about}</p>}
                    <div className="text-center">
                      {dataDetails.host.host_neighbourhood && <p><span className="text-black">Host neighbourhood: </span>{dataDetails.host.host_neighbourhood}</p>}
                      {dataDetails.neighborhood_overview && <p><span className="text-black">Over Review: </span>{dataDetails.neighborhood_overview}</p>}
                    </div>
                    {dataDetails.host.host_response_rate && <p className="text-center"><span className="text-black">Host Response Rate: </span> {dataDetails.host.host_response_rate} % </p>}
                    {dataDetails.host.host_response_time && <p className="text-center"><span className="text-black">Host Response Time: </span>{dataDetails.host.host_response_time}</p>}
                    <p className="text-center"><span className="text-black">Host Verfication: </span>{(dataDetails.host.host_verifications).join(", ")}</p>
                  </div> 
                </div>
              </div>
            </div>
        </>
    )
}
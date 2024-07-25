import React from "react";
import {useContext} from "react";
import {reactMainContext} from "../App"
import { Button, Divider } from "@mui/material";
import {ComposableMap, Geographies, Geography, Annotation} from "react-simple-maps";


export const BodyGrid = () => {
    const {dataDetails} = useContext(reactMainContext);
    const data = {
        "_id": "11131495",
        "listing_url": "https://www.airbnb.com/rooms/11131495",
        "name": "Charming apartment in Santa Teresa",
        "summary": "Recently refurbished 3 bedroom apartment in the bohemian neighbourhood of Santa Teresa in Rio de Janeiro. This airy and light apartment is close to many trendy bars, restaurants and cafes and has a supermarket 5 minutes walk away.",
        "space": "This flat has been recently refurbished and furnished with beautiful new  furniture. Big windows , sunlight all through the day. Very well ventilated . Beautiful views.",
        "description": "Recently refurbished 3 bedroom apartment in the bohemian neighbourhood of Santa Teresa in Rio de Janeiro. This airy and light apartment is close to many trendy bars, restaurants and cafes and has a supermarket 5 minutes walk away. This flat has been recently refurbished and furnished with beautiful new  furniture. Big windows , sunlight all through the day. Very well ventilated . Beautiful views. Guests will have access to all the areas of the apartment. I'll be contactable through Airbnb at any time if you have any questions though please note I am based in the UK. It is a very bohemian area with great cafes, bars with live music, a supermarket within a 10 minute walk, a street market with fruits, vegetables, fish, flowers, etc. The flat is very near the last stop of the Bondinho (street car of Santa Teresa). Public transport opposite the building. The flat is very near the last stop of the Bondinho (street car of Santa Teresa). Public transport opposite the (Website hidden by Airbnb)",
        "neighborhood_overview": "It is a very bohemian area with great cafes, bars with live music, a supermarket within a 10 minute walk, a street market with fruits, vegetables, fish, flowers, etc. The flat is very near the last stop of the Bondinho (street car of Santa Teresa). Public transport opposite the building.",
        "notes": "KEYS The gate at pavement level isn't locked. Up the steps to the front door, only the lower of the 2 locks is used. This is the key with blue paint on it. The 2 keys to Apt 302 have red paint on them and are both deadlocks, not latch locks - you cant slam them to lock the door. When you get in you have to lock again from the inside. If you use the lower of the two locks you can leave that key in the lock, and people outside can still get in using their own key. RUBBISH. Branca generally leaves small bags inside the public litter (colour orange) bin on the lamppost near the front door. I am not sure that this is kosher but they seem to disappear. The days when rubbish is collected are Tuesdays, Thursdays and Saturdays. The rubbish can be left in front of a light pole in front of the building. Please make sure the bags are well  closed. GAS The supply to the cooker and to the water heater in the bathroom comes via a pipe with a yellow tap. This has to be in line with the pipe for the ga",
        "transit": "The flat is very near the last stop of the Bondinho (street car of Santa Teresa). Public transport opposite the (Website hidden by Airbnb) can take the bus 014 to the center of Rio and then take the metro to Copacabana , Ipanema and Barra.",
        "access": "Guests will have access to all the areas of the apartment.",
        "interaction": "I'll be contactable through Airbnb at any time if you have any questions though please note I am based in the UK.",
        "house_rules": "No pets. No smoking.",
        "property_type": "Villa",
        "room_type": "Entire home/apt",
        "bed_type": "Real Bed",
        "minimum_nights": "2",
        "maximum_nights": "1125",
        "cancellation_policy": "flexible",
        "last_scraped": "2019-02-11 05:00:00",
        "calendar_last_scraped": "2019-02-11 05:00:00",
        "first_review": "2016-08-14 04:00:00",
        "last_review": "2019-01-06 05:00:00",
        "accommodates": 5,
        "bedrooms": 3,
        "beds": 4,
        "number_of_reviews": 7,
        "bathrooms": 1.5,
        "amenities": [
          "TV",
          "Internet",
          "Wifi",
          "Air conditioning",
          "Kitchen",
          "Free street parking",
          "Buzzer/wireless intercom",
          "Washer",
          "Fire extinguisher",
          "Essentials",
          "Lock on bedroom door",
          "Hangers",
          "Iron",
          "Laptop friendly workspace",
          "Private living room",
          "Hot water",
          "Bed linens",
          "Extra pillows and blankets",
          "Microwave",
          "Coffee maker",
          "Refrigerator",
          "Dishes and silverware",
          "Cooking basics",
          "Oven",
          "Stove",
          "Luggage dropoff allowed",
          "Long term stays allowed",
          "Cleaning before checkout",
          "Host greets you"
        ],
        "price": 209,
        "security_deposit": 724,
        "cleaning_fee": 169,
        "extra_people": 48,
        "guests_included": 2,
        "images": {
          "thumbnail_url": "",
          "medium_url": "",
          "picture_url": "https://a0.muscache.com/im/pictures/6c21325d-3c51-4a35-a5cc-cee50d2f48f3.jpg?aki_policy=large",
          "xl_picture_url": ""
        },
        "host": {
          "host_id": "57846393",
          "host_url": "https://www.airbnb.com/users/show/57846393",
          "host_name": "Branca",
          "host_location": "London, England, United Kingdom",
          "host_about": "I am a Brazilian/Italian national who has lived in London for the last 30 years. I speak English, Portuguese, Italian and Spanish fluently and like the rest of the world, I love travelling and meeting people from different parts of the world. Other interests include foreign film, reading, astrology and working out (pilates and yoga).",
          "host_response_time": "within an hour",
          "host_thumbnail_url": "https://a0.muscache.com/im/pictures/541be9c6-f170-4994-9a2b-83094cd25781.jpg?aki_policy=profile_small",
          "host_picture_url": "https://a0.muscache.com/im/pictures/541be9c6-f170-4994-9a2b-83094cd25781.jpg?aki_policy=profile_x_medium",
          "host_neighbourhood": "Santa Teresa",
          "host_response_rate": 100,
          "host_is_superhost": false,
          "host_has_profile_pic": true,
          "host_identity_verified": false,
          "host_listings_count": 1,
          "host_total_listings_count": 1,
          "host_verifications": [
            "email",
            "phone",
            "facebook",
            "reviews"
          ]
        },
        "address": {
          "street": "Rio de Janeiro, Rio de Janeiro, Brazil",
          "suburb": "Santa Teresa",
          "government_area": "Santa Teresa",
          "market": "Rio De Janeiro",
          "country": "Brazil",
          "country_code": "BR",
          "location": {
            "type": "Point",
            "coordinates": [
              -43.1899284846398,
              -22.920478977773982
            ],
            "is_location_exact": true
          }
        },
        "availability": {
          "availability_30": 22,
          "availability_60": 52,
          "availability_90": 82,
          "availability_365": 357
        },
        "review_scores": {
          "review_scores_accuracy": 10,
          "review_scores_cleanliness": 10,
          "review_scores_checkin": 10,
          "review_scores_communication": 10,
          "review_scores_location": 10,
          "review_scores_value": 10,
          "review_scores_rating": 94
        },
        "reviews": [
          {
            "_id": "93888923",
            "date": "2016-08-14 04:00:00",
            "listing_id": "11131495",
            "reviewer_id": "80912259",
            "reviewer_name": "Francisco",
            "comments": "El departamento es muy acogedor, su decoración es cálida y bonita. Cuenta con 4 dormitorios y  camas para 5 personas, tiene una buena pieza de cocina y artefactos  para preparar comidas (aunque sólo tomamos desayuno ahí) , un baño bueno y un medio baño (WC) que es un apoyo, pero requiere cierta ventilación directa, que hoy día no tiene."
          },
          {
            "_id": "96415335",
            "date": "2016-08-22 04:00:00",
            "listing_id": "11131495",
            "reviewer_id": "16695273",
            "reviewer_name": "Jan",
            "comments": "Fantastic, spacious, warm, comfortable and centrally located apartment.  With excellent bars and cafes just around the corner, we loved the location.  A short easy stroll to the main restaurant area and tourist shops. We didn't use the local supermarket as purchased stuff down by the metro and took a taxi up the hill.  The photos are very good and show just what the apartment is like.  Branca and Tereza were very helpful and responsive to questions.  Would definitely stay again if we ever get the chance.  Thank you. "
          },
          {
            "_id": "194773331",
            "date": "2017-09-17 04:00:00",
            "listing_id": "11131495",
            "reviewer_id": "141211686",
            "reviewer_name": "Felipe",
            "comments": "Eu amei muito a estadia no apartamento de Branca! Super lindo, a decoração maravilhosa, super limpo e com uma vista maravilhosa! Branca foi uma ótima anfitriã, sua amiga Tereza também, que nos deu um ótimo suporte, dicas de passeios e nos tratou super bem. Recomendo muito e espero voltar outras vezes."
          },
          {
            "_id": "234007233",
            "date": "2018-02-11 05:00:00",
            "listing_id": "11131495",
            "reviewer_id": "40708845",
            "reviewer_name": "Sally",
            "comments": "Branca's flat is great! It's in a wonderful around up in the Bohemian neighborhood of Santa Teresa. We were there during carnival- it had great proximity to the blocos without being right in them. The flat had plenty of space and Branca and Wanderley made sure we had everything we needed at all times. Would recommend 100%!!"
          },
          {
            "_id": "235372052",
            "date": "2018-02-16 05:00:00",
            "listing_id": "11131495",
            "reviewer_id": "30600152",
            "reviewer_name": "David",
            "comments": "Branca's apartment is very well located in charming Santa Teresa, with incredible views of the city. Everything is very clean and well-organized. Wanderley, the apartment manager, is super friendly and responsive. He sat down with me at check-in and helped orient me on the map. We had a lovely time here and would certainly come back!"
          },
          {
            "_id": "365554692",
            "date": "2019-01-01 05:00:00",
            "listing_id": "11131495",
            "reviewer_id": "27860202",
            "reviewer_name": "Mariano",
            "comments": "El mejor apartamento en el mejor barrio administrados por los mejores anfitriones. Todo 10 puntos!"
          },
          {
            "_id": "368162935",
            "date": "2019-01-06 05:00:00",
            "listing_id": "11131495",
            "reviewer_id": "27860202",
            "reviewer_name": "Mariano",
            "comments": "El apartamento es un sueño:  ambientes amplios, exquisita decoración y preciosa vista a la ciudad, gracias a su ubicación en el mejor barrio de Río: Santa Teresa! Banca y Wanderley fueron excelentes anfitriones y respondieron a todas nuestras inquietudes e hicieron nuestra estadía allí perfecta. Muchas gracias por todo!"
          }
        ]
      }
    return (
        <>
            <div className="flex flex-col items-center shadow-sm shadow-gray-400 mx-56 h-auto mb-10">
              <div className="h-auto mx-8">
                <div className="ml-16">
                    <p className="p-2 text-xl font-bold">{data.name}</p>
                    <img src={data.images.picture_url} className="rounded-md h-96" style={{width: "900px"}}/>
                  </div>
                  <div className="grid grid-flow-col grid-cols-2 mx-8">
                    <div className="p-4">
                      <div className="rounded-lg shadow-md p-3 my-4">
                      <p> Room in {data.address.street}</p>
                        <p> Property Type: <span className="font-bold">{data.property_type}</span>.</p>
                        <p> Room Type: <span className="font-bold">{data.room_type}</span>.</p>
                        <p> <span className="font-bold">{data.bed_type}</span> Type</p>
                        <p> {data.beds} beds . {data.bedrooms} bedrooms . {data.bathrooms} bathrooms {data.accommodates} guests</p>
                        {data.review_scores && <p>{data.review_scores.review_scores_rating}% Rating . <span className="underline">{data.number_of_reviews} Reviews</span></p>}
                      </div>
                        <p className="rounded-lg shadow-md p-3 my-4">{data.summary}</p>
                    </div>
                    <div className="m-5 min-h-80 shadow-md">
                        <div className="p-3">
                            <div className="p-2 shadow-md rounded-md my-3">Price: ₹ {data.price} night</div>
                            <Button sx={{marginY: "10px", width: "100%"}} variant="contained" color="error"> Reserve </Button>
                            <div className="grid grid-flow-col grid-cols-2">
                                <div>
                                    <p>Min night: <span className="font-bold underline">₹{data.price} x {data.minimum_nights}</span></p>
                                    {/* <p>Max night: <span className="font-bold underline">₹{data.price}x {data.maximum_nights}</span> </p> */}
                                    {data.security_deposit && <p>Security deposit: </p>}
                                    {data.cleaning_fee && <p>Cleaning fees: </p>}
                                </div>
                                <div>
                                    <p>₹ {data.price * data.minimum_nights}</p> 
                                    {data.security_deposit && <p>₹ {data.security_deposit}</p>} 
                                    <p>₹ {data.cleaning_fee}</p> 
                                </div>
                            </div>
                            <Divider sx={{marginTop: "10px"}}></Divider> 
                        </div>
                        <div className="grid grid-cols-2 p-3">
                            <p>Total before taxes</p>
                            <p>₹ {data.price * data.minimum_nights + data.security_deposit + data.cleaning_fee}</p>
                        </div>
                        <Divider sx={{marginTop: "10px"}}></Divider>
                    </div>
                </div>
                <hr/>
                <div className="m-4" style={{fontSize: "30px"}}>
                        What its Place Offers for amenities
                </div>
                <div className="grid grid-flow-col grid-cols-2 shadow-md min-h-96 gap-5 mx-8 my-8">
                  <div className="p-6">
                    <ol className="text-center">
                      {data.amenities.slice(0, Math.round(data.amenities.length / 2)).map((item)=> 
                              <li className="p-1 shadow-md bg-gray-300 m-1 text-blue-800">{item}</li>
                      )}
                    </ol>
                  </div>
                  <div className="p-6">
                    <ol className="text-center">
                      {data.amenities.slice(Math.round(data.amenities.length / 2, data.amenities.length), ).map((item)=> 
                              <li className="p-1 shadow-md bg-gray-300 m-1 text-blue-800">{item}</li>
                      )}
                    </ol>   
                  </div>  
                </div>
                <hr/>
                {data.review_scores && <div className="ml-20 grid grid-flow-col grid-cols-6 my-10 gap-36 w-56 h-28">
                  <div className="bg-gradient-to-r from-cyan-500 to-blue-500 shadow-md w-32 h-28 text-center pt-7 rounded-full text-white">
                    <div className="col-span-1">Cleanliness</div>
                    <div className="col-span-1">{data.review_scores.review_scores_cleanliness/2}.0...</div>
                  </div>
                  <div className=" bg-gradient-to-r from-cyan-600 to-blue-400 shadow-md w-32 h-28 text-center pt-7 rounded-full text-white">
                    <div className="col-span-1">Accuracy</div>
                    <div className="col-span-1">{data.review_scores.review_scores_accuracy/2}.0...</div>
                  </div>
                  <div className="bg-gradient-to-r from-cyan-500 to-blue-300 shadow-md w-32 h-28 text-center pt-7 rounded-full text-white">
                    <div className="col-span-1">Check In</div>
                    <div className="col-span-1">{data.review_scores.review_scores_checkin/2}.0...</div>
                  </div>
                  <div className="bg-gradient-to-r from-cyan-500 to-blue-300  shadow-md w-32 h-28 text-center pt-7 rounded-full text-white">
                    <div className="col-span-1">Communication</div>
                    <div className="col-span-1">{data.review_scores.review_scores_communication/2}.0...</div>
                  </div>
                  <div className="bg-gradient-to-r from-cyan-500 to-blue-300  shadow-md w-32 h-28 text-center pt-7 rounded-full text-white">
                    <div className="col-span-1">Location</div>
                    <div className="col-span-1">{data.review_scores.review_scores_location/2}.0...</div>
                  </div>
                  <div className="bg-gradient-to-r from-cyan-500 to-blue-300 shadow-md w-32 h-28 text-center pt-7 rounded-full text-white">
                    <div className="col-span-1">Value</div>
                    <div className="col-span-1">{data.review_scores.review_scores_value/2}.0...</div>
                  </div>
                </div> 
                }
                {data.review_scores &&
                <div className="bg-gradient-to-t from-blue-50 to-cyan-600 shadow-md mx-8 text-center rounded-lg my-10" style={{fontSize: "30px"}}>
                  <div className="col-span-1 text-white">Review Rating... </div>
                  <div className="col-span-1 text-white">{data.review_scores.review_scores_rating}% </div>
                </div>
                }
                <hr/>
                {data.reviews.map((item)=>
                    <>
                      <div className="grid grid-flow-col grid-cols-2 mx-8 my-10">
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

                <div className="shadow-md mx-8 h-96 my-10">
                <ComposableMap
      projection="geoAzimuthalEqualArea"
      projectionConfig={{
        rotate: [-10.0, -52.0, 0],
        center: [-5, -3],
        scale: 1100
      }}
    >
      <Geographies
        geography={"  "}
        fill="#D6D6DA"
        stroke="#FFFFFF"
        strokeWidth={0.5}
      >
        {({ geographies }) => {
          // console.log(geographies);
          geographies.map((geo) => (
            <Geography  hy key={geo.rsmKey} geography={geo} />
          ));
        }}
      </Geographies>
                    <Annotation
        subject={[2.3522, 48.8566]}
        dx={-90}
        dy={-30}
        connectorProps={{
          stroke: "#FF5533",
          strokeWidth: 3,
          strokeLinecap: "round"
        }}
      >
        <text x="-8" textAnchor="end" alignmentBaseline="middle" fill="#F53">
          {"Paris"}
        </text>
      </Annotation>
                  </ComposableMap>
                </div>
                <hr className="my-10"/>
                <div className="shadow-md my-10 py-10">
                  <p className="p-3 font-bold">Meet Your Host</p>
                  <div className="shadow-md m-5 [&>*]:shadow-md [&>*]:my-5 [&>*]:bg-gray-400 [&>*]:py-3 [&>*]:text-white">
                    {/* <img src={"https://a0.muscache.com/im/pictures/541be9c6-f170-4994-9a2b-83094cd25781.jpg?aki_policy=profile_x_medium"} className="rounded-full h-40 w-40 mx-20 my-5" /> */}
                    <p className="text-center"><span className="text-black">Host Name:</span> {data.host.host_name}{data.host.host_is_superhost ? "(SuperHost)": ""}</p>
                    <p className="text-center"><span className="text-black">Host Location: </span> {data.host.host_location}</p>
                    <p className="text-center"><span className="text-black">Total Reviews: </span> {data.number_of_reviews}</p>
                    <p className="text-center"><span className="text-black">Host About:  </span>{data.host.host_about}
                    </p>
                    <div className="text-center">
                      <p><span className="text-black">Host neighbourhood: </span>{data.host.host_neighbourhood}</p>
                      <p><span className="text-black">Over Review: </span>{data.neighborhood_overview}</p>
                    </div>
                    <p className="text-center"><span className="text-black">Host Response Rate: </span> {data.host.host_response_rate} % </p>
                    <p className="text-center"><span className="text-black">Host Response Time: </span>{data.host.host_response_time}</p>
                    <p className="text-center"><span className="text-black">Host Verfication: </span>{(data.host.host_verifications).join(", ")}</p>
                  </div>
                </div>
              </div>
            </div>
        </>
    )
}
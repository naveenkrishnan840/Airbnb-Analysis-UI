import React, {act, useState} from "react";
import "../index";
import * as images from "../logo/airbnb-logo.png"
import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Divider, Grid, Input, Slider} from "@mui/material";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import {FormGroup, FormControlLabel, Checkbox, Alert} from "@mui/material"

import { get_filter_records } from "../components/API/request_index"

export const HomePage = () => {
    const [proprty_open, setPropertyOpen] = useState(false);
    const [room_open, setRoomOpen] = useState(false);
    const [rom_bed_open, setRomBedOpen] = useState(false);
    const [amenties_open, setAmentiesOpen] = useState(false);
    const [price_range_open, setPriceRangeOpen] = useState(false);
    const [property_name, setpropertyName] = useState([{type: "Aparthotel", checked: false}, {type: "Apartment", checked: false}, {type: "Barn", checked: false}, 
                                                      {type: "Bed and breakFast", checked: false}, {type: "Boat", checked: false}, 
                                                      {type: "Boutique hotel", checked: false}, {type: "Bungalow", checked: false},
                                                      {type: "Cabin", checked: false}, {type: "Camper/RV", checked: false}, 
                                                      {type: "Campsite", checked: false}, {type: "Casa particular (Cuba)", checked: false}, 
                                                      {type: "Castle", checked: false}, {type: "Chalet", checked: false}, {type: "Condominium", checked: false},
                                                      {type: "Cattage", checked: false}, {type: "Earth house", checked: false}, {type: "Farm stay", checked: false}, {type: "Guest suite", checked: false}, 
                                                      {type: "Guesthouse", checked: false}, {type: "Heritage hotel (India)", checked: false}, {type: "Hostel", checked: false},
                                                      {type: "Hotel", checked: false}, {type: "House", checked: false}, {type: "Houseboat", checked: false}, {type: "Hut", checked: false}, {type: "Loft", checked: false}, 
                                                      {type: "Nature lodge", checked: false}, {type: "Pension (South Korea)", checked: false}, {type: "Resort", checked: false}, 
                                                      {type: "Serviced apartment", checked: false}, {type: "Tiny house", checked: false}, {type: "Townhouse", checked: false}, 
                                                      {type: "Train", checked: false}, {type: "Treehouse", checked: false}, {type: "Villa", checked: false}, {type: "Other", checked: false}
    ]);
    const [rooms_name, setRoomsName] = useState([{type: "Entire home/apt", checked: false}, {type: "Private room", checked: false}, {type: "Shared room", checked: false}]);

    const [room_num, setRoomNum] = useState([{type: "Any", checked: false},{type: "1", checked: false}, {type:"2", checked: false},{type: "3", checked: false},{type: "4", checked: false},
                                             {type:"5", checked: false},{type: "6", checked: false},{type:"7", checked: false},{type:"8+", checked: false}])
    const [bed_num, setBedNum] = useState([{type: "Any", checked: false},{type: "1", checked: false}, {type:"2", checked: false},{type: "3", checked: false},{type: "4", checked: false},
                                           {type:"5", checked: false},{type: "6", checked: false},{type:"7", checked: false},{type:"8+", checked: false}])

    const [essential_amenities, setEssentailAmenties] = useState([{type: "Wifi", checked: false}, {type: "Kitchen", checked: false}, {type: "Washing machine", checked: false}, {type: "Dryer", checked: false}, 
                                                                 {type: "Air conditioning", checked: false}, {type: "Heating", checked: false}, {type: "Dedicated workspace", checked: false}, 
                                                                 {type: "TV", checked: false}, {type: "Heating", checked: false}, {type: "Hair dryer", checked: false}, {type: "Iron", checked: false}]);

    const [features_amenities, setFeaturesAmenties] = useState([{type: "Pool", checked: false}, {type: "Hot tub", checked: false}, {type: "Free parking", checked: false}, {type: "EV charger", checked: false}, 
                                                                    {type: "Cot", checked: false}, {type: "King bed", checked: false}, {type: "Gym", checked: false}, 
                                                                    {type: "BBQ grill", checked: false}, {type: "Breakfast", checked: false}, {type: "Indoor fireplace", checked: false}, {type: "Smoking allowed", checked: false}]);

    const [location_amenities, setLocationAmenties] = useState([{type: "Beachfront", checked: false}, {type: "Waterfront", checked: false}]);

    const [safety_amenities, setSafetyAmenities] = useState([{type: "Smoke alarm", checked: false}, {type: "Carbon monoxide alarm", checked: false}]);

    const [price_range, setPriceRange] = useState([100, 10000]);
    const handleClickPropertyOpen = () => {
        setPropertyOpen(true)
    }
    const handlePropertyClose = (action) => {
        setPropertyOpen(false);
        if (action === "cancel"){
            setpropertyName(property_name.map(item=>{
                return {
                    ...item, checked: false
                }
            }))
        }
    };

    const handleRoomClose = (action) => {
        setRoomOpen(false);
        if (action === "cancel"){
            setRoomsName(rooms_name.map(item=>{
                return {
                    ...item, checked: false
                }
            }))
        }
    };
    const handleClickRoomOpen = () => {
        setRoomOpen(true);
    };

    const handleRoomBedClose = (action) => {
        setRomBedOpen(false);
        if (action === "cancel"){
            setRoomNum(room_num.map(item=>{
                return {
                    ...item, checked: false
                }
            }))
            setBedNum(bed_num.map(item=>{
                return {
                    ...item, checked: false
                }
            }))
        }
    };
    const handleClickRoomBedOpen = () => {
        setRomBedOpen(true);
    };


    const handleAmentiesClose = (action) => {
        setAmentiesOpen(false);
        if (action === "cancel"){
            setEssentailAmenties(essential_amenities.map(item=>{
                return {
                    ...item, checked: false
                }
            }))
            setFeaturesAmenties(features_amenities.map(item=>{
                return {
                    ...item, checked: false
                }
            }))
            setLocationAmenties(location_amenities.map(item=>{
                return {
                    ...item, checked: false
                }
            }))
            setSafetyAmenities(safety_amenities.map(item=>{
                return {
                    ...item, checked: false
                }
            }))
        }
    };
    const handleClickAmentiesOpen = () => {
        setAmentiesOpen(true);
    };
    
    const handlesetPriceRangeOpenClose = (action) => {
        setPriceRangeOpen(false);
        if (action == "cancel"){
            setPriceRange([100, 10000])
        }
    };
    const handleClicksetPriceRangeOpen = () => {
        setPriceRangeOpen(true);
    };
    // const PropertyItem = styled(Paper)(({ theme }) => ({
    //     backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    //     ...theme.typography.body2,
    //     padding: theme.spacing(1),
    //     textAlign: 'center',
    //     color: theme.palette.text.secondary,
    //     borderRadius: "10px",
    //     // background: "black",
    //     // color: "white"
    //     // height: "100px",
    //     // alignItems: "center"
    //   }));
    
    // const RoomItem = styled(Paper)(({ theme }) => ({
    // backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    // ...theme.typography.body2,
    // padding: theme.spacing(1),
    // textAlign: 'center',
    // color: theme.palette.text.secondary,
    // borderRadius: "10px",
    // height: "100px",
    // alignItems: "center"
    // }));

    // const RoomIBedtem = styled(Paper)(({ theme }) => ({
    //     backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    //     ...theme.typography.body2,
    //     padding: theme.spacing(1),
    //     textAlign: 'center',
    //     color: theme.palette.text.secondary,
    //     borderRadius: "10px",

    //     }));

    const getType = (current_item, dialog) => {
        if (dialog === "property"){
            var name = property_name;
        }
        else if (dialog === "rooms")
            var name = rooms_name;
        else if (dialog === "room_num") {
            var name = room_num;
        } else if (dialog === "bed_num") {
            var name = bed_num;
        }
        if (dialog === "room_num" || dialog === "bed_num") {
            var new_name = name.map(item=>{
                if (item.type === current_item.type){
                    item.checked = true
                } else {
                    item.checked = false
                }
                return item
            })
        } else {
            var new_name = name.map(item=>{
                if (item.type === current_item.type && current_item.checked == false){
                    item.checked = true
                } else if (item.type === current_item.type && current_item.checked == true){
                    item.checked = false
                }
                return item
            })
        }
        if (dialog == "property")
            setpropertyName(new_name)
        else if (dialog === "rooms")
            setRoomsName(new_name)
        else if (dialog === "room_num")
            setRoomNum(new_name)
        else if (dialog === "bed_num")
            setBedNum(new_name)
    };

    const onChange = (current_item, action) => {
        if (action == "essentail") {
            var name = essential_amenities;
        } else if (action == "features") {
            var name = features_amenities;
        } else if (action == "location") {
            var name = location_amenities;
        } else if (action == "saftey") {
            var name = safety_amenities;
        }
        var new_name = name.map(item=>{
            if (item.type === current_item.type && current_item.checked == false){
                item.checked = true
            } else if (item.type === current_item.type && current_item.checked == true){
                item.checked = false
            }
            return item
        })
        if (action == "essentail") {
            setEssentailAmenties(new_name)
        } else if (action == "features") {
            setFeaturesAmenties(new_name)
        } else if (action == "location") {
            setLocationAmenties(new_name);
        } else if (action == "saftey") {
            setSafetyAmenities(new_name);
        }
    }

    const onChangePrice = (newValue) => {
        setPriceRange(newValue)
    }

    const onsubmit = () => {
        // var property = property_name.every(item=>item.checked == false) 
        // var room = rooms_name.every(item=>item.checked == false) 
        // if (property){
        //         return <>
        //             <Alert severity="error">Please select property type</Alert>
        //             </>
        // } else if (room){
        //     <Alert severity="error">Please select room type</Alert>
        // } else {
            // var choosed_property = property_name.filter(item=>item.checked == true).map(item=>item.type);
            // var choosed_rooms = rooms_name.filter(item=>item.checked == true).map(item=>item.type)
            // var choosed_room_num = room_num.filter(item=>item.checked == true).map(item=>item.type) 
            // var choosed_bed_num = bed_num.filter(item=>item.checked == true).map(item=>item.type) 
            // var choosed_essentail_amenties = essential_amenities.filter(item=>item.checked == true).map(item=>item.type) 
            // var choosed_features_amenties = features_amenities.filter(item=>item.checked == true).map(item=>item.type) 
            // var choosed_location_amenties = location_amenities.filter(item=>item.checked == true).map(item=>item.type) 
            // var choosed_saftey_amenties = safety_amenities.filter(item=>item.checked == true).map(item=>item.type) 
            // var data = {
            //     property: choosed_property, rooms: choosed_rooms, 
            //     room_num: choosed_room_num, bed_num: choosed_bed_num, 
            //     essential_amenities: choosed_essentail_amenties,
            //     features_amenities: choosed_features_amenties, location_amenities: choosed_location_amenties, 
            //     safety_amenities: choosed_saftey_amenties, price_range: price_range
            // }
            var data = {
                "property": [
                  "Aparthotel",
                  "Apartment",
                  "Barn"
                ],
                "rooms": [
                  "Entire home/apt",
                  "Private room"
                ],
                "room_num": [
                  "1"
                ],
                "bed_num": [
                  "2"
                ],
                "essential_amenities": [
                  "Heating",
                  "Heating",
                  "Hair dryer"
                ],
                "features_amenities": [],
                "location_amenities": [],
                "safety_amenities": [],
                "price_range": []
              }
              get_filter_records(data).then(response =>{
                console.log(response)
            })
        }
    return (
        <>
            <div className="columns-2 mb-5 py-4">
                <img alt="airbnb" className="py-2"/>
                <div className="border-s-sky-50 shadow-md rounded-full inline-block p-3 w-20 h-10 blur-0">

                </div>
            </div>
            <div className="border-teal-100 shadow-md h-16 rounded-full" style={{marginLeft: "150px", width: "1200px"}}>
                <div className="grid grid-cols-6 divide-x divide-gray-500 divide-solid">
                    <div className="hover:shadow-md hover:rounded-full hover:bg-gray-200 h-16 p-5 font-serif font-bold cursor-pointer"
                    onClick={()=>handleClickPropertyOpen()}>
                        PROPERTY TYPE
                    </div>
                    <Dialog open={proprty_open}>
                        <DialogTitle sx={{fontWeight: "bold"}}>
                            PROPERTY TYPE
                        </DialogTitle>
                        <DialogContent sx={{height: "450px", margin: "10px"}}>
                           <Grid container gap={2} style={{cursor: "pointer"}}>
                           {property_name.map((item)=>
                                <>
                                    <Grid>
                                        {/* <PropertyItem backgroundColor={"black"} onClick={(e)=> getPropertyType(item)} className={`hover:outline-double font-serif ${item.checked == true ? "bg-black": ""}`}>{item.type}</PropertyItem> */}
                                        <div onClick={(e)=> getType(item, "property")} className={`border border-gray-400 p-1.5 shadow-md rounded-md hover:bg-gray-400 font-serif ${item.checked == true ? "bg-black text-white": ""}`}>{item.type}</div>
                                    </Grid>
                                </>
                                )}
                           </Grid>
                        </DialogContent>
                        <DialogActions sx={{display: "flex", justifyContent: "space-between"}}>
                            <Button color="inherit" onClick={()=>handlePropertyClose("cancel")} variant="contained">Cancel</Button>
                            <Button style={{color: "black"}} onClick={()=>handlePropertyClose("submit")} variant="contained">Submit</Button>
                        </DialogActions>
                    </Dialog>

                    <div className="hover:shadow-md hover:rounded-full hover:bg-gray-200 h-16 p-5 font-serif font-bold cursor-pointer"
                    onClick={handleClickRoomOpen}>
                        ROOM TYPE
                    </div>
                    <Dialog open={room_open}>
                        <DialogTitle sx={{fontWeight: "bold"}}>
                        ROOM TYPE
                        </DialogTitle>
                        <DialogContent sx={{height: "200px", marginX: "40px"}}>
                        <Grid container gap={2} style={{cursor: "pointer"}}>
                           {rooms_name.map((item)=>
                                <>
                                    <Grid>
                                    <div onClick={(e)=> getType(item, "rooms")} className={`border border-gray-400 p-1.5 shadow-md rounded-md hover:bg-gray-400 font-serif ${item.checked == true ? "bg-black text-white": ""}`}>{item.type}</div>
                                        {/* <div onClick={(e)=> console.log(e)} className="hover:outline-double font-serif bg-black">{item}</div> */}
                                    </Grid>
                                </>
                                )}
                           </Grid>
                        </DialogContent>
                        <DialogActions sx={{display: "flex", justifyContent: "space-between"}}>
                            <Button color="inherit" onClick={()=>handleRoomClose("cancel")} variant="contained">Cancel</Button>
                            <Button style={{color: "black"}} onClick={()=>handleRoomClose("submit")} variant="contained">Submit</Button>
                        </DialogActions>
                    </Dialog>

                    <div className="hover:shadow-md hover:rounded-full hover:bg-gray-200 h-16 p-5 font-serif font-bold cursor-pointer"
                    onClick={handleClickRoomBedOpen}>
                        ROOMS & BEDS
                    </div>
                    <Dialog open={rom_bed_open}>
                        <DialogTitle sx={{fontWeight: "bold"}}>
                            ROOMS & BEDS
                        </DialogTitle>
                        <DialogContent>
                            <Grid container gap={2} style={{cursor: "pointer",  marginBottom: "10px"}}>
                                Rooms 
                           {room_num.map((item)=>
                                <>
                                    <Grid>
                                    <div onClick={(e)=> getType(item, "room_num")} className={`border border-gray-400 p-1.5 shadow-md rounded-md hover:bg-gray-400 font-serif ${item.checked == true ? "bg-black text-white": ""}`}>{item.type}</div>
                                        {/* <RoomIBedtem onClick={(e)=> console.log(e)} className="hover:outline-double font-serif bg-black">{item}</RoomIBedtem> */}
                                    </Grid>
                                </>
                                )}
                            </Grid>
                            <Divider></Divider>
                            <Grid container gap={2} style={{cursor: "pointer", marginTop: "10px"}}>
                                Beds
                            {bed_num.map((item)=>
                                <>
                                    <Grid>
                                    <div onClick={(e)=> getType(item, "bed_num")} className={`border border-gray-400 p-1.5 shadow-md rounded-md hover:bg-gray-400 font-serif ${item.checked == true ? "bg-black text-white": ""}`}>{item.type}</div>
                                        {/* <RoomIBedtem onClick={(e)=> console.log(e)} className="hover:outline-double font-serif bg-black">{item}</RoomIBedtem> */}
                                    </Grid>
                                </>
                                )}
                            </Grid>
                        </DialogContent>
                        <DialogActions sx={{display: "flex", justifyContent: "space-between"}}>
                            <Button color="inherit" onClick={()=>handleRoomBedClose("cancel")} variant="contained">Cancel</Button>
                            <Button style={{color: "black"}} onClick={()=>handleRoomBedClose("submit")} variant="contained">Submit</Button>
                        </DialogActions>
                    </Dialog>

                    <div className="hover:shadow-md hover:rounded-full hover:bg-gray-200 h-16 p-5 font-serif font-bold cursor-pointer"
                    onClick={handleClickAmentiesOpen}>
                    AMENITIES
                    </div>
                    <Dialog open={amenties_open}>
                        <DialogTitle sx={{fontWeight: "bold"}}>
                        AMENITIES
                        </DialogTitle>
                        <DialogContent>
                            <div style={{fontWeight: "bold"}} >Essentails</div>
                            <Grid container columnGap={2}>
                                {essential_amenities.map(item=>
                                    <>
                                        <FormGroup>
                                            <FormControlLabel
                                                control={<Checkbox checked={item.checked} color="default" onChange={()=>onChange(item, "essentail")}/>}
                                                label={item.type}
                                            />
                                        </FormGroup> 
                                    </>                                    
                                )}
                            </Grid>

                            <div style={{fontWeight: "bold"}}>Features</div>
                            <Grid container columnGap={2}>
                                {features_amenities.map(item=>
                                    <>
                                        <FormGroup>
                                            <FormControlLabel
                                                control={<Checkbox checked={item.checked} color="default" onChange={()=>onChange(item, "features")}/>}
                                                label={item.type}
                                            />
                                        </FormGroup> 
                                    </>
                                )}
                            </Grid>
                            
                            <div style={{fontWeight: "bold"}}>Location</div>
                            <Grid container columnGap={2}>
                                {location_amenities.map(item=>
                                    <>
                                        <FormGroup>
                                            <FormControlLabel
                                                control={<Checkbox checked={item.checked} color="default" onChange={()=>onChange(item, "location")}/>}
                                                label={item.type}
                                            />
                                        </FormGroup> 
                                    </>
                                )}
                            </Grid>

                            <div style={{fontWeight: "bold"}}>Safety</div>
                            <Grid container columnGap={2}>
                                {safety_amenities.map(item=>
                                    <>
                                        <FormGroup>
                                            <FormControlLabel
                                                control={<Checkbox checked={item.checked} color="default" onChange={()=>onChange(item, "saftey")}/>}
                                                label={item.type}
                                            />
                                        </FormGroup> 
                                    </>
                                )}
                            </Grid>

                        </DialogContent>
                        <DialogActions sx={{display: "flex", justifyContent: "space-between"}}>
                            <Button color="inherit" onClick={()=>handleAmentiesClose("cancel")} variant="contained">Cancel</Button>
                            <Button style={{color: "black"}} color="error" onClick={()=>handleAmentiesClose("submit")} variant="contained">Submit</Button>
                        </DialogActions>
                    </Dialog>
                    <div className="hover:shadow-md hover:rounded-full hover:bg-gray-200 h-16 p-5 font-serif font-bold cursor-pointer"
                    onClick={handleClicksetPriceRangeOpen}>
                        PRICE RANGE
                    </div>
                    <Dialog open={price_range_open}>
                        <DialogTitle sx={{fontWeight: "bold"}}>
                            PRICE RANGE
                        </DialogTitle>
                        <DialogContent sx={{display: "table-column", WebkitAlignContent:"center", width: "600px"}}>
                        <DialogContentText>
                        Minimum & Maximum Nightly prices before fees and taxes
                        </DialogContentText>
                            <Slider sx={{width: "550px"}}
                                getAriaLabel={() => 'Price range'}
                                value={price_range}
                                onChange={(e, newValue)=> onChangePrice(newValue)}
                                valueLabelDisplay="auto"
                                min={100}
                                max={10000}
                                color="black"
                                // getAriaValueText={`$₹{price_range}`}
                            />
                            <div className="flex justify-around mt-10">
                                <FormGroup>
                                    <FormControlLabel labelPlacement="bottom"
                                        control={<Input readOnly value={"₹ " + price_range[0]}/>}
                                        label={"Minimum Price"}
                                    />
                                </FormGroup> 
                                <FormGroup>
                                    <FormControlLabel labelPlacement="bottom"
                                        control={<Input readOnly value={"₹ " + price_range[1] + "+"}/>}
                                        label={"Maximum Price"}
                                    />
                                </FormGroup>
                            </div>
                        </DialogContent>
                        <DialogActions sx={{display: "flex", justifyContent: "space-between"}}>
                            <Button color="inherit" onClick={()=>handlesetPriceRangeOpenClose("cancel")} variant="contained">Cancel</Button>
                            <Button style={{color: "black"}} onClick={()=>handlesetPriceRangeOpenClose("submit")} variant="contained">Submit</Button>
                        </DialogActions>
                    </Dialog>

                    <div className="hover:shadow-md hover:rounded-full hover:bg-red-400 h-16 p-5 font-serif font-bold cursor-pointer"
                    onClick={()=> onsubmit()} >
                        SHOW RECORDS
                    </div>
                </div>
            </div>
        </>
    );
}

// sx={{width: "600px", height: "300px", alignContent:"center", marginLeft: "5px"}}



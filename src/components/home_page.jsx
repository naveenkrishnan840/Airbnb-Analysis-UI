import React, {useState, useContext, useEffect, useRef} from "react";
import "../index";
import {Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Divider, Grid, Input, Slider, Stack, Skeleton} from "@mui/material";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import {FormGroup, FormControlLabel, Checkbox, Alert} from "@mui/material"
import {reactMainContext} from "../App"
import { get_filter_records, getShowMore, getDetails } from "../components/API/request_index"
import {useNavigate} from "react-router-dom";
import {Card, CardMedia, CardContent, Typography, CardActions, Tab, Tabs, TextField} from "@mui/material";
import { TabContext, TabList, TabPanel} from '@mui/lab';
import {ChartGrid} from "./ChartGrid";

export const HomePage = () => {

    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [tabValue, setTabValue] = useState("1");
    const limit = useRef(100);
    const {setSelectedRecords, selectedRecords, setPropertyWiseRecords, 
           setRoomWiseRecords, setCountryWiseRecords, setReviewsWiseRecords, setDataDetails, filterRecords, setFilterRecords, 
           docsCount, setDocsCount, showCount, setShowCount, searchRecords, setSearchRecords} = useContext(reactMainContext);
    const [property_open, setPropertyOpen] = useState(false);
    const [room_open, setRoomOpen] = useState(false);
    const [rom_bed_open, setRomBedOpen] = useState(false);
    const [amenities_open, setAmenitiesOpen] = useState(false);
    const [price_range_open, setPriceRangeOpen] = useState(false);
    const [property_name, setPropertyName] = useState([{type: "Aparthotel", checked: false}, {type: "Apartment", checked: false}, {type: "Barn", checked: false},
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

    const [bath_room_num, setBathRoomNum] = useState([{type: "Any", checked: false},{type: "1", checked: false}, {type:"2", checked: false},{type: "3", checked: false},{type: "4", checked: false},
                                           {type:"5", checked: false},{type: "6", checked: false},{type:"7", checked: false},{type:"8+", checked: false}])

    const [essential_amenities, setEssentialAmenities] = useState([{type: "Wifi", checked: false}, {type: "Kitchen", checked: false}, {type: "Washing machine", checked: false}, {type: "Dryer", checked: false},
                                                                 {type: "Air conditioning", checked: false}, {type: "Heating", checked: false}, {type: "Dedicated workspace", checked: false}, 
                                                                 {type: "TV", checked: false}, {type: "Hair dryer", checked: false}, {type: "Iron", checked: false}]);

    const [features_amenities, setFeaturesAmenities] = useState([{type: "Pool", checked: false}, {type: "Hot tub", checked: false}, {type: "Free parking", checked: false}, {type: "EV charger", checked: false},
                                                                    {type: "Cot", checked: false}, {type: "King bed", checked: false}, {type: "Gym", checked: false}, 
                                                                    {type: "BBQ grill", checked: false}, {type: "Breakfast", checked: false}, {type: "Indoor fireplace", checked: false}, {type: "Smoking allowed", checked: false}]);

    const [location_amenities, setLocationAmenities] = useState([{type: "Beachfront", checked: false}, {type: "Waterfront", checked: false}]);

    const [safety_amenities, setSafetyAmenities] = useState([{type: "Smoke alarm", checked: false}, {type: "Carbon monoxide alarm", checked: false}]);

    const [price_range, setPriceRange] = useState([10, 5000]);
    const handleClickPropertyOpen = () => {
        setPropertyOpen(true)
    }
    const handlePropertyClose = (action) => {
        setPropertyOpen(false);
        if (action === "cancel"){
            setPropertyName(property_name.map(item=>{
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
            setBathRoomNum(bath_room_num.map(item=>{
                return {
                    ...item, checked: false
                }
            }))
        }
    };
    const handleClickRoomBedOpen = () => {
        setRomBedOpen(true);
    };


    const handleAmenitiesClose = (action) => {
        setAmenitiesOpen(false);
        if (action === "cancel"){
            setEssentialAmenities(essential_amenities.map(item=>{
                return {
                    ...item, checked: false
                }
            }))
            setFeaturesAmenities(features_amenities.map(item=>{
                return {
                    ...item, checked: false
                }
            }))
            setLocationAmenities(location_amenities.map(item=>{
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

    const handleClickAmenitiesOpen = () => {
        setAmenitiesOpen(true);
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
        } else if (dialog == "bath_room_num"){
            var name = bath_room_num;
        }
        if (dialog === "room_num" || dialog === "bed_num" || dialog === "bath_room_num") {
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
            setPropertyName(new_name)
        else if (dialog === "rooms")
            setRoomsName(new_name)
        else if (dialog === "room_num")
            setRoomNum(new_name)
        else if (dialog === "bed_num")
            setBedNum(new_name)
        else if (dialog == "bath_room_num")
            setBathRoomNum(new_name)
    };

    const onChange = (current_item, action) => {
        if (action == "essential") {
            var name = essential_amenities;
        } else if (action == "features") {
            var name = features_amenities;
        } else if (action == "location") {
            var name = location_amenities;
        } else if (action == "safety") {
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
        if (action == "essential") {
            setEssentialAmenities(new_name)
        } else if (action == "features") {
            setFeaturesAmenities(new_name)
        } else if (action == "location") {
            setLocationAmenities(new_name);
        } else if (action == "safety") {
            setSafetyAmenities(new_name);
        }
    }

    const onChangePrice = (newValue) => {
        setPriceRange(newValue)
    }

    const onSubmit = () => {
        var property = property_name.every(item=>item.checked == false) 
        var room = rooms_name.every(item=>item.checked == false) 
        if (property){
                return <>
                    <Alert severity="error">Please select property type</Alert>
                    </>
        } else if (room){
            <Alert severity="error">Please select room type</Alert>
        } else {
            var choosed_property = property_name.filter(item=>item.checked == true).map(item=>item.type);
            var choosed_rooms = rooms_name.filter(item=>item.checked == true).map(item=>item.type)
            var choosed_room_num = room_num.filter(item=>item.checked == true).map(item=>item.type) 
            var choosed_bed_num = bed_num.filter(item=>item.checked == true).map(item=>item.type) 
            var choosed_bath_room_num = bath_room_num.filter(item=>item.checked == true).map(item=>item.type) 
            var choosed_essential_amenties = essential_amenities.filter(item=>item.checked == true).map(item=>item.type)
            var choosed_features_amenties = features_amenities.filter(item=>item.checked == true).map(item=>item.type) 
            var choosed_location_amenties = location_amenities.filter(item=>item.checked == true).map(item=>item.type) 
            var choosed_safety_amenties = safety_amenities.filter(item=>item.checked == true).map(item=>item.type)
            limit.current = 100
            var data = {
                property: choosed_property, rooms: choosed_rooms, 
                room_num: choosed_room_num[0], bed_num: choosed_bed_num[0], bath_room_num: choosed_bath_room_num[0],
                essential_amenities: choosed_essential_amenties,
                features_amenities: choosed_features_amenties, location_amenities: choosed_location_amenties, 
                safety_amenities: choosed_safety_amenties, price_range: price_range, limit: limit.current
            }
            setFilterRecords(data)
            setIsLoading(true)
              get_filter_records(data).then(response =>{
                setDocsCount(response?.detail.docs_count);
                setShowCount(response?.detail.df.length);
                setSelectedRecords(response?.detail.df);
                setSearchRecords(response?.detail.df);
                setCountryWiseRecords(response?.detail.country_wise_avg_price);
                setPropertyWiseRecords(response?.detail.property_type_group_aggregation);
                setRoomWiseRecords(response?.detail.room_type_group_aggregation);
                setReviewsWiseRecords(response?.detail.property_type_wise_no_of_reviews);
                console.log(response)
                setIsLoading(false)
            })
        }
    }

    const handleShowMore = () => {
        limit.current = searchRecords.length + 100
        let filtered = {...filterRecords, limit: searchRecords.length + 100}
        setFilterRecords(filtered)
        setIsLoading(true)
        getShowMore(filtered).then(response =>{
            setSelectedRecords([...selectedRecords, ...response.detail]);
            setSearchRecords([...searchRecords, ...response.detail]);
            setShowCount(response?.detail.length)
            console.log(response)
            setIsLoading(false)
        })
    }

    const showDetails = (docId) => {
        getDetails({doc_id: docId}).then(response => {
            setDataDetails(response.detail[0]);
            navigate("/show")
            console.log(response)
        })
    }
    const onChangeTab = (event, newValue) => {
        setTabValue(newValue);
    }

    const filterName = (evt) => {
        if (evt.target.value === ""){
            setSearchRecords(selectedRecords)
            setShowCount(selectedRecords.length)
        } else {
            let rec = selectedRecords.filter((item) => item.name_country.toLocaleLowerCase().includes(evt.target.value.toLocaleLowerCase()));
            setSearchRecords(rec)
            setShowCount(rec.length)
        }
    }
    return (
        <>
            <div className="border-teal-100 h-16 rounded-full mx-48">
                <div className="grid grid-cols-6 divide-gray-500 divide-solid gap-2">
                    <div className="hover:text-white text-center shadow-md rounded-full bg-gray-200 hover:bg-gray-600 h-16 p-5 font-serif font-bold cursor-pointer"
                    onClick={()=>handleClickPropertyOpen()}>
                        PROPERTY TYPE
                    </div>
                    <Dialog open={property_open}>
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
                            <Button style={{color: "black"}} color="error" onClick={()=>handlePropertyClose("submit")} variant="contained">Submit</Button>
                        </DialogActions>
                    </Dialog>

                    <div className="hover:text-white text-center shadow-md rounded-full bg-gray-200 hover:bg-gray-600 h-16 p-5 font-serif font-bold cursor-pointer"
                    onClick={handleClickRoomOpen}>
                        ROOM TYPE
                    </div>
                    <Dialog open={room_open}>
                        <DialogTitle sx={{fontWeight: "bold", WebkitAlignContent: "center"}}>
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
                            <Button style={{color: "black"}} color="error" onClick={()=>handleRoomClose("submit")} variant="contained">Submit</Button>
                        </DialogActions>
                    </Dialog>

                    <div className="hover:text-white text-center shadow-md rounded-full bg-gray-200 hover:bg-gray-600 h-16 p-5 font-serif font-bold cursor-pointer"
                    onClick={handleClickRoomBedOpen}>
                        ROOMS & BEDS
                    </div>
                    <Dialog open={rom_bed_open}>
                        <DialogTitle sx={{fontWeight: "bold"}}>
                            ROOMS & BEDS
                        </DialogTitle>
                        <DialogContent>
                            
                            
                            <Grid container gap={2} style={{cursor: "pointer", marginTop: "10px"}}>
                                Bedrooms
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
                            <Grid container gap={2} style={{cursor: "pointer",  marginBottom: "10px", marginTop: "10px"}}>
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
                            <Divider></Divider>
                            <Grid container gap={2} style={{cursor: "pointer",  marginBottom: "10px"}}>
                                Bathrooms
                           {bath_room_num.map((item)=>
                                <>
                                    <Grid>
                                    <div onClick={(e)=> getType(item, "bath_room_num")} className={`border border-gray-400 p-1.5 shadow-md rounded-md hover:bg-gray-400 font-serif ${item.checked == true ? "bg-black text-white": ""}`}>{item.type}</div>
                                        {/* <RoomIBedtem onClick={(e)=> console.log(e)} className="hover:outline-double font-serif bg-black">{item}</RoomIBedtem> */}
                                    </Grid>
                                </>
                                )}
                            </Grid>
                        </DialogContent>
                        <DialogActions sx={{display: "flex", justifyContent: "space-between"}}>
                            <Button color="inherit" onClick={()=>handleRoomBedClose("cancel")} variant="contained">Cancel</Button>
                            <Button style={{color: "black"}} color="error" onClick={()=>handleRoomBedClose("submit")} variant="contained">Submit</Button>
                        </DialogActions>
                    </Dialog>

                    <div className="hover:text-white text-center shadow-md rounded-full bg-gray-200 hover:bg-gray-600 h-16 p-5 font-serif font-bold cursor-pointer"
                    onClick={handleClickAmenitiesOpen}>
                    AMENITIES
                    </div>
                    <Dialog open={amenities_open}>
                        <DialogTitle sx={{fontWeight: "bold"}}>
                        AMENITIES
                        </DialogTitle>
                        <DialogContent>
                            <div style={{fontWeight: "bold"}} >Essentials</div>
                            <Grid container columnGap={2}>
                                {essential_amenities.map(item=>
                                    <>
                                        <FormGroup>
                                            <FormControlLabel
                                                control={<Checkbox checked={item.checked} color="default" onChange={()=>onChange(item, "essential")}/>}
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
                                                control={<Checkbox checked={item.checked} color="default" onChange={()=>onChange(item, "safety")}/>}
                                                label={item.type}
                                            />
                                        </FormGroup> 
                                    </>
                                )}
                            </Grid>

                        </DialogContent>
                        <DialogActions sx={{display: "flex", justifyContent: "space-between"}}>
                            <Button color="inherit" onClick={()=>handleAmenitiesClose("cancel")} variant="contained">Cancel</Button>
                            <Button style={{color: "black"}} color="error" onClick={()=>handleAmenitiesClose("submit")} variant="contained">Submit</Button>
                        </DialogActions>
                    </Dialog>
                    <div className="hover:text-white text-center shadow-md rounded-full bg-gray-200 hover:bg-gray-500 h-16 p-5 font-serif font-bold cursor-pointer"
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
                                min={10}
                                max={5000}
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
                            <Button style={{color: "black"}} color="error" onClick={()=>handlesetPriceRangeOpenClose("submit")} variant="contained">Submit</Button>
                        </DialogActions>
                    </Dialog>

                    <div className="hover:text-white text-center shadow-md rounded-full bg-red-400 hover:bg-red-600 h-16 p-5 font-serif font-bold cursor-pointer"
                    onClick={()=> onSubmit()} >
                        SHOW RECORDS
                    </div>
                </div>

            </div>
            <Divider sx={{marginY: "50px"}}></Divider>
            {selectedRecords.length > 0 && 
            <TabContext value={tabValue}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList onChange={onChangeTab} aria-label="lab API tabs example">
                        <Tab label="Show" value="1" />
                        <Tab label="Charts" value="2" />
                    </TabList>
                </Box>
                <TabPanel value="1">
                    <div className="flex justify-between">
                        <TextField id="outlined-basic" label="Search for Name" variant="outlined" onInput={(evt) => filterName(evt)} />
                        <p className="font-bold border-separate shadow-md p-4 rounded-md bg-gray-400">Showing {showCount} records</p>
                    </div>
                    <Box sx={{width: "100%", margin:5}}>
                        <Grid container gridColumn={4} spacing={2} rowGap={2} columnGap={2}>
                            {!isLoading ?  (searchRecords.length > 0 ? searchRecords.map((item) => 
                                <> 
                                     <Card sx={{ width: 230, borderRadius: "30px" }}>
                                        <CardMedia 
                                            component="img"
                                            // height="140"
                                            image={item.thumbnail_url}
                                            alt={item.name_country}
                                            // sx={{}}
                                        />
                                        <CardContent>
                                            <Typography gutterBottom sx={{fontFamily: "serif"}}>
                                                {item.name_country}
                                            </Typography>
                                            <Typography gutterBottom sx={{fontWeight: "bold"}} color={"darkcyan"}>
                                                Price: ₹{item.price} per night
                                            </Typography>
                                            <Typography gutterBottom variant="body2" color="InfoText">
                                                Without Price <br/> Minimum {item.minimum_nights} nights <br/> Maximum {item.maximum_nights} nights
                                            </Typography>
                                            <Typography variant="body2" color="InfoText">
                                                With Price <br/> Minimum nights ₹{item.price * Number(item.minimum_nights)} <br/> Maximum nights ₹{item.price * Number(item.maximum_nights)}
                                            </Typography>
                                        </CardContent>
                                        <CardActions sx={{margin: "10px"}}>
                                            <Button onClick={()=> showDetails(item._id)} color="error" variant="outlined" size="small">Details</Button>
                                        </CardActions>
                                    </Card>
                                </>
                            ): <div className="flex justify-center">
                                No Records Found
                                </div>) : 
                                // <div className="flex justify-center">
                                Array.from({ length: limit.current }, (_, i) => i + 1).map(()=>(<Stack direction={"column"} useFlexGap spacing={2}>
                                    {/* For variant="text", adjust the height via font-size */}
                                    <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
                                    {/* For other variants, adjust the size with `width` and `height` */}
                                    <Skeleton variant="circular" width={40} height={40} />
                                    <Skeleton variant="rectangular" width={210} height={60} />
                                    <Skeleton variant="rounded" width={210} height={60} />
                              </Stack>)) 
                                // </div>
                                }
                        </Grid>
                        {docsCount > 100 && <div className="flex justify-center mt-5">
                            <Button onClick={()=>handleShowMore()} variant="contained" color="error">Show More</Button>
                        </div>}
                    </Box>
                </TabPanel>
                <TabPanel value="2">
                    <ChartGrid />
                </TabPanel>
            </TabContext>
            }
        </>
    );
}
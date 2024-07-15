import React, {useState} from "react";
import "../index";
import * as images from "../logo/airbnb-logo.png"
import {Button, Dialog, DialogActions, DialogContent, DialogTitle, Divider, Grid, Input, Slider} from "@mui/material";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

export const HomePage = () => {
    const [proprty_open, setPropertyOpen] = useState(false);
    const [room_open, setRoomOpen] = useState(false);
    const [rom_bed_open, setRomBedOpen] = useState(false);
    const [amenties_open, setAmentiesOpen] = useState(false);
    const [price_range_open, setPriceRangeOpen] = useState(false);
    const [property_name, setpropertName] = useState(["Aparthotel", "Apartment", "Barn", "Bed and breakFast", "Boat", "Boutique hotel", "Bungalow",
                                                      "Cabin", "Camper/RV", "Campsite", "Casa particular (Cuba)", "Castle", "Chalet", "Condominium",
                                                      "Cattage", "Earth house", "Farm stay", "Guest suite", "Guesthouse", "Heritage hotel (India)", "Hostel",
                                                      "Hotel", "House", "Houseboat", "Hut", "Loft", "Nature lodge", "Pension (South Korea)","Resort", 
                                                      "Serviced apartment", "Tiny house", "Townhouse", "Train", "Treehouse", "Villa", "Other"
    ]);
    const [rooms_name, setRoomsName] = useState(["Entire home/apt", "Private room", "Shared room"]);

    const [room_bed_num] = useState(["Any", "1", "2", "3", "4", "5", "6", "7", "8+"])

    const [price_range, setPriceRange] = useState([1, 1000]);
    const handleClickPropertyOpen = () => {
        setPropertyOpen(true)
    }
    const handlePropertyClose = () => {
        setPropertyOpen(false);
    };

    const handleRoomClose = () => {
        setRoomOpen(false);
    };
    const handleClickRoomOpen = () => {
        setRoomOpen(true);
    };

    const handleRoomBedClose = () => {
        setRomBedOpen(false);
    };
    const handleClickRoomBedOpen = () => {
        setRomBedOpen(true);
    };


    const handleAmentiesClose = () => {
        setAmentiesOpen(false);
    };
    const handleClickAmentiesOpen = () => {
        setAmentiesOpen(true);
    };
    
    const handlesetPriceRangeOpenClose = () => {
        setPriceRangeOpen(false);
    };
    const handleClicksetPriceRangeOpen = () => {
        setPriceRangeOpen(true);
    };
    const PropertyItem = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        borderRadius: "10px",
        // height: "100px",
        // alignItems: "center"
      }));
    
    const RoomItem = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    borderRadius: "10px",
    height: "100px",
    alignItems: "center"
    }));

    const RoomIBedtem = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        borderRadius: "10px",
        }));

      
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
                    <Dialog open={proprty_open} onClose={handlePropertyClose}>
                        <DialogTitle>
                            PROPERTY TYPE
                        </DialogTitle>
                        <DialogContent sx={{height: "450px", margin: "10px"}}>
                           <Grid container gap={2} style={{cursor: "pointer"}}>
                           {property_name.map((item)=>
                                <>
                                    <Grid>
                                        <PropertyItem onClick={(e)=> console.log(e)} className="hover:outline-double font-serif bg-black">{item}</PropertyItem>
                                    </Grid>
                                </>
                                )}
                           </Grid>
                        </DialogContent>
                        <DialogActions sx={{display: "flex", justifyContent: "space-between"}}>
                            <Button onClick={()=>handlePropertyClose()} variant="contained">Cancel</Button>
                            <Button variant="contained">Submit</Button>
                        </DialogActions>
                    </Dialog>

                    <div className="hover:shadow-md hover:rounded-full hover:bg-gray-200 h-16 p-5 font-serif font-bold cursor-pointer"
                    onClick={handleClickRoomOpen}>
                    ROOM TYPE
                    </div>
                    <Dialog open={room_open} onClose={handleRoomClose}>
                        <DialogTitle>
                        ROOM TYPE
                        </DialogTitle>
                        <DialogContent sx={{height: "200px", marginX: "40px"}}>
                        <Grid container gap={2} style={{cursor: "pointer"}}>
                           {rooms_name.map((item)=>
                                <>
                                    <Grid>
                                        <RoomItem onClick={(e)=> console.log(e)} className="hover:outline-double font-serif bg-black">{item}</RoomItem>
                                    </Grid>
                                </>
                                )}
                           </Grid>
                        </DialogContent>
                        <DialogActions sx={{display: "flex", justifyContent: "space-between"}}>
                            <Button onClick={()=>handleRoomClose()} variant="contained">Cancel</Button>
                            <Button variant="contained">Submit</Button>
                        </DialogActions>
                    </Dialog>

                    <div className="hover:shadow-md hover:rounded-full hover:bg-gray-200 h-16 p-5 font-serif font-bold cursor-pointer"
                    onClick={handleClickRoomBedOpen}>
                        ROOMS & BEDS
                    </div>
                    <Dialog open={rom_bed_open} onClose={handleRoomBedClose}>
                        <DialogTitle>
                        ROOMS & BEDS
                        </DialogTitle>
                        <DialogContent>
                            <Grid container gap={2} style={{cursor: "pointer",  marginBottom: "10px"}}>
                                Rooms 
                           {room_bed_num.map((item)=>
                                <>
                                    <Grid>
                                        <RoomIBedtem onClick={(e)=> console.log(e)} className="hover:outline-double font-serif bg-black">{item}</RoomIBedtem>
                                    </Grid>
                                </>
                                )}
                            </Grid>
                            <Divider></Divider>
                            <Grid container gap={2} style={{cursor: "pointer", marginTop: "10px"}}>
                                Beds
                            {room_bed_num.map((item)=>
                                <>
                                    <Grid>
                                        <RoomIBedtem onClick={(e)=> console.log(e)} className="hover:outline-double font-serif bg-black">{item}</RoomIBedtem>
                                    </Grid>
                                </>
                                )}
                            </Grid>
                        </DialogContent>
                        <DialogActions sx={{display: "flex", justifyContent: "space-between"}}>
                            <Button onClick={()=>handleRoomBedClose()} variant="contained">Cancel</Button>
                            <Button variant="contained">Submit</Button>
                        </DialogActions>
                    </Dialog>

                    <div className="hover:shadow-md hover:rounded-full hover:bg-gray-200 h-16 p-5 font-serif font-bold cursor-pointer"
                    onClick={handleClickAmentiesOpen}>
                    AMENITIES
                    </div>
                    <Dialog open={amenties_open} onClose={handleAmentiesClose}>
                        <DialogTitle>
                        AMENITIES
                        </DialogTitle>
                        <DialogContent>
                            
                        </DialogContent>
                        <DialogActions>
                            <Button variant="contained">Submit</Button>
                        </DialogActions>
                    </Dialog>

                    <div className="hover:shadow-md hover:rounded-full hover:bg-gray-200 h-16 p-5 font-serif font-bold cursor-pointer"
                    onClick={handleClicksetPriceRangeOpen}>
                        PRICE RANGE
                    </div>
                    <Dialog open={price_range_open} onClose={handlesetPriceRangeOpenClose}>
                        <DialogTitle>
                        PRICE RANGE
                        </DialogTitle>
                        <DialogContent sx={{width: "600px", height: "300px", alignContent:"center", marginLeft: "5px"}}>
                            <Slider sx={{width: "550px"}}
                                getAriaLabel={() => 'Price range'}
                                value={price_range}
                                onChange={(e, newValue)=> setPriceRange(newValue)}
                                valueLabelDisplay="auto"
                                min={1}
                                max={1000}
                                // getAriaValueText={`$₹{price_range}`}
                            />
                            <Input  ></Input>
                            <Input></Input>
                        </DialogContent>
                        <DialogActions sx={{display: "flex", justifyContent: "space-between"}}>
                            <Button onClick={()=>handlesetPriceRangeOpenClose()} variant="contained">Cancel</Button>
                            <Button variant="contained">Submit</Button>
                        </DialogActions>
                    </Dialog>

                    <div className="hover:shadow-md hover:rounded-full hover:bg-red-400 h-16 p-5 font-serif font-bold cursor-pointer">
                        SHOW RECORDS
                    </div>
                </div>
            </div>
        </>
    );
}



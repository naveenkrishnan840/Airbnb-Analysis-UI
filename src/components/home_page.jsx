import React, {useState} from "react";
import "../index";
import * as images from "../logo/airbnb-logo.png"
import {Button, Dialog, DialogActions, DialogContent, DialogTitle, Select} from "@mui/material";

export const HomePage = () => {
    const [proprty_open, setPropertyOpen] = useState(false);
    const [room_open, setRoomOpen] = useState(false);
    const [rom_bed_open, setRomBedOpen] = useState(false);
    const [amenties_open, setAmentiesOpen] = useState(false);
    const [price_range_open, setPriceRangeOpen] = useState(false);

    
    
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
                        <DialogContent>
                            <Select></Select>
                        </DialogContent>
                        <DialogActions>
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
                        <DialogContent>
                            <Select></Select>
                        </DialogContent>
                        <DialogActions>
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
                            <Select></Select>
                        </DialogContent>
                        <DialogActions>
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
                            <Select></Select>
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
                        <DialogContent>
                            <Select></Select>
                        </DialogContent>
                        <DialogActions>
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



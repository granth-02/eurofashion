import React, { useState } from "react";
import styled from "styled-components";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
import ZoomOutIcon from "@mui/icons-material/ZoomOut";
import DialogTitle from "@mui/material/DialogTitle";

// Blue Suits
import b1 from "../Images/suit_blue.webp"
import b2 from "../Images/suit_blue2.webp"
import b3 from "../Images/suit_blue3.webp"
import b4 from "../Images/suit_blue4.webp"
import b5 from "../Images/suit_blue5.webp"
import b6 from "../Images/suit_blue6.webp"
import b7 from "../Images/suit_blue_checks.webp"
import b8 from "../Images/suit_blue_checks2.webp"
import b9 from "../Images/suit_blue_POW.webp"
import b10 from "../Images/suit_blue_POW2.webp"
import b11 from "../Images/suit_blue_stripes.webp"

// Brown Suits
import br1 from "../Images/suit_brown.webp"

// Charcoal Suits
import ch1 from "../Images/suit_charcoal.webp"
import ch2 from "../Images/suit_charcoal2.webp"
import ch3 from "../Images/suit_charcoal_stripes.webp"

// Grey Suits
import g1 from "../Images/suit_grey.webp";
import g2 from "../Images/suit_grey2.webp";
import g3 from "../Images/suit_grey3.webp";
import g4 from "../Images/suit_grey4.webp";
import g5 from "../Images/suit_grey_checks.webp";
import g6 from "../Images/suit_grey_checks2.webp";
import g7 from "../Images/suit_grey_POW.webp";
import g8 from "../Images/suit_grey_HB.webp";
import g9 from "../Images/suit_grey_stripes.webp";

// Black Suits
import bl1 from "../Images/suit_black.webp"

export const blueSuits = [
  { src: b1, description: "222405-500 Blue", pattern: "simple" },
  { src: b2, description: "501170-420 Blue", pattern: "simple" },
  { src: b3, description: "222401-500 Blue", pattern: "simple" },
  { src: b4, description: "222402-500 Blue", pattern: "simple" },
  { src: b5, description: "501168-420 Blue", pattern: "simple" },
  { src: b6, description: "501170-420 Blue", pattern: "simple" },
  { src: b7, description: "225820-620 Blue Checks", pattern: "checks" },
  { src: b8, description: "225814-620 Blue Checks", pattern: "checks" },
  { src: b9, description: "501107-420 Blue POW", pattern: "pow" },
  { src: b10, description: "501109-420 Blue POW", pattern: "pow" },
  { src: b11, description: "501133-420 Blue Stripes", pattern: "stripes" },
];

export const brownSuits  = [
    { src: br1, description: "222422-500 Brown", pattern: "simple" },
  ];

export const charcoalSuits = [
  { src: ch1, description: "501166-420 Charcoal", pattern: "simple" },
  { src: ch2, description: "501178-420 Charcoal", pattern: "simple" },
  { src: ch3, description: "501136-420 Charcoal Stripes", pattern: "stripes" },
];

export const greySuits = [
  { src: g1, description: "222413-500 Grey", pattern: "simple" },
  { src: g2, description: "222416-500 D Grey", pattern: "simple" },
  { src: g3, description: "501164-420 Grey", pattern: "simple" },
  { src: g4, description: "501176-420 Grey", pattern: "simple" },
  { src: g5, description: "225812-620 Grey Checks", pattern: "checks" },
  { src: g6, description: "225819-620 Grey Checks", pattern: "checks" },
  { src: g7, description: "501110-420 Grey POW", pattern: "pow" },
  { src: g8, description: "501157-420 Grey HB", pattern: "hb" },
  { src: g9, description: "501127-420 Grey Stripes", pattern: "stripes" },
];

export const blackSuits  = [
    { src: bl1, description: "222418-500 Black", pattern: "simple" }
  ];

export const allSuits = [
  ...blueSuits.map((suit) => ({ ...suit, color: "blue" })),
  ...greySuits.map((suit) => ({ ...suit, color: "grey" })),
  ...brownSuits.map((suit) => ({ ...suit, color: "brown" })),
  ...charcoalSuits.map((suit) => ({ ...suit, color: "charcoal" })),
  ...blackSuits.map((suit) => ({...suit, color: "black"}))
];

const ColorSuitCard = ({ color }) => {
    const [open, setOpen] = useState(false);
    const [selectedSuit, setSelectedSuit] = useState(null);
    const [zoom, setZoom] = useState(1);
  
    const handleClickOpen = (suit) => {
      setSelectedSuit(suit);
      setOpen(true);
      setZoom(1); // Reset zoom when opening
    };
  
    const handleClose = () => {
      setOpen(false);
      setSelectedSuit(null);
    };
  
    const handleZoomIn = () => {
      setZoom((prevZoom) => Math.min(prevZoom + 0.2, 3)); // Max zoom 3x
    };
  
    const handleZoomOut = () => {
      setZoom((prevZoom) => Math.max(prevZoom - 0.2, 1)); // Min zoom 1x
    };
    const filteredSuits = allSuits.filter((suit) =>
      suit.color.toLowerCase().includes(color.toLowerCase())
    );
  
    return (
      <>
      <Card>
        {filteredSuits.map((suit, index) => (
          <Wrap key={index} onClick={() => handleClickOpen(suit)}>
            <img src={suit.src} alt={suit.description} />
            <Description>{suit.description}</Description>
          </Wrap>
        ))}
      </Card>
  
      {/* Dialog */}
      <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
      <CustomDialogTitle>{selectedSuit?.description}</CustomDialogTitle>
      <DialogContent>
        {selectedSuit && (
          <DialogImageContainer>
            <ZoomableImage zoom={zoom}>
              <img src={selectedSuit.src} alt={selectedSuit.description} />
            </ZoomableImage>
            <ZoomControls>
              <IconButton onClick={handleZoomIn}>
                <ZoomInIcon />
              </IconButton>
              <IconButton onClick={handleZoomOut}>
                <ZoomOutIcon />
              </IconButton>
            </ZoomControls>
          </DialogImageContainer>
        )}
      </DialogContent>
    </Dialog>
    </>
    );
  };
  
  const Card = styled.div`
    display: grid;
    grid-gap: 30px;
    gap: 30px;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    margin-top: 20px;
    margin-left: 10px;
    margin-right: 10px;
    margin-bottom: 30px;
  `;
  
  const Wrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 0;
    border-radius: 10px;
    background-color: white;
    cursor: pointer;
  
    &:hover {
      transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
      border: 5px solid #2c5ca4;
    }
  
    img {
      margin-top: 10px;
      border-radius: 5px;
      width: 96%;
    }
  
    h2 {
      color: #2c5ca4;
      text-align: center;
    }
  `;
  
  const Description = styled.h2`
    color: rgb(101, 101, 101);
    text-align: center;
    margin-top: 10px;
  `;
  const DialogImageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  `;
  
  const ZoomableImage = styled.div`
    img {
      transform: scale(${({ zoom }) => zoom});
      transition: transform 0.3s ease;
      border-radius: 10px;
    }
  `;
  
  const ZoomControls = styled.div`
    display: flex;
    gap: 10px;
    margin-top: 10px;
    button {
      background-color: white; /* White background for the icons */
      border-radius: 50%;      /* Circular button style */
      box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); /* Subtle shadow */
    }
  `;
  
  const CustomDialogTitle = styled(DialogTitle)`
    color: #2c5ca4;
    font-weight: bold;
    text-align: center;
  `;
  
  export default ColorSuitCard;
import React, { useState } from "react";
import styled from "styled-components";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
import ZoomOutIcon from "@mui/icons-material/ZoomOut";
import DialogTitle from "@mui/material/DialogTitle";

// Import all suit data from individual files
import { blueSuits } from "./BlueSuitCard";
import { greySuits } from "./GreySuitCard";
import { brownSuits } from "./BrownSuitCard";
import { charcoalSuits } from "./CharcoalSuitCard";

// Combine all suits into one array
const allSuits = [
  ...blueSuits.map((suit) => ({ ...suit, color: "blue" })),
  ...greySuits.map((suit) => ({ ...suit, color: "grey" })),
  ...brownSuits.map((suit) => ({ ...suit, color: "brown" })),
  ...charcoalSuits.map((suit) => ({ ...suit, color: "charcoal" })),
];

// Generalized Card Component
const PatternSuitCard = ({ pattern }) => {
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
    suit.pattern.toLowerCase().includes(pattern.toLowerCase())
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

export default PatternSuitCard;

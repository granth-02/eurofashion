import React, { useState } from "react";
import styled from "styled-components";
import { styled as muiStyled } from '@mui/material/styles';
import { blueSuits } from "./BlueSuitCard";
import { greySuits } from "./GreySuitCard";
import { charcoalSuits } from "./CharcoalSuitCard";
import { blackSuits } from "./BlackSuitCard";
import { brownSuits } from "./BrownSuitCard";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
import ZoomOutIcon from "@mui/icons-material/ZoomOut";

const SuitCard = () => {
  const [open, setOpen] = useState(false);
  const [selectedSuit, setSelectedSuit] = useState(null);
  const [zoomLevel, setZoomLevel] = useState(1); // State to manage zoom level

  const handleClickOpen = (suit) => {
    setSelectedSuit(suit);
    setZoomLevel(1); // Reset zoom level
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedSuit(null);
  };

  const handleZoomIn = () => setZoomLevel((prev) => Math.min(prev + 0.2, 3)); // Max zoom 3x
  const handleZoomOut = () => setZoomLevel((prev) => Math.max(prev - 0.2, 1)); // Min zoom 1x

  const allSuits = [...blueSuits, ...greySuits, ...charcoalSuits, ...blackSuits, ...brownSuits];

  return (
    <>
      <Card>
        {allSuits.map((suit, index) => (
          <Wrap key={index} onClick={() => handleClickOpen(suit)}>
            <img src={suit.src} alt={suit.description} />
            <Description>{suit.description}</Description>
          </Wrap>
        ))}
      </Card>

      {/* Dialog for suit details */}
      <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
        <CustomDialogTitle>{selectedSuit?.description}</CustomDialogTitle>
        <DialogContent>
          {selectedSuit && (
            <DialogImageContainer zoom={zoomLevel}>
              <img src={selectedSuit.src} alt={selectedSuit.description} />
              <ZoomControls>
                <IconButton onClick={handleZoomOut} disabled={zoomLevel <= 1}>
                  <ZoomOutIcon />
                </IconButton>
                <IconButton onClick={handleZoomIn} disabled={zoomLevel >= 3}>
                  <ZoomInIcon />
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
`;

const Description = styled.h2`
  color: #2c5ca4;
  text-align: center;
  margin-top: 10px;
`;

const DialogImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  img {
    max-width: 100%;
    max-height: 80vh;
    transform: scale(${(props) => props.zoom});
    transition: transform 0.3s ease;
    border-radius: 10px;
  }
`;

const CustomDialogTitle = muiStyled(DialogTitle)`
  color: #2c5ca4;
  font-weight: bold;
  text-align: center;
`;

const ZoomControls = styled.div`
  margin-top: 10px;
  display: flex;
  gap: 10px;

  button {
    background-color: white; /* White background for the icons */
    border-radius: 50%;      /* Circular button style */
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); /* Subtle shadow */
  }
`;


export default SuitCard;

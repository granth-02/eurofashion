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
  const [zoomLevel, setZoomLevel] = useState(1);

  const handleClickOpen = (suit) => {
    setSelectedSuit(suit);
    setZoomLevel(1);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedSuit(null);
  };

  const handleZoomIn = () => setZoomLevel((prev) => Math.min(prev + 0.2, 3));
  const handleZoomOut = () => setZoomLevel((prev) => Math.max(prev - 0.2, 1));

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
  grid-gap: 20px;
  gap: 20px;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  margin: 20px 10px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 15px;
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
    gap: 10px;
  }
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
    height: auto;
  }
`;

const Description = styled.h2`
  color: #2c5ca4;
  text-align: center;
  margin-top: 10px;

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

const DialogImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  img {
    max-width: 100%;
    max-height: 70vh;
    transform: scale(${(props) => props.zoom});
    transition: transform 0.3s ease;
    border-radius: 10px;

    @media (max-width: 768px) {
      max-height: 50vh;
    }

    @media (max-width: 480px) {
      max-height: 40vh;
    }
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
    background-color: white;
    border-radius: 50%;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);

    &:disabled {
      opacity: 0.5;
    }
  }
`;

export default SuitCard;

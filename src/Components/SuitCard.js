import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
import ZoomOutIcon from "@mui/icons-material/ZoomOut";
import DialogTitle from "@mui/material/DialogTitle";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress"; 

const API_URL =
  "https://script.google.com/macros/s/AKfycbxpmV00PpzE0D4RWH_Bov2TTe0HyUZllZ5kPTIIDqGHPeqpPsUnnEcYFPOWGJ_Ajma4/exec"
const SuitCard = ({ color, pattern }) => {
  const [suits, setSuits] = useState([]);
  const [loading, setLoading] = useState(true); 
  const [open, setOpen] = useState(false);
  const [selectedSuit, setSelectedSuit] = useState(null);
  const [zoom, setZoom] = useState(1);

  // Fetch Data from API
  useEffect(() => {
    const fetchSuits = async () => {
      setLoading(true); 
      try {
        const response = await axios.get(API_URL);
        if (Array.isArray(response.data.data)) {
          setSuits(response.data.data);
          // console.log('first', response.data);
        } else {
          console.error("Data is not in expected format:", response.data);
          setSuits([]); 
        }
      } catch (error) {
        console.error("Error fetching suits:", error);
        setSuits([]); 
      }
      setLoading(false); 
    };

    fetchSuits();
  }, []);

  // Filtering suits based on color or pattern
  const filteredSuits =
    color === "all"
      ? suits
      : pattern
      ? suits.filter((suit) => suit.Pattern.toLowerCase() === pattern.toLowerCase())
      : suits.filter((suit) => suit.Color.toLowerCase() === color.toLowerCase());

  const handleClickOpen = (suit) => {
    setSelectedSuit(suit);
    setOpen(true);
    setZoom(1);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedSuit(null);
  };

  const handleZoomIn = () => setZoom((prevZoom) => Math.min(prevZoom + 0.2, 3));
  const handleZoomOut = () => setZoom((prevZoom) => Math.max(prevZoom - 0.2, 1));

  if (loading) {
    return (
      <LoaderContainer>
        <CircularProgress /> {/* Display loading spinner */}
      </LoaderContainer>
    );
  }

  return (
    <>
      <Card>
        {filteredSuits.map((suit, index) => (
          <Wrap key={index} onClick={() => handleClickOpen(suit)}>
            <img src={suit.Link} alt={suit.Name} />
            <Description>{suit.Name}</Description>
          </Wrap>
        ))}
      </Card>

      {/* Dialog for Zoom */}
      <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
        <CustomDialogTitle>{selectedSuit?.Name}</CustomDialogTitle>
        <DialogContent>
          {selectedSuit && (
            <DialogImageContainer>
              <ZoomableImage zoom={zoom}>
                <img src={selectedSuit?.Link} alt={selectedSuit.Name} />
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

// Styled Components
const Card = styled.div`
  display: grid;
  grid-gap: 30px;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  margin: 20px 10px 30px;
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
`;

const ZoomableImage = styled.div`
  img {
    transform: scale(${({ zoom }) => zoom});
    transition: transform 0.3s ease;
    border-radius: 10px;
    width: 600px;
  }
`;

const ZoomControls = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
`;

const CustomDialogTitle = styled(DialogTitle)`
  color: #2c5ca4;
  font-weight: bold;
  text-align: center;
`;

const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh; /* Adjust this as necessary */
`;

export default SuitCard;

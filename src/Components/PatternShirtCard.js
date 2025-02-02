import React, { useState, useEffect } from "react";
import axios from "axios";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
import ZoomOutIcon from "@mui/icons-material/ZoomOut";
import CircularProgress from "@mui/material/CircularProgress";
import styled from "styled-components";

const SHIRTS_API =
  "https://script.googleusercontent.com/macros/echo?user_content_key=f82U4sjQERZv0VXbbab6dzNCfPjjpXYUZ5H6621qTyfhu1tOleFbCPrMQBoliwCn1VcpYG5ShZ7t4VbxOg92-kygJ7EL4tW7m5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnEhMF0zvdqYj6A3Zal4mZu02MeUWArK9Q_y5EXVJB09u8b8TlDPiYeU51UAvnNuNO8cmTbxnEWKtessHvYqqiAy4gngfnewy_g&lib=MRfdGYedRKrKJlHxMAGyzfkRFxkos_pL4";

const PatternShirtCard = ({ pattern }) => {
  const [shirts, setShirts] = useState([]);
  const [loading, setLoading] = useState(true); // Added state for loading indicator
  const [open, setOpen] = useState(false);
  const [selectedShirt, setSelectedShirt] = useState(null);
  const [zoom, setZoom] = useState(1);

  useEffect(() => {
    const fetchShirts = async () => {
      setLoading(true); // Start loading
      try {
        const response = await axios.get(SHIRTS_API);
        if (Array.isArray(response.data.data)) {
          setShirts(response.data.data);
        } else {
          console.error("Data is not in expected format:", response.data);
        }
      } catch (error) {
        console.error("Error fetching shirts:", error);
      }
      setLoading(false); // Stop loading
    };
    fetchShirts();
  }, []);

  const filteredShirts = pattern.toLowerCase() === "all"
    ? shirts // Display all shirts if the pattern is "all"
    : shirts.filter((shirt) =>
        shirt.Pattern.toLowerCase().includes(pattern.toLowerCase())
      );

  const handleClickOpen = (shirt) => {
    setSelectedShirt(shirt);
    setOpen(true);
    setZoom(1); // Reset zoom when opening
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedShirt(null);
  };

  const handleZoomIn = () => {
    setZoom((prevZoom) => Math.min(prevZoom + 0.2, 3)); // Max zoom 3x
  };

  const handleZoomOut = () => {
    setZoom((prevZoom) => Math.max(prevZoom - 0.2, 1)); // Min zoom 1x
  };

  return (
    <>
      <Card>
        {loading ? (
          <LoaderContainer>
            <CircularProgress /> {/* Loading spinner */}
          </LoaderContainer>
        ) : filteredShirts.length === 0 ? (
          <p>No {pattern} shirts found.</p>
        ) : (
          filteredShirts.map((shirt, index) => (
            <Wrap key={index} onClick={() => handleClickOpen(shirt)}>
              <img src={shirt.Link} alt={shirt.Name} />
              <Description>{shirt.Name}</Description>
            </Wrap>
          ))
        )}
      </Card>

      {/* Dialog for Image Preview */}
      <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
        <CustomDialogTitle>{selectedShirt?.Name}</CustomDialogTitle>
        <DialogContent>
          {selectedShirt && (
            <DialogImageContainer>
              <ZoomableImage zoom={zoom}>
                <img src={selectedShirt.Link} alt={selectedShirt.Name} />
              </ZoomableImage>
              <ZoomControls>
                <IconButton onClick={handleZoomIn} disabled={zoom >= 3}>
                  <ZoomInIcon />
                </IconButton>
                <IconButton onClick={handleZoomOut} disabled={zoom <= 1}>
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
  grid-gap: 20px;
  gap: 20px;
  grid-template-columns: repeat(auto-fill, minmax(355px, 1fr));
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

const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh; 
  width: 100%; /* Ensures full width */
  margin-left: 37vw;
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
    margin-top: 20px;
    border-radius: 5px;
    width: 342px;
    height: 342px;
    object-fit: cover; /* Ensures images maintain aspect ratio and are cropped */
    
    @media (max-width: 768px) {
      width: 90px;
      height: 150px;
    }

    @media (max-width: 480px) {
      width: 75px;
      height: 130px;
    }
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

export default PatternShirtCard;

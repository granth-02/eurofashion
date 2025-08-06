import styled from "styled-components";
import ImgSlider from "./ImageSlider";
import { Link } from "react-router-dom";
import { useEffect } from "react";


const Home = (props) => {
  console.log("About the Dev: This site was developed by Granth Naik, Github: https://github.com/granth-02/, Linkdn: www.linkedin.com/in/granthnaik")
  
  useEffect(() => {
    const sendIP = async () => {
      try {
        await fetch("https://euro-stats.granth-naik02.workers.dev/api/stats", {
          method: "POST",
        }); 
      } catch (err) {
        console.error("Failed to send IP to stats", err)
      }
    };
    sendIP();
  }, []);
  
  return (
    <>
    <Container>
      <Contact>
        <Content>
          <h1>CUSTOM TAILORED FOR YOU</h1>
          <p>
          Custom tailored suits, shirts, jackets, trousers &amp; top coats - made to your
          personal measurements. Contact us by clicking the button below.
          </p>
          <Link to="/contact">Contact Us</Link>
        </Content>
        <ImageContainer>
          <img
            src="https://i.ibb.co/twZRnkyN/Home-page.jpg"
            alt="Man in Suit"
          />
          {/* https://wallpapers.com/images/hd/man-in-suit-pictures-vyjjbqkjo4p4yp19.jpg */}
        </ImageContainer>
      </Contact>
      <Steps>
        <ImageWrapper>
          <img
            src="https://president-tailors.com/wp-content/uploads/2023/05/Suit-fabrics-1024x851.webp" 
            alt="Steps Illustration"
            // https://img.freepik.com/premium-photo/suit-jackets-hanger-men-fashion-apparel-store-row-many-clothes-rack-wardrobe-n_489084-106.jpg
          />
        </ImageWrapper>
        <StepsContent>
          <Step>
            <StepNumber>1</StepNumber>
            <StepTitle>Book Your Appointment</StepTitle>
            <StepDescription>
              Book your appointment by sending us an email .
            </StepDescription>
          </Step>
          <Step>
            <StepNumber>2</StepNumber>
            <StepTitle>Get Measured</StepTitle>
            <StepDescription>
              Choose from our wide range of fabrics and customizations to create
              your custom items.
            </StepDescription>
          </Step>
          <Step>
            <StepNumber>3</StepNumber>
            <StepTitle>Enjoy Your Perfect Fit</StepTitle>
            <StepDescription>
              Receive your items in 5-6 weeks at your door.
            </StepDescription>
          </Step>
        </StepsContent>
      </Steps>
    </Container>
    <ImgSlider />
    </>
  );
};

const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
`;

const Contact = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap; 
  height: 80vh;
  padding: 2rem;
  background-color: #f5f5f5;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    height: auto;
    padding: 1rem;
    margin-top: 100px;
  }
`;

const Content = styled.div`
  flex: 1;
  max-width: 600px;
  padding-right: 2rem;

  h1 {
    font-size: 2.5rem;
    font-weight: 500;
    margin-bottom: 1rem;
    color: #333;

    @media (max-width: 768px) {
      font-size: 2rem;
    }

    @media (max-width: 480px) {
      font-size: 1.8rem;
    }
  }

  p {
    font-size: 1.1rem;
    margin-bottom: 2rem;
    color: #555;
    line-height: 1.6;

    @media (max-width: 768px) {
      font-size: 1rem;
    }

    @media (max-width: 480px) {
      font-size: 0.9rem;
    }
  }

  a {
    padding: 12px 24px;
    font-size: 1rem;
    font-weight: bold;
    color: white;
    border: none;
    border-radius: 5px;
    background-color: #2c5ca4;
    text-decoration: none;
    transition: all 0.3s ease;

    &:hover {
      background-color: #1a3e7a;
    }

    @media (max-width: 768px) {
      padding: 10px 20px;
      font-size: 0.9rem;
    }

    @media (max-width: 480px) {
      padding: 8px 16px;
      font-size: 0.8rem;
    }
  }
`;

const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  img {
    max-width: 100%;
    max-height: 520px;
    object-fit: contain;
    border-radius: 10px;
    
    @media (max-width: 768px) {
      max-height: 50vh;
      margin-top: 50px;
    }

    @media (max-width: 480px) {
      max-height: 40vh;
    }
  }
`;

const Steps = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 4rem;
  padding: 2rem;
  background-color: #f9f9f9;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const ImageWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    max-width: 100%;
    max-height: 600px;
    object-fit: contain;
    border-radius: 10px;

    @media (max-width: 768px) {
      max-height: 300px;
      margin-bottom: 1.5rem;
    }
  }
`;

const StepsContent = styled.div`
  flex: 2;
  padding-left: 2rem;

  @media (max-width: 768px) {
    padding-left: 0;
  }
`;

const Step = styled.div`
  margin-bottom: 2rem;
  border-bottom: 1px solid #ddd;
  padding-bottom: 1rem;
`;

const StepNumber = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: #2c5ca4;
  margin-bottom: 0.5rem;
`;

const StepTitle = styled.h2`
  font-size: 1.25rem;
  color: #333;
  margin-bottom: 0.5rem;
`;

const StepDescription = styled.p`
  font-size: 1rem;
  color: #555;
`;

export default Home;

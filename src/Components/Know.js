import styled from "styled-components";
import suitImage from "../Images/suit-anatomy.jpg";
import phoneKnow from "../Images/Label.png"; // The new image for smaller screens


const Know = () => {
  return (
    <SuitContainer>
      {/* <GrayBackground> */}
        {/* Conditionally render the image based on screen size */}
        <SuitImage src={suitImage} alt="Suit Diagram" className="desktopImage" />
        {/* <PhoneImage src={phoneKnow} alt="Phone View Diagram" className="mobileImage" /> */}

        {/* Lapel pointer */}
        {/* <Pointer className="pointer" style={{ top: "25%", left: "18%" }}>
          <Info>
            <Title>Lapel</Title>
            <Description>Different styles of Lapel available.</Description>
          </Info>
          <Line style={{ width: "15vw" }} />
        </Pointer> */}

        {/* Comfort pointer */}
        {/* <Pointer className="pointer" style={{ top: "35%", right: "4%" }}>
          <Line style={{ width: "15vw" }} />
          <Info>
            <Title>Comfort is All that Matters</Title>
            <Description>Tapered, Regular, or loose comfortable fit depending on your choice.</Description>
          </Info>
        </Pointer> */}

        {/* Real Button Holes pointer */}
        {/* <Pointer className="pointer" style={{ top: "70%", left: "19%" }}>
          <Info>
            <Title>Real Button Holes</Title>
            <Description>Sleeves real button holes.</Description>
          </Info>
          <Line style={{ width: "12vw" }} />
        </Pointer> */}

        {/* Button pointer */}
        {/* <Pointer className="pointer" style={{ top: "55%", right: "13%" }}>
          <Line style={{ width: "15vw" }} />
          <Info>
            <Title>Button</Title>
            <Description>Choice of horn buttons and mother of pearl buttons.</Description>
          </Info>
        </Pointer> */}

        {/* Vent Style pointer */}
        {/* <Pointer className="pointer" style={{ bottom: "15%", left: "55%" }}>
          <Line style={{ width: "12vw" }} />
          <Info>
            <Title>Vent Style</Title>
            <Description>Choice of side vents, center, and no vents.</Description>
          </Info>
        </Pointer>
      </GrayBackground> */}
    </SuitContainer>
  );
};

const SuitContainer = styled.div`
  width: 100%;
  padding: 50px 0;
  margin: 0;
  /* background: url("https://img.freepik.com/free-photo/fabric-textured-background_53876-33695.jpg?semt=ais_hybrid") center center/cover no-repeat; */
`;

const GrayBackground = styled.div`
  position: relative;
  max-width: 100%;
  margin: 10px auto -50px auto;
  padding: 100px 20px;
  background: rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    padding: 80px 15px;
  }

  @media (max-width: 480px) {
    padding: 60px 10px;
  }
`;

const SuitImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
  margin-bottom: -100px;

  @media (max-width: 768px) {
    margin-top: 100px;
    width: 50vh; /* Hide the desktop image on small screens */
  }
`;

const PhoneImage = styled.img`
  width: 100%;
  height: auto;
  display: none; /* Hide the mobile image on large screens */

  @media (max-width: 768px) {
    display: block; /* Show the mobile image on small screens */
    margin-top: 20px;
  }
`;

const Line = styled.div`
  width: 100px;
  height: 2px;
  background-color: white;

  @media (max-width: 768px) {
    width: 80px;
  }

  @media (max-width: 480px) {
    width: 60px;
  }
`;

const Pointer = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  gap: 15px;
  white-space: nowrap;

  @media (max-width: 768px) {
    display: none; /* Hide the pointer completely on small screens */
  }

  @media (max-width: 480px) {
    display: none; /* Hide the pointer completely on mobile screens */
  }
`;

const Info = styled.div`
  text-align: left;

  @media (max-width: 768px) {
    display: none; /* Hide text content (Title & Description) on smaller screens */
  }

  @media (max-width: 480px) {
    display: none; /* Hide text content (Title & Description) on mobile screens */
  }
`;

const Title = styled.h4`
  margin: 0 0 5px 0;
  font-size: 16px;
  font-weight: bolder;
  color: #2c5ca4;

  @media (max-width: 768px) {
    font-size: 14px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

const Description = styled.p`
  margin: 0;
  font-size: 14px;
  color: black;
  line-height: 1.5;

  @media (max-width: 768px) {
    font-size: 12px;
  }

  @media (max-width: 480px) {
    font-size: 10px;
  }
`;

export default Know;

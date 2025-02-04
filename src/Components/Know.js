import styled from "styled-components";
import suitImage from "../Images/suit-anatomy.jpg";

const Know = () => {
  return (
    <SuitContainer>
        <SuitImage src={suitImage} alt="Suit Diagram" className="desktopImage" />
    </SuitContainer>
  );
};

const SuitContainer = styled.div`
  width: 100%;
  padding: 50px 0;
  margin: 0;
  /* background: url("https://img.freepik.com/free-photo/fabric-textured-background_53876-33695.jpg?semt=ais_hybrid") center center/cover no-repeat; */
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


export default Know;

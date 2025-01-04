import styled from "styled-components"
import suitImage from '../Images/know.png'

const Know = () => {
    return (
        <SuitContainer>
          <GrayBackground>
            <SuitImage src={suitImage} alt="Suit Diagram" />
            {/* Lapel pointer - aligning with the lapel area */}
            <Pointer style={{ top: "25%", left: "18%" }}>
              <Info>
                <Title>Lapel</Title>
                <Description>Different styles of Lapel available.</Description>
              </Info>
              <Line style={{width: "210px"}}/>
              
            </Pointer>
            {/* Comfort pointer - aligning with shoulder area */}
            <Pointer style={{ top: "35%", right: "4%" }}>
            <Line style={{width: "210px"}}/>
              <Info>
                <Title>Comfort is All that Matters</Title>
                <Description>Tapered, Regular or loose comfortable fit depending on your choice.</Description>
              </Info>
            </Pointer>
            {/* Real Button Holes pointer - aligning with sleeve buttons */}
            <Pointer style={{ top: "70%", left: "19%" }}>
              <Info>
                <Title>Real Button Holes</Title>
                <Description>Sleeves real button holes.</Description>
              </Info>
              <Line style={{width: "160px"}}/>
            </Pointer>
            {/* Button pointer - aligning with main button area */}
            <Pointer style={{ top: "55%", right: "13%" }}>
              <Line style={{width: "210px"}}/>
              <Info>
                <Title>Button</Title>
                <Description>Choice of horn buttons and mother of pearl buttons.</Description>
              </Info>
            </Pointer>
            {/* Vent Style pointer - aligning with bottom area */}
            <Pointer style={{ bottom: "15%", left: "55%" }}>
            <Line style={{width: "160px"}}/>
            <Info>
                <Title>Vent Style</Title>
                <Description>Choice of side vents, center and no vents.</Description>
              </Info>
            </Pointer>
          </GrayBackground>
        </SuitContainer>
    );
}

const SuitContainer = styled.div`
  width: 100%;
  padding: 50px 0;
  background: url("https://img.freepik.com/free-photo/fabric-textured-background_53876-33695.jpg?semt=ais_hybrid") center center/cover no-repeat;
    
`;

const GrayBackground = styled.div`
  position: relative;
  max-width: auto;
  margin: 10px auto -50px auto;
  padding: 100px 20px;
  background: rgba(0, 0, 0, 0.1); 
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SuitImage = styled.img`
  width: 300px;
  height: auto;
  display: block;
`;

const Line = styled.div`
  width: 100px;
  height: .1px;
  background-color: white;
`;

const Pointer = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  gap: 15px;
  
  /* Ensure text and lines stay on one line */
  white-space: nowrap;
`;

const Info = styled.div`
  text-align: left;
`;

const Title = styled.h4`
  margin: 0 0 5px 0;
  font-size: 16px;
  font-weight: bolder;
  color: #2c5ca4;
`;

const Description = styled.p`
  margin: 0;
  font-size: 14px;
  color: black;
  line-height: 1;
`;

export default Know;
import styled from "styled-components";
import suitImage from "../Images/know.png";

const Know = () => {
  return (
    <Suitgrid>
    <SuitContainer>
        <SuitImage src={suitImage} alt="Suit Diagram" className="desktopImage" />
    </SuitContainer>
    <FilterSection>
      {/* Deetz */}
      <FilterContainer>
        <Title>DETAILS</Title>
        <CircleGridContainer>
          <CircleImageHolder>
            <img src="https://i.ibb.co/fYVjySVB/back.jpg" alt="Checks" style={{height: '400px'}} />
            <p>Back Collar Wool</p>
          </CircleImageHolder>
          <CircleImageHolder>
            <img src="https://i.ibb.co/1t7cD6bq/buttons.jpg" alt="HB" style={{height: '400px'}} />
            <p>Real Button Holes</p>
          </CircleImageHolder>
          <CircleImageHolder>
            <img src="https://i.ibb.co/9mh8ChLF/hand.jpg" alt="Solid" style={{height: '400px'}} />
            <p>Hand stitching on Edges</p>
          </CircleImageHolder>
    
        </CircleGridContainer>
      </FilterContainer>

      {/*Vest */}
      <FilterContainer>
        <Title>VEST</Title>
        <CircleGridContainer>
          <CircleImageHolder>
            <img src="https://i.ibb.co/5Xz8t5bD/vest.png" alt="Checks" style={{height: '400px', width: '260px'}}/>
            <p>Classic Vest</p>
          </CircleImageHolder>
          <CircleImageHolder>
            <img src="https://i.ibb.co/DH30h3Xh/vest2.png" alt="HB" style={{height: '400px', width: '260px'}}/>
            <p>Vest (With Lapel)</p>
          </CircleImageHolder>
        </CircleGridContainer>
      </FilterContainer>

      {/*Trousers */}
      <FilterContainer>
        <Title>TROUSERS</Title>
        <CircleGridContainer>
          <CircleImageHolder>
            <img src="https://i.ibb.co/5gQs9Tsw/pants2.png" alt="Checks" style={{height: '400px', width: '260px'}}/>
            <p>Waist (Side Adjustable Tabs) </p>
          </CircleImageHolder>
          <CircleImageHolder>
            <img src="https://i.ibb.co/93Vc3VFx/pants1.png" alt="HB" style={{height: '400px', width: '260px'}}/>
            <p>Waist (Belt Loops) </p>
          </CircleImageHolder>
        </CircleGridContainer>
      </FilterContainer>

      {/*Brands*/}   
      <FilterContainer>
        <Title>TOP BRANDS WE WORK WITH</Title>
        <CircleGridContainer>
          <SpreadImageHolder>
            <img src="https://i.ibb.co/232p7w4P/brand1.png" alt="Checks" />
            <p>Loro Piana</p>
          </SpreadImageHolder>
          <SpreadImageHolder>
            <img src="https://i.ibb.co/KjWSwfpS/brand2.png" alt="HB" />
            <p>Cloth Dormeuil</p>
          </SpreadImageHolder>
          <SpreadImageHolder>
            <img src="https://m.media-amazon.com/images/I/41rMHR3t1QL._UF350,350_QL80_.jpg" alt="Solid" />
            <p>Vitale Barberis Canonico</p>
          </SpreadImageHolder>
          <SpreadImageHolder>
            <img src="https://i.ibb.co/d41nP29R/brand4.png" alt="Solid" />
            <p>Reda</p>
          </SpreadImageHolder>
        </CircleGridContainer>
        <Title>AND MANY MORE....</Title>
      </FilterContainer>  
    </FilterSection>
    </Suitgrid>
  );
};

const SuitContainer = styled.div`
  width: 100%;
  padding: 50px 0;
  margin: 0;
  /* background: url("https://img.freepik.com/free-photo/fabric-textured-background_53876-33695.jpg?semt=ais_hybrid") center center/cover no-repeat; */
`;

const Suitgrid = styled.div`
    position: relative;
    overflow-x: hidden;
    display: block;
    top: 0px;
    background-color: white;
    text-align: center;

`
const SuitImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
  margin-bottom: -50px;
  margin-top: 50px;

  @media (max-width: 768px) {
    margin-top: 100px;
    width: 50vh; /* Hide the desktop image on small screens */
  }
`;

const FilterSection = styled.div`
  padding: 2rem 0;
`;

const FilterContainer = styled.div`
  padding: 2rem;
  text-align: center;
  background-color: #f5f5f5;
  border-radius: 20px;
  margin: 2rem auto;
  max-width: 1500px;
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 1.5rem;
  color: #333;
`;

const CircleGridContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 20px;

  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`;

const CircleImageHolder = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
  text-decoration: none;
  color: #333;

  img {
    width: 250px;
    height: 250px;
    border-radius: 4%;
    overflow: hidden;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94);

    &:hover {
      border: 5px solid #2c5ca4;
    }
  }

  p {
    font-size: 1rem;
    font-weight: bold;
    margin-top: 0.5rem;
  }
`;

const SpreadImageHolder = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
  text-decoration: none;
  color: #333;

  img {
    width: 310px;
    height: 250px;
    border-radius: 4%;
    overflow: hidden;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94);

    &:hover {
      border: 5px solid #2c5ca4;
    }
  }

  p {
    font-size: 1rem;
    font-weight: bold;
    margin-top: 0.5rem;
  }
`;


export default Know;

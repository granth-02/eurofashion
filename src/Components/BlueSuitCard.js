import styled from "styled-components";
import b1 from "../Images/suit_blue.webp"
import b2 from "../Images/suit_blue2.webp"
import b3 from "../Images/suit_blue3.webp"
import b4 from "../Images/suit_blue4.webp"
import b5 from "../Images/suit_blue5.webp"
import b6 from "../Images/suit_blue6.webp"
import b7 from "../Images/suit_blue_checks.webp"
import b8 from "../Images/suit_blue_checks2.webp"
import b9 from "../Images/suit_blue_POW.webp"
import b10 from "../Images/suit_blue_POW2.webp"
import b11 from "../Images/suit_blue_stripes.webp"

export const blueSuits = [
  { src: b1, description: "222405-500 Blue" },
  { src: b2, description: "501170-420 Blue" },
  { src: b3, description: "222401-500 Blue" },
  { src: b4, description: "222402-500 Blue" },
  { src: b5, description: "501168-420 Blue" },
  { src: b6, description: "501170-420 Blue" },
  { src: b7, description: "225820-620 Blue Checks" },
  { src: b8, description: "225814-620 Blue Checks" },
  { src: b9, description: "501107-420 Blue POW" },
  { src: b10, description: "501109-420 Blue POW" },
  { src: b11, description: "501133-420 Blue Stripes" },
];

const BlueSuitCard = (props) => {
    
    return(
    <>
        <Card>
            {blueSuits.map((image, index) => (
                <Wrap key={index}>
                    <img src={image.src} alt={image.description} />
                    <h2>{image.description}</h2>
                </Wrap>
            ))}
        </Card>
    </>
    )
}

const Card = styled.div`
  display: grid;
  grid-gap: 30px;
  gap: 30px;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  
  /* background-color: #fefbf6; */
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
  /* border-style: solid;
  border-color: black; */
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

  h3 {
    margin-top: -10px;
    color: #a4cbe2;
    text-align: center;
  }
`;

export default BlueSuitCard
import styled from "styled-components";
import b1 from "../Images/suit_brown.webp"

export const brownSuits  = [
    { src: b1, description: "222422-500 Brown" }
  ];

const BrownSuitCard = (props) => {
    
    return(
    <>
        <Card>
            {brownSuits.map((image, index) => (
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
  grid-template-columns: repeat(auto-fill, minmax(300px, 0fr));
  
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
    border: 5px solid #653302;
  }

  img {
    margin-top: 10px;
    border-radius: 5px;
    width: 96%;
  }

  h2 {
    color: #653302;
    text-align: center;
  }

  h3 {
    margin-top: -10px;
    color: #a4cbe2;
    text-align: center;
  }
`;

export default BrownSuitCard
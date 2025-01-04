import styled from "styled-components";
import b1 from "../Images/suit_grey.webp"
import b2 from "../Images/suit_grey2.webp"
import b3 from "../Images/suit_grey3.webp"
import b4 from "../Images/suit_grey4.webp"
import b5 from "../Images/suit_grey_checks.webp"
import b6 from "../Images/suit_grey_checks2.webp"
import b7 from "../Images/suit_grey_POW.webp"
import b8 from "../Images/suit_grey_HB.webp"
import b9 from "../Images/suit_grey_stripes.webp"

export const greySuits = [
  { src: b1, description: "222413-500 Grey" },
  { src: b2, description: "222416-500 D Grey" },
  { src: b3, description: "501164-420 Grey" },
  { src: b4, description: "501176-420 Grey" },
  { src: b5, description: "225812-620 Grey Checks" },
  { src: b6, description: "225819-620 Grey Checks" },
  { src: b7, description: "501110-420 Grey POW" },
  { src: b8, description: "501157-420 Grey HB" },
  { src: b9, description: "501127-420 Grey Stripes" },
];

const GreySuitCard = (props) => {
    return(
    <>
        <Card>
            {greySuits.map((image, index) => (
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
    border: 5px solid #808080;
  }

  img {
    margin-top: 10px;
    border-radius: 5px;
    width: 96%;
  }

  h2 {
    color:rgb(101, 101, 101);
    text-align: center;
  }

  h3 {
    margin-top: -10px;
    color: #a4cbe2;
    text-align: center;
  }
`;

export default GreySuitCard
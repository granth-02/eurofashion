import styled from "styled-components";
import { blueSuits } from "./BlueSuitCard";
import { greySuits } from "./GreySuitCard";
import { charcoalSuits } from "./CharcoalSuitCard";
import { blackSuits } from "./BlackSuitCard";
import { brownSuits } from "./BrownSuitCard";

const SuitCard = () => {
  const allSuits = [...blueSuits, ...greySuits, ...charcoalSuits, ...blackSuits, ...brownSuits];

  return (
    <Card>
    {allSuits.map((suit, index) => (
      <Wrap key={index}>
        <img src={suit.src} alt={suit.description} />
        <Description>{suit.description}</Description>
      </Wrap>
    ))}
    </Card>
  );
};

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

const Description = styled.h2`
  color: #2c5ca4;
  text-align: center;
  margin-top: 10px;
`;

export default SuitCard;

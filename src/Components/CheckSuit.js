import styled from "styled-components";
import SuitFilter from "./SuitFilter";
import PatternSuitCard from "./PatternSuitCard.js";


const CheckSuit = () => {
  return (
    <Suitgrid>
        <SuitFilter />
        <PatternSuitCard pattern="checks"/>
    </Suitgrid>
  );
};

const Suitgrid = styled.div`
    position: relative;
    overflow-x: hidden;
    display: block;
    top: 95px;
    background-color: white;
    text-align: center;
`



export default CheckSuit;

import styled from "styled-components"
import { Link } from "react-router-dom";
import SuitFilter from "./SuitFilter";
import SuitCard from "./SuitCard";

const Suits = (props) => {
  return (
    <div>
        <Suitgrid>
            <SuitFilter />
            <SuitCard />
            {/* <LibCard /> */}
        </Suitgrid>    
    </div>
  )
}


const Suitgrid = styled.div`
    position: relative;
    overflow-x: hidden;
    display: block;
    top: 95px;
    background-color: white;
    text-align: center;
    

`





export default Suits
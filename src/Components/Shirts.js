import styled from "styled-components"
import ShirtFilter from "./ShirtFilter";
import PatternShirtCard from "./PatternShirtCard";

const Shirts = (props) => {
  return (
    <div>
        <Shirtgrid>
            <ShirtFilter />
            <PatternShirtCard pattern="all" />
        </Shirtgrid>    
    </div>
  )
}


const Shirtgrid = styled.div`
    position: relative;
    overflow-x: hidden;
    display: block;
    top: 95px;
    background-color: white;
    text-align: center;
    

`





export default Shirts
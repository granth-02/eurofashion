import styled from "styled-components"
import SuitFilter from "./SuitFilter"
import PatternSuitCard from "./PatternSuitCard"

const HBSuit = (props) => {
  return (
    <Suitgrid>
        <SuitFilter />
        <PatternSuitCard pattern="HB"/>
    </Suitgrid>
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

export default HBSuit
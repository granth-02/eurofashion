import styled from "styled-components"
import SuitFilter from "./SuitFilter"
import PatternSuitCard from "./PatternSuitCard"

const SimpleSuit = (props) => {
  return (
    <Suitgrid>
        <SuitFilter />
        <PatternSuitCard pattern="simple"/>
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

export default SimpleSuit
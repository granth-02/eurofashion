import styled from "styled-components"
import SuitFilter from "./SuitFilter"
import BlackSuitCard from "./BlackSuitCard"

const BlackSuit = (props) => {
    return (
        <div>
            <Suitgrid>
                <SuitFilter />
                <BlackSuitCard />
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
export default BlackSuit
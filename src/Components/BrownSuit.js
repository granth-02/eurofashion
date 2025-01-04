import styled from "styled-components"
import SuitFilter from "./SuitFilter"
import BrownSuitCard from "./BrownSuitCard"

const BrownSuit = (props) => {
    return (
        <div>
            <Suitgrid>
                <SuitFilter />
                <BrownSuitCard />
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
export default BrownSuit
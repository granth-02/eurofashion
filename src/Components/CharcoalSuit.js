import styled from "styled-components"
import SuitFilter from "./SuitFilter"
import CharcoalSuitCard from "./CharcoalSuitCard"

const CharcoalSuit = (props) => {
    return (
        <div>
            <Suitgrid>
                <SuitFilter />
                <CharcoalSuitCard />
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
export default CharcoalSuit
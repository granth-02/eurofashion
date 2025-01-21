import styled from "styled-components"
import SuitFilter from "./SuitFilter"
import CharcoalSuitCard from "./CharcoalSuitCard"
import ColorSuitCard from "./ColorSuitCard"

const CharcoalSuit = (props) => {
    return (
        <div>
            <Suitgrid>
                <SuitFilter />
                <CharcoalSuitCard />
                {/* <ColorSuitCard color='charcoal' /> */}
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
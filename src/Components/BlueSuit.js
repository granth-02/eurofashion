import styled from "styled-components"
import SuitFilter from "./SuitFilter"
import BlueSuitCard from "./BlueSuitCard"

const BlueSuit = (props) => {
    return (
        <div>
            <Suitgrid>
                <SuitFilter />
                <BlueSuitCard />
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
export default BlueSuit
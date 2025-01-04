import styled from "styled-components"
import SuitFilter from "./SuitFilter"
import GreySuitCard from "./GreySuitCard"

const GreySuit = (props) => {
    return (
        <div>
            <Suitgrid>
                <SuitFilter />
                <GreySuitCard />
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
export default GreySuit
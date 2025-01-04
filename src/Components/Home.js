import styled from "styled-components";
import ImgSlider from "./ImageSlider";

const Home = (props) => {
    return(
        <Container>
            <ImgSlider />
        </Container>
    )
}

const Container = styled.main`
    position: relative;
    min-height: calc(100vh - 250px);
    overflow-x: hidden;
    display: block;
    top: 72px;

    
`

export default Home
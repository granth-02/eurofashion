import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick"
import sl1 from '../Images/sl1.jpg'
import sl2 from '../Images/sl2.jpg'
import sl3 from '../Images/sl3.jpg'

const ImgSlider = (props) => {

    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slideToShow: 1,
        slideToScroll: 1,
        autoplay: true,
        arrows: false
    };

    return (
        <Carousel {...settings}>
            <Wrap>
               <a>
                   <img src={sl1}/>
               </a>
               <span>TAILORING SERVICE FOR
               BANKERS, LAWYERS, POLITICIANS, DIPLOMATS.</span>
            </Wrap>
            <Wrap>
               <a>
                   <img src={sl2} />
               </a>
               <span>Make your Statement
               With US</span>
            </Wrap>
            <Wrap>
               <a>
                   <img src={sl3} />
                   <span>28 years
                   of finesse</span>
               </a>
            </Wrap>
        
        </Carousel>
   )
}

const Carousel = styled(Slider)`
    margin-top: 20px;
    padding: 20px;
    
    @media (max-width: 768px) {
        margin-top: 200px; /* Increased margin for smaller screens */
    }

    @media (max-width: 480px) {
        margin-top: 240px; /* Further increase for very small screens */
    }
    

    & > button {
        opacity: 0;
        height: 100%;
        width: 5vw;
        z-index: 1;

        &:hover{
            opacity: 1;
            transition: opacity 0.2s ease 0s;
        }
    }

    ul li button {
        &:before{
            font-size: 10px;
            color: rgb(150, 158, 171);
        }
    }

    li.slick-active button:before {
        color: white;
    }

    .slick-list{
        overflow: hidden;
    }

    .slick-prev {
        left: -40px;
    }

    .slick-next {
        right: -40px;
    }

`

const Wrap = styled.div`
    border-radius: 4px;
    cursor: pointer;
    position: relative;
    margin-bottom: 20px;
    a{
        border-radius: 4px;
        position: relative;
        display: block;
        padding: 4px;
        cursor: pointer;
        box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    }

    img{
        height: auto;
        width: 100%;
        filter: grayscale(50%) brightness(50%);
    }

    &:hover{
        padding: 0;
        border:4px solid rgba(249, 249, 249, 0.8);
        transition-duration: 300ms;
    }
    span{
        display: flex;
        text-align: center;
        align-items: center; 
        justify-content: center; 
        position: relative;
        margin-top: -55vw;
        margin-bottom: 50vw;
        color: white;
        font-size: 2vw;
        letter-spacing: 5px;
        font-weight: 600;
        /* font-family: 'Lora', serif; */

    }

`;

export default ImgSlider
import styled from "styled-components"
import SuitFilter from "./SuitFilter"
import SuitCard from "./SuitCard"

const POWSuit = (props) => {
  return (
    <Suitgrid>
        <SuitFilter />
        <Type>
          <Content>
            <h1>PRINCE OF WALES</h1>
            <p>
            The Prince of Wales suit is a classic, elegant option for both formal and semi-formal occasions. Its signature checkered pattern, originating from British royalty, is versatile and perfect for autumn or winter wardrobes. It’s a timeless choice for a refined and stylish appearance.             </p>
          
          </Content>
          <ImageContainer>
            <img
              src="https://bondonabudget.com/wp-content/uploads/2020/07/grey-check-suit-2_large.png?w=640"
              alt="Man in Suit"
            />
          </ImageContainer>
        </Type>
        <SuitCard pattern="POW"/>
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
const Type = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 68.5vh;
  padding: 2rem;
  background-color: #f5f5f5;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    height: auto;
    padding: 1rem;
    margin-top: 100px;
  }
`;

const Content = styled.div`
  flex: 1;
  max-width: 600px;
  padding-right: 2rem;

  h1 {
    font-size: 2.5rem;
    font-weight: 500;
    margin-bottom: 1rem;
    color: #333;

    @media (max-width: 768px) {
      font-size: 2rem;
    }

    @media (max-width: 480px) {
      font-size: 1.8rem;
    }
  }

  p {
    font-size: 1.1rem;
    margin-bottom: 2rem;
    color: #555;
    line-height: 1.6;

    @media (max-width: 768px) {
      font-size: 1rem;
    }

    @media (max-width: 480px) {
      font-size: 0.9rem;
    }
  }

  a {
    padding: 12px 24px;
    font-size: 1rem;
    font-weight: bold;
    color: white;
    border: none;
    border-radius: 5px;
    background-color: #2c5ca4;
    text-decoration: none;
    transition: all 0.3s ease;

    &:hover {
      background-color: #1a3e7a;
    }

    @media (max-width: 768px) {
      padding: 10px 20px;
      font-size: 0.9rem;
    }

    @media (max-width: 480px) {
      padding: 8px 16px;
      font-size: 0.8rem;
    }
  }
`;

const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    max-width: 100%;
    max-height: 70vh;
    object-fit: contain;
    border-radius: 10px;

    @media (max-width: 768px) {
      max-height: 50vh;
      margin-top: 50px;
    }

    @media (max-width: 480px) {
      max-height: 40vh;
    }
  }
`;

export default POWSuit
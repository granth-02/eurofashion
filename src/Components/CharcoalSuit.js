import styled from "styled-components"
import SuitFilter from "./SuitFilter"
import CharcoalSuitCard from "./CharcoalSuitCard"
import ColorSuitCard from "./ColorSuitCard"

const CharcoalSuit = (props) => {
    return (
        <div>
            <Suitgrid>
                <SuitFilter />
                <Type>
                    <Content>
                      <h1>CHARCOAL</h1>
                      <p>
                      A Charcoal Suit combines sophistication and versatility, making it ideal for business and formal occasions. Its deep, neutral tone pairs effortlessly with a range of shirt and tie combinations, offering a polished and professional appearance.
                      </p>
                    </Content>
                    <ImageContainer>
                      <img
                        src="https://img.freepik.com/free-photo/black-concrete-wall_53876-92805.jpg?semt=ais_incoming"
                        alt="Man in Suit"
                      />
                    </ImageContainer>
                </Type>
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
const Type = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60vh;
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

export default CharcoalSuit
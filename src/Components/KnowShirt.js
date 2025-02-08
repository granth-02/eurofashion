import styled from "styled-components";



const KnowShirt = () => {
  return (
    <Suitgrid>
    <SuitContainer>
        <SuitImage src="https://cdn.shopify.com/s/files/1/0016/5812/6382/files/Collar_stand.jpg?v=1682367021" /> 
        {/* https://www.made2measureclothing.com/wp-content/uploads/2024/12/Shirt-Details-1200x978-1.webp */}
    </SuitContainer>
    <h1>FABRIC QUALITY</h1>
    <Type>
        <Content>
          <h1>ONE-PLY</h1>
          <p>
          Weaving one thread in warp with one thread in weft. This allows a wide variety of patterns at reasonable prices.   
          </p>
        </Content>
        <QualityImg>
          <img
            src="https://justpaint.org/wp-content/uploads/2020/02/fabric-construction-Kopie-1.jpg"
            alt="Man in Suit"
          />
        </QualityImg>
        <Content style={{marginLeft: "20px"}}>
          <h1>TWO-PLY</h1>
          <p>
          Two individual threads are twisted together to make one yarn and tightly woven creating a smooth strong fabric. This luxurious and durable quality requires long fibers, such as Egyptian cotton.   
          </p>
        </Content>
    </Type><h1>MAIN WEAVINGS</h1>
    <Type>
        <ImageContainer>
          <img
            src="https://img.freepik.com/free-photo/top-view-fabric-texture-background_23-2148934900.jpg"
            alt="Man in Suit"
          />
        </ImageContainer>
        <Content >
          <h1>POPLIN</h1>
          <p>
          This tightly-woven fabric has a fine hand and is ideal for dress shirts.   
          </p>
        </Content>
    </Type>
    <Type>
        <Content >
          <h1>TWILL</h1>
          <p>
          This easy-iron fabric is woven on the bias, for a smooth and elegant feel. 
          </p>
        </Content>
        <ImageContainer>
          <img
            src="https://img.freepik.com/free-photo/black-fabric_1253-111.jpg?t=st=1738573004~exp=1738576604~hmac=8b1c1945588d6bce1f9cb95dc8cc0d8d9de6285716fd41edccfdfcf4de48b3d5&w=996"
            alt="Man in Suit"
          />
        </ImageContainer>
    </Type>
    <Type>
        <ImageContainer>
          <img
            src="https://img.freepik.com/premium-photo/gray-fabric-with-zigzag-pattern-as-background_151013-45392.jpg"
            alt="Man in Suit"
          />
        </ImageContainer>
        <Content >
          <h1>CHEVRON</h1>
          <p>
          Silky and smooth, the «chevron» pattern woven into this fabric gives your shirt texture and depth.
          </p>
        </Content>
    </Type>
    <Type>
        <Content >
          <h1>END ON END</h1>
          <p>
          Woven of two different colored threads, this fabric makes for a fashion- forward tone on tone shirt.
          </p>
        </Content>
        <ImageContainer>
          <img
            src="https://img.freepik.com/free-photo/gray-fabric-cloth-texture-abstract-background-furniture-upholstery_166373-2498.jpg"
            alt="Man in Suit"
          />
        </ImageContainer>
    </Type>
    <Type>
        <ImageContainer>
          <img
            src="https://img.freepik.com/premium-vector/closeup-blue-oxford-fabric-texture-background_1081309-13.jpg"
            alt="Man in Suit"
          />
        </ImageContainer>
        <Content >
          <h1>OXFORD</h1>
          <p>
          A classic fabric with a little more texture than poplin. Perfect for both dress and casual shirts.
          </p>
        </Content>
        
    </Type>
    <Type>
       
        <Content >
          <h1>PINPOINT</h1>
          <p>
          Features the same weaving as Oxford, but of thinner threads for a lighter feel making it ideal for pastel colors.
          </p>
        </Content>
        <ImageContainer>
          <img
            src="https://i.ibb.co/C5dJxrXV/Pin-point-oxford-cotton-fabric-02-1487134512-p-2724423-528439.jpg"
            alt="Man in Suit"
          />
        </ImageContainer>
        
    </Type>
    <Type>
        <ImageContainer>
          <img
            src="https://img.freepik.com/free-photo/top-view-fabric-texture-background_23-2148934900.jpg"
            alt="Man in Suit"
          />
        </ImageContainer>
        <Content >
          <h1>SPANDEX</h1>
          <p>
          A very fine weave four way stretchable fabric Easy to move. 
          </p>
        </Content>
       
    </Type>
    <Type>
        <Content >
          <h1>PURE LINEN</h1>
          <p>
          Comfortable to were in hot weather, Good for casual were.
          </p>
        </Content>
        <ImageContainer>
          <img
            src="https://img.freepik.com/premium-photo/pink-color-linen-cloth-texture-background_644709-178.jpg?semt=ais_hybrid"
            alt="Man in Suit"
          />
        </ImageContainer>
        
    </Type>
    <FilterSection>
      {/* CUFFS */}
      <FilterContainer>
        <Title>CUFFS</Title>
        <CircleGridContainer>
          <CircleImageHolder>
            <img src="https://www.swann-paris.com/media/catalog/product/cache/2/image/9df78eab33525d08d6e5fb8d27136e95/P/o/PoignetRond2Boutons.jpg" alt="Checks" />
            <p>Round Edges Cuffs One or Two Button</p>
          </CircleImageHolder>
          <CircleImageHolder>
            <img src="https://www.swann-paris.com/media/catalog/product/cache/2/image/9df78eab33525d08d6e5fb8d27136e95/P/o/PoignetCasse2Boutons.jpg" alt="HB" />
            <p>Angle Cut Cuffs One or Two Buttons</p>
          </CircleImageHolder>
          <CircleImageHolder>
            <img src="https://www.swann-paris.com/media/catalog/product/cache/2/image/9df78eab33525d08d6e5fb8d27136e95/P/o/PoignetCarre2Boutons.jpg" alt="Solid" />
            <p>Square Edges Cuffs One or Two Buttons</p>
          </CircleImageHolder>
          <CircleImageHolder>
            <img src="https://www.swann-paris.com/media/catalog/product/cache/2/image/9df78eab33525d08d6e5fb8d27136e95/P/o/PoignetManchetteRond.jpg" alt="Stripes" />
            <p>French Cuffs (Double Cuffs) For Cufflinks</p>
          </CircleImageHolder>
        </CircleGridContainer>
      </FilterContainer>

      {/*PLACKETS */}
      <FilterContainer>
        <Title>PLACKETS</Title>
        <CircleGridContainer>
          <CircleImageHolder>
            <img src="https://d1fufvy4xao6k9.cloudfront.net/images/blog/posts/2020/11/aquarelle_front_placket.jpg" alt="Checks" />
            <p>Box/Polo Button Front</p>
          </CircleImageHolder>
          <CircleImageHolder>
            <img src="https://d1fufvy4xao6k9.cloudfront.net/images/blog/posts/2020/11/aquarelle_french_front_or_no_placket.jpg" alt="HB" />
            <p>Plain Button Front</p>
          </CircleImageHolder>
          <CircleImageHolder>
            <img src="https://d1fufvy4xao6k9.cloudfront.net/images/blog/posts/2020/11/aquarelle_covered_placket_or_fly_front.jpg" alt="Solid" />
            <p>Hidden Button Front</p>
          </CircleImageHolder>
        </CircleGridContainer>
      </FilterContainer>

      {/*Collar */}
      <FilterContainer>
        <Title>COLLARS</Title>
        <CircleGridContainer>
          <CircleImageHolder>
            <img src="https://cdn2.propercloth.com/images/collars_overview/vintage_club/tie_thumb.jpg" alt="Checks" />
            <p>Tab Collar (Round or Pointed)</p>
          </CircleImageHolder>
          <CircleImageHolder>
            <img src="https://cdn2.propercloth.com/images/collars_overview/grandad/tie_thumb.jpg" alt="HB" />
            <p>Mandarin Collar</p>
          </CircleImageHolder>
          <CircleImageHolder>
            <img src="https://cdn2.propercloth.com/images/collars_overview/wingtip/button_thumb.jpg" alt="Solid" />
            <p>Wing Collar (For Tuxedo)</p>
          </CircleImageHolder>
        </CircleGridContainer>
      </FilterContainer>

      {/*Collar Spread*/}   
      <FilterContainer>
        <Title>SPREAD</Title>
        <CircleGridContainer>
          <SpreadImageHolder>
            <img src="https://cdn.shopify.com/s/files/1/0981/8178/files/point-collar-shirt-style.jpg?15455816660528096558" alt="Checks" />
            <p>Point Collar</p>
          </SpreadImageHolder>
          <SpreadImageHolder>
            <img src="https://cdn.shopify.com/s/files/1/0981/8178/files/narrow-collar-shirt-style.jpg?15455816660528096558" alt="HB" />
            <p>Narrow</p>
          </SpreadImageHolder>
          <SpreadImageHolder>
            <img src="https://cdn.shopify.com/s/files/1/0981/8178/files/button-down-collar-shirt-style.jpg?15455816660528096558" alt="Solid" />
            <p>Button Down</p>
          </SpreadImageHolder>
          <SpreadImageHolder>
            <img src="https://cdn.shopify.com/s/files/1/0981/8178/files/hidden-button-collar-shirt-style.jpg?15455816660528096558" alt="Solid" />
            <p>Hidden Button</p>
          </SpreadImageHolder>
        </CircleGridContainer>
      </FilterContainer>
      <FilterContainer>

        <CircleGridContainer>
          <SpreadImageHolder>
            <img src="https://cdn.shopify.com/s/files/1/0981/8178/files/snap-tab-collar-shirt-style.jpg?15455816660528096558" alt="Checks" />
            <p>Tab Collar</p>
          </SpreadImageHolder>
          <SpreadImageHolder>
            <img src="https://cdn.shopify.com/s/files/1/0981/8178/files/wide-spread-collar-shirt-style.jpg?15455816660528096558" alt="HB" />
            <p>Wide Spread</p>
          </SpreadImageHolder>
          <SpreadImageHolder>
            <img src="https://cdn.shopify.com/s/files/1/0981/8178/files/extreme-spread-collar-shirt-style.jpg?15455816660528096558" alt="Solid" />
            <p>Extreme Wide Spread</p>
          </SpreadImageHolder>
        </CircleGridContainer>
      </FilterContainer>

    {/* Other  */}
      <FilterContainer>
      <Title>OTHER CUSTOMIZATIONS</Title>
        <CircleGridContainer>
        <CircleImageHolder>
            <img src="https://i.ibb.co/BHL8bN7y/Shirt-Pocket.jpg" alt="Solid" />
            <p>Pockets <br></br>(With or Without)</p>
          </CircleImageHolder>
          <CircleImageHolder>
            <img src="https://cdn.sanity.io/images/tgi56uf8/production/a90f8d03f78cd9f617d09aebf965f6a48536033a-5464x8192.jpg?rect=0,886,5464,6420&w=800&h=940&auto=format" alt="Solid" />
            <p>Initial Embroidary (Chest, Waist, Cuffs)<br></br>(Contrast/No Contrast)</p>
          </CircleImageHolder>
          <CircleImageHolder>
            <img src="https://d2c7pv42xi6lat.cloudfront.net/assets/help/shortsleeve-33c516805828503c93de1ed77718e48cf831d65c257ae0aa32acb07ab8bd08f8.jpg" alt="Solid" />
            <p>Short Sleeves Cuff <br></br>(Plain, Cuffed)</p>
          </CircleImageHolder>
        </CircleGridContainer>
      </FilterContainer>
      
    </FilterSection>
    </Suitgrid>
  );
};

const Suitgrid = styled.div`
    position: relative;
    overflow-x: hidden;
    display: block;
    top: 0px;
    background-color: white;
    text-align: center;

`

const SuitContainer = styled.div`
  width: 100%;
  padding: 50px 0;
  margin: 0;
  /* background: url("https://img.freepik.com/free-photo/fabric-textured-background_53876-33695.jpg?semt=ais_hybrid") center center/cover no-repeat; */
`;

const SuitImage = styled.img`
  width: 100%;
  height: 50%;
  display: block;
  margin-bottom: -90px;

  @media (max-width: 768px) {
    margin-top: 100px;
    width: 50vh; /* Hide the desktop image on small screens */
  }
`;

const Type = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40vh;
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
    max-width: 50%;
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

const QualityImg = styled.div`
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

const FilterSection = styled.div`
  padding: 2rem 0;
`;

const FilterContainer = styled.div`
  padding: 2rem;
  text-align: center;
  background-color: #f5f5f5;
  border-radius: 20px;
  margin: 2rem auto;
  max-width: 1500px;
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 1.5rem;
  color: #333;
`;

const CircleGridContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 20px;

  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`;

const CircleImageHolder = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
  text-decoration: none;
  color: #333;

  img {
    width: 250px;
    height: 250px;
    border-radius: 4%;
    overflow: hidden;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94);

    &:hover {
      border: 5px solid #2c5ca4;
    }
  }

  p {
    font-size: 1rem;
    font-weight: bold;
    margin-top: 0.5rem;
  }
`;

const SpreadImageHolder = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
  text-decoration: none;
  color: #333;

  img {
    width: 310px;
    height: 250px;
    border-radius: 4%;
    overflow: hidden;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94);

    &:hover {
      border: 5px solid #2c5ca4;
    }
  }

  p {
    font-size: 1rem;
    font-weight: bold;
    margin-top: 0.5rem;
  }
`;

export default KnowShirt;

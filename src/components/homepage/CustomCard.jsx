import styled from 'styled-components';

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  background-color: #fff;
    border-radius: 10px;
    box-shadow: 0px 0px 15px rgba(0,0,0,0.1);
    overflow: hidden; 
`;

const CardItem = styled.div`
 margin-top: 30px;
    margin-bottom: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  width: calc(15.8333%);
  
  color: #777;
`;

const CardImage = styled.div`
  width: 70px;
  height: 70px;
  background-color: #f1f1f1;
  /* Replace the image URL with your actual image */
  background-image: url('placeholder-image.png');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

const CardTitle = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-top: 0.75rem;
`;

const CardDescription = styled.div`
  color: #777;
  margin-top: 0.25rem;
`;

function CustomCard() {
  return (
    <CardContainer>
      <CardItem>
        <CardImage />
        <CardTitle>Vocabulary</CardTitle>
        <CardDescription>1 type</CardDescription>
      </CardItem>
      <CardItem>
        <CardImage />
        <CardTitle>Speaking</CardTitle>
        <CardDescription>4 types</CardDescription>
      </CardItem>
      <CardItem>
        <CardImage />
        <CardTitle>Listening</CardTitle>
        <CardDescription>2 types</CardDescription>
      </CardItem>
      <CardItem>
        <CardImage />
        <CardTitle>Reading</CardTitle>
        <CardDescription>2 types</CardDescription>
      </CardItem>
      <CardItem>
        <CardImage />
        <CardTitle>Writing</CardTitle>
        <CardDescription>2 types</CardDescription>
      </CardItem>
      <CardItem>
        <CardImage />
        <CardTitle>Sample</CardTitle>
        <CardDescription>2 types</CardDescription>
      </CardItem>
    </CardContainer>
  );
}

export default CustomCard;

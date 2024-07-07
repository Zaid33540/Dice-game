import styled from "styled-components"
function StartGame({toggleGamePlay}) {
  return (
    <Container>
      <div><img src="/images/dices.png" /></div>
      <div className="content">
        <h1>DICE GAME</h1>
        <div>
        <Button onClick={toggleGamePlay}>Play Now</Button>
        </div>
      </div>
    </Container>
  )
}

export default StartGame

const Container = styled.div`
  max-width: 1180px;
  display: flex;
  margin: 0 auto;
  height: 100vh;
  align-items: center;

  .content{
    display: flex;
    flex-direction: column;
    align-items: end;
    h1{
      font-size: 96px;
      white-space: nowrap;
    }
  }

  @media (max-width: 650px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 100px;
    gap: 100px;

    img{
      height: 260px;
      width: 325px;
    }
    .content{
      h1{
      font-size: 48px;
      white-space: nowrap;
    }
    }
  }
`
const Button = styled.button`
  color: white;
  padding: 10px 18px;
  background: #000000;
  border-radius: 5px;
  min-width: 220px;
  border: none;
  font-size: 16px;
  transition: 0.4s background ease-in;
  cursor: pointer;

  &:hover{
    background-color: white;
    border: 1px solid black;
    color: black;
    transition: 0.3s background ease-in;
    cursor: pointer;
  }
  @media (min-width: 650px) {
    width: 110px;
  }
`
import styled from 'styled-components'

function ShowRules() {
  return (
    <RuleBook>
      <h1>How to play dice game</h1>
      <p>Select any number</p>
      <p>Click on dice image</p>
      <p>After clicking on dice image if selected number is equal to dice number you will get same point as dice</p>
      <p>If you get wrong guess the two points will be dedcuted</p>
    </RuleBook>
  )
}

export default ShowRules

const RuleBook = styled.div`
border: none;
padding: 20px;
display: flex;
flex-direction: column;
gap: 4px;
background: #FBF1F1;
border-radius: 10px;


h1{
font-size: 24px;
font-weight: 700;
line-height: 36px;
text-align: left;

}

p{
font-size: 16px;
font-weight: 500;
line-height: 24px;
text-align: left;

}
`
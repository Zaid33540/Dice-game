import styled from "styled-components"
function NumberSelector({setError,error,selectedNumber , setSelectedNumber}) {
 
  const arr =[1,2,3,4,5,6]
  
  console.log(selectedNumber)
   
  const NumberSelecterHandler=(item)=>{
    setSelectedNumber(item);
    setError("");
  }

  return (
    <NumberSelectorContainer>
    <p className="error">{error}</p>  
    <div className="flex">
    {arr.map((item)=><Box isselected={item == selectedNumber } onClick={()=>NumberSelecterHandler(item)} key={item}>{item}</Box>)}
    </div>
    <p>Select Number</p>
    </NumberSelectorContainer>
  )
}

export default NumberSelector

const Box = styled.div`
  width: 72px;
  height: 72px;
  border: 1px solid black;
  display: grid;
  place-items: center;
  font-size: 24px;
  font-weight: 700;
  background-color: ${(prop)=> (prop.isselected ? "black" : "white")};
  color: ${(prop)=> (!prop.isselected ? "black" : "white")};
  cursor: pointer;
  @media (max-width:500px ) {
    width: 50px;
    height: 50px;
    
  }
`
const NumberSelectorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  
  .flex{
    display: flex;
    gap: 24px;
  }
  p{
    font-size: 24px;
    font-weight: 700px;
  }
  .error{
    color: red;
  }

  @media (max-width: 500px) {
    .flex{
      display: flex;
      gap: 10px;
    }
  }
`
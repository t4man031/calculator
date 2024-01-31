import Wrapper from "./compoents/wrapper";
import Screen  from "./compoents/Screen";
import ButtonBox from "./compoents/ButtonBox";
import Button from "./compoents/Button";

const btnValues = [
  ["C", "+-", "%", "/"],
  [7, 8, 9, "X"],
  [4, 5, 6, "-"],
  [1, 2, 3, "+"],
  [0, ".", "="],
];

function App() {
  return (
   <div>
    <Wrapper>
      <Screen> 
     <ButtonBox> 
       {btnValues.flat().map((btn, i) => (
      <Button
      value={btn}
      key={i}/>
       ))}
    </ButtonBox>
    </Screen>
    </Wrapper>
   </div>
  );
}

export default App;

import Drink from "./Drink.jsx";
import Hello from "./Hello.jsx";
import Hello2 from "./Hello2.jsx";
import MyComponent from "./MyComponent.jsx";

export default function App() {

  return(
    <>
      <MyComponent />
      <Drink drink='coffee'/>
      <Hello2 firstName='Jone' lastName='Doe'/>
      <Hello2 firstName='Gildong' lastName='Hong'/>
      <Hello2 firstName='Young' lastName='Kim'/>
    </>
  );
}
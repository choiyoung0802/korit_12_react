import Drink from "./Drink.jsx";
import Hello from "./Hello.jsx";
import Hello2 from "./Hello2.jsx";
import MyComponent from "./MyComponent.jsx";
import MyComponent2 from "./MyComponent2.jsx";
import Mycomponent3 from "./MyComponent3.jsx";

export default function App() {

  return(
    <>
      <Mycomponent3 isLoggedin={false}/>
      <MyComponent2 isLoggedin={true}/>
      <MyComponent2 isLoggedin={false}/>
      <MyComponent />
      <Drink drink='coffee'/>
      <Hello2 firstName='Jone' lastName='Doe'/>
      <Hello2 firstName='Gildong' lastName='Hong'/>
      <Hello2 firstName='Young' lastName='Kim'/>
    </>
  );
}
import HeaderText from "./HeaderText";

export default function Drink(props) {

  return (
    <>
      <h1>
        Would you like to drink some {props.drink}?
        <HeaderText text='추가텍스트'/>
      </h1>
    </>
  );
}
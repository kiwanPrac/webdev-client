function add(a: number, b: number) {
    return a + b;
  }

function subtract(a: number, b: number) {
    return a - b;
  }

function multiply(a: number, b: number) {
    return a * b;
  }
  
  export default function LegacyFunctions() {
    const twoPlusFour = add(2, 4);
    const sixMinusTwo = subtract(6, 2);
    const threeTimesSeven = multiply(3, 7);
    console.log(twoPlusFour);
    console.log(threeTimesSeven);
    return (
      <div id="wd-legacy-functions">
        <h4>Functions</h4>
        <h5>Legacy ES5 functions</h5>
        twoPlusFour = {twoPlusFour}
        <br />
        add(2, 4) = {add(2, 4)}
        <br />
        sixMinusTwo = {sixMinusTwo}
        <br />
        threeTimesSeven = {threeTimesSeven}
        <br />
        multiply(3, 7) = {multiply(3, 7)}
        <hr />
      </div>
    );
  }

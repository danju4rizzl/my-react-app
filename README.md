# React Fundamentals

### Setting up the project

To get started clone the repo by running the following command in your terminal:

```
git clone https://github.com/danju4rizzl/my-react-app.git
```

After you have cloned the repo you can now change directory into the project with:

```
cd my-react-app
```

When you get into the project directory you can run the following command, this will install all the dependencies the project needs to work correctly:

```
npm install
```

or

```
pnpm install (recommended)
```

After installing the dependencies, start the development server:
`pnpm dev` or `npm run dev`

Finally the project server will start and you can open it in your browser by going to: `http://localhost:3000`

#

#### What you'll learn - We'll update this section in future

#

### React Function component

To we will see what is a how to create and use components the right way

```
function Car(props) {
  return <h2>I am a {props.color} Car!</h2>;
}
```

### React Props

Props are arguments passed into React components.

```
function Car(props) {
  return <h2>I am a { props.brand }!</h2>;
}

```

### React Events

React can perform actions based on user events.

```
function Football() {
  const shoot = () => {
    alert("Great Shot!");
  }

  return (
    <button onClick={shoot}>Take the shot!</button>
  );
}
```

### Conditional rendering

We can use the if JavaScript operator to decide which component to render.

```
function MissedGoal() {
  return <h1>MISSED!</h1>;
}

function MadeGoal() {
  return <h1>Goal!</h1>;
}

function Goal(props) {
  const isGoal = props.isGoal;
  if (isGoal) {
    return <MadeGoal/>;
  }
  return <MissedGoal/>;
}

```

Logical && Operator

```
function Garage(props) {
  const cars = props.cars;
  return (
    <>
      <h1>Garage</h1>
      {cars.length > 0 &&
        <h2>
          You have {cars.length} cars in your garage.
        </h2>
      }
    </>
  );
}

const cars = ['Ford', 'BMW', 'Audi'];

```

### Rendering Lists

In React, you can render (show) lists with any type of loop.
NOTE:

#

⚠️ React lists always need `key` props

#

```
function Car(props) {
  return <li>I am a { props.brand }</li>;
}

function Garage() {
  const cars = ['Ford', 'BMW', 'Audi'];
  return (
    <>
      <h1>Who lives in my garage?</h1>
      <ul>
        {cars.map((car) => <Car brand={car} />)}
      </ul>
    </>
  );
}

```

### Forms

You can add a simple or complex form in react simply. Below is a simple Form component.

```
function MyForm() {
  return (
    <form>
      <label>Enter your name:
        <input type="text" />
      </label>
    </form>
  )
}
```

To use the form, we need to `handle` the form events. Unlike HTML our Form React Component will handle the data from the Form.

```
function MyForm() {
  const [name, setName] = useState("");

  return (
    <form>
      <label>Enter your name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
    </form>
  )
}
```

We can use the `useState() Hook` to keep track of each inputs value and provide a "single source of truth" for the entire application.

### Styling

There are 3 main ways to style your react application.

- Inline styling

```
<h1 style={{color: "red"}}>Hello World 👋</h1>
```

- CSS stylesheets

```
const Header = () => {
  // Define an object with css styles in it.
  const myStyle = {
    color: "white",
    fontFamily: "Sans-Serif",
    backgroundColor: "red",
    padding: "15px"
  };


  return (
    <>
      {/* simply add the object here */}
      <h1 style={myStyle}>Hello Style!</h1>
      <p>Add a little style!</p>
    </>
  );
}
```

- CSS with a septate file -
  You need to create a .css file with the name of the component... eg: `App.css` or `BannerComponent.css` (note the camelCase)

```
 .banner {
	font-size: 50px;
	color: green;
	text-align: center;
}
```

Now that we have a css file we can use it 👇

```
import './titleExample.css';

const TitleWithStylesClassName = () => {
	return <h1 className="banner">Hello world</h1>
}

```

### Hooks

Hooks make function component have react features such as `State`, `Side Effects` and more. You can also create a custom hook for yourself.

```
import { useState } from "react";

function FavoriteColorExample() {
  const [color, setColor] = useState("red");

  return (
    <>
      <h1>My favorite color is {color}!</h1>
      <button
        type="button"
        onClick={() => setColor("blue")}
      >Blue</button>
      <button
        type="button"
        onClick={() => setColor("red")}
      >Red</button>
      <button
        type="button"
        onClick={() => setColor("pink")}
      >Pink</button>
      <button
        type="button"
        onClick={() => setColor("green")}
      >Green</button>
    </>
  );
}
```

- useState Hook:
  This hook allows us to handle the state of our application in a function component. To use it we first need to `Initialize` the `useState` hook. In the example below we are setting the initial value to "Black" inside the useState Hook.

```
import { useState } from "react";

function FavoriteColorExample() {
  const [color, setColor] = useState("Black");
}
```

Now we can `read` the state in our component.

```
import { useState } from "react";

function FavoriteColor() {
  const [color, setColor] = useState("Black");

{/* We are reading the color state */}
  return <h1>My favorite color is {color}!</h1>
}

```

We can also `update` our state's value like this:

```
import { useState } from "react";

function FavoriteColor() {
  const [color, setColor] = useState("black");

  return (
    <>
      <h1>My favorite color is {color}!</h1>
      <button
        type="button"
        onClick={() => setColor("blue")}
      >Blue</button>
    </>
  )
}
```

⚠️ **NEVER** update your
state like: `color = "green"` it will give you an error.⚠️

We can also store objects, arrays, strings, numbers, booleans...This also means that we can create as many `state hooks` as we want give and track them individually.

```
import { useState } from "react";

function Car() {
  const [brand, setBrand] = useState("Toyota");
  const [model, setModel] = useState("Rav4");
  const [year, setYear] = useState("2020");
  const [color, setColor] = useState("purple");

  return (
    <>
      <h1>My {brand}</h1>
      <p>
        It is a {color} {model} from {year}.
      </p>
    </>
  )
}

```

Or we can just store the values inside an object like this:

```
import { useState } from "react";

function Car() {
  const [car, setCar] = useState({
    brand: "Toyota",
    model: "Rav4",
    year: "2020",
    color: "purple"
  });

  return (
    <>
      <h1>My {car.brand}</h1>
      <p>
        It is a {car.color} {car.model} from {car.year}.
      </p>
    </>
  )
}

```

To update a state that has an `Array` or `Object` inside the `useState` hook, we need to pass in a function that exposes the values of the `previous state`, then we can update the state we want. Here is an example below: 👇

```
import { useState } from "react";

function Car() {
  const [car, setCar] = useState({
    brand: "Toyota",
    model: "Rav4",
    year: "2020",
    color: "purple"
  });

  const updateModel = () => {
    setCar(previousState => {
      return { ...previousState, model: "Corolla" }
    });
  }

  return (
    <>
      <h1>My {car.brand}</h1>
      <p>
        It is a {car.color} {car.model} from {car.year}.
      </p>
      <button
        type="button"
        onClick={updateModel}
      >Corolla</button>
    </>
  )
}

```

Using this approach, we passed a function into our setCar function. This function receives the previous value (object inside our state).

Then we returned an object, using the `...spread ` operator for the previousState and overwriting only the model.

If we didn't do it this way we would be overriding the entire state in this case (object inside our state).

- useEffect: This hook allows you to perform `side effects` in your components. Ex: running a timer or fetching data from an API (Application Programming Interface)

`useEffect` accepts two arguments.

```
useEffect(<Function>, <dependency>)
```

The second argument the (dependency) is optional, but you must know how and when to use it.

⚠️Don't run the code below, I will hang your computer ⚠️

```
import { useState, useEffect } from "react";

function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  });

  return <h1>I've shown {count} times! 👈</h1>;
}
```

Because `useEffect` runs on every render, this makes our code rerender every second 😕.

To handle this problem we need to include the second parameter as an `Array` . This `array` can be optionally `empty` or we can pass in the `state` or `props` .

Let's break it down with code to understand the effects 😎.

###### When no dependency passed as the second parameter:

```
useEffect(() => {
  // Runs on every render⚠️
});
```

###### When an empty array is passed as the dependency

```
useEffect(() => {
  // Runs only on the first render
  // eg: when the page loads or component mounts 🚀
}, []);
```

###### When we pass `props` or `state` values into our dependency array

```
useEffect(() => {
  //Runs on the first render
  //And any time any dependency value changes 🔥
}, [prop, state]);
```

To fix the previous issue we had because we didn't add our dependency array

```
import { useState, useEffect } from "react";

function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  }, []); // <- added our empty array

  return <h1>I've showed {count} times!</h1>;
}

```

And if we wanted to run the code whenevever the count state changed, we would do it like this

```
import { useState, useEffect } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const [calculation, setCalculation] = useState(0);

  useEffect(() => {
    setCalculation(() => count * 2);
  }, [count]); // <- added our count state

  return (
    <>
      <p>Count: {count}</p>
      <button onClick={() => setCount((c) => c + 1)}>+</button>
      <p>Calculation: {calculation}</p>
    </>
  );
}

```

If the useEffect depends multiple states and props, you need to add them to the dependency array.

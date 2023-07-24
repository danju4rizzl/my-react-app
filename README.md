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

### Hooks (coming soon) 😑

<!-- Hooks make function component have react features such as `State`, `Side Effects` and more. You can also create a custom hook for yourself.

```
import { useState } from "react";

function FavoriteColor() {
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
``` -->

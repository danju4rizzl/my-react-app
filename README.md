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

#### What you'll learn

To we will see what is a how to create and use components the right way

```
function Car(props) {
  return <h2>I am a {props.color} Car!</h2>;
}
```

Props are arguments passed into React components.

```
function Car(props) {
  return <h2>I am a { props.brand }!</h2>;
}

```

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

In React, you will render lists with some type of loop.
NOTE: react list always need "key props"

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

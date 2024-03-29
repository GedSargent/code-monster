export const AppTsx = `export default function App() {
  return (
    <div className="p-8">
      <h1>Hello from App.tsx - the parent component!</h1>
    </div>
  );
}`

export const GreetingTsx = `export default function Greeting() {
  return <h1>Hello from Greeting</h1>
}`

/*

import MonsterPlayground from "src/components/MonsterPlayground.astro"

<MonsterPlayground localStorageId="first-component" files={
  {"/App.js": {
      active: true,
      code: AppTsx
    },
    "/Greeting.js": GreetingTsx
  }
} />

*/

export const AppTsx = `export default function App() {
  return (
    <div className="p-8">
      <h1>Hello from App.tsx - the parent component!</h1>
    </div>
  );
}`

export const GreetingTsx = `function Greeting() {
  return <h1>Hello from Greeting</h1>
}`

/*

import MonsterPlayground from "src/components/MonsterPlayground.astro"

<MonsterPlayground localStorageId="first-component" files={{
  "/Greeting.tsx": GreetingTsx,
  "/App.tsx": {
    active: true,
    code: AppTsx
  },
}} />

*/

---
title: Setting up
description: Understanding where light and dark mode is implemented in the Epic Stack, and how to manually switch between the two.
---

# Setting up

Allowing users to switch between a 'light' and 'dark' mode on your website is something most users expect from a modern web application. It also helps improve accessibility for the site, allowing users to settle on a theme that suits them best.

The only problem is that implementing a light and dark mode is surprisingly difficult. Luckily, the Epic Stack has most of the code for this already included.

All we need to do is implement it 🚀.

## Triggering 'light' and 'dark' mode manually

Open `app/root.tsx` and look at the `App` function being exported:

```tsx title="app/root.tsx" showLineNumbers
export function App() {
  const nonce = useNonce();

  return (
    <Document nonce={nonce}>
      <div className="flex h-screen flex-col justify-between">
        <div className="flex-1">
          <main className="grid h-full place-items-center">
            <h1 className="text-mega">Welcome to Epic News!</h1>
          </main>
        </div>
      </div>
    </Document>
  );
}
```

:::note

Your `App` function probably looks a little different from this if you followed the 'root-tsx file' tutorial previously.

Don't worry, the fundamentals of this process remain the same.

:::

### The `Document` component

Notice the `Document` component that is wrapping everything being returned from the `App` function?

Right-click the opening `Document` tag, and select 'Go to Source Definition' from the options:

![Selecting Go to source definition](src/assets/png/image-20240211152140693.png)

This will open the file where the `Document` component code is held.

```tsx
interface DocumentProps {
  children: React.ReactNode;
  nonce: string;
  theme?: Theme;
  env?: Record<string, string>;
}

export default function Document({
  children,
  nonce,
  theme = "dark",
  env = {},
}: DocumentProps) {
  return (
    <html lang="en" className={`${theme} h-full overflow-x-hidden`}>
      <head>
        <ClientHintCheck nonce={nonce} />
        <Meta />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Links />
      </head>
      <body className="dark:bg-dark-background dark:text-dark-foreground bg-background text-foreground">
        {children}
        <script
          nonce={nonce}
          dangerouslySetInnerHTML={{
            __html: `window.ENV = ${JSON.stringify(env)}`,
          }}
        />
        <ScrollRestoration nonce={nonce} />
        <Scripts nonce={nonce} />
        <LiveReload nonce={nonce} />
      </body>
    </html>
  );
}
```

:::info

### Interfaces

Let's take a second to look at the `interface` being defined here. What is it for?

In TypeScript, an `interface` is like a blueprint for an object. It describes what **[properties](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_objects)** an object should have and what type of data each property should hold.

Here, `DocumentProps` is an interface:

```tsx
interface DocumentProps {
  children: React.ReactNode;
  nonce: string;
  theme?: Theme;
  env?: Record<string, string;
}
```

It's saying that any object that wants to be a `DocumentProps` should have the following properties:

- `children`: This should be a `React.ReactNode`. In simple terms, this means it can be any kind of item that React can render on the screen, like a component, a piece of text, or even nothing at all.

- `nonce`: This should be a `string`, which is a sequence of characters like "hello" or "1234".

- `theme`: This is an optional property (that's what the `?` means), and it should be of type `Theme`. We don't see a definition for `Theme` in this file, but it's being `import`ed at the top from `app/utils/theme.server.ts`:

  ```tsx
  import { Theme } from "~/utils/theme.server";
  ```

  If we open this file, we can see its definition:

  ```tsx
  export type Theme = "light" | "dark";
  ```

  This means that `Theme` must be one of two possible strings: `'light'` or `'dark'`. We'll be looking at this in more detail later.

- `env`: This is also optional, and it should be a `Record<string, string`. This is a fancy way of saying it's an object where all the keys and values are strings. For example, `{ "key1": "value1", "key2": "value2" }` would be a valid `env`.

So, if you have an object and you want to make sure it fits the `DocumentProps` blueprint, it needs to have these properties with these types.

:::

## Manually updating from 'light' to 'dark' themes

Find the line that reads `theme = 'dark'`. Change this to `theme = 'light'` and save the file. You should see the website in the browser looks completely different:

![Project in Light Mode](/src/assets/png/image-20240211162611565.png)

### Why? Tailwind classes and string interpolation

Take a closer look at the opening `html` component being `rerturn`ed from the `Document` function:

```tsx
<html lang="en" className={`${theme} h-full overflow-x-hidden`}>
```

Can you see how the `theme` variable has been slotted into the `className` **property** (or '**prop**')? This is called **interpolation**, and is a way of inserting the value of a variable into a string in JavaScript.

What we need now is a way of users to control the value of `theme` dynamically from the front end. Let's put in a button that users can click to toggle between the two states.

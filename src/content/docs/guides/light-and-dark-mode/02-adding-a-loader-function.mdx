---
title: Adding a loader function
description: Adding a loader function to the root route file in Remix
---

# Adding a `loader` function

We now need to define some way of letting the user decide if they prefer 'light' or 'dark' mode, and toggle between the two.

Again, the creators of the Epic Stack have included this code for us. We just need to wire it up properly.

Let's start by defining a `loader` function at the top of `root.tsx`, just below the `links` function that is already there.

Open this file and add the lines highlighted in green below.

:::warning

## Placing code **carefully**

Look carefully where the highlighted code is added in relation to the code that is already there.

Take the time to slot these lines into _exactly_ the same places in your own code.

:::

```tsx title="app/root.tsx" showLineNumbers
// highlight-next-line
import { LoaderFunctionArgs, json, type LinksFunction } from "@remix-run/node";
import AppProvider from "~/components/shared-layout/AppProvider";
import Document from "~/components/shared-layout/Document.tsx";
import { useNonce } from "~/utils/nonce-provider.ts";
import rootLinkElements from "~/utils/rootProviders/rootLinkElements.ts";
import useTheme from "./hooks/useTheme";
// highlight-start
import { getHints } from "./utils/client-hints";
import { getDomainUrl } from "./utils/misc";
import { getTheme } from "./utils/theme.server";
// highlight-end

export const links: LinksFunction = () => {
  return rootLinkElements;
};

// highlight-start
export async function loader({ request }: LoaderFunctionArgs) {
  const requestInfo = {
    hints: getHints(request),
    origin: getDomainUrl(request),
    path: new URL(request.url).pathname,
    userPrefs: {
      theme: getTheme(request),
    },
  };

  return json({ requestInfo });
}
// highlight-end
```

::::info

## What is a `loader` function?

### Client vs. server code

Traditionally, React components are executed in the **client**, or the user's browser. The problem is that user information and other data is accessed on the **server**, as this has access to the database.

The makers of Remix got around this problem with the concept of `loader` functions.

### Accessing server data with `loader` functions

If a `loader` function is `export`ed from a route file (i.e. a React file inside the `route` folder), then Remix knows to execute this code first on the **server** _before_ the user interface (UI) is rendered. This ensures that any required data is accessed and processed before the UI is built by the browser.

In this case, the `loader` function is creating a new object - `requestInfo` - and populating it with values that are generated from several helper functions like `getHints`, `getDomainUrl` etc. These have already been written for us in the Epic Stack codebase, and are being `import`ed in from elsewhere.

:::tip[The `request` object]

You'll notice each of these helper functions are being passed the `request`, which is being passed into the `loader` function as an argument:

```tsx
export async function loader({ request }: LoaderFunctionArgs) {
  // ... more code here...
}
```

This `request` object carries crucial information about the incoming request to the server, such as the URL the user is trying to access, any search parameters they've included, headers, and more. Think of it as a toolbox that the loader function uses to understand exactly what the user is asking for.

By analyzing the details carried by the `request` object, the loader can decide, like we are doing here, which pieces of data are needed to fulfill the user's current needs. This allows your web application to be incredibly responsive and tailored to the user's specific requests, enhancing their overall experience on your site.

:::

You can learn more about `loader` functions via the [Remix docs](https://remix.run/docs/en/main/route/loader).

::::

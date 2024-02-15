---
title: Toggle Light and Dark Mode with useTheme
description: Understanding how to toggle light and dark mode with useTheme
---

# Toggle Light and Dark Mode with `useTheme`

Open `app/root.tsx` and add the line highlighted in green below:

![image-20240211170056416](/src/assets/png/image-20240211170056416.png)

Notice the red underline? This is because `useTheme` is a custom function, but we haven't defined it yet. Let's fix that now.

1. Hover your cursor over the red underline, and after a moment you will see a pop-up menu.
2. Click 'Quick Fix' from this menu, and select "add import from './hooks/useTheme'".

![image-20240211170500977](/src/assets/png/image-20240211170500977.png)

3. This automatically `import`s the code from the file in the project, and the red underline disappears. You should be able to see the `import` statement at the top of your code window:

![Import statement at top of code window](/src/assets/png/image-20240211170747133.png)

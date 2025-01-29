# React Native Dimensions API - Incorrect Dimensions on Initial Render

This repository demonstrates a common bug encountered when using the `Dimensions` API in React Native to obtain screen dimensions.  The problem arises because the dimensions might not be immediately accessible when the component initially mounts, which can result in misaligned layouts or incorrect rendering.

The `bug.js` file shows the problematic implementation where the dimensions are accessed synchronously during the initial render.  The `bugSolution.js` file presents the corrected implementation, leveraging the `useEffect` hook to asynchronously fetch and update the dimensions once available.
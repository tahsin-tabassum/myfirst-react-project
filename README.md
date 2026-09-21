**myfirst-react-project(Dev Stack)**

Dev Stack is a responsive web application that helps developers explore different technologies and create their ideal development stack.

* Technologies Used

- React
- TypeScript
- Tailwind CSS
- Vite
- React Toastify

* Features

- Explore technologies by category, difficulty level, and rating.
- Add technologies to your personal stack and prevent duplicate selections.
- Remove individual technologies or clear the entire stack.

  **Q&A**
  1. What is JSX, and why is it used in React?
  - JSX stands for JavaScript XML. It's a syntax extension that allows us to write HTML elements in JS and place them in the DOM. It converts HTML tags into React elements. Instead of dealing with multiple layers of function calls, it makes our code clear and easy to understand. It has built-in protection against XSS (Cross-Site Scripting) attacks.
  2. What does the useState hook do, and where did you use it in this project?
  - Props: Props are used to pass data from a parent component to a child component. Props are read-only.
  - State: State is data managed inside a component. When state changes, React updates the UI.
  3. What does the useState hook do, and where did you use it?
  - useState allows us to create and manage state in a React component.
  4. What does the useEffect hook do, and why did you need it to load the JSON data?
  - useEffect is used to perform side effects in a React component, such as fetching data.
  5. Why does every item in a .map() list need a unique key prop?
  - React uses the key to uniquely identify each item in a list. It helps React efficiently track which items have been added, removed, or changed.
  6. What is conditional rendering? Show one place you used it.
  - Conditional rendering means displaying different UI depending on a condition.
    I used it in Stack.tsx: {stack.length === 0 ? (
  <p>Your stack is empty.</p>
) : (
)}
If the stack is empty, it shows "Your stack is empty." Otherwise, it shows the selected technologies.
7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
- A parent passes data to a child using props. The child can send something back to the parent by calling a function passed through props.

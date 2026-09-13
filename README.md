# DevStack-React-A05

A responsive React website for exploring development technologies and building a personal technology stack.

## Technologies Used
- React
- Vite
- JavaScript (ES6+)
- CSS
- React-Toastify
- JSON

## 3 Features
1. Browse technologies loaded from a JSON file.
2. Add and remove technologies from your personal stack without duplicates.
3. Responsive UI with loading state and toast notifications.

## React Questions

### 1. What is JSX, and why is it used in React?
JSX lets us write UI markup inside JavaScript. It makes React components easier to read and build.

### 2. What is the difference between props and state?
Props are data passed from a parent component. State is data managed inside a component that can change over time.

### 3. What does the useState hook do, and where did you use it in this project?
useState creates component state. This project uses it for technologies, loading/error state, and the selected stack.

### 4. What does the useEffect hook do, and why did you need it to load the JSON data?
useEffect runs side effects after rendering. It is used here to fetch the technology JSON when the page loads.

### 5. Why does every item in a .map() list need a unique key prop?
React uses the key to identify list items efficiently when the list changes.

### 6. What is conditional rendering? Show one place you used it (example: the empty stack message).
Conditional rendering shows different UI based on a condition. For example, an empty stack shows an empty-state message; otherwise the selected technologies are shown.

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
A parent sends data to a child through props. A child can communicate back by calling a callback function received through props.






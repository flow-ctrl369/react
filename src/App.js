import image from './assets/logo-images/react-logo-1.png'
import styles from './mainapp.module.css'
import { useState } from 'react'

const link = "https://mui.com/material-ui/getting-started/templates/"



function App() {

    const table1 = `React has gained immense popularity among developers for several reasons. Firstly, its component-based architecture makes it highly modular and reusable. Developers can break down complex user interfaces into smaller, self-contained components, which can then be easily managed and maintained. This modular approach promotes code reusability, simplifies debugging, and enhances collaboration among team members, leading to faster development cycles and better code quality.

  Secondly, React's virtual DOM (Document Object Model) enables efficient rendering of UI components. Instead of directly manipulating the browser's DOM, React creates a lightweight virtual representation of the DOM in memory. When changes occur, React intelligently updates only the necessary parts of the actual DOM, minimizing unnecessary re-renders and enhancing performance. This approach significantly improves the overall speed and responsiveness of web applications, especially those with dynamic and interactive user interfaces.

  Furthermore, React's declarative programming model simplifies the process of building complex UIs. Developers describe how the UI should look and behave at any given time, and React takes care of updating the DOM to match this desired state. This declarative approach reduces the cognitive load on developers, as they can focus more on the "what" rather than the "how" of building interfaces. This not only makes code easier to understand and maintain but also facilitates rapid prototyping and iteration, crucial in today's fast-paced development environments.
  Lastly, React's thriving ecosystem and strong community support contribute to its appeal. With a vast array of libraries, tools, and resources available, developers can easily extend React's capabilities to suit their specific needs. Whether it's state management with Redux, routing with React Router, or styling with styled-components, React's ecosystem offers solutions to common challenges faced during web development. Additionally, the active community continually shares best practices, tips, and tutorials, making it easier for developers to learn and grow their skills with React.`;
  const table2 = `React, a popular JavaScript library for building user interfaces, boasts several key features:

  Component-Based: React follows a component-based architecture, allowing developers to create reusable and modular UI components. This approach enhances code organization, maintainability, and scalability.

  Virtual DOM: React utilizes a virtual DOM to efficiently update the browser's DOM. Instead of directly manipulating the entire DOM tree, React compares the virtual DOM with the actual DOM and only updates the necessary components, resulting in improved performance.

  Declarative: React promotes a declarative programming style, where developers specify the desired outcome rather than imperatively defining each step. This simplifies the development process, improves code readability, and facilitates debugging.

  Ecosystem: React boasts a rich ecosystem of libraries, tools, and extensions, such as React Router for routing, Redux for state management, and Styled Components for styling. This vibrant ecosystem enhances React's capabilities and enables developers to build feature-rich applications efficiently.`;
  const table3 = "Well here we go this is some text lorem lol"
  const arr = [table1, table2, table3]


  const [display, setDisplay] = useState(arr[0])

  return (
    <>
      <div className={styles.mainContent}>
        <img className={styles.mainImage} src={image} alt="nothing to display" ></img>
        <h1 className={styles.mainTitle}><a className={styles.mainTitle} href='https://react.dev/'>React.js</a></h1>
        <div className={styles.mainDescr}>      
          <p ><a className={styles.descrLink} href={link}>
            "Building UIs with reusable, stateful building blocks."
          </a></p>
        </div>
      </div>

      {/* Contents Table */}
      <div className={styles.buttonContainer}></div>
      <div>
        <nav className={styles.tableHeading}>
          <button onClick={() => setDisplay(arr[0])} className="reactButton">{display === arr[0] ? "Why React?" : "Why React?"}</button>
          <button onClick={() => setDisplay(arr[1])} className="featureButton">{display === arr[1] ? "Core Features" : "Core Features"}</button>
          <button onClick={() => setDisplay(<img className={styles.pin} src={image} alt=''></img>)} className="resourceButton">{display === arr[2] ? "Related Resources" : "Related Resources"}</button>
        </nav>
      </div>

      <div className={styles.contentTable}>
        <h1>{display === arr[0] ? "Why React?" : display === arr[1] ? "Core Features" : "Related Resources"}</h1>
        <p>{display}</p>
      </div>
    </>
  );
}

export default App;

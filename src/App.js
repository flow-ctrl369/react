import image from './assets/logo-images/react-logo-1.png'
import styles from './mainapp.module.css'
import { useState } from 'react'

const link = "https://www.google.com"



function App() {

  const table1 = "React is a powerhouse in the world of web development for several reasons. First off, it's all about reusable components. With React, you can break down your user interface into small, self-contained components, making your code modular and easy to maintain. These components can be reused throughout your application, saving you time and effort in the long run."
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
            i.e; using the React library to render the UI
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

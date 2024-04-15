import image from './assets/logo-images/react-logo-1.png'
import styles from './mainapp.module.css'
import data1 from './pages/ReactComponent/ReactComponent.jsx'
import data2 from './pages/FeaturesComponent/FeaturesComponent.jsx'
import data3 from './pages/Resources Component/ResourcesComponent.jsx'


import { useState } from 'react'


const link = "https://mui.com/material-ui/getting-started/templates/"



function App() {

  const [display, setDisplay] = useState(data1)

  return (
    <>
      <div className={styles.mainContent}>
        <img className={styles.mainImage} src={image} alt="nothing to display" ></img>
        <h1 className={styles.mainTitle}><a className={styles.mainTitle} href='https://react.dev/'>React.js</a></h1>
        <div className={styles.mainDescr}>      
          <p ><a className={styles.descrLink} href={link}>
            "Building UIs with reusable, stateful components"
          </a></p>
        </div>
      </div>

      {/* Contents Table */}
      <div className={styles.buttonContainer}></div>
      <div>
        <nav className={styles.tableHeading}>
          <button onClick={() => setDisplay(data1)} className="reactButton">{display === data1 ? "Why React?" : "Why React?"}</button>
          <button onClick={() => setDisplay(data2)} className="featureButton">{display === data2 ? "Core Features" : "Core Features"}</button>
          {/* <button onClick={() => setDisplay(<img className={styles.pin} src={image} alt=''></img>)} className="resourceButton">{display === arr[2] ? "Related Resources" : "Related Resources"}</button> */}
          <button onClick={() => setDisplay(data3.resourcesTable)} className="resourceButton">{display === data3? "Related Resources" : "Related Resources"}</button>
        </nav>
      </div>

      <div className={styles.contentTable}>
        <h1>{display === data1 ? "Why React?" : display === data2 ? "Core Features" : "Related Resources"}</h1>
        <p>{display}</p>
      </div>
    </>
  );
}

export default App;

import React, { Component } from 'react'
import NavBar from '../nav_bar/nav_bar_container'
import styles from './test.module.css'
 class Test extends Component {
    render() {
        return (
          <div className={styles.testAll}>
            <div className={styles.testHeader}>
              <NavBar/>
            </div>
            <div className={styles.testBody}>

            </div>
          </div>
        );
    }
}

export default Test;

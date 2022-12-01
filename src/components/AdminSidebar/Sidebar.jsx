import React from 'react'
import {Link} from 'react-router-dom'
import styleCSS from './style.module.css'


function Sidebar() {
  return (
    <div className={styleCSS.nav_container}>
        <nav className={styleCSS.nav}>
            <Link className={styleCSS.link} to='overview'>Overview</Link>
            <Link className={styleCSS.link} to='users'>Users</Link>
            <Link className={styleCSS.link} to='questions'>Questions</Link>
            <Link className={styleCSS.link} to='tags'>Tags</Link>
        </nav>
    </div>
  )
}

export default Sidebar
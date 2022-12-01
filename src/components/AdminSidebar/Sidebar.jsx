import React from 'react'


function Sidebar() {
  return (
    <div>
        <nav>
            <a href='/admin/overview'><li>Overview</li></a>
            <a href='/admin/users'><li>Users</li></a>
            <a href='/admin/Questions'><li>Questions</li></a>
            <a href='/admin/Tags'><li>Tags</li></a>
        </nav>
    </div>
  )
}

export default Sidebar
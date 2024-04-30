import React from 'react'

const SideBar = () => {
    const asideStyle = {
        background: "azure",
        width: "calc(30% - 10px)",
        marginLeft: "10px",
    }
  return (
    <aside
        style={asideStyle}
        className="sidebar-component">
        <h2>Sidebar Content Here</h2>
    </aside>
  )
}

export default SideBar;

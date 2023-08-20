import { Sidebar as SidebarReact, Menu, MenuItem } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
import './style.scss';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';

function Sidebar(props) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <SidebarReact
      collapsed={collapsed}
      transitionDuration={500}
      className="position-relative"
      rootStyles={{ border: 'none' }}
      toggled={true}
    >
      <Menu
        menuItemStyles={{
          button: {
            transition: 'all 0.2s ease-in-out',
            [`&:hover`]: {
              backgroundColor: '#4c4c4c',
            },
            [`&:active`]: {
              backgroundColor: '#ccc',
            },
          },
        }}
      >
        <h5 className="">Upload File</h5>
        <MenuItem component={<Link to="/upload/upload_template" />}> Upload Template </MenuItem>
        <MenuItem component={<Link to="/upload/upload_page" />}> Upload Page</MenuItem>
        <MenuItem component={<Link to="/upload/upload_history" />}> Upload History</MenuItem>
      </Menu>
      <div className="d-flex justify-content-center mt-5">
        <button
          className="btn rounded-circle d-flex justify-content-center align-items-center "
          onClick={() => setCollapsed(!collapsed)}
          style={{ backgroundColor: 'var(--btn)', width: '40px', height: '40px' }}
        >
          {collapsed ? <FontAwesomeIcon icon={faAngleRight} /> : <FontAwesomeIcon icon={faAngleLeft} />}
        </button>
      </div>
    </SidebarReact>
  );
}

export default Sidebar;

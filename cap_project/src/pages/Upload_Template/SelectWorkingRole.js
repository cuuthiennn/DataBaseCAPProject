import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { workingRole_GetAll } from '~/components/servers/WorkingRoleService';

const SelectWorkingRole = () => {
  const [listWorkingRole, setListWorkingRole] = useState([]);

  const [openItems, setOpenItems] = useState([]);

  const toggleOpen = (itemId) => {
    if (openItems.includes(itemId)) {
      // Nếu mục đã mở, đóng nó
      setOpenItems(openItems.filter((item) => item !== itemId));
    } else {
      // Nếu mục đóng, mở nó
      setOpenItems([...openItems, itemId]);
    }
  };

  useEffect(() => {
    getWorkingRoles();
  }, []);

  const getWorkingRoles = async () => {
    let res = await workingRole_GetAll();
    if (res && res.data) {
      console.log(res.data);
      setListWorkingRole(res.data);
    }
  };

  const renderMenu = (parentId) => {
    return (
      <ul>
        {listWorkingRole
          .filter((item) => item.role_parent_id === parentId)
          .map((item) => (
            <li key={item.id}>
              {item.path_name}
              {listWorkingRole.some((child) => child.role_parent_id === item.id) ? (
                <span
                  className={`toggle-arrow ${openItems.includes(item.id) ? 'open' : ''}`}
                  onClick={() => toggleOpen(item.id)}
                >
                  <FontAwesomeIcon icon={faChevronRight} />
                </span>
              ) : null}
              {openItems.includes(item.id) && renderMenu(item.id)}
            </li>
          ))}
      </ul>
    );
  };

  return <>{renderMenu(null)}</>;
};

export default SelectWorkingRole;

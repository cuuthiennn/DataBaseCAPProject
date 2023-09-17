import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import FontAwesomeIcon  from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import './dropDownTree.scss';
import EditWorkingRole from './EditWorkingRole';

const DropDownTree = ({ data }) => {
  const [expandedNodes, setExpandedNodes] = useState([]);

  const [isShowModalEdit, setIsShowModalEdit] = useState(false);
  const [dataEdit, setDataEdit] = useState({});

  const hanleEditWorkingRole = (role) => {};

  const toggleNode = (nodeId) => {
    if (expandedNodes.includes(nodeId)) {
      setExpandedNodes(expandedNodes.filter((id) => id !== nodeId));
    } else {
      setExpandedNodes([...expandedNodes, nodeId]);
    }
  };

  const isNodeExpanded = (nodeId) => {
    return expandedNodes.includes(nodeId);
  };

  const renderTree = (parentId = null, level = 0) => {
    return (
      <ul className="dropDownTree">
        {data
          .filter((node) => node.role_parent_id === parentId)
          .map((node) => (
            <li key={node.id}>
              <div className="nameRole">
                <i className="btn btn-sm me-1 btn-dropdown" onClick={() => toggleNode(node.id)}>
                  {isNodeExpanded(node.id) ? <FontAwesomeIcon icon={faMinus} /> : <FontAwesomeIcon icon={faPlus} />}
                </i>
                <label
                  onClick={() => {
                    setDataEdit(node);
                    setIsShowModalEdit(true);
                  }}
                >
                  {node.path_name}
                </label>
              </div>
              {expandedNodes.includes(node.id) && renderTree(node.id, level + 1)}
            </li>
          ))}
      </ul>
    );
  };

  return (
    <div>
      {renderTree()}
      <EditWorkingRole
        show={isShowModalEdit}
        handleClose={() => setIsShowModalEdit(false)}
        hanleEditWorkingRole={hanleEditWorkingRole}
        data={dataEdit}
      />
    </div>
  );
};

export default DropDownTree;

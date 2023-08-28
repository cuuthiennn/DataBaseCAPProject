function model_workingRole(id, name, parent) {
  return { id, name, parent };
}

const rows = [
  model_workingRole(1, 'VietNam', null),
  model_workingRole(2, 'Finance', 1),
  model_workingRole(3, 'Marketing', 1),
  model_workingRole(4, 'NAV', 2),
  model_workingRole(5, 'Sale', 3),
];

const RoleTree = (props) => {
  const { roleId, level = 0, listWorkingRole } = props;

  const childRoles = rows.filter((role) => role.parent === roleId);

  const handleClick = () => {};

  return (
    <ul style={{ marginLeft: `${level * 20}px` }}>
      {childRoles.map((childRole) => (
        <li key={childRole.id} style={{ cursor: 'pointer' }} onClick={() => handleClick()}>
          {childRole.name}
          <RoleTree roleId={childRole.id} level={level + 1} />
        </li>
      ))}
    </ul>
  );
};

export default RoleTree;

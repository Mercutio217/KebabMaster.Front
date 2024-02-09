import React, { FC } from 'react';


interface UserPanelProps {}

const UserPanel: FC<UserPanelProps> = () => {
  return (<>
    <div className="mb-3 row">
    <label className="col-sm-2 col-form-label">Email</label>
    <div className="col-sm-10">
      <input type="text" readOnly={true} className="form-control-plaintext" id="staticEmail" value="email@example.com" />
    </div>
  </div>
  <div className="mb-3 row">
    <label className="col-sm-2 col-form-label">Password</label>
    <div className="col-sm-10">
      <input type="password" className="form-control" id="inputPassword" />
    </div>
  </div>
  </>
  );
};

export default UserPanel;

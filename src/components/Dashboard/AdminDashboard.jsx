import React from "react";
import Header from "../Layout/Header";
import CraeteTask from "../Layout/CraeteTask";
import AllTask from "../Layout/AllTask";
const AdminDashboard = (props) => {
  return (
    <div className="h-screen w-full p-10">
      <Header changeUser={props.changeUser}/>
        <CraeteTask />
        <AllTask />
    </div>
  );
};

export default AdminDashboard;

import React, { useState } from "react";
import { useSelector } from "react-redux";
import EditUserName from "../components/EditUserName";

function WelcomeUser() {
  const [isVisible, setIsVisible] = useState(false);

  const userFirstName = useSelector((state) => state.user.firstName);
  const userLastName = useSelector((state) => state.user.lastName);

const showForm = () => {
  setIsVisible(prevIsVisible => !prevIsVisible);                                                                                                                                                                                            
}

  return (
    <div className="header">
      <h1>
        Welcome back <br />
        {userFirstName} {userLastName}
      </h1>
      <button className="edit-button" onClick={showForm}>Edit name</button>
      {isVisible ? <EditUserName onClick={showForm} isVisible={isVisible} firstname={userFirstName} lastname={userLastName}/> : null}
    </div>
  );
}

export default WelcomeUser;

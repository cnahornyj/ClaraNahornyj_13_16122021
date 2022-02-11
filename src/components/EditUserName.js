import React, { useState } from "react";
import { useSelector } from "react-redux";
import { updateUser } from "../store";

function EditUserName({ setIsVisible }) {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [error, setError] = useState(false);

  const userFirstName = useSelector((state) => state.user.firstName);
  const userLastName = useSelector((state) => state.user.lastName);

  const onSubmit = (e) => {
    const userInfos = {
      firstName: firstname,
      lastName: lastname,
    };
    let checkString = /^[a-zA-Z]+$/;
    if (
      !checkString.test(firstname) ||
      firstname === "" ||
      !checkString.test(lastname) ||
      lastname === ""
    ) {
      e.preventDefault();
      e.stopPropagation();
      setError(true);
      setErrorMessage("Veuillez saisir des informations correctes");
    } else if (firstname === userFirstName && lastname === userLastName) {
      e.preventDefault();
      e.stopPropagation();
      setError(true);
      setErrorMessage("Pourquoi voulez vous saisir les mêmes informations ?");
    } else {
      e.preventDefault();
      e.stopPropagation();
      setError(false);
      updateUser(userInfos);
    }
  };

  return (
    <section className="editUser">
      <form onSubmit={onSubmit}>
        <div className="userInformations">
          <label htmlFor="userfirstname"></label>
          <input
            type="text"
            id="userfirstname"
            placeholder={userFirstName}
            onChange={(e) => setFirstname(e.target.value)}
          />
          <label htmlFor="username"></label>
          <input
            type="text"
            id="username"
            placeholder={userLastName}
            onChange={(e) => setLastname(e.target.value)}
          />
        </div>
        <button className="update-name-button">Save</button>
        <button
          className="update-name-button"
          onClick={() => setIsVisible(false)}
        >
          Cancel
        </button>
      </form>
      { error ? <p className="error-message">{errorMessage}</p> : null}
    </section>
  );
}

export default EditUserName;

import React, { useState } from "react";
import { useSelector } from "react-redux";
import { updateUser } from "../store";

function EditUserName(props, { onClick, isVisible }) {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");

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
      console.log(
        "Oups il y a qql chose qui ne va pas avec les informations saisies !"
      );
    } else if (firstname === userFirstName && lastname === userLastName) {
      e.preventDefault();
      e.stopPropagation();
      console.log("Pourquoi renvoyer les mêmes informations ?");
    } else {
      console.log(userInfos);
      e.preventDefault();
      e.stopPropagation();
      updateUser(userInfos);
      console.log(userFirstName, userLastName);
    }
  };

  // const resetForm = (e) => {
  //   // clear form and informations
  //   // close modal ?
  //   e.preventDefault();
  //   e.stopPropagation();
  //   //form.reset();
  //   console.log("On annule tout !");
  // };

  return (
    <section className="editUser">
      <form onSubmit={onSubmit}>
        <div className="userInformations">
          <label htmlFor="userfirstname"></label>
          <input
            type="text"
            id="userfirstname"
            placeholder={props.firstname}
            onChange={(e) => setFirstname(e.target.value)}
          />
          <label htmlFor="username"></label>
          <input
            type="text"
            id="username"
            placeholder={props.lastname}
            onChange={(e) => setLastname(e.target.value)}
          />
        </div>
        <button className="update-name-button">Save</button>
        <button className="update-name-button" onClick={onClick}>
          Cancel
        </button>
      </form>
    </section>
  );
}

export default EditUserName;

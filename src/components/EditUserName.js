function EditUserName(props) {
  return (
    <section className="editUser">
      <form action="">
        <div className="userInformations">
          <label htmlFor="userfirstname" ></label>
          <input type="text" id="userfirstname" placeholder={props.firstname}/>
          <label htmlFor="username" ></label>
          <input type="text" id="username" placeholder={props.name}/>
        </div>
        <button className="update-name-button">Save</button>
        <button className="update-name-button">Cancel</button>
      </form>
    </section>
  );
}

export default EditUserName;

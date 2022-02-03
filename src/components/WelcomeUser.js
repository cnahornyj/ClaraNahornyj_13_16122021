import { useSelector } from "react-redux";

function WelcomeUser() {
  const userFirstName = useSelector((state) => state.user.firstName);
  const userLastName = useSelector((state) => state.user.lastName);


// onClick affichage du composant EditUserName
const editName = () => {
  console.log("Click!")                                                                                                                                                                                            
}

  return (
    <div className="header">
      <h1>
        Welcome back <br />
        {userFirstName} {userLastName}
      </h1>
      <button className="edit-button" onClick={editName}>Edit name</button>
    </div>
  );
}

export default WelcomeUser;

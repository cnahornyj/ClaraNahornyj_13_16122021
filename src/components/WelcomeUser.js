function WelcomeUser(props) {


// onClick affichage du composant EditUserName
const editName = () => {
  console.log("Click!")                                                                                                                                                                                            
}

  return (
    <div className="header">
      <h1>
        Welcome back <br />
        {props.userName}
      </h1>
      <button className="edit-button" onClick={editName}>Edit name</button>
    </div>
  );
}

export default WelcomeUser;

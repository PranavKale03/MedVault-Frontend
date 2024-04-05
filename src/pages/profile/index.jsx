import React, { useContext } from "react";
import UserContext from "../../context/UserContext";

const Profile = () => {
  const { user } = useContext(UserContext);
  console.log(user);
  return (
    <div className="mt-[100px] flex flex-col justify-center items-center">
      <p>{user.fullName}</p>
      <p>{user.role}</p>
      <p>{user.type}</p>
    </div>
  );
};

export default Profile;

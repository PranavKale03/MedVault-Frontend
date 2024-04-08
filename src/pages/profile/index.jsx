import React, { useContext } from "react";
import UserContext from "../../context/UserContext";
import ProfileImage from "../../assets/profile.svg";
import EmailImage from "../../assets/Email.svg";
import PhoneImage from "../../assets/Phone.svg";
import { useNavigate } from "react-router-dom";
import { clearAllLocalStorage } from "../../utils/localStorage";
import { toast } from "react-hot-toast";

const Profile = () => {
  const { user, loading, error } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    toast.success("Logout successfull");
    clearAllLocalStorage();
    navigate("/");

    setTimeout(() => {
      window.location.reload();
    }, 100);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="mt-[150px] w-full h-full flex justify-center items-center">
      {user ? (
        <div className="p-[100px] flex flex-col justify-center items-center gap-10 bg-blue-100 rounded-3xl">
          <div className="flex flex-col justify-center items-center">
            <div className="w-[150px] h-[150px] flex justify-center items-center rounded-full border border-black">
              <img className="w-[110px]" src={ProfileImage} alt="Profile" />
            </div>
            <h1 className="font-bold text-[24px]">{user.fullName}</h1>
            <p>{user.type}</p>
          </div>
          <div className="flex flex-col justify-center items-start gap-6">
            <div className="flex justify-center items-center gap-4">
              <img className="w-5" src={EmailImage} alt="Email" />
              <p>{user.email}</p>
            </div>
            <div className="flex justify-center items-center gap-4">
              <img className="w-5" src={PhoneImage} alt="Phone" />
              <p>{user.mobile}</p>
            </div>
          </div>
          <div>
            <label class="inline-flex items-center cursor-pointer">
              <input type="checkbox" value="" class="sr-only peer" />
              <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
              <span class="ms-3 text-sm font-medium text-gray-900">
                Available
              </span>
            </label>
          </div>
          <div>
            <button
              type="button"
              className="w-[200px] text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        </div>
      ) : (
        <>User not found.</>
      )}
    </div>
  );
};

export default Profile;

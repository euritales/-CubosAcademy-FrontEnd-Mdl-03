import "./styles.css";
import ProfileIcon from "../../assets/profileIcon.svg";
import CloseIcon from "../../assets/close-icon.svg";
import { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";

function ProfileBar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    if (location.pathname === "/profile") {
      setOpen(true);
    }
  }, [location]);

  function handleOpenProfilePage() {
    if (location.pathname === "/profile") {
      history.push("/");
      return;
    }
    history.push("/profile");
  }

  return (
    <div>
      <img
        src={open ? CloseIcon : ProfileIcon}
        alt="Icon"
        className="icon"
        onClick={() => handleOpenProfilePage()}
      />
      ;
    </div>
  );
}

export default ProfileBar;

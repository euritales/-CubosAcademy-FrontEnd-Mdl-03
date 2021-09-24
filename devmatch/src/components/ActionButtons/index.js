import "./styles.css";
import likeButton from "../../assets/like-button.svg";
import trashButton from "../../assets/trash-button.svg";

function ActionButtons() {
  return (
    <div>
      <img className="button-icon" src={likeButton} alt="like" />
      <img className="button-icon" src={trashButton} alt="trash" />
    </div>
  );
}

export default ActionButtons;

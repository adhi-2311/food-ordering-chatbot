import React from "react";
import "./UserAvatar.css";
import image from "../../assets/avatar.png";
function UserAvatar() {
  return <img src={image} className="user-avatar" alt="avatar" />;
}
export default UserAvatar;

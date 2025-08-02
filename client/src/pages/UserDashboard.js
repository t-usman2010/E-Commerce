import React, { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import "../styles/Dashboard.css";

function Dashboard() {
  const { user } = useContext(UserContext);

  // Editable fields state
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(user?.displayName || "");
  const [contact, setContact] = useState("+92-XXX-XXXXXXX");
  const [address, setAddress] = useState("Islamabad, Pakistan");

  if (!user) return <p>Loading...</p>;

  const handleSave = () => {
    // You can connect to backend here later
    setIsEditing(false);
    alert("Profile updated (frontend only for now).");
  };

  return (
    <div className="dashboard-container">
      <h2 className="dashboard-title">User Profile</h2>

      <div className="profile-card">
        <div className="profile-img-wrapper">
          {user.photoURL ? (
            <img src={user.photoURL} alt="Profile" className="profile-img" />
          ) : (
            <div className="profile-placeholder">{user.email[0].toUpperCase()}</div>
          )}
        </div>

        <div className="profile-info">
          <p><strong>Email:</strong> {user.email}</p>

          <p>
            <strong>Name:</strong>{" "}
            {isEditing ? (
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="profile-input"
              />
            ) : (
              name || "N/A"
            )}
          </p>

          <p>
            <strong>Contact:</strong>{" "}
            {isEditing ? (
              <input
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                className="profile-input"
              />
            ) : (
              contact
            )}
          </p>

          <p>
            <strong>Address:</strong>{" "}
            {isEditing ? (
              <input
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="profile-input"
              />
            ) : (
              address
            )}
          </p>

          <div className="dashboard-buttons">
            {isEditing ? (
              <button onClick={handleSave} className="save-btn">Save</button>
            ) : (
              <button onClick={() => setIsEditing(true)} className="edit-btn">Edit</button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

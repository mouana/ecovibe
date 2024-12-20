import React from "react";
import ProfileDisplay from "../../Components/Platform/profile/ProfileDisplay";
import ProfileDelete from "../../Components/Platform/profile/ProfileDelete";

const ProfileContainer = () => {
  return (
    <div className="uk-container uk-margin-large-top">
      <h2 className="uk-heading-line">
        <span>Votre Profile :</span>
      </h2>
      <ProfileDisplay />
      <ProfileDelete />
    </div>
  );
};

export default ProfileContainer;

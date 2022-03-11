import React  from "react";


const Story = ({ avatar, name }) => {
  return (
    <li>
      <div className="story">
        <div className="story__content">
          <div className="story__figure">
            <img
              src={avatar}
              className="profile__figure" alt="people" />
          </div>
        </div>
        </div>
      <span className="story__user">{name}</span>
    </li>
  )
}

export default Story
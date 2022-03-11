import React  from "react";


const Story = ({ image }) => {
  return (
    <li>
      <div className="story">
        <div className="story__content">
          <div className="story__figure">
            <img
              src={image}
              className="profile__figure" alt="people" />
          </div>
        </div>
        </div>
      <span className="story__user">fernanda_032fn</span>
    </li>
  )
}

export default Story
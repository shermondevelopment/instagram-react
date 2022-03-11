import React from 'react'

const ProfileSuggestion = ({ avatar, name }) => {
  return (
    <div className="followers__area">
    <div className="followers__profile">
      <img src={avatar}
        alt="follow" />
    </div>
    <div class="followers__info">
      <a href="/#">{name}</a>
      <span>Segue você</span>
    </div>
    <div class="followers__follow">
      <a href="/#" class="follow">Seguir</a>
    </div>
    </div>
  )
}

export default ProfileSuggestion
import React from 'react'

const Post = ({ content, name, avatar }) => {
  return (
    <div className="post__content">
            <div className="post__content_header">
              <div className="post__info">
                <img
                  src={avatar} alt=""/>
                <a href="/#">{name}</a>
              </div>
              <div className="post__options">
                <svg aria-label="Mais opções" className="_8-yf5 " color="#262626" fill="#262626" height="24" role="img"
                  viewBox="0 0 24 24" width="24">
                  <circle cx="12" cy="12" r="1.5"></circle>
                  <circle cx="6" cy="12" r="1.5"></circle>
                  <circle cx="18" cy="12" r="1.5"></circle>
                </svg>
              </div>
            </div>
            <div className="post__content_body">
              <img
                src={content} alt="/#" />
            </div>
            <div className="post__content_footer">
              <div className="post__content_options">
                <div className="post__option_user">
                  <div>
                    <svg aria-label="Curtir" className="_8-yf5 " color="#000" fill="#000" height="24" role="img"
                      viewBox="0 0 24 24" width="24">
                      <path
                        d="M16.792 3.904A4.989 4.989 0 0121.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 014.708-5.218 4.21 4.21 0 013.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 013.679-1.938m0-2a6.04 6.04 0 00-4.797 2.127 6.052 6.052 0 00-4.787-2.127A6.985 6.985 0 00.5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 003.518 3.018 2 2 0 002.174 0 45.263 45.263 0 003.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 00-6.708-7.218z">
                      </path>
                    </svg>
                  </div>
                  <div>
                    <svg aria-label="Comentar" className="_8-yf5 " color="#000" fill="#000" height="24" role="img"
                      viewBox="0 0 24 24" width="24">
                      <path d="M20.656 17.008a9.993 9.993 0 10-3.59 3.615L22 22z" fill="none" stroke="currentColor"
                        stroke-linejoin="round" stroke-width="2"></path>
                    </svg>
                  </div>
                  <div>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M18.7656 1.2344L8.7539 11.2461M1.28249 7.5912L18.47 1.08616C18.532 1.06244 18.5995 1.05719 18.6645 1.07103C18.7294 1.08487 18.7889 1.11722 18.8359 1.16416C18.8828 1.2111 18.9151 1.27063 18.929 1.33555C18.9428 1.40048 18.9376 1.46802 18.9139 1.53003L12.4088 18.7175C12.3829 18.7828 12.3377 18.8386 12.2792 18.8774C12.2207 18.9162 12.1517 18.9361 12.0815 18.9345C12.0113 18.9329 11.9433 18.9099 11.8865 18.8685C11.8298 18.8271 11.7872 18.7693 11.7643 18.7029L8.86819 11.5662C8.83443 11.4651 8.77761 11.3732 8.70221 11.2978C8.62682 11.2224 8.53492 11.1656 8.43378 11.1318L1.2971 8.23831C1.22987 8.21594 1.17119 8.17334 1.1291 8.11634C1.08701 8.05934 1.06356 7.99073 1.06196 7.9199C1.06036 7.84906 1.08069 7.77946 1.12017 7.72062C1.15964 7.66178 1.21634 7.61658 1.28249 7.5912V7.5912Z"
                        stroke="black" stroke-width="1.375" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </div>
                </div>
              </div>
              <div style={{cursor: 'pointer'}}>
                <svg aria-label="Salvar" className="_8-yf5 " color="#000" fill="#000" height="24" role="img"
                  viewBox="0 0 24 24" width="24">
                  <polygon fill="none" points="20 21 12 13.44 4 21 4 3 20 3 20 21" stroke="currentColor"
                    stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polygon>
                </svg>
              </div>
            </div>
            <div className="area__like">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6OBra0BSAzMp1p7lkYb1kpJVeW4tg9Tnadw&usqp=CAU" alt=""/>
              <span className="liked__for">Curtido por</span>
              <a href="/#" className="liked__user">priscilla_123</a>
              <span className="liked__for">e</span>
              <a href="/#" className="liked__user">outras 101.523 pessoas</a>
            </div>
            <div className="comments__followers">
              <div className="comment">
                <div className="area__coment">
                  <a href="/#" className="follow">juliana_silva</a>
                  <p className="comment_folloow">meu primeiro comentario 😊😊</p>
                </div>
                <div className="liked">
                  <svg aria-label="Curtir" className="_8-yf5 " color="#8e8e8e" fill="#8e8e8e" height="12" role="img"
                    viewBox="0 0 24 24" width="12">
                    <path
                      d="M16.792 3.904A4.989 4.989 0 0121.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 014.708-5.218 4.21 4.21 0 013.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 013.679-1.938m0-2a6.04 6.04 0 00-4.797 2.127 6.052 6.052 0 00-4.787-2.127A6.985 6.985 0 00.5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 003.518 3.018 2 2 0 002.174 0 45.263 45.263 0 003.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 00-6.708-7.218z">
                    </path>
                  </svg>
                </div>
              </div>
              <div className="comment">
                <div className="area__coment">
                  <a href="/#" className="follow">priscilla_@oliver</a>
                  <p className="comment_folloow">comentando😊😊</p>
                </div>
                <div className="liked">
                  <svg aria-label="Curtir" className="_8-yf5 " color="#8e8e8e" fill="#8e8e8e" height="12" role="img"
                    viewBox="0 0 24 24" width="12">
                    <path
                      d="M16.792 3.904A4.989 4.989 0 0121.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 014.708-5.218 4.21 4.21 0 013.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 013.679-1.938m0-2a6.04 6.04 0 00-4.797 2.127 6.052 6.052 0 00-4.787-2.127A6.985 6.985 0 00.5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 003.518 3.018 2 2 0 002.174 0 45.263 45.263 0 003.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 00-6.708-7.218z">
                    </path>
                  </svg>
                </div>
              </div>
            </div>
            <div className="comments__area">
              <div className="comments__emotion">
                <svg aria-label="Emoji" className="_8-yf5 " color="#262626" fill="#262626" height="24" role="img"
                  viewBox="0 0 24 24" width="24">
                  <path
                    d="M15.83 10.997a1.167 1.167 0 101.167 1.167 1.167 1.167 0 00-1.167-1.167zm-6.5 1.167a1.167 1.167 0 10-1.166 1.167 1.167 1.167 0 001.166-1.167zm5.163 3.24a3.406 3.406 0 01-4.982.007 1 1 0 10-1.557 1.256 5.397 5.397 0 008.09 0 1 1 0 00-1.55-1.263zM12 .503a11.5 11.5 0 1011.5 11.5A11.513 11.513 0 0012 .503zm0 21a9.5 9.5 0 119.5-9.5 9.51 9.51 0 01-9.5 9.5z">
                  </path>
                </svg>
              </div>
              <textarea type="text" name="comments" className="comments__input" required
                placeholder="Adicione um comentário..."></textarea>
              <a href="/#" className="publish">Publicar</a>
            </div>
          </div>
  )
}

export default Post
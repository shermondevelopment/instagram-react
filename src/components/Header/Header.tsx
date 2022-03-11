import React from 'react'

const Header = () => {
  return (
    <header className="header">
    <div className="content__center">
      <div className="header__box-logo">
        <div className="header__logo">
          <svg xmlns="http://www.w3.org/2000/svg" height="29" width="29" viewBox="-100.7682 -167.947 873.3244 1007.682">
            <g fill="#100f0d">
              <path
                d="M335.895 0c-91.224 0-102.663.387-138.49 2.021-35.752 1.631-60.169 7.31-81.535 15.612-22.088 8.584-40.82 20.07-59.493 38.743-18.674 18.673-30.16 37.407-38.743 59.495C9.33 137.236 3.653 161.653 2.02 197.405.386 233.232 0 244.671 0 335.895c0 91.222.386 102.661 2.02 138.488 1.633 35.752 7.31 60.169 15.614 81.534 8.584 22.088 20.07 40.82 38.743 59.495 18.674 18.673 37.405 30.159 59.493 38.743 21.366 8.302 45.783 13.98 81.535 15.612 35.827 1.634 47.266 2.021 138.49 2.021 91.222 0 102.661-.387 138.488-2.021 35.752-1.631 60.169-7.31 81.534-15.612 22.088-8.584 40.82-20.07 59.495-38.743 18.673-18.675 30.159-37.407 38.743-59.495 8.302-21.365 13.981-45.782 15.612-81.534 1.634-35.827 2.021-47.266 2.021-138.488 0-91.224-.387-102.663-2.021-138.49-1.631-35.752-7.31-60.169-15.612-81.534-8.584-22.088-20.07-40.822-38.743-59.495-18.675-18.673-37.407-30.159-59.495-38.743-21.365-8.302-45.782-13.981-81.534-15.612C438.556.387 427.117 0 335.895 0zm0 60.521c89.686 0 100.31.343 135.729 1.959 32.75 1.493 50.535 6.965 62.37 11.565 15.68 6.094 26.869 13.372 38.622 25.126 11.755 11.754 19.033 22.944 25.127 38.622 4.6 11.836 10.072 29.622 11.565 62.371 1.616 35.419 1.959 46.043 1.959 135.73 0 89.687-.343 100.311-1.959 135.73-1.493 32.75-6.965 50.535-11.565 62.37-6.094 15.68-13.372 26.869-25.127 38.622-11.753 11.755-22.943 19.033-38.621 25.127-11.836 4.6-29.622 10.072-62.371 11.565-35.413 1.616-46.036 1.959-135.73 1.959-89.694 0-100.315-.343-135.73-1.96-32.75-1.492-50.535-6.964-62.37-11.564-15.68-6.094-26.869-13.372-38.622-25.127-11.754-11.753-19.033-22.943-25.127-38.621-4.6-11.836-10.071-29.622-11.565-62.371-1.616-35.419-1.959-46.043-1.959-135.73 0-89.687.343-100.311 1.959-135.73 1.494-32.75 6.965-50.535 11.565-62.37 6.094-15.68 13.373-26.869 25.126-38.622 11.754-11.755 22.944-19.033 38.622-25.127 11.836-4.6 29.622-10.072 62.371-11.565 35.419-1.616 46.043-1.959 135.73-1.959" />
              <path
                d="M335.895 447.859c-61.838 0-111.966-50.128-111.966-111.964 0-61.838 50.128-111.966 111.966-111.966 61.836 0 111.964 50.128 111.964 111.966 0 61.836-50.128 111.964-111.964 111.964zm0-284.451c-95.263 0-172.487 77.224-172.487 172.487 0 95.261 77.224 172.485 172.487 172.485 95.261 0 172.485-77.224 172.485-172.485 0-95.263-77.224-172.487-172.485-172.487m219.608-6.815c0 22.262-18.047 40.307-40.308 40.307-22.26 0-40.307-18.045-40.307-40.307 0-22.261 18.047-40.308 40.307-40.308 22.261 0 40.308 18.047 40.308 40.308" />
            </g>
          </svg>
        </div>
        <div className="header__insta">
          <img src="app/_image/logo.svg" className="header__insta-logo" alt="instagram" />
        </div>
      </div>
      <div className="header__input">
        <div className="header__input_search">
          <img src="app/_image/search.svg" alt="search" />
        </div>
        <input type="text" name="search" className="header__input-input" placeholder="Pesquisar" />
        <div className="header__input_search position--right disabled">
          <img src="app/_image/close.svg" alt="search" />
        </div>
        <div className="header__area-recent">
          <div className="header__area-recent-content">
            <div className="header__content-top">
              <h4 className="header__content-title">Recentes</h4>
              <button className="button">Limpar tudo</button>
            </div>
            <ul className="header__content-profile">
              <div className="header__profile">
                <a href="/#" className="profile">
                  <div className="header__profile-content">
                    <div className="profile__area-radius">
                      <div className="profile__radius">
                        <div className="profile__photo">
                          <img
                            src="https://lightroombrasil.com.br/wp-content/uploads/2018/08/417af249516a182cec4b6c098b09fa86-1024x1024.jpg"
                            className="profile__figure" alt="people" />
                        </div>
                      </div>
                    </div>
                    <div className="profile__area_info">
                      <div className="profile__name">_fernandabarros</div>
                      <div className="profile__hastag">Fernanda Barros</div>
                    </div>
                    <div className="profile__area-remove">
                      <button className="button">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16px" height="16px"
                          fill="#8e8e8e">
                          <path
                            d="M 4.9902344 3.9902344 A 1.0001 1.0001 0 0 0 4.2929688 5.7070312 L 10.585938 12 L 4.2929688 18.292969 A 1.0001 1.0001 0 1 0 5.7070312 19.707031 L 12 13.414062 L 18.292969 19.707031 A 1.0001 1.0001 0 1 0 19.707031 18.292969 L 13.414062 12 L 19.707031 5.7070312 A 1.0001 1.0001 0 0 0 18.980469 3.9902344 A 1.0001 1.0001 0 0 0 18.292969 4.2929688 L 12 10.585938 L 5.7070312 4.2929688 A 1.0001 1.0001 0 0 0 4.9902344 3.9902344 z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </a>
              </div>
              <div className="header__profile">
                <a href="/#" className="profile">
                  <div className="header__profile-content">
                    <div className="profile__area-radius">
                      <div className="profile__radius">
                        <div className="profile__photo">
                          <img
                            src="https://www.ofuxico.com.br/img/galeria/2020/07/leticia-longati-e-uma-das-modelos-mais-requisitadas-no-bras_437688.jpg"
                            className="profile__figure" alt="people" />
                        </div>
                      </div>
                    </div>
                    <div className="profile__area_info">
                      <div className="profile__name">_priscilla_mendes</div>
                      <div className="profile__hastag">Priscilla Mendes</div>
                    </div>
                    <div className="profile__area-remove">
                      <button className="button">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16px" height="16px"
                          fill="#8e8e8e">
                          <path
                            d="M 4.9902344 3.9902344 A 1.0001 1.0001 0 0 0 4.2929688 5.7070312 L 10.585938 12 L 4.2929688 18.292969 A 1.0001 1.0001 0 1 0 5.7070312 19.707031 L 12 13.414062 L 18.292969 19.707031 A 1.0001 1.0001 0 1 0 19.707031 18.292969 L 13.414062 12 L 19.707031 5.7070312 A 1.0001 1.0001 0 0 0 18.980469 3.9902344 A 1.0001 1.0001 0 0 0 18.292969 4.2929688 L 12 10.585938 L 5.7070312 4.2929688 A 1.0001 1.0001 0 0 0 4.9902344 3.9902344 z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </a>
              </div>
              <div className="header__profile">
                <a href="/#" className="profile">
                  <div className="header__profile-content">
                    <div className="profile__area-radius">
                      <div className="profile__radius">
                        <div className="profile__photo">
                          <img src="https://i.pinimg.com/originals/3f/2c/ee/3f2cee9f5ddc042dbf9086051ef465fa.jpg"
                            className="profile__figure" alt="people" />
                        </div>
                      </div>
                    </div>
                    <div className="profile__area_info">
                      <div className="profile__name">_mariasilva</div>
                      <div className="profile__hastag">Maria Silva</div>
                    </div>
                    <div className="profile__area-remove">
                      <button className="button">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16px" height="16px"
                          fill="#8e8e8e">
                          <path
                            d="M 4.9902344 3.9902344 A 1.0001 1.0001 0 0 0 4.2929688 5.7070312 L 10.585938 12 L 4.2929688 18.292969 A 1.0001 1.0001 0 1 0 5.7070312 19.707031 L 12 13.414062 L 18.292969 19.707031 A 1.0001 1.0001 0 1 0 19.707031 18.292969 L 13.414062 12 L 19.707031 5.7070312 A 1.0001 1.0001 0 0 0 18.980469 3.9902344 A 1.0001 1.0001 0 0 0 18.292969 4.2929688 L 12 10.585938 L 5.7070312 4.2929688 A 1.0001 1.0001 0 0 0 4.9902344 3.9902344 z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </a>
              </div>
              <div className="header__profile">
                <a href="/#" className="profile">
                  <div className="header__profile-content">
                    <div className="profile__area-radius">
                      <div className="profile__radius">
                        <div className="profile__photo">
                          <img
                            src="https://capricho.abril.com.br/wp-content/uploads/2017/11/gizele-oliveira-victorias-secret.png"
                            className="profile__figure" alt="people" />
                        </div>
                      </div>
                    </div>
                    <div className="profile__area_info">
                      <div className="profile__name">bianka_02barros</div>
                      <div className="profile__hastag">Bianka Barros</div>
                    </div>
                    <div className="profile__area-remove">
                      <button className="button">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16px" height="16px"
                          fill="#8e8e8e">
                          <path
                            d="M 4.9902344 3.9902344 A 1.0001 1.0001 0 0 0 4.2929688 5.7070312 L 10.585938 12 L 4.2929688 18.292969 A 1.0001 1.0001 0 1 0 5.7070312 19.707031 L 12 13.414062 L 18.292969 19.707031 A 1.0001 1.0001 0 1 0 19.707031 18.292969 L 13.414062 12 L 19.707031 5.7070312 A 1.0001 1.0001 0 0 0 18.980469 3.9902344 A 1.0001 1.0001 0 0 0 18.292969 4.2929688 L 12 10.585938 L 5.7070312 4.2929688 A 1.0001 1.0001 0 0 0 4.9902344 3.9902344 z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </a>
              </div>
              <div className="header__profile">
                <a href="/#" className="profile">
                  <div className="header__profile-content">
                    <div className="profile__area-radius">
                      <div className="profile__radius">
                        <div className="profile__photo">
                          <img
                            src="https://s2.glbimg.com/0CL7qaimA_NGc5IYZPcd4U8bIs4=/e.glbimg.com/og/ed/f/original/2022/01/10/231660293_792270958107975_7509426651353871895_n.jpg"
                            className="profile__figure" alt="people" />
                        </div>
                      </div>
                    </div>
                    <div className="profile__area_info">
                      <div className="profile__name">gabriela_alencar</div>
                      <div className="profile__hastag">Gabirela Alencar</div>
                    </div>
                    <div className="profile__area-remove">
                      <button className="button">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16px" height="16px"
                          fill="#8e8e8e">
                          <path
                            d="M 4.9902344 3.9902344 A 1.0001 1.0001 0 0 0 4.2929688 5.7070312 L 10.585938 12 L 4.2929688 18.292969 A 1.0001 1.0001 0 1 0 5.7070312 19.707031 L 12 13.414062 L 18.292969 19.707031 A 1.0001 1.0001 0 1 0 19.707031 18.292969 L 13.414062 12 L 19.707031 5.7070312 A 1.0001 1.0001 0 0 0 18.980469 3.9902344 A 1.0001 1.0001 0 0 0 18.292969 4.2929688 L 12 10.585938 L 5.7070312 4.2929688 A 1.0001 1.0001 0 0 0 4.9902344 3.9902344 z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </a>
              </div>
              <div className="header__profile">
                <a href="/#" className="profile">
                  <div className="header__profile-content">
                    <div className="profile__area-radius">
                      <div className="profile__radius">
                        <div className="profile__photo">
                          <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6OBra0BSAzMp1p7lkYb1kpJVeW4tg9Tnadw&usqp=CAU"
                            className="profile__figure" alt="people" />
                        </div>
                      </div>
                    </div>
                    <div className="profile__area_info">
                      <div className="profile__name">_juliana_lopes</div>
                      <div className="profile__hastag">Juliana Lopes</div>
                    </div>
                    <div className="profile__area-remove">
                      <button className="button">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16px" height="16px"
                          fill="#8e8e8e">
                          <path
                            d="M 4.9902344 3.9902344 A 1.0001 1.0001 0 0 0 4.2929688 5.7070312 L 10.585938 12 L 4.2929688 18.292969 A 1.0001 1.0001 0 1 0 5.7070312 19.707031 L 12 13.414062 L 18.292969 19.707031 A 1.0001 1.0001 0 1 0 19.707031 18.292969 L 13.414062 12 L 19.707031 5.7070312 A 1.0001 1.0001 0 0 0 18.980469 3.9902344 A 1.0001 1.0001 0 0 0 18.292969 4.2929688 L 12 10.585938 L 5.7070312 4.2929688 A 1.0001 1.0001 0 0 0 4.9902344 3.9902344 z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </a>
              </div>
            </ul>
          </div>
        </div>
      </div>
      <div className="header__navs">
        <div className="header__box-icon">
          <a href="/#">
            <svg aria-label="Direct" className="_8-yf5 " color="#262626" fill="#262626" height="24" role="img"
              viewBox="0 0 24 24" width="24">
              <line fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2" x1="22" x2="9.218" y1="3"
                y2="10.083"></line>
              <polygon fill="none" points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334"
                stroke="currentColor" stroke-linejoin="round" stroke-width="2"></polygon>
            </svg>
          </a>
        </div>
        <div className="header__box-icon removed--mobile">
          <a href="/#">
            <svg aria-label="Encontrar pessoas" className="_8-yf5 " color="#000" fill="#000" height="24" role="img"
              viewBox="0 0 24 24" width="24">
              <polygon fill="none" points="13.941 13.953 7.581 16.424 10.06 10.056 16.42 7.585 13.941 13.953"
                stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polygon>
              <polygon fill-rule="evenodd" points="10.06 10.056 13.949 13.945 7.581 16.424 10.06 10.056"></polygon>
              <circle cx="12.001" cy="12.005" fill="none" r="10.5" stroke="currentColor" stroke-linecap="round"
                stroke-linejoin="round" stroke-width="2"></circle>
            </svg>
          </a>
        </div>
        <div className="header__box-icon removed--mobile">
          <a href="/#">
            <svg aria-label="Feed de atividades" className="_8-yf5 " color="#262626" fill="#262626" height="24" role="img"
              viewBox="0 0 24 24" width="24">
              <path
                d="M16.792 3.904A4.989 4.989 0 0121.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 014.708-5.218 4.21 4.21 0 013.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 013.679-1.938m0-2a6.04 6.04 0 00-4.797 2.127 6.052 6.052 0 00-4.787-2.127A6.985 6.985 0 00.5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 003.518 3.018 2 2 0 002.174 0 45.263 45.263 0 003.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 00-6.708-7.218z">
              </path>
            </svg>
          </a>
        </div>
        <div className="header__box-icon removed--mobile">
          <a href="/#">
            <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
              <defs>
                <style>
                  opacity:
                </style>
              </defs>
              <title />
              <g data-name="Layer 2" id="Layer_2">
                <path d="M16,29A13,13,0,1,1,29,16,13,13,0,0,1,16,29ZM16,5A11,11,0,1,0,27,16,11,11,0,0,0,16,5Z" />
                <path d="M16,17a5,5,0,1,1,5-5A5,5,0,0,1,16,17Zm0-8a3,3,0,1,0,3,3A3,3,0,0,0,16,9Z" />
                <path
                  d="M25.55,24a1,1,0,0,1-.74-.32A11.35,11.35,0,0,0,16.46,20h-.92a11.27,11.27,0,0,0-7.85,3.16,1,1,0,0,1-1.38-1.44A13.24,13.24,0,0,1,15.54,18h.92a13.39,13.39,0,0,1,9.82,4.32A1,1,0,0,1,25.55,24Z" />
              </g>
              <g id="frame">
                <rect className="cls-1" height="32" width="32" style={{fill: 'none'}}/>
              </g>
            </svg>
          </a>
        </div>
      </div>
    </div>
    <div className="menu__mobile">
      <div className="icon__mobile">
        <svg aria-label="Página inicial" className="_8-yf5 " color="#262626" fill="#262626" height="24" role="img"
          viewBox="0 0 24 24" width="24">
          <path
            d="M22 23h-6.001a1 1 0 01-1-1v-5.455a2.997 2.997 0 10-5.993 0V22a1 1 0 01-1 1H2a1 1 0 01-1-1V11.543a1.002 1.002 0 01.31-.724l10-9.543a1.001 1.001 0 011.38 0l10 9.543a1.002 1.002 0 01.31.724V22a1 1 0 01-1 1z">
          </path>
        </svg>
      </div>
      <div className="icon__mobile">
        <svg aria-label="Pesquisar" className="_8-yf5 " color="#000" fill="#000" width="24" height="24" role="img"
          viewBox="0 0 24 24">
          <path d="M19 10.5A8.5 8.5 0 1110.5 2a8.5 8.5 0 018.5 8.5z" fill="none" stroke="currentColor"
            stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path>
          <line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            x1="16.511" x2="22" y1="16.511" y2="22"></line>
        </svg>
      </div>
      <div className="icon__mobile">
        <svg aria-label="Nova publicação" className="_8-yf5 " color="#262626" fill="#262626" height="24" role="img"
          viewBox="0 0 24 24" width="24">
          <path
            d="M2 12v3.45c0 2.849.698 4.005 1.606 4.944.94.909 2.098 1.608 4.946 1.608h6.896c2.848 0 4.006-.7 4.946-1.608C21.302 19.455 22 18.3 22 15.45V8.552c0-2.849-.698-4.006-1.606-4.945C19.454 2.7 18.296 2 15.448 2H8.552c-2.848 0-4.006.699-4.946 1.607C2.698 4.547 2 5.703 2 8.552z"
            fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path>
          <line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            x1="6.545" x2="17.455" y1="12.001" y2="12.001"></line>
          <line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            x1="12.003" x2="12.003" y1="6.545" y2="17.455"></line>
        </svg>
      </div>
      <div className="icon__mobile">
        <svg aria-label="Feed de atividades" className="_8-yf5 " color="#262626" fill="#262626" height="24" role="img"
          viewBox="0 0 24 24" width="24">
          <path
            d="M16.792 3.904A4.989 4.989 0 0121.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 014.708-5.218 4.21 4.21 0 013.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 013.679-1.938m0-2a6.04 6.04 0 00-4.797 2.127 6.052 6.052 0 00-4.787-2.127A6.985 6.985 0 00.5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 003.518 3.018 2 2 0 002.174 0 45.263 45.263 0 003.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 00-6.708-7.218z">
          </path>
        </svg>
      </div>
      <div className="icon__mobile">
        <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
          <defs>
            
          </defs>
          <title></title>
          <g data-name="Layer 2" id="Layer_2">
            <path d="M16,29A13,13,0,1,1,29,16,13,13,0,0,1,16,29ZM16,5A11,11,0,1,0,27,16,11,11,0,0,0,16,5Z"></path>
            <path d="M16,17a5,5,0,1,1,5-5A5,5,0,0,1,16,17Zm0-8a3,3,0,1,0,3,3A3,3,0,0,0,16,9Z"></path>
            <path
              d="M25.55,24a1,1,0,0,1-.74-.32A11.35,11.35,0,0,0,16.46,20h-.92a11.27,11.27,0,0,0-7.85,3.16,1,1,0,0,1-1.38-1.44A13.24,13.24,0,0,1,15.54,18h.92a13.39,13.39,0,0,1,9.82,4.32A1,1,0,0,1,25.55,24Z">
            </path>
          </g>
          <g id="frame">
            <rect className="cls-1" height="32" width="32"></rect>
          </g>
        </svg>
      </div>
    </div>
  </header>
  )
}

export default Header
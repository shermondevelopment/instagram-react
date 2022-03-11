import React from 'react'
import ProfileSuggestion from '../ProfileSuggestion/ProfileSuggestion'

const Aside = () => {

  const users = [
    {name: 'maria@s2', avatar: 'https://capricho.abril.com.br/wp-content/uploads/2017/11/gizele-oliveira-victorias-secret.png'}, 
    {name: 'julia_as', avatar: 'https://www.ofuxico.com.br/img/galeria/2020/07/leticia-longati-e-uma-das-modelos-mais-requisitadas-no-bras_437688.jpg'}, 
    {name: '@roberta_basto', avatar: 'http://s2.glbimg.com/Ih0dl27vqcSWW0ddPKt4Qijr-YE=/e.glbimg.com/og/ed/f/original/2017/11/21/kendall-jenner.jpg'}, 
    {name: 'jennify_123', avatar: 'http://s2.glbimg.com/Ih0dl27vqcSWW0ddPKt4Qijr-YE=/e.glbimg.com/og/ed/f/original/2017/11/21/kendall-jenner.jpg'}, 
    {name: 'beatrizz', avatar: 'https://capricho.abril.com.br/wp-content/uploads/2017/11/gizele-oliveira-victorias-secret.png'}, 
    {name: 'luana', avatar: 'https://capricho.abril.com.br/wp-content/uploads/2017/11/gizele-oliveira-victorias-secret.png'}
  ]

  return (
    <aside className="main__content_right">
    <div className="main__infos">
      <img src="app/_image/profile.svg" alt=""/>
      <div className="main__names">
        <a href="/#" className="main__title">catanacomics</a>
        <a href="/#" className="main__subtitle">Catana</a>
      </div>
    </div>
    <div className="main__content_body">
      <div className="main__content_body_top">
        <span className="suggestions">Sugestões para você</span>
        <a href="/#" className="see__it_all">Ver tudo</a>
      </div>
      <div className="followers">
        {users.map(item => (
          <ProfileSuggestion name={item.name} avatar={item.avatar} />
        ))}
      </div>
      <nav class="navigation">
        <ul>
          <li>
            <a href="/#">Sobre</a>
          </li>
          <li>
            <a href="/#">Ajuda</a>
          </li>
          <li>
            <a href="/#">Imprensa</a>
          </li>
          <li>
            <a href="/#">API</a>
          </li>
          <li>
            <a href="/#">Carreiras</a>
          </li>
          <li>
            <a href="/#">Privacidade</a>
          </li>
          <li>
            <a href="/#">Termos</a>
          </li>
          <li>
            <a href="/#">Localizações</a>
          </li>
          <li>
            <a href="/#">Contas mais relevantes</a>
          </li>
          <li>
            <a href="/#">Hastags</a>
          </li>
          <li>
            <a href="/#">Idioma</a>
          </li>
        </ul>
      </nav>
      <p class="copyright">© 2021 INSTAGRAM DO FACEBOOK</p>
    </div>
  </aside>
  )
}

export default Aside
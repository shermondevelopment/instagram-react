import React from 'react'
import Aside from '../Aside/Aside'
import Post from '../Post/Post'
import Story from '../Story/Story'

const Feed = () => {

  const users = [
    {name: 'maria@s2', avatar: 'https://capricho.abril.com.br/wp-content/uploads/2017/11/gizele-oliveira-victorias-secret.png'}, 
    {name: 'julia_as', avatar: 'https://www.ofuxico.com.br/img/galeria/2020/07/leticia-longati-e-uma-das-modelos-mais-requisitadas-no-bras_437688.jpg'}, 
    {name: 'gabriela_dshd', avatar: 'https://s2.glbimg.com/0CL7qaimA_NGc5IYZPcd4U8bIs4=/e.glbimg.com/og/ed/f/original/2022/01/10/231660293_792270958107975_7509426651353871895_n.jpg'}, 
    {name: '@juliana_mirella', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6OBra0BSAzMp1p7lkYb1kpJVeW4tg9Tnadw&usqp=CAU'}, 
    {name: '@priscilla@gdsa', avatar: 'https://i.pinimg.com/originals/3f/2c/ee/3f2cee9f5ddc042dbf9086051ef465fa.jpg'}, 
    {name: 'agatha_silva', avatar: 'https://lightroombrasil.com.br/wp-content/uploads/2018/08/417af249516a182cec4b6c098b09fa86-1024x1024.jpg'}, 
    {name: '@roberta_basto', avatar: 'http://s2.glbimg.com/Ih0dl27vqcSWW0ddPKt4Qijr-YE=/e.glbimg.com/og/ed/f/original/2017/11/21/kendall-jenner.jpg'}, 
    {name: 'jennify_123', avatar: 'http://s2.glbimg.com/Ih0dl27vqcSWW0ddPKt4Qijr-YE=/e.glbimg.com/og/ed/f/original/2017/11/21/kendall-jenner.jpg'}, 
    {name: 'beatrizz', avatar: 'https://capricho.abril.com.br/wp-content/uploads/2017/11/gizele-oliveira-victorias-secret.png'}, 
    {name: 'luana', avatar: 'https://capricho.abril.com.br/wp-content/uploads/2017/11/gizele-oliveira-victorias-secret.png'}
  ]

  return (
    <>
    <main className="main">
    <section className="main__content">
      <div className="main__content_left">
        <div className="story__box">
          <div className="story__box-content">
            <div className="arrow-left">
              <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M0 13C0 20.1794 5.82062 26 13 26C20.1794 26 26 20.1794 26 13C26 5.82062 20.1794 0 13 0C5.82062 0 0 5.82062 0 13ZM16.0856 13L10.7931 7.70687C10.6135 7.51781 10.5148 7.26606 10.5182 7.0053C10.5215 6.74454 10.6266 6.4954 10.811 6.311C10.9954 6.1266 11.2445 6.02152 11.5053 6.01819C11.7661 6.01485 12.0178 6.11351 12.2069 6.29313L18.2069 12.2931C18.3943 12.4806 18.4995 12.7349 18.4995 13C18.4995 13.2651 18.3943 13.5194 18.2069 13.7069L12.2069 19.7069C12.0178 19.8865 11.7661 19.9852 11.5053 19.9818C11.2445 19.9785 10.9954 19.8734 10.811 19.689C10.6266 19.5046 10.5215 19.2555 10.5182 18.9947C10.5148 18.7339 10.6135 18.4822 10.7931 18.2931L16.0856 13Z"
                  fill="white" />
              </svg>
            </div>
            <ul className="list">
              {users.map( item => (
                <Story avatar={item.avatar} name={item.name} />
              ) )}
            </ul>
            <div className="arrow">
              <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M0 13C0 20.1794 5.82062 26 13 26C20.1794 26 26 20.1794 26 13C26 5.82062 20.1794 0 13 0C5.82062 0 0 5.82062 0 13ZM16.0856 13L10.7931 7.70687C10.6135 7.51781 10.5148 7.26606 10.5182 7.0053C10.5215 6.74454 10.6266 6.4954 10.811 6.311C10.9954 6.1266 11.2445 6.02152 11.5053 6.01819C11.7661 6.01485 12.0178 6.11351 12.2069 6.29313L18.2069 12.2931C18.3943 12.4806 18.4995 12.7349 18.4995 13C18.4995 13.2651 18.3943 13.5194 18.2069 13.7069L12.2069 19.7069C12.0178 19.8865 11.7661 19.9852 11.5053 19.9818C11.2445 19.9785 10.9954 19.8734 10.811 19.689C10.6266 19.5046 10.5215 19.2555 10.5182 18.9947C10.5148 18.7339 10.6135 18.4822 10.7931 18.2931L16.0856 13Z"
                  fill="white" />
              </svg>
            </div>
          </div>
        </div>
        <div className="main__posts">
          {users.map( item => (
            <Post avatar={item.avatar} content={item.avatar} name={item.name} />
          ))}
        </div>
      </div>
      <Aside name="catanacomics" subtitle="Catana" avatar="app/_image/profile.svg" />
    </section>
  </main>
    </>
  )
}

export default Feed
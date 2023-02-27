import React from 'react'

type Props = {}

export default function Main({ }: Props) {
  return (
    <>
      <header id='header' className='fixed-top'>

        <div className="container d-flex align-items-center">

          <h1 className='logo me-auto'>
            <a href="https://copytrade.pro/">
              <img src="https://strg.copytrade.pro/source/1/ZSw3HB8SRM-BO4AqInK9uGcp6uqvoiGz.png" height={"30px"} />
            </a>
          </h1>
          <nav id='navbar' className='navbar'>
            <ul>
              <li>
                <a href="#hero" className='nav-link scrollto active'>
                  Главная
                </a>
              </li>
              <li>
                <a href="about" className='nav-link scrollto '>
                  О нас
                </a>
              </li>
              <li>
                <a href="adventage" className='nav-link scrollto '>
                  Наши преимущества
                </a>
              </li>
              <li>
                <a href="https://copytrade.pro/post/index" className='nav-link scrollto '>
                  Новости
                </a>
              </li>
              {/* <li className='dropdown'>
                <a href="#">
                  <img src="https://copytrade.pro/img/locales/ru.png" alt="" />
                  <span>Русский (РФ)</span>
                  <i className="bi bi-chevron-down"></i>
                </a>
                <ul>
                  <li><a href="/site/set-locale?locale=en"><img src="https://copytrade.pro/img/locales/en.png" alt="" />English (US)</a></li>
                  <li><a href="/site/set-locale?locale=ru"><img src="https://copytrade.pro/img/locales/ru.png" alt="" />Русский (РФ)</a></li>
                  <li><a href="/site/set-locale?locale=uz"><img src="https://copytrade.pro/img/locales/uz.png" alt="" />O'zbek (UZ)</a></li>
                </ul>
              </li> */}
              <li>
                <a className="getstarted scrollto" href="/user">
                  Hачать
                </a>
              </li>
            </ul>
          </nav>

        </div>

      </header>


      <section id="hero" className="d-flex align-items-center">

        {/* <div className="container">
          <div className="row">
            <div className="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1 aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
              <h1>Копи-трейдинг платформа</h1>
              <h2>Инвестируйте, в лучших трейдеров Copytrade. Повторяйте действия профессиональных трейдеров Copytrade в режиме реального времени с помощью CopyTrade.Pro</h2>
              <div className="d-flex justify-content-center justify-content-lg-start">
                <a href="/user" className="btn-get-started scrollto">Hачать</a>
              </div>
            </div>
            <div className="col-lg-6 order-1 order-lg-2 hero-img d-flex justify-content-center aos-init aos-animate" data-aos="zoom-in" data-aos-delay="200">
              <img className="img-fluid animated" src="https://strg.copytrade.pro/source/1/90cFG4X_Xnwx6CtRh4stScsDujnGa1Vh.png" alt="" />
            </div>
          </div>
        </div> */}

      </section>
    </>
  )
}
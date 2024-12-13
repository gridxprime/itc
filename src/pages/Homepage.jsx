import React from 'react'
import background from '../assets/vid/Background.mp4'
import team from '../img/team.jpg'
import tg from '../img/social/tg.png'
import fb from '../img/social/fb.png'
import inst from '../img/social/inst.png'
import startInnerImg from '../img/1.jpg'
import boss from '../img/icons/boss.png'
import news from '../img/icons/news.png'
import prog from '../img/icons/prog.png'
import server from '../img/icons/server.png'
import web from '../img/icons/web.png'


function Homepage() {
  return (
    <>
    <section id='hero'>

    <h2>Технологии, которые сохраняют историю Кыргызстана</h2>
 
      <video autoPlay muted loop src={background}></video>

    </section>
    <section id='start'>
      <div className="start__inner">
        <div className="start__left">
      <h2>Центр<br></br> Информационных<br></br> Технологий</h2>
      <div className="round">
        <div className="green"></div>
        <div className="red"></div>
        <div className="yellow"></div>
        <div className="magenta"></div>
        <div className="center"></div>
      </div>
      <div className="round__bottom-spans">
        <div><span></span><span>- Надежность</span></div>
        <div><span></span><span>- Оперативность</span></div>
        <div><span></span><span>- Инновационность</span></div>
        <div><span></span><span>- Профессионализм</span></div>
      </div>
      </div>
    <span className='start__span'>
      <h2 className='start__span-h2'>Развитие и поддержка IT-инфраструктуры архивов
      </h2>
        Обеспечиваем
       развитие и поддержку IT-инфраструктуры, необходимой для эффективного
        управления архивами.
        <br></br>
        Мы предоставляем технические решения для автоматизации
        процессов, поддерживаем работу информационных систем и отвечаем за безопасность 
        и стабильность IT-инфраструктуры.
       </span>
       <img src={startInnerImg} alt="" />
    </div>



       <div className='start'>
       <h2>
        Состав центра информационных технологий:
       </h2>
       <ul>
        <li>
          <div className="start__bar">
            <span>–</span>
            <span>❒</span>
            <span>X</span>
          </div>
          <h3>Заведующий отделом ЦИТ</h3>
         <h4>Бузурманкулов Асылбек Абдижалилович</h4><br />
         <span>руководит деятельностью Центра
           и отвечает за стратегическое развитие.</span>
           <img src={boss} alt="" /></li>
        <li>
        <div className="start__bar">
            <span>–</span>
            <span>❒</span>
            <span>X</span>
          </div><h3>Системный координатор</h3><h4>Успеев Айбек Элесович</h4> <br /><span> координирует работу IT-систем,
           контролирует их функционирование и внедрение новых технологий.</span>
           <img src={server} alt="" />
        </li>
        <li>          <div className="start__bar">
            <span>–</span>
            <span>❒</span>
            <span>X</span>
          </div>
        <h3>Инженер-программист</h3><h4>Абдыжапаров Алтынбек Эдгарович</h4> <br /><span> обеспечивает техническую 
        поддержку и разработку программных решений для стабильной работы архивных систем.
        </span>
        <img src={prog} alt="" />
        </li>
    
       </ul>
       <h2>Пресс Служба:</h2>
       <ul>
         <li>          <div className="start__bar">
            <span>–</span>
            <span>❒</span>
            <span>X</span>
          </div><h3>Заведующая отделом</h3><h4>Бекболотова Токтобубу</h4><span>по работе с общественностью и СМИ</span>
         <img src={news} alt="" /></li>
         <li>          <div className="start__bar">
            <span>–</span>
            <span>❒</span>
            <span>X</span>
          </div><h3>Заведующая отделом</h3><h4>Максут кызы Акмарал</h4><span>заполнение контентом ведомственного сайта</span>
         <img src={web} alt="" /></li>
       </ul>
       </div>
       <h2 className='work'>В нашу работу входит:</h2>
       <div className='start__bottom'>
         <div>
            <h2>Центр информационных технологий</h2>
            <b>1. Поддержка и развитие IT-инфраструктуры архивной службы</b>
            <span>Обеспечиваем стабильную и безопасную работу всех информационных систем и сетей, 
               используемых в архивной службе.</span>
               <b>
               2. Техническая поддержка пользователей
               </b>
               <span>
               Оперативно решаем технические проблемы, консультируем сотрудников архивной службы по работе с IT-системами.
               </span>
               <b>
               3. Информационная безопасность
               </b>
               <span>
               Контролируем и обеспечиваем защиту данных от внешних
                и внутренних угроз, предотвращаем утечки 
               информации и несанкционированный доступ к архивным документам.
               </span>
               <b>
               4. Внедрение новых технологий
               </b>
               <span>
               Следим за IT-новинками и внедряем современные технологии для повышения эффективности работы архивной службы.
               </span>
               <b>5. 
               Замена картриджей и обслуживание офисной техники
               </b>
               <span>
               Обеспечиваем бесперебойную работу офисной техники, включая замену картриджей и обслуживание принтеров.
               </span>
         </div>
         <div>
            <h2>Пресс служба</h2>
            <b>1. Информационное освещение работы Архивной службы
            </b>
            <span>
            Подготавливаем и публикуем материалы, освещающие ключевые проекты и достижения Архивной службы.
            </span>
            <b>2. Создание и распространение медиа-материалов
            </b>
            <span>
            Разрабатываем пресс-релизы, статьи и другие информационные материалы для публикации на официальных сайтах и в СМИ.
            </span>
            <b>3. Поддержка связи с общественностью
            </b>
            <span>
            Организуем и поддерживаем коммуникацию с внешними аудиториями через социальные сети и медиа.
            </span>
         </div>
 
       </div>
       <div className="bottom__img">
        <img src={team} alt="" />
       </div>


    </section>
    <section id='contacts'>
      <h2>Контакты</h2>
      <span>0312 62 49 33</span>
      <span>zapros@archives.gov.kg</span>
      <div className='social'>
        <a href="https://www.instagram.com/archive.kg"><img src={inst} alt="" />Instagram </a>
        <a href="https://www.t.me/archive_kyzmat"> <img src={tg} alt="" />Telegram</a>
        <a href="https://www.facebook.com/profile.php?id=100057382965855&ref=xav_ig_profile_web"> <img src={fb} alt="" />Facebook</a>
      </div>
    </section>
    </>
  )
}

export default Homepage
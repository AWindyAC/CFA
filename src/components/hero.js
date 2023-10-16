import React from 'react'
import '../App.css';
import { tyeDyeDay, tyeDyeDay2, morgan_and_ben, joe_charles_jacob, directorCruise, motherSonDateNight, georgeBirthday, easter, servers, universal } from './ImageContent';

function Hero() {
  return (
    <>
    <div class="hero">
        <div class="hero-text">
            <h1 class="welcome-message">Hi, Welcome in!</h1>
        </div>
    </div>
    <div class="section text-white text-center py-5 px-5 font-light">
        <h3>Announcements</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit maiores sapiente cupiditate iste neque ad odio numquam quas fugiat perspiciatis facere vel, excepturi aspernatur quia libero quae qui nam tempora!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas esse rem sint quaerat sapiente similique. Pariatur, esse accusantium sed officiis vel incidunt amet minima necessitatibus. Quidem velit quo doloremque 
          voluptatem ratione rerum, autem adipisci esse quam, dignissimos tenetur eaque voluptatibus voluptas ab, vitae assumenda maxime molestias repellendus sapiente! Quisquam unde magni ullam possimus obcaecati velit architecto? 
          Quibusdam debitis odio distinctio enim, dolorem eligendi, doloremque voluptatibus saepe rem et facilis dolore mollitia temporibus, cum quisquam vero pariatur inventore illo 
          exercitationem deserunt corporis laborum quia? Repellat a maxime enim nesciunt doloremque exercitationem quasi corrupti!</p>
    </div>
    <div class="section2 text-white text-center py-5 px-5">
      <h3>What We Stand for</h3>
      <div className=''>
        <div className='row gallery'>
          <a href="https://unsplash.it/1200/768.jpg?image=251" data-toggle="lightbox" data-gallery="gallery" class="col-md-4">
          <img src={tyeDyeDay} class="img-fluid rounded"/>
          </a>
          <a href="https://unsplash.it/1200/768.jpg?image=251" data-toggle="lightbox" data-gallery="gallery" class="col-md-4">
          <img src={tyeDyeDay2} class="img-fluid rounded"/>
          </a>
          <a href="https://unsplash.it/1200/768.jpg?image=251" data-toggle="lightbox" data-gallery="gallery" class="col-md-4">
          <img src={morgan_and_ben} class="img-fluid rounded"/>
          </a>
        </div>
        <div className='row'>
          <a href="https://unsplash.it/1200/768.jpg?image=251" data-toggle="lightbox" data-gallery="gallery" class="col-md-4">
          <img src={joe_charles_jacob} class="img-fluid rounded"/>
          </a>
          <a href="https://unsplash.it/1200/768.jpg?image=251" data-toggle="lightbox" data-gallery="gallery" class="col-md-4">
          <img src={directorCruise} class="img-fluid rounded"/>
          </a>
          <a href="https://unsplash.it/1200/768.jpg?image=251" data-toggle="lightbox" data-gallery="gallery" class="col-md-4">
          <img src={georgeBirthday} class="img-fluid rounded"/>
          </a>
        </div>
        <div className='row'>
          <a href="https://unsplash.it/1200/768.jpg?image=251" data-toggle="lightbox" data-gallery="gallery" class="col-md-4">
          <img src={motherSonDateNight} class="img-fluid rounded"/>
          </a>
          <a href="https://unsplash.it/1200/768.jpg?image=251" data-toggle="lightbox" data-gallery="gallery" class="col-md-4">
          <img src={easter} class="img-fluid rounded"/>
          </a>
          <a href="https://unsplash.it/1200/768.jpg?image=251" data-toggle="lightbox" data-gallery="gallery" class="col-md-4">
          <img src={universal} class="img-fluid rounded"/>
          </a>
        </div>
      </div>
    </div>
    </>
  )
}

export default Hero

import React from 'react';
import '../assets/css/Layout.css';

// const profileContainerStyle = {
//   position: 'fixed',
// };

function todo() {
  return (
    <><div class="container">

      <header class="header fixed">

        <div class="logo">
          {/* <img class="logo-img" src="images/logo.png" alt=""> */}
          <span class="logo-lnk">Paula <br />Villalobos</span>
        </div>

        {/* <a href="#" class="menu-btn"><span></span></a> */}

          <span class="animated-button"><span><em>D</em><em>o</em><em>w</em><em>n</em><em>l</em><em>o</em><em>a</em><em>d</em><em> </em><em>C</em><em>V</em></span></span>
          <i class="icon fas fa-download"></i>

        <div class="header-sidebar">

          <div class="top-menu">
            <div class="top-menu-nav">
              <div class="menu-topmenu-container">
                <ul class="menu">
                  <li class="menu-item menu-item-has-children current-menu-item">
                    <a href="#section-started">
                      <span class="animated-button"><span><em>H</em><em>o</em><em>m</em><em>e</em></span></span>
                    </a>
                    <ul class="sub-menu">
                      <li class="menu-item"><a href="index.html">Home 1</a></li>
                      <li class="menu-item"><a href="index-2.html">Home 2</a></li>
                      <li class="menu-item"><a href="index-3.html">Home 3</a></li>
                      <li class="menu-item"><a href="index-slider.html">Home Slider</a></li>
                      <li class="menu-item"><a href="index-video.html">Home Video</a></li>
                    </ul>
                  </li>
                  <li class="menu-item">
                    <a href="#section-about">
                      <span class="animated-button"><span><em>A</em><em>b</em><em>o</em><em>u</em><em>t</em></span></span>
                    </a>
                  </li>
                  <li class="menu-item">
                    <a href="#section-experience">
                      <span class="animated-button"><span><em>R</em><em>e</em><em>s</em><em>u</em><em>m</em><em>e</em></span></span>
                    </a>
                  </li>
                  <li class="menu-item">
                    <a href="#section-portfolio">
                      <span class="animated-button"><span><em>P</em><em>o</em><em>r</em><em>t</em><em>f</em><em>o</em><em>l</em><em>i</em><em>o</em></span></span>
                    </a>
                  </li>
                  <li class="menu-item">
                    <a href="#section-contacts">
                      <span class="animated-button"><span><em>C</em><em>o</em><em>n</em><em>t</em><em>a</em><em>c</em><em>t</em></span></span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

        </div>

      </header>

      <div class="wrapper">

        <div class="background-bg">
          <div class="background-filter circle">
            <div class="background-img"></div>
          </div>
        </div>

        <div class="section started" id="section-started">
          <div class="centrize full-width">
            <div class="vertical-center">

              <h1 class="h-title">
                Paula <br />Villalobos
              </h1>

              <div class="started-content">

                <div class="h-subtitles">
                  <div class="h-subtitle typing-subtitle">
                    <p>Consultant and Mentor</p>
                    <p>Web Designer</p>
                    <p>Programmer</p>
                  </div>
                  <span class="typed-subtitle">Progr</span><span class="typed-cursor">|</span>
                </div>

                <div class="h-text">
                  Hello! I am Web Developer from United States, New York. I have rich experience in web site design and building, also I am good at wordpress. I love to talk with you about our unique.
                </div>

                  <span class="animated-button"><span><em>C</em><em>o</em><em>n</em><em>t</em><em>a</em><em>c</em><em>t</em><em> </em><em>M</em><em>e</em></span></span>
                  <i class="icon fas fa-chevron-right"></i>

                  <i class="icon fas fa-chevron-down"></i>

              </div>

            </div>
          </div>
        </div>

        <div class="section about" id="section-about">
          <div class="content">

            <div class="titles">
              <div class="title">About Me</div>
              <div class="subtitle">My story</div>
            </div>

            <div class="cols">
              <div class="col">
                <div class="single-post-text">
                  <p>
                    Pellentesque posuere. Praesent turpis. Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis lacus.
                  </p>
                </div>
              </div>
              <div class="col">
                <div class="single-post-text">
                  <p>
                    Pellentesque posuere. Praesent turpis. Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis lacus.
                  </p>
                </div>
              </div>
              <div class="col col-full">
                <div class="single-post-text">
                  <p>
                    Pellentesque posuere. Praesent turpis. Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis lacus. Donec elit libero, sodales nec, volutpat a, suscipit non, turpis.
                  </p>
                </div>
              </div>
            </div>

            <div class="info-list">
              <ul>
                <li><strong>Age:</strong> 24</li>
                <li><strong>Residence:</strong> USA</li>
                <li><strong>Freelance:</strong> Available</li>
                <li><strong>Address:</strong> San Francisco</li>
                <li><strong>Phone:</strong> +1 256 254 84 56</li>
                <li><strong>E-mail:</strong> alejandroa@gmail.com</li>
              </ul>
            </div>

            <div class="clear"></div>
          </div>
        </div>

        <div class="section service" id="section-services">
          <div class="content">

            <div class="titles">
              <div class="title">Services</div>
              <div class="subtitle">What I Do</div>
            </div>

            <div class="service-items">

              <div class="service-col">
                <div class="service-item">
                  <div class="icon"><i class="fas fa-br/ain"></i></div>
                  <div class="name">Economic <br />Science</div>
                  <div class="single-post-text">
                    <p>
                      Economics is a social science concerned with the production, consumption of goods and services.
                    </p>
                  </div>
                </div>
              </div>

              <div class="service-col">
                <div class="service-item">
                  <div class="icon"><i class="icon fas fa-ad"></i></div>
                  <div class="name">Marketing <br />&amp; Advertising</div>
                  <div class="single-post-text">
                    <p>
                      Advertising Management though is a complex process of employing various media to sell a product or service.
                    </p>
                  </div>
                </div>
              </div>

              <div class="service-col">
                <div class="service-item">
                  <div class="icon"><i class="icon fab fa-chrome"></i></div>
                  <div class="name">Web <br />Development</div>
                  <div class="single-post-text">
                    <p>
                      The web development process includes: web design, web content, client-side / server-side scripting and network security configuration.
                    </p>
                  </div>
                </div>
              </div>

              <div class="service-col">
                <div class="service-item">
                  <div class="icon"><i class="icon fas fa-headphones"></i></div>
                  <div class="name">Music <br />Writing</div>
                  <div class="single-post-text">
                    <p>
                      Sheet music is the basic form in which Western classical music is notated so that it can be learned and performed by solo singers.
                    </p>
                  </div>
                </div>
              </div>

              <div class="service-col">
                <div class="service-item">
                  <div class="icon"><i class="icon fas fa-gamepad"></i></div>
                  <div class="name">Game <br />Development</div>
                  <div class="single-post-text">
                    <p>
                      Come Up With a Game Idea. An idea is the first thing that comes to mind when a game is being described before creating.
                    </p>
                  </div>
                </div>
              </div>

              <div class="service-col">
                <div class="service-item">
                  <div class="icon"><i class="fas fa-video"></i></div>
                  <div class="name">Photography <br />&amp; Video</div>
                  <div class="single-post-text">
                    <p>
                      Sessions. If you are a photographer that spends most of the time in a portrait studio, you can charge for your session.
                    </p>
                  </div>
                </div>
              </div>

            </div>

            <div class="clear"></div>
          </div>
        </div>

        <div class="section pricing" id="section-pricing">
          <div class="content">

            <div class="titles">
              <div class="title">Pricing</div>
              <div class="subtitle">My Plans</div>
            </div>

            <div class="content-carousel">
              <div class="owl-carousel owl-loaded owl-drag" data-slidesview="2" data-slidesview_mobile="1">
                <div class="owl-stage-outer"><div class="owl-stage"><div class="owl-item active"><div class="item">
                  <div class="pricing-item">
                    <div class="icons"><i class="fas fa-star"></i></div>
                    <div class="name">Basic</div>
                    <div class="amount">
                      <span class="number">
                        <span class="dollar">$</span>
                        <span>39</span>
                        <span class="period">hour</span>
                      </span>
                    </div>
                    <div class="feature-list">
                      <ul>
                        <li>Web Development</li>
                        <li>Advetising</li>
                        <li>Game Development</li>
                        <li class="disable">Music Writing</li>
                        <li class="disable">Photography</li>
                      </ul>
                    </div>
                      <span class="animated-button"><span><em>B</em><em>u</em><em>y</em><em> </em><em>N</em><em>o</em><em>w</em></span></span>
                      <i class="icon fas fa-chevron-right"></i>
                  </div>
                </div></div><div class="owl-item active" ><div class="item">
                  <div class="pricing-item">
                    <div class="icons"><i class="fas fa-rocket"></i></div>
                    <div class="name">Premium</div>
                    <div class="amount">
                      <span class="number">
                        <span class="dollar">$</span>
                        <span>59</span>
                        <span class="period">hour</span>
                      </span>
                    </div>
                    <div class="feature-list">
                      <ul>
                        <li>Web Development</li>
                        <li>Advetising</li>
                        <li>Game Development</li>
                        <li>Music Writing</li>
                        <li>Photography <strong>new</strong></li>
                      </ul>
                    </div>
                    
                      <span class="animated-button"><span><em>B</em><em>u</em><em>y</em><em> </em><em>N</em><em>o</em><em>w</em></span></span>
                      <i class="icon fas fa-chevron-right"></i>
                  </div>
                </div></div><div class="owl-item" ><div class="item">
                  <div class="pricing-item">
                    <div class="icons"><i class="fas fa-rocket"></i></div>
                    <div class="name">Ultimate</div>
                    <div class="amount">
                      <span class="number">
                        <span class="dollar">$</span>
                        <span>59</span>
                        <span class="period">hour</span>
                      </span>
                    </div>
                    <div class="feature-list">
                      <ul>
                        <li>Web Development</li>
                        <li>Advetising</li>
                        <li>Game Development</li>
                        <li>Music Writing</li>
                        <li>Photography <strong>new</strong></li>
                      </ul>
                    </div>
                      <span class="animated-button"><span><em>B</em><em>u</em><em>y</em><em> </em><em>N</em><em>o</em><em>w</em></span></span>
                      <i class="icon fas fa-chevron-right"></i>
                  </div>
                </div></div></div></div><div class="owl-nav disabled"><button type="button" role="presentation" class="owl-prev"><span aria-label="Previous">‹</span></button><button type="button" role="presentation" class="owl-next"><span aria-label="Next">›</span></button></div><div class="owl-dots disabled"></div></div>

              <div class="navs">
                <span class="prev fas fa-chevron-left"></span>
                <span class="next fas fa-chevron-right"></span>
              </div>

            </div>

          </div>
        </div>

        <div class="section resume" id="section-experience">
          <div class="content">

            <div class="titles">
              <div class="title">Experience</div>
              <div class="subtitle">Working with</div>
            </div>

            <div class="content-carousel">
              <div class="owl-carousel owl-loaded owl-drag" data-slidesview="2" data-slidesview_mobile="1">
                <div class="owl-stage-outer"><div class="owl-stage"><div class="owl-item active" ><div class="item">
                  <div class="resume-item active">
                    <div class="date">Present</div>
                    <div class="name">The Turin <br />Olympics</div>
                    <div class="single-post-text">
                      <p>
                        Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna.
                      </p>
                    </div>
                  </div>
                </div></div><div class="owl-item active" ><div class="item">
                  <div class="resume-item">
                    <div class="date">2016-2018</div>
                    <div class="name">Red <br />Drifting</div>
                    <div class="single-post-text">
                      <p>
                        Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna.
                      </p>
                    </div>
                  </div>
                </div></div><div class="owl-item" ><div class="item">
                  <div class="resume-item">
                    <div class="date">2014-2016</div>
                    <div class="name">World <br />Economy</div>
                    <div class="single-post-text">
                      <p>
                        Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna.
                      </p>
                    </div>
                  </div>
                </div></div><div class="owl-item" ><div class="item">
                  <div class="resume-item">
                    <div class="date">2012-2014</div>
                    <div class="name">Art Director <br />Facebook</div>
                    <div class="single-post-text">
                      <p>
                        Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna.
                      </p>
                    </div>
                  </div>
                </div></div></div></div><div class="owl-nav disabled"><button type="button" role="presentation" class="owl-prev"><span aria-label="Previous">‹</span></button><button type="button" role="presentation" class="owl-next"><span aria-label="Next">›</span></button></div><div class="owl-dots disabled"></div></div>

              <div class="navs">
                <span class="prev fas fa-chevron-left"></span>
                <span class="next fas fa-chevron-right"></span>
              </div>

            </div>

          </div>
        </div>

        <div class="section resume" id="section-education">
          <div class="content">

            <div class="titles">
              <div class="title">Education</div>
              <div class="subtitle">Studied at</div>
            </div>

            <div class="content-carousel">
              <div class="owl-carousel owl-loaded owl-drag" data-slidesview="2" data-slidesview_mobile="1">
                <div class="owl-stage-outer"><div class="owl-stage" ><div class="owl-item active" ><div class="item">
                  <div class="resume-item active">
                    <div class="date">2011-2012</div>
                    <div class="name">Art University <br />New York</div>
                    <div class="single-post-text">
                      <p>
                        Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna.
                      </p>
                    </div>
                  </div>
                </div></div><div class="owl-item active" ><div class="item">
                  <div class="resume-item">
                    <div class="date">2010-2011</div>
                    <div class="name">Programming Course <br />Paris</div>
                    <div class="single-post-text">
                      <p>
                        Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna.
                      </p>
                    </div>
                  </div>
                </div></div><div class="owl-item" ><div class="item">
                  <div class="resume-item">
                    <div class="date">2009-2010</div>
                    <div class="name">Web Design Course <br />London</div>
                    <div class="single-post-text">
                      <p>
                        Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna.
                      </p>
                    </div>
                  </div>
                </div></div><div class="owl-item" ><div class="item">
                  <div class="resume-item">
                    <div class="date">2012-2014</div>
                    <div class="name">Art Course <br />London</div>
                    <div class="single-post-text">
                      <p>
                        Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna.
                      </p>
                    </div>
                  </div>
                </div></div></div></div><div class="owl-nav disabled"><button type="button" role="presentation" class="owl-prev"><span aria-label="Previous">‹</span></button><button type="button" role="presentation" class="owl-next"><span aria-label="Next">›</span></button></div><div class="owl-dots disabled"></div></div>

              <div class="navs">
                <span class="prev fas fa-chevron-left"></span>
                <span class="next fas fa-chevron-right"></span>
              </div>

            </div>

          </div>
        </div>

        <div class="section skills" id="section-skills">
          <div class="content">

            <div class="titles">
              <div class="title">Design Skills</div>
              <div class="subtitle">Creative ability</div>
            </div>

            <div class="skills percent">
              <ul>
                <li>
                  <div class="name">Web Layout</div>
                  <div class="single-post-text">
                    <p>
                      Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh.
                    </p>
                  </div>
                  <div class="progress">
                    <div class="percentage" >
                      <span class="percent">90%</span>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="name">Illustrations</div>
                  <div class="single-post-text">
                    <p>
                      Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh.
                    </p>
                  </div>
                  <div class="progress">
                    <div class="percentage" >
                      <span class="percent">70%</span>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="name">Photoshop</div>
                  <div class="single-post-text">
                    <p>
                      Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh.
                    </p>
                  </div>
                  <div class="progress">
                    <div class="percentage" >
                      <span class="percent">95%</span>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="name">Graphic Design</div>
                  <div class="single-post-text">
                    <p>
                      Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh.
                    </p>
                  </div>
                  <div class="progress">
                    <div class="percentage" >
                      <span class="percent">85%</span>
                    </div>
                  </div>
                </li>
              </ul>
            </div>

          </div>
        </div>

        <div class="section skills" id="section-skills-lang">
          <div class="content">

            <div class="titles">
              <div class="title">Language Skills</div>
              <div class="subtitle">Reading and writing</div>
            </div>

            <div class="skills dotted">
              <ul>
                <li>
                  <div class="name">English</div>
                  <div class="single-post-text">
                    <p>
                      Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh.
                    </p>
                  </div>
                  <div class="progress">
                    <div class="percentage" >
                      <span class="percent">90%</span>
                      <span class="da" ><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></span></div>
                    <span class="dg"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></span></div>
                </li>
                <li>
                  <div class="name">German</div>
                  <div class="single-post-text">
                    <p>
                      Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh.
                    </p>
                  </div>
                  <div class="progress">
                    <div class="percentage" >
                      <span class="percent">70%</span>
                      <span class="da" ><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></span></div>
                    <span class="dg"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></span></div>
                </li>
                <li>
                  <div class="name">Italian</div>
                  <div class="single-post-text">
                    <p>
                      Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh.
                    </p>
                  </div>
                  <div class="progress">
                    <div class="percentage" >
                      <span class="percent">55%</span>
                      <span class="da" ><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></span></div>
                    <span class="dg"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></span></div>
                </li>
                <li>
                  <div class="name">French</div>
                  <div class="single-post-text">
                    <p>
                      Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh.
                    </p>
                  </div>
                  <div class="progress">
                    <div class="percentage" >
                      <span class="percent">85%</span>
                      <span class="da" ><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></span></div>
                    <span class="dg"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></span></div>
                </li>
              </ul>
            </div>

          </div>

        </div>

        <div class="section skills" id="section-skills-code">
          <div class="content">

            <div class="titles">
              <div class="title">Coding Skills</div>
              <div class="subtitle">Developing on</div>
            </div>

            <div class="skills circles">
              <ul>
                <li>
                  <div class="progress p90">
                    <div class="percentage"></div>
                    <span>90%</span>
                    <div class="slice"><div class="bar"></div><div class="fill"></div></div></div>
                  <div class="name">WordPress</div>
                  <div class="single-post-text">
                    <p>
                      Etiam sit amet orci eget eros faucibus tincidunt.
                    </p>
                  </div>
                </li>
                <li>
                  <div class="progress p75">
                    <div class="percentage"></div>
                    <span>75%</span>
                    <div class="slice"><div class="bar"></div><div class="fill"></div></div></div>
                  <div class="name">PHP, MYSQL</div>
                  <div class="single-post-text">
                    <p>
                      Etiam sit amet orci eget eros faucibus tincidunt.
                    </p>
                  </div>
                </li>
                <li>
                  <div class="progress p85">
                    <div class="percentage"></div>
                    <span>85%</span>
                    <div class="slice"><div class="bar"></div><div class="fill"></div></div></div>
                  <div class="name">JavaScript</div>
                  <div class="single-post-text">
                    <p>
                      Etiam sit amet orci eget eros faucibus tincidunt.
                    </p>
                  </div>
                </li>
                <li>
                  <div class="progress p80">
                    <div class="percentage"></div>
                    <span>80%</span>
                    <div class="slice"><div class="bar"></div><div class="fill"></div></div></div>
                  <div class="name">Angular</div>
                  <div class="single-post-text">
                    <p>
                      Etiam sit amet orci eget eros faucibus tincidunt.
                    </p>
                  </div>
                </li>
                <li>
                  <div class="progress p95">
                    <div class="percentage"></div>
                    <span>95%</span>
                    <div class="slice"><div class="bar"></div><div class="fill"></div></div></div>
                  <div class="name">HTML, CSS</div>
                  <div class="single-post-text">
                    <p>
                      Etiam sit amet orci eget eros faucibus tincidunt.
                    </p>
                  </div>
                </li>
                <li>
                  <div class="progress p90">
                    <div class="percentage"></div>
                    <span>90%</span>
                    <div class="slice"><div class="bar"></div><div class="fill"></div></div></div>
                  <div class="name">Python</div>
                  <div class="single-post-text">
                    <p>
                    </p>
                  </div>
                </li>
              </ul>
            </div>

          </div>
        </div>

        <div class="section testimonials" id="section-testimonials">
          <div class="content">
            <div class="titles">
              <div class="title">Reviews</div>
            </div>
            <div class="content-carousel">
              <div class="owl-carousel owl-loaded owl-drag" data-slidesview="2" data-slidesview_mobile="1">
                <div class="owl-stage-outer"><div class="owl-stage" ><div class="owl-item active" ><div class="item">
                </div></div><div class="owl-item" ><div class="item">
                  <div class="reviews-item">
                    <div class="image">
                    </div>
                    <div class="info">
                      <div class="name">Joseph Mackey</div>
                    </div>
                    <div class="text">
                    </div>
                  </div>
                </div></div><div class="owl-item" ><div class="item">
                  <div class="reviews-item">
                    <div class="image">
                    </div>
                    <div class="info">
                      <div class="name">James Green</div>
                    </div>

                  </div>
                </div></div></div></div><div class="owl-nav disabled"><button type="button" role="presentation" class="owl-prev"><span aria-label="Previous">‹</span></button><button type="button" role="presentation" class="owl-next"><span aria-label="Next">›</span></button></div><div class="owl-dots disabled"></div></div>

              <div class="navs">
                <span class="prev fas fa-chevron-left"></span>
              </div>

            </div>

          </div>
        </div>

        <div class="section clients" id="section-clients">
          <div class="content">

            <div class="titles">
              <div class="title">Clients</div>
            </div>

            <div class="content-carousel">
              <div class="owl-carousel owl-loaded owl-drag" data-slidesview="4" data-slidesview_mobile="2">
                <div class="owl-stage-outer"><div class="owl-stage" ><div class="owl-item active" ><div class="item">

                </div></div><div class="owl-item" ><div class="item">
                  <div class="clients-item">
                    
                  </div>
                </div></div><div class="owl-item" s><div class="item">
                  <div class="clients-item">
                    
                  </div>
                </div></div></div></div><div class="owl-nav disabled"><button type="button" role="presentation" class="owl-prev"><span aria-label="Previous">‹</span></button><button type="button" role="presentation" class="owl-next"><span aria-label="Next">›</span></button></div><div class="owl-dots disabled"></div></div>

              <div class="navs">
                <span class="prev fas fa-chevron-left"></span>
              </div>

            </div>

            <div class="clear"></div>
          </div>
        </div>

        <div class="section works" id="section-portfolio">
          <div class="content">

            <div class="titles">
              <div class="title">Portfolio</div>
            </div>

            <div class="filter-menu">
              <div class="filters">
                <div class="btn-group">
                  <label data-text="All" class="glitch-effect">
                    {/* <input type="radio" name="fl_radio" value=".box-col">All */}
                  </label>
                </div>
                <div class="btn-group">
                  <label data-text="Video">
                    {/* <input type="radio" name="fl_radio" value=".f-video">Video */}
                  </label>
                </div>

              </div>
            </div>

            <div class="box-items">

              <div class="box-col f-gallery">
                <div class="box-item">
                  <div class="image">
                    <a href="#gallery-1" class="has-popup-gallery">
                      {/* <img src="images/works/work1.jpg" alt=""> */}
                      <span class="info">
                        <span class="centrize full-width">
                          <span class="vertical-center">
                            <i class="icon fas fa-images"></i>
                          </span>
                        </span>
                      </span>
                    </a>
                    <div id="gallery-1" class="mfp-hide">
                     
                    </div>
                  </div>
                  <div class="desc">
                    <div class="category">Gallery</div>
                    <a href="#gallery-1" class="name has-popup-gallery">Alabaster Complete Collection</a>
                  </div>
                </div>
              </div>

              <div class="box-col f-video" >
                <div class="box-item">
                  <div class="image">
                    <a href="https://youtu.be/S4L8T2kFFck" class="has-popup-video">
                      {/* <img src="images/works/work2.jpg" alt=""> */}
                      <span class="info">
                        <span class="centrize full-width">
                          <span class="vertical-center">
                            <i class="icon fas fa-video"></i>
                          </span>
                        </span>
                      </span>
                    </a>
                  </div>
                  <div class="desc">
                    <div class="category">Video</div>
                    <a href="https://youtu.be/S4L8T2kFFck" class="name has-popup-video">Book of John Paper</a>
                  </div>
                </div>
              </div>

              <div class="box-col f-gallery">
                <div class="box-item">
                  <div class="image">
                    <a href="#gallery-2" class="has-popup-gallery">
                      {/* <img src="images/works/work5.jpg" alt=""> */}
                      <span class="info">
                        <span class="centrize full-width">
                          <span class="vertical-center">
                            <i class="icon fas fa-images"></i>
                          </span>
                        </span>
                      </span>
                    </a>
                    <div id="gallery-2" class="mfp-hide">
                      
                    </div>
                  </div>
                  <div class="desc">
                    <div class="category">Gallery</div>
                    <a href="#gallery-2" class="name has-popup-gallery">br/own Short Dog</a>
                  </div>
                </div>
              </div>

              <div class="box-col f-music" />
              <div class="box-item">
                <div class="image">
                  <a href="https://w.soundcloud.com/player/?visual=true&amp;url=http%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F221650664&amp;show_artwork=true" class="has-popup-music">
                    {/* <img src="images/works/work6.jpg" alt=""> */}
                    <span class="info">
                      <span class="centrize full-width">
                        <span class="vertical-center">
                          <i class="icon fas fa-music"></i>
                        </span>
                      </span>
                    </span>
                  </a>
                </div>
                <div class="desc">
                  <div class="category">Music</div>
                  <a href="https://w.soundcloud.com/player/?visual=true&amp;url=http%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F221650664&amp;show_artwork=true" class="name has-popup-music">br/own Concrete Building</a>
                </div>
              </div>
            </div>

            <div class="box-col f-links" >
              <div class="box-item">
                <div class="image">
                    {/* <img src="images/works/work3.jpg" alt=""> */}
                    <span class="info">
                      <span class="centrize full-width">
                        <span class="vertical-center">
                          <i class="icon fas fa-link"></i>
                        </span>
                      </span>
                    </span>
                </div>
                <div class="desc">
                  <div class="category">Links</div>
                  <a href="https://beshley.com/" class="name has-popup-link">Black Car</a>
                </div>
              </div>
            </div>

            <div class="box-col f-content" >
              <div class="box-item">
                <div class="image">
                  <a href="#popup-1" class="has-popup-media">
                    {/* <img src="images/works/work8.jpg" alt=""> */}
                    <span class="info">
                      <span class="centrize full-width">
                        <span class="vertical-center">
                          <i class="icon fas fa-plus"></i>
                        </span>
                      </span>
                    </span>
                  </a>
                </div>
                <div class="desc">
                  <div class="category">Content</div>
                  <a href="#popup-1" class="name has-popup-media">Yellow and Blue Striped</a>
                </div>
                <div id="popup-1" class="popup-box mfp-fade mfp-hide">
                  <div class="content">
                    <div class="image">
                      {/* <img src="images/works/work8.jpg" alt=""> */}
                    </div>
                    <div class="desc">
                      <div class="category">Content</div>
                        <span class="animated-button"><span><em>V</em><em>i</em><em>e</em><em>w</em><em> </em><em>P</em><em>r</em><em>o</em><em>j</em><em>e</em><em>c</em><em>t</em></span></span>
                        <i class="icon fas fa-chevron-right"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          <div class="clear"></div>
        </div>
      </div>

      <div class="section contacts" id="section-contacts">
        <div class="content">

          <div class="titles">
            <div class="title">Contact</div>
            <div class="subtitle">Let's talk</div>
          </div>

          <div class="contact-form">
            <form id="cform" method="post" novalidate="novalidate">
              <div class="group-val">
                <div class="label">Full name <strong>*</strong></div>
                {/* <input type="text" name="name" placeholder="ej.: Genoveva Lian Hullt"> */}
              </div>
              <div class="group-bts">
                <button type="submit" class="btn">
                  <span class="animated-button"><span><em>S</em><em>e</em><em>n</em><em>d</em><em> </em><em>M</em><em>e</em><em>s</em><em>s</em><em>a</em><em>g</em><em>e</em></span></span>
                  <i class="icon fas fa-chevron-right"></i>
                </button>
              </div>
            </form>
            <div class="alert-success">
              <p>Thanks, your message is sent successfully.</p>
            </div>
          </div>

          <div class="contact-info">
            <div class="name">Paula Villalobos</div>
            <div class="subname">Consultant &amp; Mentor</div>
            <div class="info-list">

              <li><strong>Age:</strong> 24</li>

            </div>
            <div class="author">Paula Villalobos</div>
          </div>

          <div class="clear"></div>
        </div>
      </div>

    </div><footer class="footer">
        <div class="socials">
          {/* <a target="_blank" href="https://www.facebook.com/">
            <i class="icon fab fa-facebook-f"></i>
          </a> */}

        </div>
      </footer></>


  );
}

export default todo;

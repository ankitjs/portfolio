angular.module("boilerplate").run([
  "$templateCache",
  function ($templateCache) {
    $templateCache.put(
      "index.html",
      `<!doctype html><html lang=en ng-csp ng-app=boilerplate><head><base href="/#/"><meta charset=utf-8><meta http-equiv=x-ua-compatible content="ie=edge"><title>AngularJS Boilerplate</title><meta name=description content="Simple AngularJS Boilerplate to kick start your new project with SASS support and Gulp watch/build tasks"><meta name=HandheldFriendly content=True><meta name=MobileOptimized content=320><meta name=viewport content="width=device-width, initial-scale=1.0"><link rel="shortcut icon" type=image/x-icon href=images/favicon.ico><meta name=msapplication-TileColor content=#f01d4f><link href="https://fonts.googleapis.com/css?family=La+Belle+Aurore" rel=stylesheet type=text/css><link rel=stylesheet type=text/css href=https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css><link rel=stylesheet type=text/css href=styles/hhhh.css></head><body class="home page page-id-11 page-template page-template-template-home page-template-template-home-php"><main-nav></main-nav><div ui-view class=en></div></body><script type=text/javascript src=js/nonangular/jquery-1.11.2.min.js></script><script type=text/javascript src=js/nonangular/lodash.min.js></script><script type=text/javascript src=js/nonangular/tagcanvas.js></script><script type=text/javascript src=bower_components/angular/angular.js></script><script type=text/javascript src=bower_components/angular-route/angular-route.js></script><script type=text/javascript src=bower_components/angular-sanitize/angular-sanitize.js></script><script type=text/javascript src=bower_components/particles.js/particles.min.js></script><script type=text/javascript src=bower_components/blast-text/jquery.blast.min.js></script><script type=text/javascript src=bower_components/angular-ui-router/release/angular-ui-router.min.js></script><script type=text/javascript src=app/app.js></script><script type=text/javascript src=components/directives/main.nav.directive.js></script><script type=text/javascript src=app/controller.js></script></html>`
    );
    $templateCache.put(
      "views/about.html",
      `<div class="container about">
      <span class="tags top-tags">&nbsp;&nbsp;&nbsp;&lt;body&gt;</span>
      <div class=text-zone>
         <h1>About Me</h1>
         <p>Since 6 years I am fascinated and I am specialising in front-end developement – HTML/CSS/JS, Angular, React and Vue.</p>
         <p>Experience in Design, Development and Maintenance of Web Applications.</p>
         <p>Passionate about Front end coding and building smooth and scalable web appications.</p>
         <p>Always keen to learn emerging trends and technologies and enhance my skill set.</p>
         <p>Worked extensively on Front end MVC pattern.</p>
         <p>Expertise in advanced JavaScript, Optimizations techniques and Algorithms.</p>
      </div>
      <section id=pyramid>
         <div></div>
         <div></div>
         <div></div>
         <div></div>
      </section>
      <span class="tags bottom-tags">&nbsp;&nbsp;&nbsp;&lt;/body&gt;<br>&lt;/html&gt;</span>
   </div>`
    );
    $templateCache.put(
      "views/contact.html",
      `<div class="container contact">
      <span class="tags top-tags">&nbsp;&nbsp;&nbsp;&lt;body&gt;</span>
      <div class=text-zone>
         <h1>Contact me</h1>
         <div class=contact-form>
            <form id=contact autocomplete=off>
               <ul>
                  <li class=half><input class="input__field input__field--hoshi" placeholder=Name type=text name=name> <label class="input__label input__label--hoshi input__label--hoshi-color-2"></label></li>
                  <li class=half><input class="input__field input__field--hoshi" placeholder=Email type=email name=email> <label class="input__label input__label--hoshi input__label--hoshi-color-2"></label></li>
                  <li><input class="input__field input__field--hoshi" placeholder=Subject type=text name=subject> <label class="input__label input__label--hoshi input__label--hoshi-color-2"></label></li>
                  <li><textarea class="input__field input__field--hoshi" placeholder=Message name=msg></textarea> <label class="input__label input__label--hoshi input__label--hoshi-color-2"></label></li>
                  <li class=submit><input id=submit type=submit class=flat-button value=SEND></li>
               </ul>
            </form>
         </div>
      </div>
      <span class="tags bottom-tags">&nbsp;&nbsp;&nbsp;&lt;/body&gt;<br>&lt;/html&gt;</span>
   </div>`
    );
    $templateCache.put(
      "views/home.html",
      `<div class="container home-page">
      <span class="tags top-tags">&nbsp;&nbsp;&nbsp;&lt;body&gt;</span>
      <div class=text-zone>
         <h1>Hi,<br>I’m <img src=portfolio/images/image.jpg>nkit,<br>web developer.</h1>
         <h2>Front End Developer / Angular / React / Vue</h2>
         <a rel=contact class=flat-button ui-sref=contact>CONTACT ME</a>
      </div>
      <span class="tags bottom-tags">&nbsp;&nbsp;&nbsp;&lt;/body&gt;<br>&lt;/html&gt;</span>
      <div id=bulb class=bulb><a class=animated></a></div>
      <div particles-drv></div>
   </div>`
    );
    $templateCache.put(
      "views/skills.html",
      `<div class="container skills">
    <span class="tags top-tags">&nbsp;&nbsp;&nbsp;&lt;body&gt;</span>
        <div class=text-zone>
            <h1>Skills &#038; Experience</h1>
            <p>The scope of my work is a large part of the front end: HTML/CSS/JS, coding layouts, building Single Page Apps (MVC, MVVM) with Angular, animations.</p>
            <p>Expertise in advanced JavaScript, Optimizations techniques and Algorithms.</p>
            <p>Excellent development skills using Javascript, Angular, Redux, Nodejs, Jquery, HTML5, CSS3, AJAX, JSON, SASS.</p>
            <p>Extremely detailed oriented.</p>
        </div>
        <div class=clear></div>
        <div class=skills-charts>
            <div id=myCanvasContainer>
                <canvas width=500 height=500 id=myCanvas>
                    <ul>
                        <li>
                            <a href=https://en.wikipedia.org/wiki/HTML target=_blank>HTML 5</a>
                        </li>
                        <li>
                            <a data-weight=25 href=https://en.wikipedia.org/wiki/Cascading_Style_Sheets target=_blank>CSS 3</a>
                        </li>
                        <li>
                            <a data-weight=25 href=https://en.wikipedia.org/wiki/JavaScript target=_blank>JavaScript</a>
                        </li>
                        <li>
                            <a data-weight=24 href=https://en.wikipedia.org/wiki/Representational_state_transfer target=_blank>REST</a>
                        </li>
                        <li>
                            <a data-weight=21 href=https://en.wikipedia.org/wiki/Ajax_(programming) target=_blank>AJAX</a>
                        </li>
                        <li>
                            <a data-weight=14 href=https://en.wikipedia.org/wiki/JSON target=_blank>JSON</a>
                        </li>
                        <li>
                            <a data-weight=27 href=https://en.wikipedia.org/wiki/Angular target=_blank>Angular</a>
                        </li>
                        <li>
                            <a data-weight=27 href=https://en.wikipedia.org/wiki/React target=_blank>React</a>
                        </li>
                        <li>
                            <a data-weight=27 href=https://en.wikipedia.org/wiki/Vue target=_blank>Vue</a>
                        </li>
                        <li>
                            <a data-weight=17 href=https://en.wikipedia.org/wiki/Git target=_blank>Git</a>
                        </li>
                        <li>
                            <a data-weight=23 href=https://en.wikipedia.org/wiki/Bootstrap_(front-end_framework) target=_blank>Bootstrap</a>
                        </li>
                        <li>
                            <a data-weight=15 href=https://en.wikipedia.org/wiki/Sass_(stylesheet_language) target=_blank>SASS</a>
                        </li>
                        <li>
                            <a data-weight=19 href=https://en.wikipedia.org/wiki/JQuery target=_blank>jQuery</a>
                        </li>
                        <li>
                            <a data-weight=19 href="http://gulpjs.com/" target=_blank>Gulp</a>
                        </li>
                        <li>
                            <a data-weight=19 href="https://en.wikipedia.org/wiki/Webpack" target=_blank>Webpack</a>
                        </li>
                        <li>
                            <a data-weight=19 href="https://www.npmjs.com/" target=_blank>npm</a>
                        </li>
                        <li>
                            <a data-weight=19 href="https://bower.io/" target=_blank>Bower</a>
                        </li>
                        <li>
                            <a data-weight=19 href=https://en.wikipedia.org/wiki/Canvas_element target=_blank>Canvas</a>
                        </li>
                    </ul>
                </canvas>
            </div>
            <div class=clear></div>
        </div>
    <span class="tags bottom-tags">&nbsp;&nbsp;&nbsp;&lt;/body&gt;<br>&lt;/html&gt;</span>
</div>`
    );
    $templateCache.put(
      "components/directives/main-nav.html",
      `<div id=nav_bar>
      <a class=logo rel=index href="/portfolio/#/">
         <img src=portfolio/images/image.jpg>
         <p class=name>ANKIT</p>
      </a>
      <nav class=en><a rel=index ui-sref=home ui-sref-active=active class=home-link><i class="fa fa-home"></i></a> <a rel=about ui-sref=about ui-sref-active=active><i class="fa fa-user-secret"></i></a> <a rel=skills ui-sref=skills ui-sref-active=active><i class="fa fa-code"></i></a> <a rel=gallery href="/#/"><i class="fa fa-picture-o"></i></a> <a rel=contact ui-sref=contact ui-sref-active=active><i class="fa fa-envelope-o"></i></a></nav>
      <ul>
         <li><a href=https://twitter.com/ankit_JS target=_blank><i class="fa fa-twitter"></i></a></li>
         <li><a href="https://www.linkedin.com/in/ankit-sharma-635ab59a/" target=_blank><i class="fa fa-linkedin"></i></a></li>
         <li><a href=https://www.facebook.com/ankit5622 target=_blank><i class="fa fa-facebook"></i></a></li>
      </ul>
      <a id=mobile-link><i class="fa fa-bars"></i></a>
   </div>`
    );
  },
]);

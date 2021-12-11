(this["webpackJsonpcreate-portfolio"]=this["webpackJsonpcreate-portfolio"]||[]).push([[0],{52:function(e,n,t){"use strict";t.r(n);var i,a,r=t(1),o=t(20),c=t.n(o),s=t(10),l=t(5),d=t(9),m=t(2),b=t(3),j=t(12),h=t(0),p=b.b.div(i||(i=Object(m.a)(["\n    background: var(--blue);\n    z-index: 100;\n    left: 0;\n    top: 0;\n    width: 100%;\n    padding: 5px 0 0 0;\n    position: fixed;\n     .logo {\n        color: var(--white);\n        padding: 0 1rem;\n        font-size: 2rem;\n        font-weight: bold;\n        text-align: Left;\n        font-family: 'Roboto', sans-serif;\n        display: inline-block;\n    }\n    ul {\n        max-width: 1200px;\n        margin: 0 auto;\n        width: 90%;\n        text-align: center;\n        display: inline-block;\n    li {\n        display: inline-block;\n        border-right: 8px solid var(--blue);\n        transition: 0.3s ease-in-out;\n        list-style: none;\n        &:hover {\n            background: var(--light-blue);\n        }\n    }\n    a {\n        color: var(--yellow);\n        text-decoration: none;\n        display: inline-block;\n        font-size: 1.5rem;\n        padding: 1rem 2rem;\n        font-family: 'Roboto', 'Spectral SC', sans-serif;\n    }\n    .active {\n        color: var(--white);\n    }\n}\n    .mobile-menu-icon {\n        position: absolute;\n        right: 0rem;\n        top: 1rem;\n        width: 3rem;\n        cursor: pointer;\n        display: none;\n        outline: none;\n        * {\n            pointer-events: none;\n        }\n    }\n    .closeNavIcon {\n        display: none;\n    }\n    @media only screen and (max-width: 768px) {\n        padding: 0;\n        .hide-item {\n            transform: translateY(calc(-100% - var(--top)));\n        }\n        .mobile-menu-icon {\n            display: block;\n            color: var(--white);\n        }\n        .navItems {\n            --top: 1rem;\n            transition: 0.3s transform ease-in-out;\n            background: var(--blue);\n            padding: 2rem;\n            width: 90%;\n            max-width: 300px;\n            border-radius: 12px;\n            position: absolute;\n            right: 1rem;\n            top: var(--top);\n            .closeNavIcon {\n                display: block;\n                width: 3rem;\n                margin: 0 0 0 auto;\n                cursor: pointer;\n                color: var(--white);\n                * {\n                    pointer-events: none;\n                }\n            }\n                li {\n                    display: block;\n                    margin-bottom: 1rem;\n                }\n            }\n        }\n"])));function u(){var e=Object(r.useState)(!1),n=Object(d.a)(e,2),t=n[0],i=n[1];return Object(h.jsxs)(p,{children:[Object(h.jsx)("h1",{className:"logo",children:Object(h.jsx)("p",{children:"CarilyWebDev"})}),Object(h.jsx)("div",{className:"mobile-menu-icon",onClick:function(){return i(!t)},role:"button",onKeyDown:function(){return i(!t)},tabIndex:0,children:Object(h.jsx)(j.d,{})}),Object(h.jsxs)("ul",{className:t?"navItems":"navItems hide-item",children:[Object(h.jsx)("div",{className:"closeNavIcon",onClick:function(){return i(!t)},role:"button",onKeyDown:function(){return i(!t)},tabIndex:0,children:Object(h.jsx)(j.a,{})}),Object(h.jsx)("li",{children:Object(h.jsx)(s.b,{to:"/",onClick:function(){return i(!t)},role:"button",onKeyDown:function(){return i(!t)},tabIndex:0,children:"Home"})}),Object(h.jsx)("li",{children:Object(h.jsx)(s.b,{to:"/about",onClick:function(){return i(!t)},role:"button",onKeyDown:function(){return i(!t)},tabIndex:0,children:"About Me"})}),Object(h.jsx)("li",{children:Object(h.jsx)(s.b,{to:"/projects",onClick:function(){return i(!t)},role:"button",onKeyDown:function(){return i(!t)},tabIndex:0,children:"Portfolio"})}),Object(h.jsx)("li",{children:Object(h.jsx)(s.b,{to:"/contact",onClick:function(){return i(!t)},role:"button",onKeyDown:function(){return i(!t)},tabIndex:0,children:"Contact"})}),Object(h.jsx)("li",{children:Object(h.jsx)(s.b,{to:"/resume",onClick:function(){return i(!t)},role:"button",onKeyDown:function(){return i(!t)},tabIndex:0,children:"Resume"})})]})]})}var x,g=b.b.div(a||(a=Object(m.a)(["\n.heading {\n    font-size: 1.5rem;\n    margin-bottom: 1rem;\n}\nli {\n    margin-bottom: 1rem;\n}\n\na {\n    font-size: 1.25rem;\n    text-decoration: none;\n    color: var(--white);\n\n}\n"])));function f(e){var n=e.heading,t=void 0===n?"col heading":n,i=e.links,a=void 0===i?[{type:"Link",title:"Home",path:"/"},{type:"Link",title:"About",path:"/about"}]:i;return Object(h.jsxs)(g,{children:[Object(h.jsx)("h2",{className:"heading",children:t}),Object(h.jsx)("ul",{children:a.map((function(e,n){return Object(h.jsx)("li",{children:"Link"===e.type?Object(h.jsx)(s.b,{to:e.path,children:e.title}):Object(h.jsx)("a",{href:e.path,target:"_blank",rel:"noreferrer",children:e.title})},n)}))})]})}var O,v=b.b.div(x||(x=Object(m.a)(["\n    max-width: 500px;\n    margin: 0 auto;\n    font-size: 1.5rem;\n    line-height: 1.5rem;\n    @media only screen and (max-width: 768px) {\n        font-size: 1.2rem;\n    }\n"])));function y(e){var n=e.children;return Object(h.jsx)(v,{className:"para",children:Object(h.jsx)("p",{children:n})})}var w=b.b.div(O||(O=Object(m.a)(["\nwidth: 100%;\nbackground: var(--blue);\ncolor: var(--white);\npadding: 2rem;\n.container {\n    display: flex;\n    gap: 2rem;\n}\n.footer-col1 {\n    flex: 2;\n}\n.footer-col2, \n.footer-col3, \n.footer-col4 {\n    flex: 1;\n}\n.footer-col1-int {\n    font-size: 1.5rem;\n    margin-bottom: 1.5rem;\n}\n.copyright {\n    font-size: 0.5rem;\n    text-align: center;\n    padding: 0.5rem 0;\n}\n@media screen only screen and (max-width: 768px) {\n    .container {\n        flex-direction: column;\n        gap: 0rem;\n        & > * {\n            margin-top: 2rem;\n        }\n    }\n    .footer-col1 .para {\n        max-width: 100%;\n    }\n    .copyright {\n        .container {\n            margin-top: 0rem;\n        }\n    }\n}\n"])));function _(){return Object(h.jsxs)(w,{children:[Object(h.jsx)("div",{children:Object(h.jsxs)("div",{className:"container",children:[Object(h.jsxs)("div",{className:"footer-col1",children:[Object(h.jsx)("h1",{className:"footer-col1-int",children:"CarilyWebDev by Carina Diaz"}),Object(h.jsx)(y,{children:"Junior Web Developer from Northern California with a passion for learning and building."})]}),Object(h.jsx)("div",{className:"footer-col2",children:Object(h.jsx)(f,{heading:"Nav Links",links:[{title:"Home",path:"/",type:"Link"},{type:"Link",title:"About",path:"/about"},{type:"Link",title:"Portfolio",path:"/projects"},{type:"Link",title:"Contact",path:"/contact"}]})}),Object(h.jsx)("div",{className:"footer-col3",children:Object(h.jsx)(f,{heading:"Contact info",links:[{title:"carilywebdev@gmail.com",path:"mailto:carilywebdev@gmail.com"},{title:"Phone",path:"Number"},{title:"Mail",path:"Mail"}]})}),Object(h.jsx)("div",{className:"footer-col4",children:Object(h.jsx)(f,{heading:"Network",links:[{title:"GitHub",path:"https://github.com/Modsia16"},{title:"Linkedin",path:"https://www.linkedin.com/in/carina-diaz-a22009199/"},{title:"Instagram",path:"https://www.instagram.com/lynnecarina/"}]})})]})}),Object(h.jsx)("div",{className:"copyright",children:Object(h.jsx)("div",{className:"container",children:Object(h.jsx)(y,{children:"@ 2021 - Designed by Carina Diaz"})})})]})}var S,k,N=t.p+"static/media/intro-img.7b20436e.png",C=b.b.div(S||(S=Object(m.a)(["\n    margin-top: 2rem;\n    .button {\n        font-family: 'Roboto', 'Spectral SC', sans-serif;\n        font-size: 1.5rem;\n        background-color: ",";\n        color: ",";\n        padding: 1rem 2rem;\n        border-radius: 8px;\n        display: inline-block;\n        border: 2px solid var(--grey);\n        text-decoration: none;\n        @media only screen and (max-width: 768px) {\n            .button {\n                font-size: 1.2rem;\n            }\n        }\n"])),(function(e){return e.outline?"transparent":"var(--grey)"}),(function(e){return e.outline?"var(--grey)":"var(--blue)"}));function I(e){var n=e.btnText,t=e.btnLink,i=e.outline;return Object(h.jsx)(C,{outline:i,className:"button-wrapper",children:Object(h.jsxs)(s.b,{className:"button",to:t,children:[" ",n," "]})})}var z,D=b.b.div(k||(k=Object(m.a)(["\n.intro { \n    height: 100vh;\n    min-height: 1000px; \n    width: 100%;\n    text-align: center;  \n    font-family: 'Roboto', 'Spectral SC', sans-serif;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    margin-top: 100px;\n    color: var(--blue);\n}\n.intro__heading {\n    font-size: 3rem;\n    margin-bottom: 4rem;\n    position: relative;\n    span {\n        display: inline-block;\n        width: 100%;\n}\n.intro_name {\n font-size: 4rem;\n}\n.intro__img {\n    max-width: 900px;\n    width: 100%;\n    height: 600px;\n    margin: 0 auto;\n    border: 5px solid var(--blue);\n  }\n  .intro__text {\n      margin-top: 2rem;\n  }\n  @media only screen and (max-width: 768px) {\n      .intro {\n          min-height: 750px;\n      }\n      .intro__heading {\n            font-size: 1.5rem;\n            margin-bottom: 2rem;\n            .intro_name {\n                font-size: 4rem;\n            }\n        }\n        .intro__img {\n            height: 400px;\n        }\n        .intro__text {\n            margin-top: 1rem;\n        }\n    }   \n"])));function A(){return Object(h.jsx)(D,{children:Object(h.jsx)("div",{className:"intro",children:Object(h.jsxs)("div",{className:"container",children:[Object(h.jsxs)("h1",{className:"intro__heading",children:[Object(h.jsx)("span",{children:"Hello, this is"}),Object(h.jsx)("span",{className:"intro_name",children:" CarilyWebDev"})]}),Object(h.jsx)("div",{className:"intro__img",children:Object(h.jsx)("img",{src:N,alt:""})}),Object(h.jsxs)("div",{className:"intro__text",children:[Object(h.jsx)(y,{children:"Junior web developer based in Northern California. I have a passion for creating clean, responsive, and user-friendly websites. I have always been draw to to the innovative and analyitcal aspects of web development. When I am not coding I enjoy spending time in nature. If you are looking for a developer to join your team, I would love to hear from you!"}),Object(h.jsx)(I,{btnText:"See my work",btnLink:"/projects",outline:!1})]})]})})})}var M=b.b.div(z||(z=Object(m.a)(["\ntext-align: center;\np {\n    font-family: 'Roboto', sans-serif;\n    font-size: 1.5rem;\n}\nh2 {\n    font-family: 'Roboto', sans-serif, bold;\n    font-size: 2rem;\n    margin-top: 0.5rem;\n    text-transform: uppercase;\n}\n@media only screen and (max-width: 768px) {\n    p {\n        font-size: 1.5rem;\n    }\n    h2 { \n        font-size: 3.6rem;\n    }\n}\n"])));function L(e){var n=e.subheading,t=void 0===n?"this is a subheading":n,i=e.heading,a=void 0===i?"this is a heading":i;return Object(h.jsx)(M,{children:Object(h.jsxs)("div",{children:[Object(h.jsx)("p",{children:t}),Object(h.jsx)("h2",{children:a})]})})}var R,P=t.p+"static/media/big-basin.d33c04ec.png",H=b.b.div(R||(R=Object(m.a)(["\n    background-color: var(--blue);\n    padding: 5rem 0;\n    color: var(--white);\n    .container {\n        display: flex;\n        align-items: center;\n        justify-content: flex-start;\n        text-align: left;\n    }\n    .aboutSection__left,\n    .aboutSection__right {\n        flex: 1;\n    }\n    .aboutSection__title {\n        text-align: left;\n    }\n    .para {\n        margin-top: 2rem;\n        margin-left: 0;\n    }\n    .aboutSection-buttons {\n        display: flex;\n        align-items: center;\n        gap: 1rem;\n        justify-content: flex-start;\n        margin-top: 2rem;\n    }\n    @media only screen and (max-width: 768px) {\n        .container {\n            flex-direction: column;\n            align-items: center;\n        }\n        .aboutSection__left, .aboutSection__right {\n            width: 100%;\n        }\n        .aboutSection___right {\n            margin-top: 2rem;\n        }\n        .aboutSection-title {\n            text-align: center;\n        }\n        .para {\n            margin: 0 auto;\n            margin-top: 2rem;\n        }\n        .aboutSection-buttons {\n            flex-direction: column;\n            gap: 0rem;\n            .button-wrapper, a {\n                width: 100%;\n                text-align: center;\n            }\n        }\n    }\n"])));function J(){return Object(h.jsx)(H,{children:Object(h.jsxs)("div",{className:"container",children:[Object(h.jsxs)("div",{className:"aboutSection__left",children:[Object(h.jsx)(L,{className:"aboutSection__title",subheading:"Hello my name is Carina Diaz",heading:"About me"}),Object(h.jsx)(y,{}),Object(h.jsxs)("div",{className:"aboutSection-buttons",children:[Object(h.jsx)(I,{btnLink:"/projects",btnText:"Works"}),Object(h.jsx)(I,{btnLink:"/about",btnText:"Read More",outline:!0})]})]}),Object(h.jsx)("div",{className:"aboutSection__right",children:Object(h.jsx)("img",{className:"aboutImg",src:P,alt:""})})]})})}var T,B=t(56),E=t(55),F=t(13),W=t(19),q=t.p+"static/media/quiz.33109ae0.png",V=b.b.div(T||(T=Object(m.a)(["\na {\n  text-decoration: none;\n  color: var(--light-blue);\n}\n.projectItem__img {\n    width: 100%;\n    height: 400px;\n    border-radius: 12px;\n    overflow: hidden;\n    display: inline-block;\n    border: 4px solid var(--blue);\n    img {\n      height: 100%;\n    }\n  }\n  .projectItem__text {\n    margin-top: 1rem;\n    background-color: var(--white);\n    padding: 1rem;\n    border-radius: 12px;\n    font-family: 'Roboto', 'Spectral SC', sans-serif;\n  }\n  .projectItem__title {\n    font-family: 'Roboto', 'Spectral SC', sans-serif;\n    color: var(--blue);\n    font-size: 2.2rem;\n  }\n  .projectItem__desc {\n    color: var(--blue);\n    font-size: 1.6rem;\n    font-family: 'Roboto', 'Spectral SC', sans-serif;\n    margin-top: 1rem;\n  }\n  @media only screen and (max-width: 768px) {\n    .projectItem__img {\n      height: 350px;\n    }\n  }\n"])));function G(e){var n=e.img,t=void 0===n?q:n,i=e.title,a=void 0===i?"Project Name":i,r=e.desc,o=void 0===r?"Lorem ipsum dolor sit amet":r,c=e.link,l=void 0===c?"#":c,d=e.dep,m=void 0===d?"View Project":d;return Object(h.jsxs)(V,{children:[Object(h.jsxs)(s.b,{to:"/projects",className:"projectItem__img",children:[Object(h.jsx)("img",{src:t,alt:"project img"})," "]}),Object(h.jsxs)("div",{className:"projectItem__text",children:[Object(h.jsx)(s.b,{to:"#",className:"projectItem__info",children:Object(h.jsx)("h3",{src:l,className:"projectItem__title",children:a})}),Object(h.jsx)("p",{className:"projectItem_desc",children:o}),Object(h.jsx)("p",{children:Object(h.jsx)("a",{href:l,target:"_blank",rel:"noreferrer",children:"GitHub code"})}),Object(h.jsx)("p",{children:Object(h.jsx)("a",{href:m,target:"_blank",rel:"noreferrer",children:"See project"})})]})]})}var K,Q=t(57),U=t.p+"static/media/Nutrition-app.ce1a9b3b.png",Y=t.p+"static/media/scheduler.d5a37c0d.png",X=t.p+"static/media/ecommerce.e8493dd7.jpg",Z=t.p+"static/media/pwd-gen.9645b7d0.png",$=t.p+"static/media/readmehw.bd02028f.jpg",ee=[{id:Object(Q.a)(),name:"Nutrival",desc:"A nutrition application that will show the nutrition values of any food item and recipe suggestions.",img:U,url:"https://github.com/Modsia16/Nutritional-Value",dep:"https://modsia16.github.io/Nutritional-Value/"},{id:Object(Q.a)(),name:"Daily Scheduler",desc:"An easy to use real time daily schedule.",img:Y,url:"https://github.com/Modsia16/simplescheduler",dep:"https://modsia16.github.io/simplescheduler/"},{id:Object(Q.a)(),name:"E-Commerce Backend",desc:"Backend e-commerce inventory for a clothing store.",img:X,url:"https://github.com/Modsia16/e-commerce-back-end",dep:"https://modsia16.github.io/e-commerce-back-end/"},{id:Object(Q.a)(),name:"Password Generator",desc:"Generates custom passwords up to 128 words.",img:Z,url:"https://github.com/Modsia16/neverending-password-generator",dep:"https://modsia16.github.io/neverending-password-generator/"},{id:Object(Q.a)(),name:"Professional README Generator",desc:"Generates a README file in your CLI for any project.",img:$,url:"https://github.com/Modsia16/node-readme-gen",dep:"https://github.com/Modsia16/node-readme-gen/deployments/activity_log?environment=github-pages"},{id:Object(Q.a)(),name:"Code Quiz",desc:"Timed quiz to test your code knowledge.",img:q,url:"https://github.com/Modsia16/Code-quiz",dep:"https://modsia16.github.io/Code-quiz/"}];t(51);F.a.use([W.a]);var ne,te=b.b.div(K||(K=Object(m.a)(["\ncolor: var(--blue);\npadding: 5rem 0;\n.projects__allItems {\n  display: flex;\n  gap: 3rem;\n  margin-top: 5rem;\n}\n.swiper-container {\n  padding-top: 8rem;\n  max-width: 100%;\n}\n.swiper-button-prev,\n.swiper-button-next {\n  position: absolute;\n  height: 50px;\n  width: 50px;\n  background: var(--blue);\n  z-index: 10;\n  right: 60px;\n  left: auto;\n  top: 0;\n  transform: translateY(50%);\n  color: var(--black);\n  border-radius: 8px;\n}\n.swiper-button-next {\n  right: 0;\n}\n.swiper-button-prev::after,\n.swiper-button-next::after {\n  font-size: 2rem;\n}\n@media only screen and (max-width: 768px) {\n  .projects__allItems {\n    flex-direction: column;\n    max-width: 400px;\n    margin: 0 auto;\n    margin-top: 7rem;\n    gap: 5rem;\n    .projectItem__img {\n      width: 100%;\n    }\n  }\n}\n"])));function ie(){return Object(h.jsx)(te,{children:Object(h.jsxs)("div",{className:"container",children:[Object(h.jsx)(L,{heading:"Projects",subheading:"some of my recent"}),Object(h.jsx)("div",{className:"projects-all",children:Object(h.jsx)(B.a,{spaceBetween:30,slidesPerView:3,navigation:!0,breakpoints:{650:{slidesPerView:1},768:{slidesPerView:2},1200:{slidesPerView:3}},children:ee.map((function(e,n){if(!(n>=6))return Object(h.jsx)(E.a,{children:Object(h.jsx)(G,{title:e.name,img:e.img,desc:e.desc,link:e.url,dep:e.dep})},e.id)}))})})]})})}var ae,re=b.b.div(ne||(ne=Object(m.a)(["\nbackground-color: var(--blue);\ncolor: var(--white);\npadding: 2rem;\nfont-family: 'Roboto', 'Spectral SC', sans-serif;\n.contact__wrapper {\n    background-color: var(--white);\n    color: var(--blue);\n    border-radius: 5px;\n    padding: 4rem 0; \n    text-align: center;\n}\n.contact__heading {\n    font-size: 2.5rem;\n    margin-bottom: 4rem;\n}\n@media screen only screen and (max-width: 768px) {\n    .contact__heading {\n        font-size: 1.5rem;\n    }\n"])));function oe(){return Object(h.jsx)(re,{children:Object(h.jsx)("div",{className:"container",children:Object(h.jsxs)("div",{className:"contact__wrapper",children:[Object(h.jsx)(y,{children:"Contact me"}),Object(h.jsx)("h3",{className:"contact__heading",children:"Let's work together"}),Object(h.jsx)(I,{btnText:"Contact Now",btnLink:"/contact"})]})})})}var ce=b.b.div(ae||(ae=Object(m.a)(["\nbackground-color: var(--white);\ncolor: var(--blue);\npadding: 2rem;\nfont-family: 'Roboto', 'Spectral SC', sans-serif;\n.resume__wrapper {\n    background-color: var(--blue);\n    color: var(--white);\n    border-radius: 5px;\n    padding: 4rem 0; \n    text-align: center;\n}\n.resume__heading {\n    font-size: 2.5rem;\n    margin-bottom: 4rem;\n}\n@media screen only screen and (max-width: 768px) {\n    .resume__heading {\n        font-size: 1.5rem;\n    }\n"])));function se(){return Object(h.jsx)(ce,{children:Object(h.jsx)("div",{className:"container",children:Object(h.jsxs)("div",{className:"resume__wrapper",children:[Object(h.jsx)(y,{children:"See my"}),Object(h.jsx)("h3",{className:"resume__heading",children:"Resume and CV"}),Object(h.jsx)(I,{btnText:"Resume and CV",btnLink:"/Resume"})]})})})}function le(){return Object(h.jsxs)("div",{children:[Object(h.jsx)(A,{}),Object(h.jsx)(J,{}),Object(h.jsx)(ie,{}),Object(h.jsx)(oe,{}),Object(h.jsx)(se,{})]})}var de,me,be=t.p+"static/media/self2.89df6788.png",je=b.b.div(de||(de=Object(m.a)(["\n    display: flex;;\n    align-items: center;\n    justify-content: flex-start;\n    position: relative;\n    margin-top: 3rem;\n    .title {\n        font-size: 1.5rem;\n        margin-right: 1rem;\n    }\n    .ed-subhead {\n        margin-right: 3rem;\n    }\n    .items {\n        display: flex;\n        gap: 0.5rem;\n    }\n    .item {\n        color: var(--white);\n        background-color: var(--blue);\n        border-radius: 1rem;\n        padding: 0.5rem;\n        .para {\n            max-width: 100rem;\n        }\n    }\n    @media only screen and (max-width: 768px) {\n        flex-direction: column;\n        align-items: flex-start;\n        gap: 1rem;\n        .items {\n            position: initial;\n            gap: 1rem;\n        }\n        .title {\n            font-size: 1.5rem;\n        }\n    }\n"])));function he(e){var n=e.title,t=void 0===n?"this is an item":n,i=e.items,a=void 0===i?["HTML","CSS","JS","React"]:i;return Object(h.jsxs)(je,{children:[Object(h.jsx)("div",{className:"ed-subhead",children:Object(h.jsx)("h1",{className:"title",children:t})}),Object(h.jsx)("div",{className:"items",children:a.map((function(e,n){return Object(h.jsx)("div",{className:"item",children:Object(h.jsx)(y,{children:e})},n)}))})]})}var pe,ue=b.b.div(me||(me=Object(m.a)(["\ncolor: var(--blue);\npadding: 15rem 0 10rem 0;\nfont-family: 'Roboto', 'Spectral SC', sans-serif;\n.top-section{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 2rem;\n}\n.left {\n    flex: 3;\n}\n.right {\n    flex: 2;\n}\n.about__subheading {\n    font-size: 2rem;\n    margin-bottom: 2rem;\n    span {\n        font-size: 1.5rem;\n        background: var(--blue);\n        color: var(--grey);\n        padding: 0.5rem 1rem;\n        border-radius: 5px;\n    }\n}\n.about__heading {\n    font-size: 3rem;\n    margin-bottom: 3rem;\n}\n.about__desc {\n    margin-bottom: 4rem;\n    .para {\n        max-width: 100%;    \n    }\n}\n.right {\n    img {\n        width: 300px;\n        height: 450px;\n        border: 1px solid var(--grey);\n    }\n}\n.about-info-items {\n    margin-top: 5rem;\n}\n.about-info-item {\n    margin-bottom: 5rem;\n}\n.ed-heading {\n    font-size: 2rem;\n}\n\n"])));function xe(){return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)(ue,{children:Object(h.jsxs)("div",{className:"container",children:[Object(h.jsxs)("div",{className:"top-section",children:[Object(h.jsxs)("div",{className:"left",children:[Object(h.jsxs)("p",{className:"about__subheading",children:["Hello, I am ",Object(h.jsx)("span",{children:"Carina Diaz"})]}),Object(h.jsx)("h2",{className:"about__heading",children:"A junior web developer"}),Object(h.jsx)("div",{className:"about__desc",children:Object(h.jsxs)(y,{children:["I am from the central valley in California. Since I was young I have always had knack for problem solving and Since I was young I always had a passion for learning and creating new things. Currently I am enrolled in a coding boot camp hosted at UC Davis and I hope to be junior web developer after completing the program.",Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),"I started learning web development in ernest in 2019 and have been working growing my skill since then. I find coding to be a creative outlet and I am always looking for a new challeng.",Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),"I would love to work with you and learn more about your projects. My goal is to be a part of a team that will help you to build something great."]})}),Object(h.jsx)(I,{btnLink:"/resume",btnText:"Download Resume"})]}),Object(h.jsx)("div",{className:"right",children:Object(h.jsx)("img",{src:be,alt:""})})]}),Object(h.jsxs)("div",{className:"about-info-items",children:[Object(h.jsxs)("div",{className:"about-info-item",children:[Object(h.jsx)("h1",{className:"ed-heading",children:"Education"}),Object(h.jsx)(he,{title:"Certs",items:["UC Davis, Davis, CA - Full Stack Web Development"]}),Object(h.jsx)(he,{title:"College",items:["CSU Stainslaus, Turlock, CA - BS Health Sciences","SJDC, Stockton, CA - AS Mathematics and Science"]})]}),Object(h.jsx)("h1",{className:"ed-heading",children:"Skills"}),Object(h.jsxs)("div",{className:"about-info-item",children:[Object(h.jsx)(he,{title:"Browser Based Technologies",items:["HTML/CSS","JavaScript/jQuery","Bootstrap","Handlebars"],addlitems:["Local storage","Session Storage","IndexDB"]}),Object(h.jsx)(he,{title:" Databases and SSDs",items:["User Authentication","PWAs","MERN Stack","MySQL"]}),Object(h.jsx)(he,{title:"API Interaction",items:["API","JSON","AJAX"]}),Object(h.jsx)(he,{title:"CS applied to JavaScript",items:["Algorithms","Efficiency","Time Complexity","Big O Notation","Data Structures"]})]}),Object(h.jsx)("h1",{className:"ed-heading",children:"Experience"}),Object(h.jsx)("div",{className:"about-info-item",children:Object(h.jsx)(he,{title:"Projects",items:["Timed quiz","Fitness Tracker","Fullstack applications","Personal website"]})})]})]})})})}var ge,fe=b.b.div(pe||(pe=Object(m.a)(["\npadding: 10rem 0;\ncolor: var(--blue);\n.projects_grid {\n    display: grid;\n    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n    grid-gap: 2rem;\n    margin-top: 2rem;\n}\n.projects_search {\nposition: relative;\nwidth: 300px;\nmargin-top: 2rem;\n}\n.projects_search input {\n    width: 100%;\n    font-size: 1rem;\n    padding: 0.5rem;\n    border: 3px solid var(--blue);\n    border-radius: 5px;\n}\n.projects_search .searchIcon {\n    position: absolute;\n    width: 2rem;\n    height: 2rem;\n    right: 1rem;\n    margin-top: 0.25rem;\n}\n.projects_search .searchIcon path {\n    color: var(--blue);\n}\n@media only screen and (max-width: 768px) {\n    .projects_search,\n    .projects_search form,\n    .projects_search input,\n     {\n        width: 100%;\n    }\n}\n"])));function Oe(){var e=Object(r.useState)(""),n=Object(d.a)(e,2),t=n[0],i=n[1],a=Object(r.useState)(ee),o=Object(d.a)(a,2),c=o[0],s=o[1];return Object(r.useEffect)((function(){""!==t&&s((function(){return ee.filter((function(e){return e.name.toLowerCase().match(t.toLowerCase())}))}))}),[t]),Object(h.jsx)(h.Fragment,{children:Object(h.jsx)(fe,{children:Object(h.jsxs)("div",{className:"container",children:[Object(h.jsx)(L,{heading:"Projects",subheading:"some of my recent"}),Object(h.jsx)("div",{className:"projects_search",children:Object(h.jsxs)("form",{children:[Object(h.jsx)("input",{type:"text",placeholder:"Search",value:t,onChange:function(e){e.preventDefault(),i(e.target.value),!e.target.value.length>0&&s(ee)}}),Object(h.jsx)(j.e,{className:"searchIcon"})]})}),Object(h.jsxs)("div",{className:"projects_grid",children:[c.map((function(e){return Object(h.jsx)(G,{title:e.name,desc:e.desc,img:e.img},e.id)})),";"]})]})})})}var ve,ye=b.b.div(ge||(ge=Object(m.a)(["\n  width: 100%;\n  font-family: 'Roboto', 'Spectral SC', sans-serif;\n  .form-group {\n    width: 100%;\n    margin-bottom: 2rem;\n  }\n  label {\n    font-size: 1.8rem;\n  }\n  input,\n  textarea {\n    width: 100%;\n    font-size: 2rem;\n    padding: 1.2rem;\n    color: var(--blue);\n    background-color: var(--grey);\n    outline: none;\n    border: 2px solid var(--blue);\n    border-radius: 5px;\n    margin-top: 1rem;\n  }\n  textarea {\n    min-height: 250px;\n    resize: vertical;\n  }\n"])));function we(){var e=Object(r.useState)(""),n=Object(d.a)(e,2),t=n[0],i=n[1],a=Object(r.useState)(""),o=Object(d.a)(a,2),c=o[0],s=o[1],l=Object(r.useState)(""),m=Object(d.a)(l,2),b=m[0],j=m[1];return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)(ye,{children:[Object(h.jsx)("div",{className:"form-group",children:Object(h.jsxs)("label",{htmlFor:"name",children:["Your Name",Object(h.jsx)("input",{type:"text",id:"name",name:"name",value:t,onChange:function(e){return i(e.target.value)}})]})}),Object(h.jsx)("div",{className:"form-group",children:Object(h.jsxs)("label",{htmlFor:"email",children:["Your Email",Object(h.jsx)("input",{type:"email",id:"email",name:"email",value:c,onChange:function(e){return s(e.target.value)}})]})}),Object(h.jsx)("div",{className:"form-group",children:Object(h.jsxs)("label",{htmlFor:"message",children:["Your message",Object(h.jsx)("textarea",{type:"text",id:"message",name:"message",value:b,onChange:function(e){return j(e.target.value)}})]})}),Object(h.jsx)(I,{btnLink:"/contact",btnText:"Send"})]})})}var _e,Se=b.b.div(ve||(ve=Object(m.a)(["\n    padding: 2rem 0;\n    display: flex;\n    align-items: center;\n    gap: 1rem;\n    border-radius: 5rem;\n    margin-bottom: 2rem;\n    .info {\n        background-color: var(--blue);\n        color : var(--white);\n        padding: 1rem 2rem;\n        border-radius: 5px;\n    }\n    "])));function ke(e){var n=e.icon,t=void 0===n?Object(h.jsx)(j.c,{}):n,i=e.text,a=void 0===i?"I need to text":i;return Object(h.jsx)(Se,{children:Object(h.jsxs)("div",{children:[Object(h.jsx)("div",{className:"icon",children:t}),Object(h.jsx)("div",{className:"info",children:Object(h.jsx)(y,{children:a})})]})})}var Ne,Ce=b.b.div(_e||(_e=Object(m.a)(["\n  padding: 10rem 0;\n  color: var(--blue);\n  .contactSection__wrapper {\n    display: flex;\n    gap: 5rem;\n    margin-top: 7rem;\n    justify-content: space-between;\n    position: relative;\n  }\n  .contactSection__wrapper::after {\n    position: absolute;\n    content: '';\n    width: 2px;\n    height: 50%;\n    background-color: var(--gray-1);\n    left: 50%;\n    top: 30%;\n    transform: translate(-50%, -50%);\n  }\n  .right {\n    max-width: 1000px;\n    width: 100%;\n    border-radius: 10px;\n  }\n  @media only screen and (max-width: 768px) {\n    .contactSection__wrapper {\n      flex-direction: column;\n    }\n    .contactSection__wrapper::after {\n      display: none;\n    }\n    .left,\n    .right {\n      max-width: 100%;\n    }\n    .right {\n      padding: 4rem 2rem 2rem 2rem;\n    }\n  }\n"])));function Ie(){return Object(h.jsx)(Ce,{children:Object(h.jsxs)("div",{className:"container",children:[Object(h.jsx)(L,{heading:"contact",subheading:"how to reach me"}),Object(h.jsxs)("div",{className:"contactSection__wrapper",children:[Object(h.jsx)("div",{className:"left",children:Object(h.jsx)(ke,{icon:Object(h.jsx)(j.c,{}),text:"Phone"})}),Object(h.jsx)("div",{className:"left",children:Object(h.jsx)(ke,{icon:Object(h.jsx)(j.b,{}),text:"Email"})}),Object(h.jsx)("div",{className:"right",children:Object(h.jsx)(we,{})})]})]})})}function ze(){return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)(Ie,{})})}var De,Ae=b.b.div(Ne||(Ne=Object(m.a)(["\nbackground-color: var(--white);\ncolor: var(--blue);\npadding: 2rem;\nfont-family: 'Roboto', 'Spectral SC', sans-serif;\n.resumeDl__wrapper {\n    background-color: var(--blue);\n    color: var(--white);\n    margin-top: 5rem;\n    border-radius: 5px;\n    padding: 2rem;\n    text-align: center;\n}\n.resume__heading {\n    font-size: 2rem;\n    margin: 4rem 0;\n    text-align: center;\n}\n.resume__contact {\n    text-align: right;\n    margin-top: 2rem;\n}\n.resume__name {\n    font-size: 2rem;\n    margin: 2rem 0;\n}\n.resume__sub{\n    font-size: 1.5rem;\n    margin: 2rem 0;\n}\n.area_sub .area_subhead {\n    font-size: 1.5rem;\n    margin-right: 10rem;\n}\n\n@media screen only screen and (max-width: 768px) {\n    .resume__heading {\n        font-size: 1.5rem;\n    }\n"])));function Me(){return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)(Ae,{children:Object(h.jsxs)("div",{className:"container",children:[Object(h.jsx)("div",{className:"resumeDl__wrapper",children:Object(h.jsxs)(y,{children:["Download my Resume",Object(h.jsx)(I,{btnText:"Resume",btnLink:"/resume"})]})}),Object(h.jsx)("div",{className:"resume__contact",children:Object(h.jsxs)("ul",{children:[Object(h.jsx)("li",{children:"phone"}),Object(h.jsx)("li",{children:"email"}),Object(h.jsx)("li",{children:"github"}),Object(h.jsx)("li",{children:"linkedin"})]})}),Object(h.jsx)("div",{children:Object(h.jsx)("h1",{className:"resume__name",children:"Carina Diaz"})}),Object(h.jsxs)("div",{className:"resume__body",children:[Object(h.jsx)("h2",{children:"Intro"}),Object(h.jsx)("br",{}),Object(h.jsx)("p",{children:"Accomplished coordinator and administrator with experience in providing support to high-level operations and leadership for 8+ years. Helped with everything from facility representative, to data entry and preparing well-researched documents. Skilled at time-management, MS Office and seeking to balance my professional experience with my software development skills."}),Object(h.jsx)("div",{children:Object(h.jsx)("h2",{className:"resume__sub",children:"Education"})}),Object(h.jsxs)("div",{children:[Object(h.jsx)("h4",{className:"area_subhead",children:"UC Davis, Davis, California June 2021 - December 2021"}),Object(h.jsx)("h5",{className:"area_sub",children:"Full Stack Web Developer Certification"}),Object(h.jsxs)("ul",{children:[Object(h.jsx)("li",{children:"Front end and back end technology education"}),Object(h.jsx)("li",{children:"Browser Based Technologies and Databases"}),Object(h.jsx)("li",{children:"Computer Science applied to JavaScript"}),Object(h.jsx)("li",{children:"Server Side Development"}),Object(h.jsx)("li",{children:"API Interaction"})]}),Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),Object(h.jsx)("h4",{className:"area_subhead",children:"CSU Stanislaus, Turlock, California January 2016 - May 2020"}),Object(h.jsx)("h5",{className:"area_sub",children:"Bachelors of Science, Haelth Science"}),Object(h.jsxs)("ul",{children:[Object(h.jsx)("li",{children:"Focus on health care leadership and administration"}),Object(h.jsx)("li",{children:"Work effectively within health care systems and/or organizations"}),Object(h.jsx)("li",{children:"Employ evidence-based practice"}),Object(h.jsx)("li",{children:"Apply quality improvement"}),Object(h.jsx)("li",{children:"Implement and evaluate programs relating to health in a multicultural society"})]}),Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),Object(h.jsx)("h4",{className:"area_subhead",children:"San Joaquin Delta College, Stockton, California January 2010 - May 2016"}),Object(h.jsx)("h5",{className:"area_sub",children:"Associates of Science, Mathematics and Scienc"}),Object(h.jsxs)("ul",{children:[Object(h.jsx)("li",{children:"Interdisciplinary studies of mathematics and science"}),Object(h.jsx)("li",{children:"Focus on biology and chemistry"})]})]}),Object(h.jsx)("div",{children:Object(h.jsx)("h2",{className:"resume__sub",children:"Skills"})}),Object(h.jsxs)("div",{children:[Object(h.jsx)("h4",{className:"area_subhead",children:"Computer Science, Browser Based Technologies and Databases"}),Object(h.jsx)("p",{children:"HTML/CSS, JavaScript/jQuery, Git, Responsive Design, Bootstrap, Handlebars, Local Storage, Session Storage, IndexedDB, React.js, MySQL, NoSQL, User Authentication, Progressive Web Applications PWAs, MERN Stack MongoDB, Express.js, React.js, Node.js, API, JSON, AJAX, Algorithms Searches, Sorts, Big O Notation, data Structures, Microsoft Office"}),Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),Object(h.jsx)("h4",{className:"area_subhead",children:"Interdisciplinary Professional Skills"}),Object(h.jsx)("p",{children:"Office management and administration, Data entry, Scheduling and Time Management, Research skills, Problem solving, Detail oriented, Leadership, Communication, Project management, Process improvement, Purchasing, Inventory control, Customer service, Record keeping, Trainer"}),Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),Object(h.jsx)("h4",{className:"area_subhead",children:"San Joaquin Delta College, Stockton, California January 2010 - May 2016"})]}),Object(h.jsx)("div",{children:Object(h.jsx)("h2",{className:"resume__sub",children:"Work Experience"})}),Object(h.jsxs)("div",{children:[Object(h.jsx)("h4",{className:"area_subhead",children:"Health And Safety Coordinator \u2014 One Community Health, Sept 2020 - Sept 2021"}),Object(h.jsx)("p",{children:"Managed Health and Safety programs for regulatory compliance and injury reduction. Gather and interpret data to identify and prevent issues before they cause major problems. Developed and coordinated departmental projects that contributed to equipment design changes. Business system modifications and revised employee work habits. As co-instructor for behavior-based safety process, trained and coached facility-wide staff employees and managers. Participated on the Executive Leadership Committees as well the Safety Committee lead that developed action plans for safety improvement and injury reduction. Hazard analysis, safety audits, and evaluated work job task requirements."}),Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),Object(h.jsx)("h4",{className:"area_subhead",children:"Compliance Coordinator \u2014 Cintas Corporation, June 2017 - Sept 2020, Stockton, CA"}),Object(h.jsx)("p",{children:"Promoted to the role of Compliance Coordinator. Health and Safety Coordinator HSC duties, data management, maintenance coordinator, environmental and regulatory compliance administrator, accomplish organizational goals, manage critical staff, track and evaluate leading/lagging indicators, accident investigation, training coordinator and team lead. Assist HR with workers compensation reporting and representation tasks."}),Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),Object(h.jsx)("h4",{className:"area_subhead",children:"Maintenance Administrator \u2014 Cintas Corporation, Dec 2014 - June 2017, Stockton, CA"}),Object(h.jsx)("p",{children:"Promoted to maintenance administrator. Supervisor assistant, database and document management. Scheduling staff and contractors, safety inspections, managed facility SharePoint site. Maintenance department health, safety, and regulatory compliance lead"}),Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),Object(h.jsx)("h4",{className:"area_subhead",children:"Quality Assurance \u2014 Cintas Corporation, Jan 2010 - Dec 2014, Stockton, CA"}),Object(h.jsx)("p",{children:"Monitor quality of customer return products, maintain inventory, delivery scheduling, department safety and training coordination"})]})]})]})})})}function Le(){return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)(s.a,{children:[Object(h.jsx)(u,{}),Object(h.jsxs)(l.c,{children:[Object(h.jsx)(l.a,{path:"/about",element:Object(h.jsx)(xe,{})}),Object(h.jsx)(l.a,{path:"/projects",element:Object(h.jsx)(Oe,{})}),Object(h.jsx)(l.a,{path:"/contact",element:Object(h.jsx)(ze,{})}),Object(h.jsx)(l.a,{path:"/resume",element:Object(h.jsx)(Me,{})}),Object(h.jsx)(l.a,{path:"/",element:Object(h.jsx)(le,{})})]}),Object(h.jsx)(_,{})]})})}var Re=Object(b.a)(De||(De=Object(m.a)(["\n    *{\n        padding: 0;\n        margin: 0;\n        box-sizing: border-box;\n    }\n    :root{\n        --white : #ffffff;\n        --black : #000000;\n        --grey : #e1e1e1;\n        --light-grey : #C0C0C0;\n        --dark-grey : #333;\n        --red : #ff0000;\n        --dark-slate-grey : #2f4f4f; \n        --blue : #000080;\n        --yellow : #C6D32C;\n        --light-blue : #27B5DD;\n    }\n    ul, li {\n        list-style: none;\n        text-decoration: none;\n    }\n    a {\n        text-decoration: none;\n        color: var(--yellow);\n    }\n    .active{\n        color: var(--white);\n    }\n    button {\n        outline: none;\n    }\n    .container {\n        max-width: 1200px;\n        margin: 0 auto;\n        width: 80%;\n    }\n    "])));c.a.render(Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(Re,{}),Object(h.jsx)(Le,{})]}),document.getElementById("root"))}},[[52,1,2]]]);
//# sourceMappingURL=main.1c7a2fbb.chunk.js.map
import{i as j,g,T as W,a as $,A as H,S as K,N as Z,K as Q}from"./assets/vendor-Drg3P1Pj.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function o(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(n){if(n.ep)return;n.ep=!0;const s=o(n);fetch(n.href,s)}})();function U(){const t=document.querySelector(".App");t?t.classList.add("animate_content"):console.error(".App section not found");const e=document.querySelector("#switch").checked?"dark":"light";document.documentElement.setAttribute("data-theme",e);const o=document.querySelector("#toggle-main");o?o.checked=e==="dark":console.error("#toggle-main not found"),setTimeout(()=>{t?t.style.display="none":console.error(".App section not found")},1e3),[".hdr",".ftr",".tch",".hr",".prj",".bnf",".abt",".qtn",".rws",".clb",".top"].forEach(n=>{const s=document.querySelector(n);s?s.style.display="block":console.error(`Element with class ${n} not found`)})}document.querySelector(".start-btn").addEventListener("click",U);document.querySelector("#toggle-main").addEventListener("change",()=>{const e=document.querySelector("#toggle-main").checked?"dark":"light";document.documentElement.setAttribute("data-theme",e)});(()=>{const t=document.querySelector(".js-menu"),e=document.querySelector(".js-menu"),o=document.querySelector(".js-menu-close"),r=document.querySelector(".nav-list");e.addEventListener("click",n),o.addEventListener("click",n);function n(){const s=e.getAttribute("aria-expanded")==="true"||!1;e.setAttribute("aria-expanded",!s),t.classList.toggle("is-open"),document.body.classList.toggle("is-open")}r.addEventListener("click",s=>{s.target.nodeName==="A"&&s.target.nodeName==="A"&&(t.classList.remove("is-open"),document.body.classList.remove("is-open"))})})();function Y(){return document.body.style.overflow="hidden",j.show({class:"toastStyle",theme:"dark",class:"toastStyle",title:"Thank you for your interest in cooperation!",titleColor:"#00b068",message:"The manager will contact you shortly to discuss further details and opportunities for cooperation. Please stay in touch.",messageColor:"#292929",position:"center",timeout:0,close:!0,backgroundColor:"#f0f0f0",overlay:!0,overlayColor:"rgba(0, 0, 0, 0.6)",progressBar:!1,closeOnEscape:!0,closeOnClick:!1,overlayClose:!0,onClosed:R})}function G(t){return document.body.style.overflow="hidden",j.show({class:"toastStyle",message:`${t}`,messageColor:"#292929",backgroundColor:"#f0f0f0",overlayColor:"rgba(0, 0, 0, 0.6)",position:"center",timeout:0,close:!0,backgroundColor:"#f0f0f0",overlay:!0,overlayColor:"rgba(0, 0, 0, 0.6)",progressBar:!1,closeOnEscape:!0,closeOnClick:!1,overlayClose:!0,onClosed:R})}function R(){document.body.style.overflow=""}const ee=document.querySelector(".scroll-to-top");ee.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})});window.onscroll=()=>te();function te(){const t=document.querySelector(".scroll-to-top");window.scrollY>60?t.classList.remove("js-transparent"):t.classList.add("js-transparent")}document.addEventListener("DOMContentLoaded",()=>{g.registerPlugin(W);const t=["Fullstack developer","JavaScript Developer","Frontend Developer"];g.from(".hi",{y:100,duration:1,delay:1,ease:"power3.out",onComplete:()=>{e.play()}});const e=g.timeline({repeat:-1}).pause();t.forEach(o=>{const r=g.timeline({repeat:1,yoyo:!0,repeatDelay:.5});r.to(".text",{duration:2,text:o}),e.add(r)})});const w=document.querySelector(".done-icon"),h=document.querySelector(".input-info"),f=document.querySelector(".invalid-email"),b=document.querySelector(".form-input");se();function se(){const t=JSON.parse(localStorage.getItem("work-Together-request"));if(t!==null)for(const e in t)t.hasOwnProperty(e)&&(h.elements[e].value=t[e])}const k={},oe=t=>{const e=t.target.name,o=t.target.value.trim();k[e]=o,localStorage.setItem("work-Together-request",JSON.stringify(k))};function z(){/^\w+(\.\w+)?@[a-zA-Z_]+?(\.[a-zA-Z]{2,3})+$/.test(b.value)&&b.value.trim().length>0?(w.classList.remove("is-hidden"),f.classList.add("is-hidden-text")):f.classList.remove("is-hidden-text")}function ne(){b.value.trim().length===0?(f.classList.add("is-hidden-text"),w.classList.add("is-hidden")):z()}async function re(t){t.preventDefault(),z();const e=JSON.parse(localStorage.getItem("work-Together-request"));try{await ae(e),Y(),h.reset(),localStorage.removeItem("work-Together-request"),w.classList.add("is-hidden"),f.classList.add("is-hidden-text")}catch(o){G(o.message)}}const ie="https://portfolio-js.b.goit.study/api";async function ae(t){try{return(await $.post(`${ie}/requests`,t)).data}catch(e){throw e}}h.addEventListener("submit",re);h.addEventListener("change",oe);b.addEventListener("input",ne);const ce="/landing-page-2/assets/icons-Ifg3to4T.svg",E="/landing-page-2/assets/projects-desk-03-min-bAztutHK.png",le="/landing-page-2/assets/projects-desk-03@2x-min-D7O6BJsL.png",de="/landing-page-2/assets/projects-mob-03-min-BsXsyoM6.png",pe="/landing-page-2/assets/projects-mob-03@2x-min-tmcSzpo2.png",ge="/landing-page-2/assets/projects-tabl-03-min-ZgDTbOh9.png",ue="/landing-page-2/assets/projects-tabl-03@2x-min-Dqd8dn0C.png",q="/landing-page-2/assets/projects-desk-04-min-yxZx66BP.png",me="/landing-page-2/assets/projects-desk-04@2x-min-DHJNdR6B.png",fe="/landing-page-2/assets/projects-mob-04-min-5yr3aGDi.png",be="/landing-page-2/assets/projects-mob-04@2x-min-BeXemoj4.png",he="/landing-page-2/assets/projects-tabl-04-min-Dt9XScdK.png",ve="/landing-page-2/assets/projects-tabl-04@2x-min-B8Ml2TOY.png",T="/landing-page-2/assets/projects-desk-05-min-CfD1cLSZ.png",xe="/landing-page-2/assets/projects-desk-05@2x-min-BRPn2X1J.png",ye="/landing-page-2/assets/projects-mob-05-min-Db3py1Xm.png",je="/landing-page-2/assets/projects-mob-05@2x-min-B8zvmCB6.png",we="/landing-page-2/assets/projects-tabl-05-min-F3tbbktz.png",Se="/landing-page-2/assets/projects-tabl-05@2x-min-BRqBFzgK.png",_="/landing-page-2/assets/projects-desk-06-min-X_gqtJm5.png",Le="/landing-page-2/assets/projects-desk-06@2x-min-Dj8eCfdF.png",ke="/landing-page-2/assets/projects-mob-06-min-C9QNW9Tj.png",Ee="/landing-page-2/assets/projects-mob-06@2x-min-DEtw7lg5.png",qe="/landing-page-2/assets/projects-tabl-06-min-ugbcXMlD.png",Te="/landing-page-2/assets/projects-tabl-06@2x-min-CmmfjQzn.png",D="/landing-page-2/assets/projects-desk-07-min--lZv1p8n.png",_e="/landing-page-2/assets/projects-desk-07@2x-min-DmSkXiQs.png",De="/landing-page-2/assets/projects-mob-07-min-BSVWNsA-.png",Me="/landing-page-2/assets/projects-mob-07@2x-min-Dd3dUvIN.png",Ce="/landing-page-2/assets/projects-tabl-07-min-CPlUFmPk.png",Ae="/landing-page-2/assets/projects-tabl-07@2x-min-BDIDMcu4.png",M="/landing-page-2/assets/projects-desk-08-min-xocuOah2.png",Be="/landing-page-2/assets/projects-desk-08@2x-min-BIWP6k6v.png",Pe="/landing-page-2/assets/projects-mob-08-min-DBYeKoNQ.png",Ie="/landing-page-2/assets/projects-mob-08@2x-min-Ws78KLoX.png",Oe="/landing-page-2/assets/projects-tabl-08-min-C_fZqAdW.png",Fe="/landing-page-2/assets/projects-tabl-08@2x-min-DRzjhCHA.png",C="/landing-page-2/assets/projects-desk-09-min-DsvIyQeP.png",Ne="/landing-page-2/assets/projects-desk-09@2x-min-BvUdwZmo.png",$e="/landing-page-2/assets/projects-mob-09-min-DX2Z5Nr9.png",Re="/landing-page-2/assets/projects-mob-09@2x-min-Cc_85EFK.png",ze="/landing-page-2/assets/projects-tabl-09-min-DT00A0X5.png",Ve="/landing-page-2/assets/projects-tabl-09@2x-min-BOveHSsW.png",A=[{alt:"Mimino website",img:E,sources:{mobile:{"1x":de,"2x":pe},tablet:{"1x":ge,"2x":ue},desktop:{"1x":E,"2x":le}}},{alt:"Vyshyvanka vibes Landing Page",img:q,sources:{mobile:{"1x":fe,"2x":be},tablet:{"1x":he,"2x":ve},desktop:{"1x":q,"2x":me}}},{alt:"Power pulse webservice",img:T,sources:{mobile:{"1x":ye,"2x":je},tablet:{"1x":we,"2x":Se},desktop:{"1x":T,"2x":xe}}},{alt:"Chego jewelry website",img:_,sources:{mobile:{"1x":ke,"2x":Ee},tablet:{"1x":qe,"2x":Te},desktop:{"1x":_,"2x":Le}}},{alt:"Energy flow webservice ",img:D,sources:{mobile:{"1x":De,"2x":Me},tablet:{"1x":Ce,"2x":Ae},desktop:{"1x":D,"2x":_e}}},{alt:"Starlight studio landing page",img:M,sources:{mobile:{"1x":Pe,"2x":Ie},tablet:{"1x":Oe,"2x":Fe},desktop:{"1x":M,"2x":Be}}},{alt:"Fruitbox online store",img:C,sources:{mobile:{"1x":$e,"2x":Re},tablet:{"1x":ze,"2x":Ve},desktop:{"1x":C,"2x":Ne}}}],Xe=document.querySelector(".projects-list_img"),m=document.querySelector(".projects-button_loading"),Je=document.querySelector(".box-loader");let u=0,B=3;m.addEventListener("click",We);function We(){try{v(m,!1),P(!0);const e=A.slice(u,u+3);Xe.insertAdjacentHTML("beforeend",He(e)),u+=e.length,Ke(),v(m,!0),u>=A.length&&v(m,!1)}catch{Ze("❌ Sorry, there was a server error. Please try again later!")}finally{P(!1)}}function He(t){return t.map(({alt:e,img:o,sources:{mobile:r,tablet:n,desktop:s}})=>`
      <li>
        <picture>
          <source
            media="(max-width: 767px)"
            srcset="${r["1x"]} 1x, ${r["2x"]} 2x"
          />
          <source
            media="(max-width: 1279px)"
            srcset="${n["1x"]} 1x, ${n["2x"]} 2x"
          />
          <source
            media="(min-width: 1280px)"
            srcset="${s["1x"]} 1x, ${s["2x"]} 2x"
          />
          <img
            class="projects-img"
            src="${o}"
            alt="${e}"
          />
        </picture>  
        <div class="projects-blok_descr">
          <p class="projects-img_descr">React, JavaScript, Node JS, Git</p>
          <div class="projects-box_descr">
            <h3 class="projects-img_title">${e}</h3>
            <a
              href="https://bulatovatati.github.io/landing-page-2.0/"
              class="projects-button_link"
              target="_blank"
            >
              <span class="projects-button_text">VISIT</span>
              <svg class="projects-button_icon" width="24" height="24">
                <use href="${ce}#icon-arrow-projects"></use>
              </svg>
            </a>
          </div>
        </div> 
      </li>`).join("")}function Ke(){const e=document.querySelectorAll(".projects-list_img > li")[B];e&&e.scrollIntoView({behavior:"smooth",block:"start"}),B+=3}function v(t,e){t.style.display=e?"block":"none"}function P(t){Je.style.display=t?"block":"none"}function Ze(t){j.show({message:t,color:"red",position:"topRight",timeout:2e3})}document.addEventListener("DOMContentLoaded",()=>{new H(".accordion",{duration:300,showMultiple:!1,collapse:!0});const t=document.querySelectorAll(".faq-item"),e=t[0],o=t[0].querySelector(".faq-answer"),r=t[0].querySelector(".faq-arrow"),n=e.querySelector(".faq-question");e.classList.add("open"),o.classList.add("show"),r.classList.add("open"),n.classList.add("active"),t.forEach(s=>{const i=s.querySelector(".faq-question"),d=s.querySelector(".faq-answer"),p=s.querySelector(".faq-arrow"),J=()=>{d.classList.contains("show")?(s.classList.remove("open"),d.classList.remove("show"),p.classList.remove("open"),i.classList.remove("active")):(s.classList.add("open"),d.classList.add("show"),p.classList.add("open"),i.classList.add("active"))},L=()=>{t.forEach(a=>{a!==s&&(a.classList.remove("open"),a.querySelector(".faq-answer").classList.remove("show"),a.querySelector(".faq-arrow").classList.remove("open"),a.querySelector(".faq-question").classList.remove("active"))}),J()};i.addEventListener("click",L),p.addEventListener("click",a=>{a.stopPropagation(),d.classList.contains("show")?(s.classList.remove("open"),d.classList.remove("show"),p.classList.remove("open"),i.classList.remove("active")):L()})})});const x=document.querySelector(".reviews-swiper-wrapper"),c=document.querySelector(".reviews-prev-btn"),l=document.querySelector(".reviews-next-btn"),I=document.querySelector(".faq"),Qe="https://portfolio-js.b.goit.study/api/reviews";let y,V=!1;async function Ue(){try{const e=(await $.get(Qe)).data;if(!e){x.innerHTML='<li class="swiper-slide reviews-swiper-slide">Not Found</li>',F();return}const o=e.map(r=>`
   <li class="swiper-slide reviews-swiper-slide">
              <p class="reviews-text">${r.review}</p>
            </div>
            <div class="reviews-info-author">
                <img 
                  src="${r.avatar_url}" 
                  loading="lazy" 
                  alt="${r.author}" 
                  class="reviews-img" 
                  width="48" 
                  height="48">
                   <h3 class="reviews-item-subtitle">${r.author}</h3>
            </div>
          </li>
        `).join("");x.innerHTML=o,Ye(),V=!0}catch(t){console.error("Error fetching reviews:",t),x.innerHTML=`<li class="swiper-slide reviews-swiper-slide">
    <div class="error">
    <p>Not Found</p>
    <p>Failed to load reviews. Please try again later.</p>
    </div>
    </li>`,F()}}function Ye(){y=new K(".swiper-reviews",{modules:[Z,Q],slidesPerView:1,spaceBetween:32,navigation:{nextEl:".reviews-next-btn",prevEl:".reviews-prev-btn"},keyboard:{enabled:!0,onlyInViewport:!0},a11y:{prevSlideMessage:"Previous slide",nextSlideMessage:"Next slide"},allowTouchMove:!0,breakpoints:{320:{slidesPerView:1},1440:{slidesPerView:2}},on:{slideChange:O}}),O()}function O(){y.isBeginning?(c.classList.add("disabled"),c.setAttribute("disabled",!0)):(c.classList.remove("disabled"),c.removeAttribute("disabled")),y.isEnd?(l.classList.add("disabled"),l.setAttribute("disabled",!0)):(l.classList.remove("disabled"),l.removeAttribute("disabled"))}function F(){c.classList.add("disabled"),c.setAttribute("disabled",!0),l.classList.add("disabled"),l.setAttribute("disabled",!0)}function Ge(){const t={root:null,threshold:.2},e=new IntersectionObserver((o,r)=>{o.forEach(n=>{n.isIntersecting&&!V&&(Ue(),r.unobserve(n.target))})},t);I?e.observe(I):console.warn("Trigger section not found.")}Ge();let et=["HTML/CSS","JAVASCRIPT","REACT","NODE.JS","REACT NATIVE","TYPESCRIPT"],S=[];for(let t=0;t<=3;t++)S.push(...et);function N(t){let e=t.currentStyle||window.getComputedStyle(t),o=t.offsetWidth,r=parseFloat(e.marginLeft)+parseFloat(e.marginRight),n=parseFloat(e.paddingLeft)+parseFloat(e.paddingRight),s=parseFloat(e.borderLeftWidth)+parseFloat(e.borderRightWidth);return o+r-n+s}class X{constructor(e,o,r){this.rootElem=e,this.thread=o,this.reverse=r,this.position=0}init(){this.fillThread(),this.animate()}fillThread(){for(let e=0;e<2;e++)this.thread.forEach(o=>{this.rootElem.insertAdjacentHTML("beforeend",`<div class='banner__item'><span class = "banner__text">${o}</span>
                    <span class = "banner-point"></span></div>`)})}animate(){if(this.reverse){let e=this.rootElem.children[this.rootElem.children.length-1];this.position+=2;let o=N(e);this.position>=0&&(this.position=-o,this.rootElem.removeChild(e),this.rootElem.insertBefore(e,this.rootElem.children[0])),this.rootElem.style.transform=`translateX(${this.position}px)`}else{let e=this.rootElem.children[0];this.position-=2;let o=N(e);-this.position>=o&&(this.position=0,this.rootElem.removeChild(e),this.rootElem.appendChild(e)),this.rootElem.style.transform=`translateX(${this.position}px)`}requestAnimationFrame(()=>this.animate())}}let tt=new X(document.getElementById("banner__item"),S,!1),st=new X(document.getElementById("banner__item_bottom"),S,!0);tt.init();st.init();
//# sourceMappingURL=index.js.map
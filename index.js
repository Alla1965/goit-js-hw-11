/* empty css                      */import{S as u,i as c}from"./assets/vendor-5ObWk2rO.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();function d(o){const r="https://pixabay.com/",s="api/?",i=new URLSearchParams({key:"48829147-1041292ac799ae9595254ba31",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}),e=`${r}${s}${i}`;return fetch(e).then(t=>{if(t.ok)return t.json();throw new Error("Sorry, there are no images matching your search query. Please try again!")})}function m(o){return`
      ${o.slice(0,9).map(({largeImageURL:r,webformatURL:s,tags:i,likes:e,views:t,comments:a,downloads:l})=>`
      <li class="gallery-item">
          <a href="${r}">
            <img class="gallery-image" src="${s}" alt="${i}" />
          </a>
          <div class="statistic">
          <div class=statistic-item-likes> 
          <p class="count-header">Likes </p>
           <p class="count">${e}</p>
          </div>
            <div class=statistic-item-views> 
          <p class="count-header">Views </p>
           <p class="count">${t}</p>
          </div>
            <div class=statistic-item-comments> 
          <p class="count-header">Comments </p>
           <p class="count">${a}</p>
          </div>
           <div class=statistic-item-downloads> 
          <p class="count-header">Downloads </p>
           <p class="count">${l}</p>
          </div>
                     </div>
        </li>`).join("")}
  `}const n={formEl:document.querySelector(".container"),galleryContainer:document.querySelector(".gallery"),loader:document.getElementById("loader")},p=new u(".gallery a",{captionsData:"alt",captionDelay:250});n.formEl.addEventListener("submit",async o=>{o.preventDefault();const r=o.target.elements.query.value.trim();if(console.log("Запрос пользователя:",r),console.log("Длина запроса:",r.length),!r||r.length===0){c.error({title:"Ошибка",message:"Введите запрос для поиска!",position:"topRight"});return}n.loader.hidden=!1;try{await new Promise(i=>setTimeout(i,1e3));const{hits:s}=await d(r);if(!s||s.length===0){c.warning({message:"Sorry, there are no images matching your search query. Please try again!",position:"topCenter"});return}f(s)}catch(s){console.error("Ошибка запроса:",s)}finally{n.loader.hidden=!0}o.target.reset()});function f(o){console.log(o);const r=m(o);n.galleryContainer.innerHTML=r,p.refresh()}
//# sourceMappingURL=index.js.map

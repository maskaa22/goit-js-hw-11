import{i as c,S as u}from"./assets/vendor-5ObWk2rO.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();const m=r=>{const s=`https://pixabay.com/api/?${new URLSearchParams({key:"47161865-40d939b38272e547a09e56cd8",q:r,image_type:"photo",orientation:"horizontal",safesearch:!0})}`;return fetch(s,{method:"GET",headers:{Accept:"application/json",Host:"http://localhost:5173",Origin:"https://pixabay.com/api"}}).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()})},A=r=>r.map(t=>`
    <li class='galery-item'>
      <a href=${t.largeImageURL}>
        <img alt=${t.tags} src=${t.webformatURL} class='galery-image'/>
      </a>
      <ul class='list-info'>
        <li class='item-info'>
          <p class='title-info'>Likes</p>
          <p class='count-info'>${t.likes}</p>
        </li>
        <li class='item-info'>
          <p class='title-info'>Views</p>
          <p class='count-info'>${t.views}</p>
        </li>
        <li class='item-info'>
          <p class='title-info'>Comments</p>
          <p class='count-info'>${t.comments}</p>
        </li>
        <li class='item-info'>
          <p class='title-info'>Downloads</p>
          <p class='count-info'>${t.downloads}</p>
        </li>
      </ul>
    </li>
    `).join(""),l="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEpSURBVHgBrZXtEcIgDIZTzp5/3URHcSPpJLpBXcVd+FPwiqQt1y+SUNv3DuUkvA+0SQQg5Jx7WOt8zsBYyudEmXsPuijg3bbtB1ipa/jQYQ+UZVmBpHjyprEvyBTGSjf52zwbssdchBxhTkI4c2vtTTJMxcwgw6RObZReXDycMSYBcTWuQX/6RqcMQpCmIOPNHbG30SKAgkjmU8AJBJ3PpQ5GOO2KCYVFGEaFa9J+EbCEDIAsc5SCTCkFPjWXlHWD2Jvw5MNP2b1HBEzN42OZvhMRwmURly1cCvfrszSlC41PxR6SKjQs3g4Qg6z9PpdBxsitIhWDXrPDcZCtWplHHQEhzY+AiOZ7IJz5qg5iWygK/wjfFwD+T18pdfXe37e0j07jTeTBPZYfWztI8097RKsAAAAASUVORK5CYII=",f=document.querySelector(".form"),p=document.querySelector("ul.galery"),n=document.querySelector(".loader");c.settings({timeout:4e3,position:"topRight"});const g=r=>{r.preventDefault();const t=r.target.elements.search.value;if(t===""){c.error({iconUrl:l,iconColor:"#fff",imageWidth:24,messageColor:"#fff",message:"Please write a query for search"});return}n.style.display="block",m(t).then(({hits:s})=>{const i=A(s);if(s.length===0){c.error({iconUrl:l,iconColor:"#fff",imageWidth:24,messageColor:"#fff",message:"Sorry, there are no images matching your search query. Please try again!"}),n.style.display="none",p.innerHTML=i;return}n.style.display="none",p.innerHTML=i,f.reset()}).catch(s=>{console.log(s)})};f.addEventListener("submit",g);let d=new u(".galery a",{captionsData:"alt",captionDelay:250});d.on("show.simplelightbox");
//# sourceMappingURL=index.js.map

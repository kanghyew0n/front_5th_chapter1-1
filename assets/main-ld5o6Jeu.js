import{u as g,B as e,L as u,P as d,M as f,E as p,h as c,a as m}from"./auth-P5U_KJg6.js";const P={[`${e}/`]:f,[`${e}/profile`]:d,[`${e}/login`]:u},n=o=>{history.pushState(null,null,o),a()},a=()=>{const o=document.getElementById("root"),r=location.pathname,i=g.loggedIn();if(!i&&r===`${e}/profile`)return n(`${e}/login`);if(i&&r===`${e}/login`)return n(`${e}/`);const l=P[r]||p;o.innerHTML=l(),o.addEventListener("click",t=>{const s=t.target.closest("a");s&&(t.preventDefault(),t.target.id==="logout"&&(g.logout(),n("/login")),n(`${e+s.pathname}`))},{once:!0}),o.addEventListener("submit",t=>{if(t.preventDefault(),t.target.id==="login-form"&&(c(t.target.elements),n(`${e}/profile`)),t.target.id==="profile-form")return m(t.target.elements)},{once:!0})};window.addEventListener("popstate",a);const $=()=>{a()};$();

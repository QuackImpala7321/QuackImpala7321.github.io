import{_ as d,o as m,c as a,a as t,d as u,b as r,F as p,N as c,e as f}from"./style.css_vue_type_style_index_0_src_true_lang-CQCBAT9u.js";const b={methods:{async submit(n){const s=document.getElementById("email").value;if(!s.includes("@")||!s.includes("."))return;console.log(s),await fetch(N,{method:"POST",mode:"cors",headers:{"Content-Type":"text/plain"},body:s});const o=n.target.closest(".newsletter-form");o.style.display="none"}}},x={class:"newsletter-form"},_={class:"button-row"};function y(n,e,s,o,v,l){return m(),a("form",x,[e[2]||(e[2]=t("h1",null,"Sign up for the Newsletter!",-1)),e[3]||(e[3]=t("br",null,null,-1)),e[4]||(e[4]=t("label",{for:"email"},"Email",-1)),e[5]||(e[5]=t("input",{class:"news-input",id:"email",type:"text",placeholder:"example@example.com"},null,-1)),t("div",_,[t("a",{href:"#",onClick:e[0]||(e[0]=(...i)=>l.submit&&l.submit(...i))},e[1]||(e[1]=[t("p",null,"Submit",-1)]))])])}const w=d(b,[["render",y]]),g={class:"main-contents"},E=u({__name:"Index",setup(n){return(e,s)=>(m(),a(p,null,[r(c),t("div",g,[s[0]||(s[0]=t("h1",null,"Yep this is my website",-1)),r(w)])],64))}}),N="https://script.google.com/macros/s/AKfycbytDmF1-O9MFcizArZc2qvf4zdHOMCm1dIBtGY7m2hjRTwTWqx18LEVVj_uOdGzjxde/exec";f(E).mount("#app");

import{c as i,d as s,e as t,f as c,g as d,h as r,i as a,j as l}from"../chunk-E4PBIFC7.js";import"../chunk-32HEDUCQ.js";function u(){let e=document.querySelector("top-app-bar"),o=document.querySelector("nav-drawer"),n=()=>{globalThis.scrollY>0?(e.classList.add("is-sticky"),o.classList.add("is-sticky")):(e.classList.remove("is-sticky"),o.classList.remove("is-sticky"))};globalThis.addEventListener("scroll",()=>{n()},{passive:!0}),n()}function g(){document.body.addEventListener("change-color",e=>{r(e.color)}),document.body.addEventListener("change-mode",e=>{a(e.mode)}),window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",()=>{t()==="auto"&&r(c())})}function m(){s()||l("#81ea6c","auto")}function h(){if(t()!=="auto")return;let e=i("auto",!1)?"dark":"light",o=d();e!==o&&a("auto")}u();g();m();h();

import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{f as p,i}from"./assets/vendor-BbbuE1sJ.js";const n=document.querySelector("[data-start]"),a=document.getElementById("datetime-picker"),o={days:document.querySelector("[data-days]"),hours:document.querySelector("[data-hours]"),minutes:document.querySelector("[data-minutes]"),seconds:document.querySelector("[data-seconds]")};let c=null,s=null;const S={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){const t=e[0];t<=new Date?(i.error({message:"Please choose a date in the future!"}),n.disabled=!0):(s=t,n.disabled=!1)}};p(a,S);n.addEventListener("click",()=>{s&&(n.disabled=!0,a.disabled=!0,c=setInterval(()=>{const t=s-new Date;if(t<=0){clearInterval(c),i.success({message:"Countdown Complete!"}),b();return}l(T(t))},1e3))});function l({days:e,hours:t,minutes:d,seconds:u}){o.days.textContent=r(e),o.hours.textContent=r(t),o.minutes.textContent=r(d),o.seconds.textContent=r(u)}function T(e){const m=Math.floor(e/864e5),f=Math.floor(e%864e5/36e5),h=Math.floor(e%864e5%36e5/6e4),y=Math.floor(e%864e5%36e5%6e4/1e3);return{days:m,hours:f,minutes:h,seconds:y}}function r(e){return String(e).padStart(2,"0")}function b(){n.disabled=!0,a.disabled=!1,s=null,l({days:0,hours:0,minutes:0,seconds:0})}
//# sourceMappingURL=1-timer.js.map

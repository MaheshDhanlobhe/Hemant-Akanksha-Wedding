const d=new Date('2026-06-27T12:26:00').getTime();
setInterval(()=>{let n=new Date().getTime();let x=d-n;
let days=Math.floor(x/(1000*60*60*24));
document.getElementById('countdown').innerText=days+' दिवस बाकी';},1000);
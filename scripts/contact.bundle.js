(()=>{"use strict";const e={impresszum:"\n        <h2>Impresszum</h2>\n        <p>Ez az oldal a következő cégről szól:</p>\n        <p><strong>Cég neve:</strong> Példa Kft.</p>\n        <p><strong>Cím:</strong> 1234 Budapest, Példa utca 12.</p>\n        <p><strong>Adószám:</strong> 12345678-1-23</p>\n        <p><strong>Cégjegyzékszám:</strong> 01-23-456789</p>\n        <p><strong>Email:</strong> info@pelda.hu</p>\n        <p><strong>Telefon:</strong> +36 1 234 5678</p>\n        <p>Az oldalon található tartalmak a Példa Kft. tulajdonát képezik, és azok felhasználása csak a cég írásos engedélyével lehetséges.</p>\n        \n    ",aszf:"\n        <h2>Általános Szerződési Feltételek</h2>\n        <p>Az Általános Szerződési Feltételek (ÁSZF) tartalmazzák azokat a feltételeket, amelyek alapján Ön igénybe veheti a szolgáltatásainkat:</p>\n        <ul>\n            <li><strong>Szolgáltatás igénybevétele:</strong> A szolgáltatás igénybevételéhez szükséges a regisztráció.</li>\n            <li><strong>Fizetési feltételek:</strong> A szolgáltatás díját előre kell kifizetni.</li>\n            <li><strong>Elállási jog:</strong> Az igénybevevő a szerződéstől 14 napon belül indoklás nélkül elállhat.</li>\n            <li><strong>Adatkezelés:</strong> Az adatokat bizalmasan kezeljük, és harmadik fél számára nem adjuk át.</li>\n        </ul>\n        <p>Részletesebb információkat az ÁSZF dokumentumban talál.</p>\n       \n    ",cookies:"\n        <h2>Cookie-kra vonatkozó irányelvek</h2>\n        <p>Weboldalunk cookie-kat használ a felhasználói élmény javítása érdekében:</p>\n        <ul>\n            <li><strong>Szükséges cookie-k:</strong> Ezek a cookie-k nélkülözhetetlenek az oldal működéséhez.</li>\n            <li><strong>Statisztikai cookie-k:</strong> Ezek a cookie-k segítenek megérteni, hogyan használják a látogatók az oldalt.</li>\n            <li><strong>Marketing cookie-k:</strong> Ezeket a cookie-kat a hirdetések személyre szabására használjuk.</li>\n        </ul>\n        <p>Weboldalunk használatával hozzájárul a cookie-k használatához.</p>\n       \n    ",adatvedelem:"\n        <h2>Adatvédelmi irányelvek</h2>\n        <p>Az Ön adatainak védelme kiemelten fontos számunkra. Az alábbiakban tájékoztatjuk Önt az adatkezelés részleteiről:</p>\n        <ul>\n            <li><strong>Adatkezelés célja:</strong> Az adatokat a szolgáltatásaink nyújtásához és fejlesztéséhez használjuk.</li>\n            <li><strong>Adatkezelés jogalapja:</strong> Az adatkezelés jogalapja az Ön hozzájárulása, illetve a szerződés teljesítése.</li>\n            <li><strong>Adattovábbítás:</strong> Az adatokat harmadik fél számára nem adjuk át.</li>\n            <li><strong>Adatbiztonság:</strong> Az adatokat biztonságos szervereken tároljuk, és megfelelő intézkedéseket teszünk azok védelmére.</li>\n        </ul>\n        <p>Az adatvédelmi irányelvekkel kapcsolatos kérdéseit az info@pelda.hu email címre küldheti el.</p>\n       \n    "},t=document.querySelector(".cookies"),a=document.querySelector(".cookies-btn"),l=document.querySelector(".js-hamburger-btn"),s=document.querySelector(".js-nav"),n=document.querySelectorAll(".js-menu-item"),o=document.querySelector(".js-modal"),r=document.querySelectorAll(".footer-link"),i=document.querySelector(".modal-text"),c=document.querySelector(".js-subscribe"),d=document.querySelector(".js-validation-text"),k=document.querySelector(".js-checkbox"),z=document.querySelector(".js-input-email"),m=document.querySelector(".js-input-name"),u=document.querySelector(".js-pageUpBtn");const g=document.querySelector(".js-contact-form"),v=document.querySelector(".alert-text"),p=document.querySelectorAll(".js-message-input");window.addEventListener("scroll",(()=>{window.scrollY>600?u.classList.add("pageUpShow"):u.classList.remove("pageUpShow")})),l.addEventListener("click",(()=>{s.classList.toggle("nav-active"),l.classList.toggle("active-hamburger")})),n.forEach((e=>{e.addEventListener("click",(()=>{s.classList.remove("nav-active"),l.classList.remove("active-hamburger")}))})),c.addEventListener("submit",(e=>{e.preventDefault();let t=!0;if(""===m.value.trim())return d.classList.add("red-color"),d.innerHTML=" ❌ A név megadása kötelező!",void(t=!1);if(!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(z.value))return d.classList.add("red-color"),d.innerHTML=" ❌ Érvényes email címet kell megadni!",void(t=!1);if(k.checked&&!0===t){d.classList.remove("red-color"),d.innerHTML="✅ Köszönjük a felíratkozást!";const t=new FormData(e.target),a=Object.fromEntries(t.entries());console.table(a),setTimeout((()=>{c.reset(),d.innerHTML="* A mezők kitöltése kötelező!"}),2e3)}else d.classList.add("red-color"),d.innerHTML=" ❌ Az adatakezelési tájékoztatót el kell fogadni!"})),sessionStorage.getItem("acceptedCookies")||(setTimeout((()=>{t.classList.add("cookie-active")}),2e3),a.addEventListener("click",(()=>{t.classList.remove("cookie-active"),sessionStorage.setItem("acceptedCookies","true")}))),g.addEventListener("submit",(e=>{e.preventDefault();let t=!0;if(p.forEach((e=>{e.value||(t=!1,v.classList.add("red-color"),v.innerHTML="Kérjük töltse ki az összes mezőt!")})),t){v.classList.remove("red-color"),v.innerHTML="Köszönjük az üzenetét!";const t=new FormData(e.target),a=Object.fromEntries(t.entries());console.table(a),setTimeout((()=>{g.reset(),v.innerHTML="A mezők kitöltése kötelező!"}),2e3)}})),r.forEach((t=>{t.addEventListener("click",(function(t){var a;t.preventDefault(),a=this.getAttribute("data-content"),i.innerHTML=e[a],o.classList.add("open-modal")}))})),document.querySelector(".close").addEventListener("click",(function(){o.classList.remove("open-modal")})),window.addEventListener("click",(e=>{e.target===o&&o.classList.remove("open-modal")}))})();
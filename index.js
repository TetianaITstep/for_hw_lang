import { fr } from "./js/fr.js";
import { refs } from "./js/refs.js"
import { ua } from "./js/ua.js";
import { en } from "./js/en.js";

const {btn:{btn_ua, btn_en, btn_fr},
        head: {title, head_desc},
        text: {main_text, description},
        flag,
}=refs;

console.dir(btn_ua)

function changeLanguage(lang){
    title.textContent = lang.title;
    head_desc.textContent = lang.head_desc;
    main_text.textContent = lang.main_text;
    description.textContent = lang.description;
    flag.src = `${lang.flag}`;
}

// btn_ua.addEventListener("click", () => {changeLanguage(ua); btn_ua.classList.toggle("active")});
// btn_en.addEventListener("click",() => {changeLanguage(en); btn_en.classList.toggle("active")} );
// btn_fr.addEventListener("click", ()=> {changeLanguage(fr);btn_en.classList.toggle("active")} );


// console.log("BTN", button);
// console.log("Refs");
const button = {btn_en, btn_ua, btn_fr};
const languages = {en, fr, ua};
Object.keys(refs.btn).forEach(key) => {
    button[key].addEventListener("click", () => {
        const langCode = key.split("_")[1];
        changeLanguage(langCode);
   })
}
   

// for(let i=0; i<Array.length i+=1){
//     arr[i];
// }
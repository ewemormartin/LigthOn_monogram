import Lampa from "./lampak.js";
$(function(){
    const szuloElem = $(".container")
    for (let index = 0; index < 9; index++) {
       let lampa1 = new Lampa(index, szuloElem);
        
    }
});
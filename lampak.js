class Lampa{
    #id
    constructor(id, szuloElem){
        this.#id = id;
        this.szuloElem = szuloElem.append("<div class='lampa' id='${this.#id}'></div>")
        this.elem  = $("lampa");
        this.elem.on("click", () => {
            this.elem.find('#${this.#id}')
        });

    const veletlen = Math.floor(Math.random() * 2);
        if (veletlen == 1){
            this.elem.css("background-color", "green");
        }
        else {
            this.elem.css("background-color", "orange");
        }
    }
}
export default Lampa;
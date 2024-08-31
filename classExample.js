class Cookie{
    constructor(color){
        this.color = color
    }
    getColor(){
        console.log(this.color)
    }
    changeColor(color){
        this.color = color;
    }
}
let cookieOne = new Cookie("Red")
let cookieTwo = new Cookie("Blue")
cookieOne.getColor();
cookieOne.changeColor("Brown");
cookieOne.getColor();
import {Vraag} from "./Vraag.js"
export class toets extends EventTarget {
    static vragen;
    constructor() {
        super();
        this.generateQuestion();
        this.vragen = new Array(10);

    }

    setPreviousQuestion() {
        
        console.log("dit werkt");
    }

    setNextQuestion() {
        
        console.log("dit werkt ok");
    }

    generateQuestion(){
        for(let i = 0; i < 10; i++){
            let vraag = new Vraag(i);
            console.log(vraag)

            this.vragen[i] = vrg;
        }            
        console.log(this.vragen);

    }

}
export class Vraag {
    static deel1;
    static deel2;
    static id;
    static antwoord;
    static vraag;
    constructor(id) {
        this.id = id;
        this.deel1 = Math.floor(Math.random() * 101);
        this.deel2 = Math.floor(Math.random() * 101);
        this.antwoord = this.deel1 + this.deel2;
        this.vraag = `${this.deel1} + ${this.deel2}`;
        
        vraag[this.id] = {
            VraagID: this.id,
            vraag:  this,
            antwoord: this.antwoord
        }
    }

    getVraagID() {
        return this.id;
    }

    getVraag() {
       return `${this.deel1} + ${this.deel2}`;
    }

    getAntwoord(){
        return this.antwoord;
    }

    getOpties() {
        return [this.vraag.optie1, this.vraag.optie2, this.vraag.optie3, this.vraag.optie4];
    }

    
    
   
    getGegevenAntwoord() {
        return this.givenAnswer;
    }
    
    setGegevenantwoord(gegevenAntwoord) {
        this.gegevenAntwoord = parseInt(gegevenAntwoord);
    }

    isCorrect(){
        if (this.vraag.antwoord == this.gegevenAntwoord) {
            return "goed";
        }
        else {
            return "fout";
        }
    }
}
import {view} from "../view/view.js"
import {toets} from "../model/toets.js"
export class Controller {
    constructor(){
        this.toets = new toets();
        this.view = new view();

        this.view.bindNextQuestionButton(this.handleNextQuestion);
        this.view.bindPreviousQuestionButton(this.handlePreviousQuestion);

    }
    
    handleNextQuestion = () => {
        this.toets.setNextQuestion();
    }
    handlePreviousQuestion = () => {
        this.toets.setPreviousQuestion();
    };

    
}
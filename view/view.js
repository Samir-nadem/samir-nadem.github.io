export class view{
    
    getElement(selector) {
        const element = document.querySelector(selector);
        return element
    }
    bindNextQuestionButton(handler) {
        this.next = this.getElement("#volgende");
        this.next.addEventListener('click', event => {
            handler();
        })
    }
    bindPreviousQuestionButton(handler) {
        this.next = this.getElement("#vorige");
        this.next.addEventListener('click', event => {
            handler();
        })
    }
    showQuestion(currentQuestion) {
        const question = this.getElement('#vraag');
        question.innerHTML = currentQuestion.getQuestionID() + ". " + currentQuestion.getQuestion();

        this.getElement('#option1').innerHTML = currentQuestion.getOptions()[0];
        this.getElement('#option2').innerHTML = currentQuestion.getOptions()[1];
        this.getElement('#option3').innerHTML = currentQuestion.getOptions()[2];
        this.getElement('#option4').innerHTML = currentQuestion.getOptions()[3];

        /*this.getElement('#btn1').setAttribute('style', 'background-color:#e6f3ff');
        this.getElement('#btn2').setAttribute('style', 'background-color:#e6f3ff');
        this.getElement('#btn3').setAttribute('style', 'background-color:#e6f3ff');
        this.getElement('#btn4').setAttribute('style', 'background-color:#e6f3ff');*/


        if (currentQuestion.getGivenAnswer() != -1) {
            let id = '#btn' + currentQuestion.getGivenAnswer();
            this.getElement(id).setAttribute('style', 'background-color:#99ceff')
        }

    }
}
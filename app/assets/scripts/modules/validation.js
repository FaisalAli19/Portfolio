import $ from "jquery";

class FormValidation {
    constructor() {
        this.contactForm = $("#contact-form");
        this.inputName = $("#Name");
        this.inputEmail = $("#Email");
        this.inputMessage = $("#Message");
        this.inputNameVal = $("#Name").val();
        this.inputEmailVal = $("#Email").val();
        this.inputMessageVal = $("#Message").val();
        this.submitButton = $("form #submit");
        this.nameRegEx = /^[a-zA-Z]+$/;
        this.emailRegEx = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
        this.events();
    }

    events(){
        this.submitButton.click(this.validate.bind(this));
    }
    //Validate all the fields by run the individual function
    validate(){
        this.validateName();
        this.validateEmail();
        this.ValidateMessage();
    }
    //Check Name Input Field
    validateName(){
        //Check the length of the Name input
        if(this.inputNameVal.length > 0){
            //Check for valid name
            if(this.inputNameVal == this.nameRegEx){
                this.inputName.addClass("form__input--valid");
                return false;
            }
            //if name has invalid character or number then add invalid class to input
            else{
                this.inputName.addClass("form__input--invalid");
                return false;
            }

        }
        //If input is empty add required class to Name input
        else{
            this.inputName.addClass("form__input--required");
            return false;
        }
    }

    //Check Email Input Field
    validateEmail(){

        //Check the length of the Email input
        if(this.inputEmailVal.length > 0){
            //Check for valid Email
            if(this.inputEmailVal == this.emailRegEx){
                this.inputEmail.addClass("form__input--valid");
                return false;
            }
            //if Email is invalid then add invalid class to input
            else{
                this.inputEmail.addClass("form__input--invalid");
                return false;
            }

        }
        //If input is empty add required class to Email input
        else{
            this.inputEmail.addClass("form__input--required");
            return false;
        }
    }

    //Check Message Filed
    ValidateMessage(){
        //Check for minimum length
        if(this.inputMessageVal.length > 0){

            //if length is greater than 10 then add valid class
            if(this.inputMessageVal.length > 10){
                this.inputMessage.addClass("form__textarea--valid");
                return false;
            }
            //if length is less than 10 then add invalid class
            else{
                this.inputMessage.addClass("form__textarea--invalid");
                return false;
            }

        }
        //if the message is below minimum length display required state
        else{
            this.inputMessage.addClass("form__textarea--required");
            return false;
        }
    }
}

export default FormValidation;

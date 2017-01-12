import $ from "jquery";

class FormValidation {
    constructor() {
        this.contactForm = $("#contact-form");
        this.nameInput = $("form #Name");
        this.emailInput = $("form #Email");
        this.messageInput = $("form #Message");
        this.submitButton = $("form #submit");
        this.successMessage = $("form .form__messages--success");
        this.errorMessage = $("form .form__messages--error");
        this.nameRegEx = /^[a-zA-Z]+[ ]?[a-zA-Z]+$/;
        this.emailRegEx = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
        this.events();
    }

    events(){
        this.submitButton.click(this.validate.bind(this));
    }

    validate(){
        this.nameValid();
        this.emailValid();
        this.messageValid();
        //Check if all are Validated
        if(this.nameValid() && this.emailValid() && this.messageValid()){
            //if validated display success message and send messageValid
            this.sendMail();
            this.errorMessage.addClass("form__messages--hide");
            this.successMessage.removeClass("form__messages--hide");
            this.inputReset();
            return false;
        }
        else {
            this.successMessage.addClass("form__messages--hide");
            this.errorMessage.removeClass("form__messages--hide");
            return false;
        }
    }
    //Validate name field
    nameValid(){
        var nameLength = this.nameInput.val().length;
        var nameVal = this.nameInput.val();
        //check if length is zero
        if(nameLength === 0){
            //if length is zero add required class and notify user
            this.nameInput.removeClass("form__input--valid");
            this.nameInput.removeClass("form__input--invalid");
            this.nameInput.addClass("form__input--required");
            return false;
        }
        //If length is not zero will check for valid input
        else {
            //This will match the input for regEx pattern
            if(nameVal.match(this.nameRegEx)){
                //If regEx match valid class will be added
                this.nameInput.removeClass("form__input--required");
                this.nameInput.removeClass("form__input--invalid");
                this.nameInput.addClass("form__input--valid");
                return true;
            }
            //If input doesn't match regEx will add invalid class and notify user
            else {
                //if regEx doesn't match invalid class will be added
                this.nameInput.removeClass("form__input--required");
                this.nameInput.removeClass("form__input--valid");
                this.nameInput.addClass("form__input--invalid");
                return false;
            }
        }
    }

    //Validate email field
    emailValid(){
        var emailLength = this.emailInput.val().length;
        var emailVal = this.emailInput.val();
        //check if length is zero
        if(emailLength === 0){
            //if length is zero add required class and notify user
            this.emailInput.removeClass("form__input--valid");
            this.emailInput.removeClass("form__input--invalid");
            this.emailInput.addClass("form__input--required");
            return false;
        }
        //If length is not zero will check for valid input
        else {
            //This will match the input for regEx pattern
            if(emailVal.match(this.emailRegEx)){
                //If regEx match valid class will be added
                this.emailInput.removeClass("form__input--required");
                this.emailInput.removeClass("form__input--invalid");
                this.emailInput.addClass("form__input--valid");
                return true;
            }
            //If input doesn't match regEx will add invalid class and notify user
            else {
                //if regEx doesn't match invalid class will be added
                this.emailInput.removeClass("form__input--required");
                this.emailInput.removeClass("form__input--valid");
                this.emailInput.addClass("form__input--invalid");
                return false;
            }
        }
    }

    //Validate message field
    messageValid(){
        var messageLength = this.messageInput.val().length;
        //check if length is zero
        if(messageLength === 0){
            //if length is zero add required class and notify user
            this.messageInput.removeClass("form__textarea--valid");
            this.messageInput.removeClass("form__textarea--invalid");
            this.messageInput.addClass("form__textarea--required");
            return false;
        }
        //If length is not zero will check for valid input
        else {
            //This will match the input for minimum length
            if(messageLength > 10){
                //If length match valid class will be added
                this.messageInput.removeClass("form__textarea--required");
                this.messageInput.removeClass("form__textarea--invalid");
                this.messageInput.addClass("form__textarea--valid");
                return true;
            }
            //If input doesn't match minimum length then will add invalid class and notify user
            else {
                //if length doesn't match invalid class will be added
                this.messageInput.removeClass("form__textarea--required");
                this.messageInput.removeClass("form__textarea--valid");
                this.messageInput.addClass("form__textarea--invalid");
                return false;
            }
        }
    }
    //Ajax function for sending email
    sendMail(){
        $.ajax({
            url: "https://www.enformed.io/2w0cexgu",
            type: "POST",
            data: {
                Name: this.nameInput.val(),
                Email: this.emailInput.val(),
                Message: this.messageInput.val()
            },
            dataType: "json",
            cache: false
        });
    }

    //Reset values on input
    inputReset(){
        this.nameInput.val("");
        this.emailInput.val("");
        this.messageInput.val("");
    }
}

export default FormValidation;

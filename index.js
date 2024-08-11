$(document).ready(function() {
    function ValidateUsername(name) {
        var alphabetregex = /^[a-zA-Z]{8,}$/;
        return alphabetregex.test(name)
    }

    function validateUser(name) {
        var userRegex = /^[a-zA-Z0-9_]+$/;
        return userRegex.test(name);
    }

    function validatePassword(pwd) {
        var Regex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;
        return Regex.test(pwd);
    }

    function validateDOB(dob) {
        var date = new Date(dob); 
        return !isNaN(date.getTime());
    }

    function validatePostalCode(pc) {
        var Regex = /^\d{6}$/;
        return Regex.test(pc);
    }

    function validateNumber(mobile) {
        var regex = /^\d{10}$/;
        return regex.test(mobile);
    }

    function validateEmail(email) {
        var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }





    $(".btn").click(function() {
        var firstname = $("#firstname").val();
        var lastname = $("#lastname").val();
        var username = $("#username").val();
        var password = $("#password").val();
        var dob = $("#dob").val();
        var postalcode = $("#postalcode").val();
        var mobile = $("#mobile").val();
        var email = $("#email").val();

        if(!ValidateUsername(firstname) && !ValidateUsername(lastname)) {
            alert("First and Last name contain only alphabets and the length should not be less than 8 characters.");
            return;
        }

        if(!validateUser(username)) {
            alert("Username contain combination of alphabets, numbers and underscore. It should not allow spaces and special symbols.");
            return;
        }

        if(!validatePassword(password)) {
            alert("Password not less than 8 characters in length and it contains one uppercase letter and one special symbol.");
            return;
        }

        if(!validateDOB(dob)) {
            alert("Invalid date");
            return;
        }

        if(!validatePostalCode(postalcode)) {
            alert("postalcode should only 6 digit valid number. ");
            return;
        }

        if(!validateNumber(mobile)) {
            alert("Mobile should only numbers and total number of digits should be equal to 10. ");
            return;
        }

        if(!validateEmail(email)) {
            alert("the mail id with the following format: Ex. mailid@domainname.com");
            return;
        }

        alert("Form submitted Successfully");
    });
});
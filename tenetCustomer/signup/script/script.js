/*config of password strength:*/
jQuery(document).ready(function() {
    "use strict";
    var options = {};
    options.ui = {
        bootstrap4: true,
        container: "#pwd-container",
        viewports: {
            progress: ".pwstrength_viewport_progress"
        },
        showVerdictsInsideProgressBar: true
    };
    options.common = {
        debug: true,
    };
    $('#password').pwstrength(options);
});

let user; //username value
let pswd = ''; //password textbox data
let repswd; //password textbox data
let classbar; //the progressbar of password strength classes
let classbarhas; //boolean variable of existance of 'bg-danger' in classbar variable

document.querySelector("#password").addEventListener('keyup', function() {
    //this event listener used to map the keys for function below
    pswd = $("#password").val();
    classbar = document.querySelector(".progress-bar").classList;
    classbarhas = classbar.value.includes('bg-danger');
    if (classbarhas == true) { //password-feedback is my custom feedback about weak password or strong! if 'bg-danger' is available, 
        $(".password-feedback").css('display', 'block');
    } else {
        $(".password-feedback").css('display', 'none');
    }

});

document.querySelector("#repassword").addEventListener('keyup', function() {
    //this event listener used to map the keys for function below
    pswd = $("#password").val();
    repswd = $("#repassword").val();

    if (pswd == repswd && repswd.length > 0) {
        $(".repassword-feedback").css('display', 'none');
    } else if (pswd != repswd && repswd.length > 0) {
        $(".repassword-feedback").css('display', 'block');
    }
});
// document.querySelector("#password").addEventListener('keyup', function() {
//     if (pswd.length >= 7 && classbarhas == false) {
//         $(".tenet-form-signup").addClass('was-validated-tenet')
//     }
// });
$("#repassword").change(function() {
    repswd = $("#repassword").val();
});

/*form validation */
// Example starter JavaScript for disabling form submissions if there are invalid fields


(function() {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')


    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
        .forEach(function(form) {

            form.addEventListener('submit', function(event) {

                if (!form.checkValidity() || pswd != repswd || classbarhas == true) {
                    event.preventDefault()
                    event.stopPropagation()
                    $(".repassword-feedback").css('display', 'block');
                    $(".tenet-signup-logo-top").css('color', '#842029');
                    $(".password-feedback").css('display', 'block');
                }
                if (pswd == repswd) {
                    $(".repassword-feedback").css('display', 'none');
                }
                form.classList.add('was-validated')
            }, false)
        })
})()
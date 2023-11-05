function validateForm() {
            var name = document.forms["contactForm"]["name"].value;
            var email = document.forms["contactForm"]["email"].value;
            var subject = document.forms["contactForm"]["subject"].value;
            var message = document.forms["contactForm"]["message"].value;

            if (name === "" || email === "" || subject === "" || message === "") {
                alert("All fields must be filled out");
                return false;
            }

            var emailPattern = "1234@gmail.com";
            if (!email.match(emailPattern)) {
                alert("Please enter a valid email address");
                return false;
            }

            return true;
        }

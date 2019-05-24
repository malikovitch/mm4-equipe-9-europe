document.addEventListener('DOMContentLoaded', function () {

    let voteChoice = undefined

    let choiceArray = document.querySelectorAll('[type="radio"]')

    for (let item of choiceArray) {
        item.addEventListener('click', function () {
            voteChoice = this.value
        })
    }


    document.querySelector("#RegForm").addEventListener('submit', function (event) {
        event.preventDefault()
        var firstname = document.querySelector('[name = "FirstName"]');
        var lastname = document.querySelector('[name = "LastName"]');
        var email = document.querySelector('[name = "Email"]');
        var formError = 0



        if (firstname.value == "") {
            window.alert("S'il vous plaît entrez votre nom");
            firstname.focus();
            formError++
        }

        if (lastname.value == "") {
            window.alert("S'il vous plaît entrez votre prénom");
            lastname.focus();
            formError++
        }

        if (email.value == "") {
            window.alert("S'il vous plaît entrez votre email");
            email.focus();
            formError++
        }

        if (email.value.indexOf("@", 0) < 0) {
            window.alert("Please enter a valid e-mail address.");
            email.focus();
            formError++
        }

        if (email.value.indexOf(".", 0) < 0) {
            window.alert("Please enter a valid e-mail address.");
            email.focus();
            formError++
        }

        if (voteChoice === undefined) {
            alert('Please select');
            formError++
        }

        if (formError === 0) {
            asyncFetch('https://ldp.dwsapp.io/mm4-europe/', { email: email.value })
        }
    })






    const asyncFetch = async (path, formData) => {
        // Post data on the API
        const response = await fetch(path, {
            method: 'POST',
            body: JSON.stringify(formData),
            headers: {
                "Content-type": "application/json"
            },
        })
        const data = await response.json()
        // Display result in the console
        console.log(data)
    }
})

function login()
{
    username = document.getElementById("user_name").value;

    localStorage.setItem("username", username);

    window.location="smile.html";

}
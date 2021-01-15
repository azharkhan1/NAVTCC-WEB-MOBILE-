
// const url = 'https://loginjwtmongo.herokuapp.com';
const url = "http://localhost:5000";



const signup = () => {

    var userEmail = document.getElementById("email").value.toLowerCase();
    var userPassword = document.getElementById("password").value
    var userName = document.getElementById("name").value

    let obj = {
        userEmail: userEmail,
        userPassword: userPassword,
        userName: userName,
    };

    const Http = new XMLHttpRequest();
    Http.open("POST", url + "/auth/signup");
    Http.setRequestHeader("Content-Type", "application/json");
    Http.send(JSON.stringify(obj));

    Http.onreadystatechange = (e) => {

        if (Http.readyState === 4) {
            let jsonRes = JSON.parse(Http.responseText)
            console.log(Http.status);
            if (Http.status === 200) {
                alert(jsonRes.message);
                window.location.href = "login.html";
            }
            else {
                alert(jsonRes.message);
            }



        }
    }
    return false;
}

const login = () => {

    var userEmail = document.getElementById("email").value.toLowerCase();
    var userPassword = document.getElementById("password").value

    obj = {
        userEmail: userEmail,
        userPassword: userPassword,
    }
    // console.log(obj);

    const Http = new XMLHttpRequest();

    Http.open("POST", url + "/auth/login");
    Http.setRequestHeader("Content-Type", "application/json");
    Http.send(JSON.stringify(obj));

    Http.onreadystatechange = (e) => {
        if (Http.readyState === 4) {
            console.log(Http.responseText);
            let jsonRes = JSON.parse(Http.responseText);

            if (Http.status === 200) {
                alert(jsonRes.message);
                window.location.href="dashboard.html";
            }
            else {
                alert(jsonRes.message);
            }

        }
    }
    return false;
}

function getProfile(){
    console.log("url=>",url);
    axios({
        method: 'get',
        url: "http://localhost:5000/profile",
    }).then((response) => {
        console.log("welcoming user==>",response);
        console.log(response.data);
        document.getElementById('welcomeUser').innerHTML = response.data.profile.userName

    }, (error) => {
        console.log(error.message);
        location.href = "./login.html"
        console.log("this is my error",error);
    });

}

function forgot_password(){
    axios({
        method: 'post',
        url: url+"/auth/forget-password",
        data: {
         userEmail : document.getElementById("email").value,
        }
    }).then((response) => {
    document.getElementById("forgot-response").style.display = "initial";
    document.getElementById("forgot-response").innerHTML = JSON.stringify(response.message);
    alert(JSON.stringify(response.message));
    localStorage.setItem("forgot_email", document.getElementById("email").value);
    window.location.href = "reset-password.html";
    }, (error) => {
        console.log(error);
    });
    return false;
}

function checkOtp(){

    const Http = new XMLHttpRequest();
    Http.open("POST", url + "/auth/forget-password-step-2")
    Http.setRequestHeader("Content-Type", "application/json");
    Http.send(JSON.stringify({
        userEmail : document.getElementById("email").value.toLowerCase(),
        newPassword : document.getElementById("newPassword").value,
        otp : document.getElementById("otp").value,
    }))
    Http.onreadystatechange = (e)=>{
        if (Http.readyState === 4)
        {
            alert(Http.responseText);
        }
    
    }

    // axios({
    //     method: 'post',
    //     url: url+"/auth/forget-password-step-2",
    //     data: {
    //      userEmail : document.getElementById("email").value.toLowerCase(),
    //      otp: document.getElementById("otp").value,
    //      newPassword : document.getElementById("newPassword").value,
    //     }
    // }).then((response) => {
    //     console.log(response.data.status);
    //     if (response.data.status == 200)
    //     {
    //         alert(JSON.stringify(response.data.message));

    //     }
    //     else{
    //         alert(JSON.stringify(response.data.message));
    //     }
       
    // }, (error) => {
    //     console.log(error);
    //     alert(JSON.stringify(error.message));
    // });
    return false;

}



let logout = () => {
  
    axios({
        method : "post",
        url : url+"/auth/logout",
    }).then((response)=>{
        alert(response.data);
        window.location.href = "login.html";
    })
}

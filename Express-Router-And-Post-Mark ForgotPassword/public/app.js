
// const url = 'https://loginjwtmongo.herokuapp.com';
const url = "http://localhost:5000";

var socket = io(url);

socket.on('connect', function () {
    console.log("I am connected");
  });


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
        getTweets();
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

    return false;

}

const getTweets = () => {

    
    const Http = new XMLHttpRequest();
    Http.open("GET", url + "/getTweets");
    Http.send();
    Http.onreadystatechange = (e) => {
        if (Http.readyState === 4) {

            let data = JSON.parse((Http.responseText));
            console.log(data);
            for (let i = 0; i < data.tweets.length; i++) {
         

                var eachTweet = document.createElement("li");
                eachTweet.innerHTML =
                    `<h4 class="userName">
                    ${data.tweets[i].userName}
                </h4> 
                <p class="userPost">
                    ${data.tweets[i].tweetText}
                </p>`;
                // console.log(`User: ${tweets[i]} ${tweets[i].userPosts[j]}`)
                document.getElementById("posts").appendChild(eachTweet)

            }
        }
    }
}

socket.on("NEW_POST", (newPost)=>{


    console.log("newPost ==> ", newPost);
    var eachTweet = document.createElement("li");
    eachTweet.innerHTML =
        `<h4 class="userName">
        ${newPost.userName}
    </h4> 
    <p class="userPost">
        ${newPost.tweetText}
    </p>`;
    // console.log(`User: ${tweets[i]} ${tweets[i].userPosts[j]}`)
    document.getElementById("posts").appendChild(eachTweet)
})




let logout = () => {
  
    axios({
        method : "post",
        url : url+"/auth/logout",
    }).then((response)=>{
        alert(response.data);
        window.location.href = "login.html";
    })
}

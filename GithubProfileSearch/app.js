const APIURL = "https://api.github.com/users/";
const box = document.querySelector(".box");
const searchBox = document.querySelector("#search");

const getuserInfo = async (userName) => {
    const response = await fetch(APIURL+userName);
    const data = await response.json();
    const card = 
    `
        <div class="profile">
            <div>
                <img class="avatar" src="${data.avatar_url}" alt="Florin Pop">
            </div>
            <div class="user-info">
                <h2>${data.name}</h2>
                <p>${data.bio}</p>
                <ul class="info">
                    <li>${data.followers}<strong>Followers</strong></li>
                    <li>${data.following}<strong>Following</strong></li>
                    <li>${data.public_repos}<strong>Repos</strong></li>
                </ul>
                <div id="repos">
                    
                </div>
            </div>
        </div>
    `
    box.innerHTML = card;
    getRepos(userName);
}


const getRepos = async(userName) => {
    const repos = document.querySelector("#repos");
    const response = await fetch(APIURL+userName+"/repos");
    const data = await response.json();
    data.forEach(
        (item) => {
            const element = document.createElement("a");
            element.classList.add("repo");
            element.href = item.html_url;
            element.innerText = item.name;
            element.target = "_blank";
            repos.appendChild(element);
        }
    )
}

const formSubmit = () => {
    if(searchBox.value != ""){
        getuserInfo(searchBox.value);
        searchBox.value = "";
    }
    return false;
}

//itit call
//getuserInfo("naman");

searchBox.addEventListener(
    "focusout",
    function(){
        formSubmit();
    }
)
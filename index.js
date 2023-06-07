bootcampURL = "http://localhost:3000/bootcamps"
commentsURL = "http://localhost:3000/comments"
fetch(bootcampURL)
.then(resp => resp.json())
.then(bootcamps =>{bootcamps.forEach(bootcamp=>displayBootcamp(bootcamp))})

function displayBootcamp(bootcamp){
    const card = document.querySelector(".image-card")
    //card.querySelector("bootcamp-name").textContent = bootcamp.name
    console.log(bootcamp)
}
    
/* function addComment(comment){
}
    
function deleteComment(comment){
}
    
function addNewComment(comment){}
    
function addBootCamp(bootCamp){}
    
function editbootCamp(bootCamp){
    const editButton = document.querySelector("#edit-button")
    editButton.addEventListener
}

    const likeButton = document.querySelector("#likes-button")
    likeButton.addEventListener("click", (e)=>{
        let numLikes = card.querySelector("#likes-count").textContent
        numberLike = numLikes +1 
        card.querySelector("#likes-count").textContent = `${numberLike} likes`

    })
    render is dom
    update is database
    local and patch

function updateLikes(){ 
    const button = document.querySelector("#likes-button")
    button.addEventListener("click", renderLikes(e))
    const postLikes = {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
            "Accept": "application/json",
        }
        body: JSON.stringify({
            bootcampList[bootcamplistPosiition].likes:"",
        }),
    };
    fetch(URL, postLikes)
    .then(likeResponse=>likeResponse.json())
    .catch(function(error){
        alert("Bad things!");
        console.log(error.message)
    })
}
function renderLikes(e){
        let numLikes = card.querySelector("#likes-count").textContent
        let numberLike = parseInt(numLikes) + 1
        card.querySelector("#likes-count").textContent = `${numberLike} likes`
}
bootcampList[bootcamplistPosiition].id
 */






function editbootCamp(bootCamp){
    const editButton = document.querySelector("#edit-button")
    editButton.addEventListener("submit",(edit)=>{
        edit.preventDefault()


    })
}

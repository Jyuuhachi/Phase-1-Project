const dataURL = "http://localhost:3000"
const bootcampList = [] //locally stored array of our database's bootcamp objects
const commentsList = [] //locally stored array of our database's comment objects
let bootcampListPosition = 0 //variable to track current index position for our carousel
//fetch our bootcamp object data and then display the bootcamp at index bootcampListPosition and it's comments on the page
fetch(dataURL + '/bootcamps')
.then(response => response.json())
.then(data => {
    //populate our bootcampList with the bootcamp object data we fetched
    for (i = 0; i <= (data.length - 1); i++) {
        bootcampList.push(data[i])
    }
    const bootcampId = bootcampList[0].id
    const bootcampImage = bootcampList[0].image
    const bootcampDisplay = document.getElementById("image")
    bootcampDisplay["src"] = bootcampImage
    fetch(dataURL + '/comments')
    .then(returned => returned.json())
    .then(comments => {
        //populate our commentsList with the comment object data we fetched
        for (i = 0; i <= (comments.length - 1); i++) {
            commentsList.push(comments[i])
        }
    const commentList = [] //create a list to hold the comments for the bootcamp we'll display on load
        //populate commentList with the comments that correspond to the correct bootcamp
        for (i = 0; i <= (commentsList.length -1); i++) {
            if (commentsList[i].bootcampid === bootcampId) {
                commentList.push(commentsList[i])
            }
        }
    commentList.forEach(addComment)
    })
    
    
    fetch(dataURL + '/comments')
    .then(response => response.json())
    .then(data => {
        console.log(data)
    })
})

const leftArrow = document.getElementById("arrow-left")
const rightArrow = document.getElementById("arrow-right")
leftArrow.addEventListener("click", e => carouselBootcamps("left"))
rightArrow.addEventListener("click", e => carouselBootcamps("right"))
    const likeButton = document.querySelector("#likes-button")
    likeButton.addEventListener("click", (e)=>{
        let numLikes = card.querySelector("#likes-count").textContent
        numberLike = numLikes +1 
        card.querySelector("#likes-count").textContent = `${numberLike} likes`

    })
    
    function addComment(comment) {
          //create new li and setAttribute(identifier, idNum) and appendChild to ul on HTML with comment as it's textContent
        document.querySelector('#comment-section').addEventListener("submit",event => {
            event.preventDefault()
            const comment=document.querySelector("#comment-line").value
            const commentList=document.querySelector("#comment-list")
            const li=document.createElement('li')
            li.textContent=comment
            commentList.appendChild(li)
            document.querySelector("#comment-form").reset()
           })
    }
    
    function deleteComment(comment) {
        let deleteTarget
        const identifier = comment.target.getAttribute('identifier')
        //for loop to compare HTML attribute with database to find the correct comment for deletion
        for (i = 0; i <= (commentsList.length -1); i++) {
            if ((commentsList[i].id).toString() === identifier) {
                deleteTarget = commentsList[i].id
                commentsList.splice(i, 1) //splice to remove the comment and index in the array
            }
        }
        fetch(dataURL + '/comments/' + deleteTarget.toString(), {
            method:"DELETE"})
            .then(response=> {response.json()
            comment.target.remove()
            })

    }
    
    function addNewComment(comment) {
    //add new comment to the database using dataURL + bootcampList[bootcampListPosition].id
    }
    
    function addBootcamp(){
        const submitButton = document.querySelector("#submit-button")
        submitButton.addEventListener("submit",(e)=>{
            e.preventDefault()
            document.querySelector("bootcamp-name").textContent = document.querySelector("form-name").value
            document.querySelector("image").src = document.querySelector("form-image").value
            e.target.reset()

            const postBootcamp = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                },
                body: JSON.stringify(bootcampList[bootcampListPosition].name, bootcampList[bootcampListPosition].image)
            };
            fetch(URL, postBootcamp)
            .then(bootcampResp => bootcampResp.json())
            .catch(function(error){
                alert("Bad things!")
            }
        })
    }
    
    function editBootcamp(bootcamp) {
        const editButton = document.querySelector("#edit-button")
        editButton.addEventListener("submit", ()=>{
            //when i click on edit, the name and url should appear in the input box for me to edit
            document.querySelector("form-name").textContent = bootcampList[bootcampListPosition].name
            document.querySelector("form-image").src = bootcampList[bootcampListPosition].image

            const postEdit = {
                method: "PATCH",
                headers:{
                    "Content-Type":"application/json",
                    "Accept":"application/json",
                }
                body: JSON.stringify(bootcampList[bootcampListPosition].name, bootcampList[bootcampListPosition].image)
            };
            fetch(URL, postEdit)
            .then(editResp=>editResp.json())
            .catch(function(error){
                alert("Bad things!")
            });
        });
    }
function renderLikes(e){
        let numLikes = card.querySelector("#likes-count").textContent
        let numberLike = parseInt(numLikes) + 1
        card.querySelector("#likes-count").textContent = `${numberLike} likes`
}

    function editBootcamp(bootcamp) {
        const editButton = document.querySelector("#edit-button")
        editButton.addEventListener("submit", ()=>{
            //when i click on edit, the name and url should appear in the input box for me to edit
            document.querySelector("form-name").textContent = bootcampList[bootcampListPosition].name
            document.querySelector("form-image").src = bootcampList[bootcampListPosition].image

            const postEdit = {
                method: "PATCH",
                headers:{
                    "Content-Type":"application/json",
                    "Accept":"application/json",
                }
                body: JSON.stringify(bootcampList[bootcampListPosition].name, bootcampList[bootcampListPosition].image)
            };
            fetch(URL, postEdit)
            .then(editResp=>editResp.json())
            .catch(function(error){
                alert("Bad things!")
            });
        });
    }
    
    function carouselBootcamps(direction) {
        /* function that is passed a direction in as a parameter moves through an index
           in the corresponding direction. checks for where the index is in the array to
           loop back to the "opposite end" of the array.
           */
       //check the direction
        if (direction === "left") {
            //check if the current index position is the start of the array,
            //if so set the index position to the end of the array
            if (bootcampListPosition === 0) {
                bootcampListPosition = (bootcampList.length - 1)
                const bootcampLogo = document.getElementById("image")
                bootcampLogo['src'] = bootcampList[bootcampListPosition].image
                const nameTextbox = document.getElementById("form-name")
                const imageTextbox = document.getElementById("form-image")
                nameTextbox['placeholder'] = bootcampList[bootcampListPosition].name
                imageTextbox['placeholder'] = bootcampList[bootcampListPosition].image
                const comments = carouselGetComments()
                const likes = bootcampList[bootcampListPosition].likes
                renderLikes(likes)
                const commentList = document.getElementById("comment-list")
                //while loop to remove all comments from the DOM
                while (commentList.firstChild) {
                    commentList.removeChild(commentList.firstChild)
                }
                comments.forEach(addComment)
                const name = document.getElementById("bootcamp-name")
                name.textContent = bootcampList[bootcampListPosition].name               
            }
            else {
                bootcampListPosition -= 1
                const bootcampLogo = document.getElementById("image")
                bootcampLogo['src'] = bootcampList[bootcampListPosition].image
                const nameTextbox = document.getElementById("form-name")
                const imageTextbox = document.getElementById("form-image")
                nameTextbox['placeholder'] = bootcampList[bootcampListPosition].name
                imageTextbox['placeholder'] = bootcampList[bootcampListPosition].image
                const comments = carouselGetComments()
                const likes = bootcampList[bootcampListPosition].likes
                renderLikes(likes)
                const commentList = document.getElementById("comment-list")
                //while loop to remove all current comments displayed in the DOM
                while (commentList.firstChild) {
                    commentList.removeChild(commentList.firstChild)
                }
                comments.forEach(addComment)
                const name = document.getElementById("bootcamp-name")
                name.textContent = bootcampList[bootcampListPosition].name
            }
        }
        //check the direction
        if (direction === "right") {
            //check if the current index position is the end of the array,
            //if so set the index position to the start of the array
            if (bootcampListPosition === (bootcampList.length - 1)) {
                bootcampListPosition = 0
                const bootcampLogo = document.getElementById("image")
                bootcampLogo['src'] = bootcampList[bootcampListPosition].image
                const nameTextbox = document.getElementById("form-name")
                const imageTextbox = document.getElementById("form-image")
                nameTextbox['placeholder'] = bootcampList[bootcampListPosition].name
                imageTextbox['placeholder'] = bootcampList[bootcampListPosition].image
                const comments = carouselGetComments()
                const likes = bootcampList[bootcampListPosition].likes
                renderLikes(likes)
                const commentList = document.getElementById("comment-list")
                //while loop to remove all comments from the DOM
                while (commentList.firstChild) {
                    commentList.removeChild(commentList.firstChild)
                }
                comments.forEach(addComment)
                const name = document.getElementById("bootcamp-name")
                name.textContent = bootcampList[bootcampListPosition].name
            }
            else {
                bootcampListPosition += 1
                const bootcampLogo = document.getElementById("image")
                bootcampLogo['src'] = bootcampList[bootcampListPosition].image
                const nameTextbox = document.getElementById("form-name")
                const imageTextbox = document.getElementById("form-image")
                nameTextbox['placeholder'] = bootcampList[bootcampListPosition].name
                imageTextbox['placeholder'] = bootcampList[bootcampListPosition].image
                const comments = carouselGetComments()
                const likes = bootcampList[bootcampListPosition].likes
                renderLikes(likes)
                const commentList = document.getElementById("comment-list")
                //while loop to remove all comments from the DOM
                while (commentList.firstChild) {
                    commentList.removeChild(commentList.firstChild)
                }
                comments.forEach(addComment)
                const name = document.getElementById("bootcamp-name")
                name.textContent = bootcampList[bootcampListPosition].name
            }
        }
    }

function renderLikes(e){
        let numLikes = card.querySelector("#likes-count").textContent
        let numberLike = parseInt(numLikes) + 1
        card.querySelector("#likes-count").textContent = `${numberLike} likes`
}
    
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
    function carouselGetComments() {
        /* function that goes through the commentsList and finds the comments
           that belong to the selected bootcamp
        */
        const commentList = []
            for (x = 0; x <= (commentsList.length - 1); x++) {
                if (commentsList[x].bootcampid === bootcampList[bootcampListPosition].id) {
                        commentList.push(commentsList[x])
                }
            }
            return commentList
        }
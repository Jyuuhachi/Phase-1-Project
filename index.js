const bootcampList = []
let bootcampListPosition = 0
fetch(URL)
.then(response => response.json())
.then(data => {
    bootcampList = data.bootcamps
    const bootcampImage = bootcampList[0].image
    const bootcampDisplay = document.getElementById("image")
    bootcampDisplay["src"] = bootcampImage
    bootcampComments = bootcampList[0].comments
    bootcampComments.forEach(addComment)
})

const leftArrow = document.getElementById("arrow-left")
const rightArrow = document.getElementById("arrow-right")
leftArrow.addEventListener("click", e => carouselBootcamps("left"))
rightArrow.addEventListener("click", e => carouselBootcamps("right"))
    
    
    function addComment(comment) {
    
    }
    
    function deleteComment(comment) {
    
    }
    
    function addNewComment(comment) {
    }
    
    function addBootcamp(){
        const submitButton = document.querySelector("#submit-button")
        submitButton.addEventListener("submit",()=>{
            document.querySelector("bootcamp-name").textContent = document.querySelector("form-name").value
            document.querySelector("image").src = document.querySelector("form-image").value
        })
    }
    
    function editBootcamp(bootcamp) {
        const editButton = document.querySelector("#edit-button")
        editButton.addEventListener("submit", ()=>{
            

            
        })
    }
    
    function carouselBootcamps(direction) {
        if (direction === "left") {
            if (bootcampListPosition === 0) {
                bootcampListPosition = (bootcampList.length - 1)
                const bootcampLogo = document.getElementById("image")
                bootcampLogo['src'] = bootcampList[bootcampListPosition].image
                const comments = carouselGetComments()
                const likes = bootcampList[bootcampListPosition].likes
                renderLikes(likes)
                const commentList = document.getElementById("comment-list")
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
                const comments = carouselGetComments()
                const likes = bootcampList[bootcampListPosition].likes
                renderLikes(likes)
                const commentList = document.getElementById("comment-list")
                while (commentList.firstChild) {
                    commentList.removeChild(commentList.firstChild)
                }
                comments.forEach(addComment)
                const name = document.getElementById("bootcamp-name")
                name.textContent = bootcampList[bootcampListPosition].name
            }
        }
        if (direction === "right") {
            if (bootcampListPosition === (bootcampList.length - 1)) {
                bootcampListPosition = 0
                const bootcampLogo = document.getElementById("image")
                bootcampLogo['src'] = bootcampList[bootcampListPosition].image
                const comments = carouselGetComments()
                const likes = bootcampList[bootcampListPosition].likes
                renderLikes(likes)
                const commentList = document.getElementById("comment-list")
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
                const comments = carouselGetComments()
                const likes = bootcampList[bootcampListPosition].likes
                renderLikes(likes)
                const commentList = document.getElementById("comment-list")
                while (commentList.firstChild) {
                    commentList.removeChild(commentList.firstChild)
                }
                comments.forEach(addComment)
                const name = document.getElementById("bootcamp-name")
                name.textContent = bootcampList[bootcampListPosition].name
            }
        }
    }

    function renderLikes(){
        let numLikes = card.querySelector("#likes-count").textContent
        let numberLike = parseInt(numLikes) + 1
        card.querySelector("#likes-count").textContent = `${numberLike} likes`
    }
    
    function updateLikes() {
        const button = document.querySelector("#likes-button")
        button.addEventListener("click", renderLikes(e))
        const postLikes = {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
            body: JSON.stringify(bootcampList[bootcamplistPosiition["likes"]])
        };
        fetch(URL, postLikes)
        .then(likeResponse=>likeResponse.json())
        .catch(function(error){
            alert("Bad things!");
            console.log(error.message)
        })
    }

    function carouselGetComments() {
        const commentList = []
        for (i = 0; i <= bootcampList[bootcampListPosition]['comments'].length; i++) {
            commentList.push(bootcampList[bootcampListPosition]['comments'][i]['content'])
        }
        return commentList
    }
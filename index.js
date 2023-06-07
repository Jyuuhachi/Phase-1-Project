const dataURL = "http://localhost:3000"
const bootcampList = []
const commentsList = []
let bootcampListPosition = 0

fetch(dataURL + '/bootcamps')
.then(response => response.json())
.then(data => {
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
        for (i = 0; i <= (comments.length - 1); i++) {
            commentsList.push(comments[i])
        }
    const commentList = []
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
    
    function addComment(comment) {
    //create new li and setAttribute(identifier, idNum) and appendChild to ul on HTML with comment as it's textContent
    }
    
    function deleteComment(comment) {
        let deleteTarget
        const identifier = comment.target.getAttribute('identifier')
        for (i = 0; i <= (commentsList.length -1); i++) {
            if ((commentsList[i].id).toString() === identifier) {
                deleteTarget = commentsList[i].id
                commentsList.splice(i, 1)
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
    
    function addBootcamp(bootcamp) {
    
    }
    
    function editBootcamp(bootcamp) {
    
    }
    
    function carouselBootcamps(direction) {
        if (direction === "left") {
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
                const nameTextbox = document.getElementById("form-name")
                const imageTextbox = document.getElementById("form-image")
                nameTextbox['placeholder'] = bootcampList[bootcampListPosition].name
                imageTextbox['placeholder'] = bootcampList[bootcampListPosition].image
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
                const nameTextbox = document.getElementById("form-name")
                const imageTextbox = document.getElementById("form-image")
                nameTextbox['placeholder'] = bootcampList[bootcampListPosition].name
                imageTextbox['placeholder'] = bootcampList[bootcampListPosition].image
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
    
    function updateLikes() {
    
    }
    function carouselGetComments() {
        const commentList = []
            for (x = 0; x <= (commentsList.length - 1); x++) {
                if (commentsList[x].bootcampid === bootcampList[bootcampListPosition].id) {
                        commentList.push(commentsList[x])
                }
            }
            return commentList
        }
    
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
    
/* function addComment(comment){}
    
function deleteComment(comment){}
    
function addNewComment(comment){}
    
function addBootCamp(bootCamp){}
    
function editbootCamp(bootCamp){}
    
    
function updateLikes(){}
 */

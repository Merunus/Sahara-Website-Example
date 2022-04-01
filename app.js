const card1 = document.querySelector(".card1")
const card2 = document.querySelector(".card2")
const card3 = document.querySelector(".card3")
const card4 = document.querySelector(".card4")
const close = document.getElementById("close")
const popImage = document.querySelector(".popup-image")
const contactBtn = document.getElementById("contactBtn")
const aboutBtn = document.getElementById("aboutBtn")
const formContainer = document.querySelector(".form-container")
const homeContainer = document.querySelectorAll(".col")
const homeBtn = document.getElementById("homeBtn")
const mainContainter = document.querySelector(".container")
const aboutMainContainer = document.querySelector(".about-main-container")
const row = document.querySelector(".row")




window.onclick = function(e) {
    if(e.target === popImage) {
        popImage.style.display = "none"
    }
}

card1.addEventListener('click', function() {
    popImage.style.display = "block"
    document.querySelector(".popup-image img").src = "pic-1.png"
    document.querySelector(".popup-image p").textContent = "The Western Desert of Egypt is an area of the Sahara that lies west of the river Nile, up to the Libyan border, and south from the Mediterranean sea to the border with Sudan. It is named in contrast to the Eastern Desert which extends east from the Nile to Red Sea. "

})
card2.addEventListener('click', function() {
    popImage.style.display = "block"
    document.querySelector(".popup-image img").src = "pic-2.png"
    document.querySelector(".popup-image p").textContent = "Bagawat, is an ancient Christian cemetery, one of the oldest in the world, which functioned at the Kharga Oasis in southern-central Egypt from the 3rd to the 7th century AD. It is one of the earliest and best preserved Christian cemeteries from the ancient world."
})
card3.addEventListener('click', function() {
    popImage.style.display = "block"
    document.querySelector(".popup-image img").src = "pic-3.png"
    document.querySelector(".popup-image p").textContent = "The pyramids of Giza were royal tombs built for three different pharaohs. The northernmost and oldest pyramid of the group was built for Khufu (Greek: Cheops), the second king of the 4th dynasty. Called the Great Pyramid, it is the largest of the three."
})
card4.addEventListener('click', function() {
    popImage.style.display = "block"
    document.querySelector(".popup-image img").src = "pic-4.png"
    document.querySelector(".popup-image p").textContent = "Kalahari Desert, large basinlike plain of the interior plateau of Southern Africa. It occupies almost all of Botswana, the eastern third of Namibia, and the northernmost part of Northern Cape province in South Africa. "
})

close.addEventListener("click", function() {
    popImage.style.display = "none";
    
})

contactBtn.addEventListener("click", function() {
    homeContainer.forEach(function(e){
        e.style.display = "none"
    })
    mainContainter.style.backgroundImage = "linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)),url(background2.jpeg)", overflow = "hidden";    
    formContainer.style.display = "block",overflow = "hidden";
    aboutMainContainer.style.display = "none"
    row.style.height = "150px"

})

homeBtn.addEventListener("click",function() {
    formContainer.style.display = "none"
    homeContainer.forEach(function(e){
        e.style.display = "block"
    })
    mainContainter.style.backgroundImage = "linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)),url(background.png)",overflow = "hidden"
    aboutMainContainer.style.display = "none";
    row.style.height = "800px"
})



aboutBtn.addEventListener("click", function() {
    homeContainer.forEach(function(e){
        e.style.display = "none"
    })
    mainContainter.style.backgroundImage = "linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)),url(background3.jpeg)";
    mainContainter.style.overflow = "auto";
    aboutMainContainer.style.display = "block"
    formContainer.style.display = "none";
    row.style.height = "150px"

})
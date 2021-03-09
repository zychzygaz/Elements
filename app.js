// const panels = document.querySelectorAll('.panel')

// panels.forEach(function(pan) {
//     pan.addEventListener('click', function() {
//         pan.classList.add('active')
//     })
// } )

// function removeClasses() {
//     panels.forEach(function(pan){
//         pan.addEventListener('click', function(){
//         pan.classList.remove('active')
//         console.log("object");
//         })
        
//     })
// }

const panels = document.querySelectorAll('.panel')

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })
})

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}
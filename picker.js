const dataFile = new File("data.csv")
let reader = new FileReader()


const form = document.getElementById("form")

function onLoad(){
    let line = reader.readAsText(dataFile);
    console.log(line)
}


form.addEventListener("submit", (event) => {


    event.preventDefault()


})
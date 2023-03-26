const MainButton = document.getElementById('Mainbutton')
const FilesButton = document.getElementById('Filesbutton')

const audio = document.getElementById("click")

const paragraph = document.getElementById('Para')
console.log(paragraph)

const mainText = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus sint quaerat laborum. Laudantium, libero distinctio iste magnam tenetur adipisci ad dolor eaque obcaecati, saepe, atque minima repellendus dicta culpa ut magni. Optio maxime natus error quaerat! Provident porro similique ipsum est fugiat hic quaerat, cupiditate amet saepe beatae voluptatibus! Est cum numquam consequuntur repudiandae odit voluptatem, quia animi tempore similique.'
const filesText = "Yo shinji, get in the robot, your dad loves you, get in the robot, it's not an eva it's a robot, aliens get scared when you show up get, get inside that robot"

function changePara(string) {
    paragraph.innerHTML = string
    audio.play()
}

MainButton.addEventListener("click", (event) => {changePara(mainText)});
FilesButton.addEventListener("click", (event) => {changePara(filesText)});

function play() {
    audio.play()
}

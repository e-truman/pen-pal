import { getLetters, deleteLetters } from "./dataAccess.js"


const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", click => {
    if (click.target.id.startsWith("letter--")) {
        const [, letterId] = click.target.id.split("--")
        deleteReservation(parseInt(letterId))
    }
})



export const Letters = () => {
    const letters = getLetters()

    let html = `
        <ul>
           ${letters.map(letter => {
        return `<li> Dear, ${letter.recipientId}(${penpal.email}) </li>
        <li> ${letter.body} </li>
        <li> Sincerely, ${letter.authorId} </li>
        <li>${letter.dateSent}<button class="reservation__delete"id="reservation--${reservation.id}">Deny</button></li>`
    }).join("")
        }
        </ul>`
    html += "</ul>"

    return html
}
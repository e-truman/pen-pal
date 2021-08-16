import { fetchLetters } from "./dataAccess.js"
import { PenPal } from "./PenPal.js"

// You need to fetch the data from the API and store it in application state before you can convert the data structures to HTML representations. The syntax here is very confusing for a beginner, and your instruction team will explain the logic when they do a live coding review.

const mainContainer = document.querySelector("#container")

const render = () => {
    fetchReservations().then(
        () => {
            mainContainer.innerHTML = ButtonsTheClown()
        }
    )
}

render()

// main container has to listen for custom events and re-render html
mainContainer.addEventListener(
    "stateChanged",
    customEvent => {
        render()
    }
)
import { fetchLetters, fetchPenpals, fetchTopics } from "./dataAccess.js"
import { PenPal } from "./PenPal.js"

// You need to fetch the data from the API and store it in application state before you can convert the data structures to HTML representations. The syntax here is very confusing for a beginner, and your instruction team will explain the logic when they do a live coding review.
// call function in main js because it renders entire app- re-renders when state changes, syncs app with API
const mainContainer = document.querySelector("#container")

const render = () => {
    // need this to run penpal which shows all your html. if any of these change, you re render
    fetchLetters()
    fetchPenpals()
    fetchTopics()
    .then(
        () => {
            mainContainer.innerHTML = PenPal()
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
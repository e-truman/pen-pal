import { LetterForm } from "./LetterForm.js"

// we needed to interpolate the array of requests that we converted to a list element.

export const PenPal = () => {
    return `
        <h1>Pen Pals!</h1>
        <section class="serviceForm">
         ${LetterForm()}
        </section>

        <section class="serviceRequests">
            <h2>Past Letters</h2>
           
        </section>
    `
}
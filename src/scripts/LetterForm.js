import {  getPenpals } from "./dataAccess.js"




export const LetterForm = () => {
    let html = `
        <div class="field">
            <div class="input"> ${Authors()} </div>
        </div>
        <div class="field">
            <div class="input">${Recipients()} </div>
        </div>
        <div class="field">
            <label class="label" for="address">Address</label>
            <input type="text" name="address" class="input" />
        </div>
        <div class="field">
            <label class="label" for="partySize">Party Size</label>
            <input type="number" name="partySize" class="input" />
        </div>
        <div class="field">
            <label class="label" for="serviceDate">Date Needed</label>
            <input type="date" name="serviceDate" class="input" />
        </div>
        <div class="field">
            <label class="label" for="reservationLength">Reservation Length (hours)</label>
            <input type="number" name="reservationLength" class="input" />
        </div>

        <button class="button" id="submitRe">Submit Reservation</button>
    `

    return html
}


// const mainContainer = document.querySelector("#container")

// mainContainer.addEventListener("click", clickEvent => {
//     if (clickEvent.target.id === "submitReservation") {
//         // Get what the user typed into the form fields
//         const userParentName = document.querySelector("input[name='parentName']").value
//         const userChildName = document.querySelector("input[name='childName']").value
//         const userAddress = document.querySelector("input[name='address']").value
//         const userPartySize = document.querySelector("input[name='partySize']").value
//         const userDate = document.querySelector("input[name='serviceDate']").value
//         const userReservationLength = document.querySelector("input[name='reservationLength']").value

//         // Make an object out of the user input
//         const dataToSendToAPI = {
//         "parentName": userParentName,
//         "childName" : userChildName,
//         "address": userAddress,
//         "numberOfAttendees": userPartySize,
//         "reservationDate": userDate,
//         "reservationLength": userReservationLength
//         }

//         // Send the data to the API for permanent storage
//         sendLetter(dataToSendToAPI)
//     }
// })





export const Authors = () => {
    const penpals = getPenpals()
    let html = `<select id="authors" class="dropdown"> 
    <option value="0"> Please select an author</option>`

    const authorListItems = penpals.map(author => {
        return `
            <option value="${author.id}">${author.name} </option>`
    })

    html += authorListItems.join("")
    html += "</select>"
    return html
}



export const Recipients = () => {
    const penpals = getPenpals()
    let html = `<select id="recipients" class="dropdown" > 
    <option value="0"> Please select a recipient</option>`

    const recipientListItems = penpals.map(recipient => {
        return `
            <option value="${recipient.id}">${recipient.name} </option>`

    })

    html += recipientListItems.join("")
    html += "</select>"
    return html
}





// document.querySelector("input[name='recipients']:checked").value








// export const Governors = () => {
//     const orderBuilder = getOrderBuilder()
//     let html = `<select id="governors" class="dropdown" ${("selected" === true) ? `value='${governor.id}'` : ""}> 
//     <option value="0"> Please select a Governor...</option>`

//     const listItems = governors.map(governor => {
//         return `
//             <option ${(governor.id === orderBuilder.governorId) ? "selected" : ""} value="${governor.id}">${governor.name} </option>`


//     })

//     html += listItems.join("")
//     html += "</select>"
//     return html
// }




// ${("selected" === true) ? `value='${recipient.id}'` : ""}
//You will need to store that external data in your application state when you fetch it. Create a property named requests in your application state object. Its initial value must be an empty array.



const applicationState = {
    letters: [],
}

const mainContainer = document.querySelector("#container")
// this is fetching the data so that it is moved from application state.
const API = "http://localhost:8088"

export const fetchLetters = () => {
    return fetch(`${API}/letters`)
        .then(response => response.json())
        .then(
            // this function puts the service requests, the paramater we called in the then function, into the empty array me made
            (writtenLetter) => {
                // Store the external state in application state
                applicationState.letters = writtenLetter
            }
        )
}

// this function creates a copy of the array we put in the requests container
export const getReservations = () => {
    return applicationState.reservations
}

export const sendLetter = (userLetter) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userLetter)
    }
// dispatch custom event after post has been completed
    return fetch(`${API}/letters`, fetchOptions)
    .then(response => response.json())
    .then(() => {
        // since we already have the data posted, we don't need to put it in again. instead of writing a function that puts the info in the form into an object, we are just fetching the new data and dispatching a state change event. Why do we need to to fetch the data to do this? is it kind of like saying if there are fetchOptions, AKA if there is something new, change the state? - dispatches custom event after post function has been complete
        mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
    })
}


// When you use the DELETE method on an HTTP request, you must identify a single resource. therefore the function whose responsiblity it is to initiate the fetch request for DELETE must have the primary key sent to it as an argument.


export const deleteLetter = (id) => {
    return fetch(`${API}/letters/${id}`, { method: "DELETE" })
        .then(
            () => {
                mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
            }
        )
}
export const Authors = () => {
    const state = ________
    let html = `<select id="authors" class="dropdown" ${("selected" === true) ? `value='${author.id}'` : ""}> 
    <option value="0"> Please select an Author</option>`

    const listItems = authors.map(author => {
        return `
            <option ${(author.id === orderBuilder.governorId) ? "selected" : ""} value="${author.id}">${author.name} </option>`


    })

    html += listItems.join("")
    html += "</select>"
    return html
}
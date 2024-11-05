function insert_Row() {
    // Select the table element by its id
    const table = document.getElementById("sampleTable");

    // Create a new row at the beginning of the table (index 0)
    const newRow = table.insertRow(0);

    // Create two new cells in the new row
    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);

    // Set the text content for each cell
    cell1.textContent = "New Cell1";
    cell2.textContent = "New Cell2";
}

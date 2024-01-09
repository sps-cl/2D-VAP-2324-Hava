function create_table() {
    if(document.body.getElementsByTagName("table").length > 0)
        document.body.getElementsByTagName("table")[0].remove();
    let rows_count = parseInt(document.getElementById("rows_count").value);
    let columns_count = parseInt(document.getElementById("columns_count").value);

    let table = document.createElement("table");
    let i = 1;
    for(row = 0; row < rows_count; row++) {
        let row = document.createElement("tr");
        for(column = 0; column < columns_count; column++) {
            let column = document.createElement("td");
            column.innerText = i++;
            row.appendChild(column);
        }
        table.appendChild(row);
    }
    document.body.appendChild(table);
}
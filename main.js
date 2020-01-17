function search(searchBox) {
    let input = searchBox;
    let filter = input.value.toUpperCase();
    let table = document.querySelector("#myTable")
    for (let row of table.rows) {
        let isMatch = false;
        for(let cell of row.cells){
            if (cell && cell.nodeName != 'TH') {
                let txtValue = cell.textContent || cell.innerText;
                isMatch = txtValue.toUpperCase().indexOf(filter) > -1;
                if(isMatch)break;
            }
        }
        row.style.display = isMatch?"":"none";
    }
}
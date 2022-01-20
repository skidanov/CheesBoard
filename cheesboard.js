var letters = ['', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', '']
var numbers = ['', '1', '2', '3', '4', '5', '6', '7', '8', '']
var table = document.getElementById('chees')

for (var i = 0; i < 10; i++) {
    var row = table.insertRow(i)
    letters.reverse();
    
    for (var j = 0; j < 10; j++) {

        var cell = row.insertCell(j)

        if (i === 0 || i === 9) {

            cell.setAttribute("class", "bord")
            cell.innerHTML = letters[j]

            } else if (j === 0 || j === 9) {

            numbers.reverse();
            cell.setAttribute("class", "bord")
            cell.innerHTML = numbers[i]

           }

        else {

            if ((i % 2 !== 0 && j % 2 !== 0) || (i % 2 === 0 && j % 2 === 0)) {
                cell.setAttribute("class", "cellLight")

            }

            else {
                cell.setAttribute("class", "cellDark")
                
            }
        }
    }
}

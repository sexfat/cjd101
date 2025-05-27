const tableDiv = document.getElementById('table');
let html = '<table>';
for (let i = 1; i <= 9; i++) {
    html += '<tr>';
    for (let j = 1; j <= 9; j++) {
        html += `<td>${i}x${j}=${i * j}</td>`;
    }
    html += '</tr>';
}
html += '</table>';
tableDiv.innerHTML = html;
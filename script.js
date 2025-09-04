const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
  // Select all price cells
  const prices = document.querySelectorAll(".price");
  let total = 0;

  prices.forEach(cell => {
    total += parseInt(cell.textContent);
  });

  // Remove previous total row if exists
  const oldAns = document.getElementById("ans");
  if (oldAns) {
    oldAns.parentElement.remove();
  }

  // Create a new row
  const table = document.querySelector("table");
  const newRow = document.createElement("tr");
  const totalCell = document.createElement("td");

  // span across 2 columns
  totalCell.setAttribute("colspan", "2");
  totalCell.style.fontWeight = "bold";

  // ✅ Add id="ans" so Cypress can detect it
  totalCell.id = "ans";
  totalCell.textContent = total;

  newRow.appendChild(totalCell);
  table.appendChild(newRow);
};

getSumBtn.addEventListener("click", getSum);

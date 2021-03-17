// Create an object to act as an associative array
var vegetables = [];
vegetables["tomato"] = ["4-16 days", "60-90 days"];
vegetables["corn"] = ["6-10 days", "60-100 days"];
vegetables["sweet potato"] = ["0 days", "90 days"];
vegetables["lima beans"] = ["7-13 days", "90 days"];
vegetables["turnip"] = ["0 days", "35-60 days"];
vegetables["parsnip"] = ["16-25 days", " 112 days"];
vegetables["cucumber"] = ["6-10 days", "50-70 days"];
vegetables["onion"] = ["10-14 days", "90 days"];
vegetables["eggplant"] = ["8-13 days", "65-80 days"];
vegetables["squash"] = ["8-12 days", "60-110 days"];
vegetables["bell pepper"] = ["0 days", "60-95 days"];
vegetables["edamame"] = ["0 days", "90-150 days"];
vegetables["potato"] = ["0 days", "70 days"];
vegetables["peppers"] = ["10-14 days", "60-90 days"];
vegetables["broccoli"] = ["5-9 days", "100-150 days"];
vegetables["brussel sprouts"] = ["5-10 days", "80-90 days"];
vegetables["carrot"] = ["10-21 days", "70-80 days"];
vegetables["asparagus"] = ["21-30 days", "3 YEARS"];
vegetables["cauliflower"] = ["4-10 days", "50-100 days"];
vegetables["celery"] = ["14-21 days", "85-120 days"];
vegetables["leeks"] = ["10-14 days", "50 days"];
vegetables["spinach"] = ["10-18 days", "42 days"];

function addField(n) {
  var tr = n.parentNode.parentNode.cloneNode(true);
  document.getElementById("tbl").appendChild(tr);
}

function insertText(e) {
  if (e.keyCode == 13) {
    // e.target will point to the input field that triggered this event
    // .value will retrieve the text from that field
    // Retrieve the vegetable data from the object
    v = vegetables[e.target.value];

    // Make sure it found a match in the object
    if (typeof v !== "undefined") {
      // Remember e.target is the input element. The first parent of
      // it will be TD (the cell). The parent of that TD will give us the TR (table row)
      // children then give us an array of all TDs in that row.
      var c = e.target.parentNode.parentNode.children;

      // c[1] references the 2nd TD in the row, c[2] is the 3rd TD
      // v[0] and v[1] reference the two values assigned to the specified vegetable above
      c[1].innerHTML = v[0];
      c[2].innerHTML = v[1];
    }
  }
}

for(var i = 0; i < 33; i++)
{
  var tableRow = document.createElement("tr");
  var attribute = document.createAttribute("class");
  attribute.value = "row";
  tableRow.setAttributeNode(attribute);
  document.querySelector("table").appendChild(tableRow);
    for(var x = 0; x < 61; x++)
    {
      var square = document.createElement("td");
      var attribute = document.createAttribute("class");
      attribute.value = "square";
      square.setAttributeNode(attribute);
      document.querySelectorAll("tr")[i].appendChild(square);
    }
}

for(var x = 0; x < 32; x++)
{
  var colors = ["#b23232","#ff4848", "#ff6c6c", "#e59b40", "#ffad48", "#ffc57e", "#e5de40","#fff748","#fffa91","#39cc4b","#48ff5e","#91ff9e","#3248b2","#3248b2","#91a3ff","#6432b2","#8f48ff","#bb91ff","#7c2b99","#cf48ff","#e291ff","#000000","#323232","#666666","#999999","#cccccc","#ffffff","#3a2119","#512e23","#754233","#90675b","#ac8d84"]
  var choice = document.createElement("div");
  var attribute = document.createAttribute("class");
  attribute.value = "choice";
  choice.setAttributeNode(attribute);
  choice.style.backgroundColor = colors[x];
  document.querySelector("div.canvas").appendChild(choice);
}

createBrush();
function createBrush()
{
  var brushColor = document.createElement("div");
  var attribute = document.createAttribute("class");
  attribute.value = "brushColor";
  brushColor.setAttributeNode(attribute);
  brushColor.style.backgroundColor = "#b23232";

  var currentBrush = document.createElement("div");
  var attribute = document.createAttribute("class");
  attribute.value = "currentBrush";
  currentBrush.setAttributeNode(attribute);

  var brushMessage = document.createElement("h2");
  var text = document.createTextNode("Brush Color <");
  brushMessage.appendChild(text);

  document.querySelector("div.canvas").appendChild(currentBrush);
  document.querySelector("div.currentBrush").appendChild(brushMessage);
  document.querySelector("div.canvas").appendChild(brushColor);
}

var currentColor = document.querySelector("div.brushColor").style.backgroundColor;

var allColors = document.querySelectorAll("div.choice");
for(var i = 0; i < allColors.length; i++)
{
  allColors[i].addEventListener("click", function()
  {
    currentColor = this.style.backgroundColor;
    document.querySelector("div.brushColor").style.backgroundColor = currentColor;
  })
}

var allSquares = document.querySelectorAll("td.square");
for(var i = 0; i < allSquares.length; i++)
{
  allSquares[i].addEventListener("mousedown", function()
  {
    console.log("clicked");
    this.style.backgroundColor = currentColor;
  })
}







var currentColor = document.querySelector("div.brushColor").style.backgroundColor;

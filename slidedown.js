console.log('Javascript loaded');
$(document).ready(function(){
  $("#flip").click(function(){
    $("#panel").slideToggle(3000);
  });
});

const xValues = ["China","Australia","Italy", "France", "Spain", "USA", "Argentina", "Japan"];
const yValues = [30, 28, 25, 20, 18, 15, 13, 11];
const barColors = ["yellow","red", "green","blue","orange","brown","grey","pink"];

new Chart("myChart", {
  type: "bar",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    legend: {display: false},
    title: {
      display: true,
      text: "World Wine Production 2024"
    }
  }
});

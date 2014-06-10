@@ -1,98 +0,0 @@


// --------------------- draw chart ---------------------

var chartContainer = document.getElementById("chart");
var width = chartContainer.clientWidth,
height = chartContainer.clientHeight;

var y = d3.scale.linear()
    .range([height, 0]);

var chart = d3.select("#chart")
    .attr("width", width)
    .attr("height", height);

d3.csv("GameOfThrones.csv", type, function(error, data) {
  y.domain([0, d3.max(data, function(d) { return d.value; })]);

  var barWidth = width / data.length;

  var bar = chart.selectAll("g")
      .data(data)
    .enter().append("g")
      .attr("transform", function(d, i) { return "translate(" + i * barWidth + ",0)"; });

  bar.append("rect")
      .attr("y", function(d) { return y(d.value); })
      .attr("height", function(d) { return height - y(d.value); })
      .attr("width", barWidth - 1);

  // bar.append("text")
  //     .attr("x", barWidth / 2)
  //     .attr("y", function(d) { return y(d.value) -10; })
  //     .attr("dy", ".75em")
  //     .text(function(d) { return d.value; });
});

function type(d) {
  d.value = +d.value; // coerce to number
  return d;
}

// var times = [];

// window.onload = function() {

// 	// Video
// 	var video = document.getElementById("video");
// 	var videoContainer = document.getElementById("video-container");

// 	// Meta
// 	var title = document.getElementById("title");
// 	var chartContainer = document.getElementById("chart");

// // --------------------- vertically center ---------------------

// 	verticallyCenter ();
// 	window.onresize = verticallyCenter;

// 	function verticallyCenter()
// 	{
// 		//video container
// 		if ((window.innerHeight - videoContainer.clientHeight) > 0) {
// 			value = ((window.innerHeight - videoContainer.clientHeight)/2)
// 			videoContainer.setAttribute("style", "margin-top:" + value.toString() + "px");
// 			//set data canvas height
// 			// volumeHistory.setAttribute("style", "height:" + value.toString() + "px");
// 		}
// 		//title
// 			value = ((videoContainer.clientHeight - title.offsetHeight)/2)
// 			title.setAttribute("style", "top:" + value.toString() + "px");
// 	}

// // --------------------- controls ---------------------

// 	//play the thing by clicking the video itself
// 	title.addEventListener("click", function() {
// 		if (video.paused == true) {
// 			// Play the video
// 			video.play();

// 		} else {
// 			// Pause the video
// 			video.pause();
// 		}
// 		// console.log ("The current of the video is: " + video.currentTime);
// 	});

// 	video.addEventListener("play", function() {
// 		title.style.opacity = '0';

// 	});

// 	video.addEventListener("pause", function() {
// 		title.style.opacity = '1';

// 	});
// } 

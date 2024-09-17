let currentColorGoodOneIndex = 1;
let currentColorGoodTwoIndex = 0;
let colors = ['blue', 'green', 'yellow', 'red'];
var currentColorGoodOne = colors[currentColorGoodOneIndex];
var currentColorGoodTwo = colors[currentColorGoodTwoIndex];

console.log("Current good one color: " + currentColorGoodOne, currentColorGoodOneIndex);
console.log("Current good two color: " + currentColorGoodTwo, currentColorGoodTwoIndex);

function changeBucketColorGoodOne() {
  var img = document.getElementById("good_one_bucket_img");
  currentColorGoodOneIndex = (currentColorGoodOneIndex + 1) % colors.length;
  currentColorGoodOne = colors[currentColorGoodOneIndex];
  img.src = "Images/bucket_" + currentColorGoodOne + ".png";
  console.log("Current good one color: " + currentColorGoodOne, currentColorGoodOneIndex);
}

function changeBucketColorGoodTwo() {
  var img = document.getElementById("good_two_bucket_img");
  // Get the current color
  // Increment the color index or loop back to 0 if it reaches the end
  currentColorGoodTwoIndex = (currentColorGoodTwoIndex + 1) % colors.length;
  currentColorGoodTwo = colors[currentColorGoodTwoIndex];
  img.src = "Images/bucket_" + currentColorGoodTwo + ".png";
  // Print the current color to the console
  console.log("Current good two color: " + currentColorGoodTwo, currentColorGoodTwoIndex);
}

function displayMP4() {
  let videos = ['blue.mp4', 'green.mp4', 'yellow.mp4', 'red.mp4'];
  var goodOneVideoContainer = document.getElementById("video_container_one");
  var goodTwoVideoContainer = document.getElementById("video_container_two");
  // Display the corresponding MP4 videos for both buckets
  document.getElementById('good_one_bucket_img').style.display = 'none';
  document.getElementById('good_two_bucket_img').style.display = 'none';
  var goodOneVideoContainer = document.getElementById("good_one_video_container");
  var goodTwoVideoContainer = document.getElementById("good_two_video_container");
  // Display the corresponding MP4 videos for each good
  goodOneVideoContainer.innerHTML = '<video class="bucket_video" autoplay muted playsinline><source src="Images/' + videos[currentColorGoodOneIndex] + '" type="video/mp4"></video>';
  goodTwoVideoContainer.innerHTML = '<video class="bucket_video" autoplay muted playsinline><source src="Images/' + videos[currentColorGoodTwoIndex] + '" type="video/mp4"></video>';
}

/*
function setGoodOneColorStyle() {
  // Find all elements with the ID "good_one_color"
  document.querySelectorAll('[id="good_one_name"]').forEach(function(element) {
    // Set the font color according to currentColorGoodOne
    element.style.color = currentColorGoodOne;
  });

  document.querySelectorAll('[id="good_two_name"]').forEach(function(element) {
    // Set the font color according to currentColorGoodOne
    element.style.color = currentColorGoodTwo;
  });
}
*/

function checkForSameColors() {
  if (currentColorGoodOne === currentColorGoodTwo) {
    document.getElementById("warningBlockSameColors").style.display = "block";
  } else {
    document.getElementById("warningBlockSameColors").style.display = "none";
  }
}
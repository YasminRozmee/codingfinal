
var color = $('.selected').css('background-color');
console.log(color);



$('#colorSelect').on("click","li", function(){
  //remove class selected from all LIs
  $(this).siblings().removeClass('selected');
  //add class selected to the LI clicked on
  $(this).addClass('selected');
  
  //store the color selected after selecting new color
  color = $(this).css('background-color');
  //console.log(color);  
  $('#colorSelect').delay('2000').fadeOut();
});



function showElements(select, show) {
  $(select).on("click", function(){
    $(show).fadeToggle('fast');
  });
};


showElements('#newColorPick','#pickNewColor');
showElements('#changeColor','#colorSelect');



function changeColor() {
  
  //getter
  var r = $('#red').val();
  var g = $('#green').val();
  var b = $('#blue').val();
  var p = $('#pink').val();
  var p = $('#yellow').val();

  
  //setter
  $('#newColor').css("background-color", "rgb("+ r +","+ g +","+ b +","+ p +","+ y +")");
  
}

//color slider change, function changeColor
$('input[type=range]').change(changeColor);



$('#addNewColor').on("click", function(){
    
  var $newColor = $('<li></li>');
  $newColor.css("background-color", $('#newColor').css("background-color"));
  
  //append color
  $('#colorSelect').fadeIn('fast').append($newColor);
  //hide the selector box
  $('#pickNewColor').fadeOut();
  //triggerrrrr the event
  $newColor.click();
  
});

var imgNum = 1;

//where to draw
var context = $('canvas')[0].getContext("2d");
var $canvas = $('#canvas');
//global variable
var lastEvent;

var mouseDown = false;

var lineCap = ['butt', 'round', 'square'];


$canvas.mousedown(function(e){

  lastEvent = e;
  
  mouseDown = true;
  
}).mousemove(function(e){
  
  if(mouseDown) {
    context.beginPath();
    context.moveTo(lastEvent.offsetX,lastEvent.offsetY);
    context.lineTo(e.offsetX,e.offsetY);
    context.lineWidth=6;
    
    context.strokeStyle=color;
    context.stroke();

    //context.attr({'stroke-linecap': "round"});
    //context.attr({'stroke-linejoin': "round"});
   
    lastEvent = e;
  }
  
}).mouseup(function(){

  mouseDown = false;
});

// $("canvas").css("background-image", "url(girl.png)")

var pictures = [
        'layer1.png',
        'layer2.jpg',
        'layer3.jpg',
        'layer4.jpg',
        'layer5.jpg',
        'layer6.jpg',
        'layer7.jpg',
        'layer8.jpg',
        'layer9.jpg',
        'layer10.jpg',
        'layer11.jpg',
    ];

var next = 0;


$('#changeImage').on("click", function(){
  next+=1;
  if(next > pictures.length-1){
    next = 0;
  }
  $("canvas").css("background-image", "url('" + pictures[next] + "')");

});


//         $(".save").on('click', function(){
//             // opens dialog but location doesnt change due to SaveAs Dialog
//             document.location.href = '/script.php?image=' + canvas.toDataURL();
//         });
//     });

$(".save").click(function() {
   window.open(canvas.toDataURL('image/png'));
    var gh = canvas.toDataURL('png');

    var a  = document.createElement('a');
    a.href = gh;
    a.download = 'image.jpg';

    a.click()
});



html2canvas(document.querySelector("#capture")).then(canvas => {
    document.body.appendChild(canvas)
});

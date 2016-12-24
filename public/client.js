try{
  ``// client-side js
// run by the browser each time your view template is loaded

// by default, you've got jQuery,
//add other scripts at the bottom of index.html

var pressed = 0;
var pressedLength = 0;
var lengthForStuff = 5;
var right = 0;
$('document').ready(function(){
  if(localStorage.getItem('howMany')!==null){
    lengthForStuff=localStorage.getItem('howMany');
    runArrows(lengthForStuff);
    // console.log(lengthForStuff);
    $("#length").val(lengthForStuff);
  }else{
    lengthForStuff = 5;
    runArrows(lengthForStuff);
  }
  
  // runArrows(lengthForStuff);
  $('#up').click(function(){
    Up()
    });
  $('#down').click(function(){
    Down();
  });
  $('#goal').click(function(){
     if(pressed==0){
      image();  
      pressed=1;
    }else{
      $('#image').attr("src", "");
      $('#image').attr("height", "0px");
      pressed=0;
    }
  });
  
  
  $('#length').change(function(){
    lengthForStuff = $("#length").val();
    localStorage.setItem("howMany", lengthForStuff);
    runArrows(lengthForStuff);
  });
  
  
});

var stringMe ="";
var count = 0;
var holding="";
var tmp = "";

function runArrows(lengthForStuff){
  stringMe = "";
  for(var i=0;i<=lengthForStuff++;i++){
    var ran = getRandomArbitrary(1,3);
    if(ran==1){
      stringMe += "^";
      // console.log("yes!")
    } 
    if(ran==2){
      stringMe += "V";
      // console.log('Yes 2')
    }
    if(i%5===0){
      holding ="\n";
      tmp = stringMe + holding;
    }
  }
  console.log("string...'"+stringMe+"'");
  $('#arrows').html(tmp);
}

function hideOnClick(){
  $('#arrows').html();
}


function Up(){
  console.log("ran Up");
  
  var next = count + 1; 
  console.log(stringMe.substring(count, next));
  if(count%10===0){
    $('#arrowSubmit').html($('#arrowSubmit').html() + "<br>");
  }
  if(stringMe.substring(count, next)=="^"){
    console.log("yes"); 
    right = right+1;
    $('#arrowSubmit').html($('#arrowSubmit').html()+"^");
  }else{
    $('#arrowSubmit').html($('#arrowSubmit').html()+"X");
  }
  if(stringMe.substring(count, next)===""){
    // hideArrowAnswers();
    reset();
  }else{
    count=count+1;
  }
  if(count>=lengthForStuff){
    reset();
  }
  // if(count>=lengthForStuff){
  //   hideArrowAnswers();
  //   ifCountHigh();
  // }else{
  //   showArrowAnswers();
  // }
  
}

function Down(){
  console.log("ran Down");
  hide();
  var next = count + 1; 
  console.log(stringMe.substring(count, next));
  if(count%10===0){
    console.log("true!");
    $('#arrowSubmit').html($('#arrowSubmit').html() + "<br>");
  }
  if(stringMe.substring(count, next)=="V"){
    console.log("yes");
    right = right+1;
    $('#arrowSubmit').html($('#arrowSubmit').html()+"V");
  }else{
    $('#arrowSubmit').html($('#arrowSubmit').html()+"X");
  }
  if(stringMe.substring(count, next)===""){
    // hideArrowAnswers();
    reset();
  }else{
    count=count+1;
  }
  if(count>=lengthForStuff){
    reset();
  }
  // if(count>=lengthForStuff){
  //   hideArrowAnswers();
  //   ifCountHigh();
  // }else{
  //   showArrowAnswers();

  // }
}

function hide(){
  $('#arrows').empty();
}

function reset(){
  alert("You got "+right+" right out of "+ lengthForStuff);
  stringMe = "";
  count = 0;
  right = 0;
  $('#arrows').empty();
  $("#arrowSubmit").empty();
  runArrows(lengthForStuff);
  // $("#up").css("visibility", "visible");
  // $("#down").css("visibility", "visible");
  
}

function image(){
  $('#image').attr("src", "https://cdn.gomix.com/8d993201-716f-43c9-a909-53b0ca790ba8%2FIMG_2324.jpg");
  $('#image').attr('height', "450px");
}




function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
}catch(err){
  console.log(err);
}
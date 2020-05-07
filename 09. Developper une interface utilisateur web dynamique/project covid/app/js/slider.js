var bar = document.getElementById("progress-bar");
var labelBar = document.getElementById("label-bar");
var btnRight = document.getElementById('btn_right');
var btnLeft = document.getElementById('btn_left');
var question = document.getElementById('question');
var progress = 1;

// window.addEventListener("beforeunload", function (e) {
//   var confirmationMessage = "\o/";

//   (e || window.event).returnValue = confirmationMessage; //Gecko + IE
//   return confirmationMessage;                            //Webkit, Safari, Chrome
// });


showSlide(progress);


function moveSlides( n ){
  showSlide( progress += n );
  Clear();
}

function Clear()
{    
   clearRadioGroup("Option1");
   clearRadioGroup("Option2");
}

function clearRadioGroup(GroupName)
{
  var ele = document.getElementsByName(GroupName);
	for(var i=0;i<ele.length;i++)
    ele[i].checked = false;
}

function showSlide(n){
  if (n === 1){
    btnLeft.style.display = "none";
  }else{
    btnLeft.style.display = "block";
  }
  if ( n === questions.length - 1){
    btnRight.innerHTML = "Terminer";
  }else{
    btnRight.innerHTML = "Suivant";
  }

  bar.value = n;
  labelBar.innerHTML = `${progress}/${questions.length-1}`;

  question.innerHTML = questions[n];
}
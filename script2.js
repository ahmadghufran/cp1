$(window).on('scroll',function(){
		if($(window).scrollTop()){
			$('nav').addClass('nvc-black');
		}
		else{
			$('nav').removeClass('nvc-black')
		}
	});
var a=0;
$('#thre').on('click',function(){
  if(a%2==0){
			$('nav').addClass('nvc-black');
		}
		else{
			$('nav').removeClass('nvc-black')
		}
	a++;
  });


function f1(){
	
	
	
    var elmnt = document.getElementById("list1");
    elmnt.scrollIntoView({ behavior:'smooth'});
   

}






function f2(){
window.scrollBy({ 
  top: -2000, // could be negative value
  left: 0, 
  behavior: 'smooth' 
});}



function branchNote(){
	var nt=document.getElementById('branchNotes');
	var dal=document.getElementById('hide1').innerHTML;
	nt.innerHTML=dal;
}


// Scroll to a certain element

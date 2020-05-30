(function($){
  $(function(){
    $("#return-top").hide();
    $('.sidenav').sidenav();   
  });
 
  $(window).scroll(function(){
    if($(this).scrollTop()>300){
         $("#return-top").show()
    }else{
         $("#return-top").hide()
    }
  $(document).ready(function(){
    $('.tooltipped').tooltip({delay: 300});
    
  });
})

})(jQuery); 

$(document).ready(function(){

$("#search").keyup(function(){

let query = $(this).val();

if(query.length > 1){

$.ajax({
url:"search.php",
type:"GET",
data:{q:query},
success:function(data){

$("#suggestions").html(data);
$("#suggestions").show();

}
});

}else{
$("#suggestions").hide();
}

});

});
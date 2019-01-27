var count = 0;
var win = 0;
var lose = 0;
function getRandomNumber(){ 
    var red_crystal = Math.floor(Math.random()*12)+1;
    var blue_crystal = Math.floor(Math.random()*12)+1;
    var yellow_crystal = Math.floor(Math.random()*12)+1;
    var green_crystal = Math.floor(Math.random()*12)+1;
    var random_number = Math.floor(Math.random()*102)+19; 
    var count = 0;
    arr = [];
    $('#randomNumberDiv').text(random_number);
    console.log(random_number)
    var arr = [red_crystal, blue_crystal, yellow_crystal, green_crystal] 
    $('img').each(function(i){
           
         $(this).on('click', function(){
           
             count += arr[i]
             console.log(count);
            $('#totalScore').html(count);
    
            if (count == random_number){
                   
                   $('#paragraph').text('"You Win!!"')
                    win++
                    $('#wins').html(win)
                    count=0;
                    arr = [];
                    $('#totalScore').html(count);
                    getRandomNumber();
                    
            } else if (count>random_number){
                    $('#paragraph').text('"You Lost!!"')
                    lose++
                    $('#loses').html(lose)
                    count=0;
                    arr = [];
                    $('#totalScore').html(count);
                    getRandomNumber();       
            }
            
        });
    });
};


 getRandomNumber();


    


     
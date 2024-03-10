var number_of_images = document.querySelectorAll("img").length;
var user_score;

var your_score=0;
var comp_score=0;

for(var i=0 ; i<number_of_images ; i++) {
    document.querySelectorAll("img")[i].addEventListener("click",function(){
        user_score = this.getAttribute("id");
    
        var idx = Math.floor(Math.random() * 3);
        var arr = ["rock","paper","scissor"];
        var comp_gen_score = arr[idx];
        if(user_score=="rock" && comp_gen_score=="paper"){
            document.querySelector("#message").innerText="You lost ! "+ comp_gen_score+" beats "+" Your " + user_score + "🙁"
            document.querySelector("#message").style.backgroundColor="red";
            comp_score++
        }
        else if(user_score=="paper" && comp_gen_score=="rock"){
            document.querySelector("#message").innerText="You win !"+ " Your " + user_score +" beats "+ comp_gen_score +"🙂" ;
            document.querySelector("#message").style.backgroundColor="green";
            your_score++
        }
        else if(user_score=="rock" && comp_gen_score=="scissor"){
            document.querySelector("#message").innerText="You win !"+ " Your " + user_score +" beats "+ comp_gen_score +"🙂" ; ;
            document.querySelector("#message").style.backgroundColor="green";
            your_score++
        }
        else if(user_score=="paper" && comp_gen_score=="scissor"){
            document.querySelector("#message").innerText="You lost ! "+comp_gen_score+" beats "+" Your " + user_score + "🙁"
            document.querySelector("#message").style.backgroundColor="red";
            comp_score++
        }
        else if(user_score=="scissor" && comp_gen_score=="rock"){
            document.querySelector("#message").innerText="You lost ! "+ comp_gen_score+" beats "+" Your " + user_score + "🙁"
            document.querySelector("#message").style.backgroundColor="red";
            comp_score++
        }
        else if(user_score=="scissor" && comp_gen_score=="paper"){
            document.querySelector("#message").innerText="You win !"+ " Your " + user_score +" beats "+ comp_gen_score +"🙂" ; ;
            document.querySelector("#message").style.backgroundColor="green";
            your_score++
        }
        else if(user_score==comp_gen_score){
            document.querySelector("#message").innerText="Draw😐"; 
            document.querySelector("#message").style.backgroundColor="#081b31";
        }
        document.querySelector("#user-score").innerText=your_score;
        document.querySelector("#comp-score").innerText=comp_score;     
    });
}




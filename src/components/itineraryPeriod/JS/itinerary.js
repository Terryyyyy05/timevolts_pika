function carouselMove (){
                
    window.addEventListener("load", function(){

        let ul = document.querySelector(".imageul");
        let btnLeft = document.querySelector("#btnLeft");
        let btnRight = this.document.querySelector("#btnRight");
        let curIndex = 0;

        btnLeft.onclick = function(){
            curIndex--;
            ul.style.left = -400*curIndex + "px";
            if(curIndex == 0){
                btnLeft.disabled = true;
            }
        }

        btnRight.onclick = function(){
            curIndex++;
            ul.style.right = 400*curIndex + "px";
            if(curIndex == 3){
                btnRight.disabled = true;
                
            }
        }

        
    })
}


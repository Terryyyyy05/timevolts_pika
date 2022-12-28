import $ from "jquery";
import "jquery-ui-dist/jquery-ui";


 export const drag = () => {
    
     let picElement = document.querySelectorAll('.picElement');
     let picContainer = document.getElementById('picContainer');
     let appendBtn = document.getElementById('appendBtn');
     let clearBtn = document.getElementById('clearBtn');
     let ticket_drag = document.querySelectorAll('.ticket_drag');
     let i;


 
    function doFirst(){
        

        //拖曳開始事件註冊
        for(i=0;i<picElement.length;i++){
            picElement[i].addEventListener('dragstart',startDrag);
        }


        for(i=0;i<ticket_drag.length;i++){
            ticket_drag[i].addEventListener('dragenter',function(e){e.preventDefault()});
            ticket_drag[i].addEventListener('dragover',function(e){e.preventDefault()});
            ticket_drag[i].addEventListener('drop',dropped);
        }
        appendBtn.addEventListener('click',appendPic);
        clearBtn.addEventListener('click',clearPic)

    };

    // 拖曳開始
    function startDrag(e){
        let data = `<img src='${e.target.src}'>`;
        e.dataTransfer.setData('image/svg',data);
    };

    // 拖曳結束
    function dropped(e){
        e.preventDefault();
        // console.log(e.dataTransfer.getData('image/svg'));
        e.target.innerHTML = e.dataTransfer.getData('image/svg');
        e.target.style.border='none';
    };
    
    //新增貼圖格
    function appendPic(){
        let box = document.createElement('div');
        box.className = 'ticket_drag';
        picContainer.appendChild(box);

        // 因新增物件重抓一次
        let ticket_drag = document.querySelectorAll('.ticket_drag');
        for(i=0;i<ticket_drag.length;i++){
            ticket_drag[i].addEventListener('dragenter',function(e){e.preventDefault()});
            ticket_drag[i].addEventListener('dragover',function(e){e.preventDefault()});
            ticket_drag[i].addEventListener('drop',dropped);
        }
        $('.ticket_drag').draggable({
            cursor: "crosshair",
            containment: 'parent',
        });
    }


    // 刪除全部貼圖
    function clearPic(){
        let childs = picContainer.childNodes;
        for(i=childs.length - 1;i>=0;i--){
            picContainer.removeChild(childs[i]);
        }
        let ticket_input = document.querySelector('.ticket_input');
        ticket_input.innerHTML= '';

    }
    // 貼圖格可拖曳
    
    $('.ticket_drag').draggable({
        cursor: "crosshair",
        containment: 'parent',
    });

// window.addEventListener("load",doFirst);

doFirst()
}
   
 

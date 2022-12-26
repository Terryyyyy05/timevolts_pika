// import $ from jquery;


//     let postcardElement = document.querySelectorAll('.postcardElement');
//     let postcardStampContainer = document.getElementById('postcardStampContainer');
//     let appendStampBtn = document.getElementById('appendStampBtn');
//     let clearStampBtn = document.getElementById('clearStampBtn');
//     let postcardTag = document.querySelectorAll('.postcardTag');
//     let postcardElements = document.querySelectorAll('.postcardElements');
//     let postcardStampBox = document.querySelectorAll('.postcardStampBox');


//     function doFirst(){
//         //拖曳開始事件註冊
//         for(i=0;i<postcardElement.length;i++){
//             postcardElement[i].addEventListener('dragstart',startDrag);
//         }


//         for(i=0;i<postcardStampBox.length;i++){
//             postcardStampBox[i].addEventListener('dragenter',function(e){e.preventDefault()});
//             postcardStampBox[i].addEventListener('dragover',function(e){e.preventDefault()});
//             postcardStampBox[i].addEventListener('drop',dropped);
//         }
//         appendStampBtn.addEventListener('click',appendStamp);
//         clearStampBtn.addEventListener('click',clearStamp)

//         // 右側切換
//         for(let i = 0;i<postcardTag.length;i++){
//             postcardTag[i].index = i;
//             postcardTag[i].onclick = function(){
//                 for(a=0;a<postcardElements.length;a++){
//                     postcardElements[a].style.display = 'none';
//                 }
//                 postcardElements[i].style.display = "flex";
//             }
//         };

//     };
//     // 拖曳開始
//     function startDrag(e){
//         let data = `<img src='${e.target.src}'>`;
//         e.dataTransfer.setData('image/png',data);
//     };

//     // 拖曳結束
//     function dropped(e){
//         e.preventDefault();
//         console.log(e.dataTransfer.getData('image/png'));
//         e.target.innerHTML = e.dataTransfer.getData('image/png');
//         e.target.style.border='none';
//     };
    
//     //新增貼圖格
//     function appendStamp(){
//         let StampBox = document.createElement('div');
//         StampBox.className = 'postcardStampBox';
//         postcardStampContainer.appendChild(StampBox);

//         // 因新增物件重抓一次
//         let postcardStampBox = document.querySelectorAll('.postcardStampBox');
//         for(i=0;i<postcardStampBox.length;i++){
//             postcardStampBox[i].addEventListener('dragenter',function(e){e.preventDefault()});
//             postcardStampBox[i].addEventListener('dragover',function(e){e.preventDefault()});
//             postcardStampBox[i].addEventListener('drop',dropped);
//         }
//         $('.postcardStampBox').draggable({
//             cursor: "crosshair",
//             containment: 'parent',
//         });
//     }


//     // 刪除全部貼圖
//     function clearStamp(){
//         let childs = postcardStampContainer.childNodes;
//         for(i=childs.length - 1;i>=0;i--){
//             postcardStampContainer.removeChild(childs[i]);
//         }
//         let postcardText = document.querySelector('.postcardText');
//         postcardText.innerHTML= '';
//     }

//     // 貼圖格可拖曳
//     $(document).ready(function(){
//         $('.postcardStampBox').draggable({
//             cursor: "crosshair",
//             containment: 'parent',
//         });
//         $('.postcardText').draggable({
//             cursor: "crosshair",
//             containment: 'parent',
//         });
//     });
//     window.addEventListener("load",doFirst);
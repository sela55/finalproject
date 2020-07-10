const draggables = document.querySelectorAll('.draggable');
const containers = document.querySelectorAll('.container');
  

var dragged


draggables.forEach(draggable=>{
    draggable.addEventListener('dragstart',()=>{
        draggable.classList.add('dragging');
  

    })
    draggable.addEventListener('dragend',()=>{
        draggable.classList.remove('dragging')
        
    })
    });

    //listening to dragover event and getting the closest element
containers.forEach(container => {
    container.addEventListener('dragover',e=>{
        e.preventDefault()
        const afterElement = getDraggedClosestElement(container,e.clientX)
        console.log(afterElement)
        const draggable = document.querySelector('.dragging')               //finding the dragged element 

       container.insertBefore(draggable,afterElement)
       
    })
})



//[...] returns an array
function getDraggedClosestElement(container,x) {
    const draggableElements = [...container.querySelectorAll('.draggable:not(.dragging)')]//gets all draggable that we arent dragging into an array

    return draggableElements.reduce((closest,child) => {
        const box = child.getBoundingClientRect()
        const offset = x - box.left - box.width/2  
        
        if(offset < 0 && offset > closest.offset){
            return {offset:offset,element:child }
        }else{
            return closest
        } 
        
    },{offset: Number.NEGATIVE_INFINITY}).element
}



let menu = null;
document.addEventListener('DOMContentLoaded',function()
{
    menu = document.querySelector('.menu');
    menu.classList.add('hide-menu')
    
    const wind = document.querySelectorAll('.window1');
    wind.forEach(del =>{
        del.addEventListener('contextmenu',showmenu);
    })
   
    menu.addEventListener('mouseleave',hidemenu);

    addMenuListeners();
});

function addMenuListeners(){
      document.getElementById('del').addEventListener('click', deleteChart);
      document.getElementById('flow').addEventListener('click',()=>{chart.reflow();})
}

function deleteChart(ev){
    hidemenu();
    let clr = ev.target.id;

    document.getElementById(chartID).remove();
    chart.reflow();
    //chartID.reflow(); 
}

var chartID = null;
function showmenu(e){
    //stop the real right click menu
    e.preventDefault(); 
    //show the custom menu
    chartID = this.id;

   
    menu.style.top = `${e.pageY}px`;
    menu.style.left = `${e.pageX}px`;
    menu.classList.remove('hide-menu');
    
}

function hidemenu(ev){
    menu.classList.add('hide-menu');
    menu.style.top = '-200%';
    menu.style.left = '-200%';
}

function changeSize()
{
    console.log('test');
}


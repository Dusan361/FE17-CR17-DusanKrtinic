let task = JSON.parse( data)
console.log(task);

function update(){
let index=0; 
document.getElementById("cards").innerHTML ="";
task.forEach(element => { 

if ( element.importance<=1) {element.color="btn-success"}
else if ( element.importance>=2 && element.importance<=3 ) {element.color="btn-warning"}
else {element.color="btn-danger"}
    document.getElementById("cards").innerHTML += `
    <div class="col"> <div class="card" style="width: 18rem;">
    <img src=" ${element.image} " class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title"> ${element.taskName} </h5>
      <p class="card-text"> ${element.description}  </p>
    <p> <button  id="tommy${index}"class="btn ${element.color} "> Priority level: ${element.importance} </p>

    </div>
  </div></div> `;

  index++;




    
});

for (let index = 0; index < task.length; index++) {
    const element = task[index];
    document.getElementById("tommy"+index).addEventListener("click",function(){
        console.log(element.importance);
        element.importance++;
        document.getElementById("tommy"+index).innerHTML="Priority level: "+element.importance;
        if ( element.importance<=1) {document.getElementById("tommy"+index).className="btn btn-success"}
else if ( element.importance>=2 && element.importance<=3 ) {document.getElementById("tommy"+index).className=" btn btn-warning"}
else {document.getElementById("tommy"+index).className="btn btn-danger"}

    });
    
}


}

update();

document.getElementById("sortButton").addEventListener("click",function(){
    task = task.sort(function(a,b){
        return a.importance - b.importance;
    })
    update();
})


        
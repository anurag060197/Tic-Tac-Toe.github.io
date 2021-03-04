let turn = "X";
let arrayStatus = ["","","","","","","","",""];
let winningCondition = [[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]];
let flag1 = true;
function clickGrid(event){
    var clickedCell = event.target;
    var id = clickedCell.getAttribute("id");
    clickedCell.removeEventListener("click", clickGrid);
    arrayStatus[id-1] = turn;
    if(turn == "X"){
        clickedCell.style.backgroundImage = 'url("https://i.pinimg.com/236x/db/70/09/db7009c882ee4717fc019767e2ba00df--black-and-white-prints-black-white.jpg")';
        clickedCell.style.backgroundSize = "10rem 10rem";
    }
    else{
        clickedCell.style.backgroundImage = 'url("https://previews.123rf.com/images/lystopad/lystopad1601/lystopad160100089/51073288-letter-o-double-exposure-with-white-tree-on-black-background-vector-isolated-illustration-black-and-.jpg")';
        clickedCell.style.backgroundSize = "10rem 10rem";
    }
    for(var i=0;i<8;i++){
        var tempArray = winningCondition[i];
        let flag = true;
        for(var j=0;j<3;j++){
            if(arrayStatus[tempArray[j]-1]!=turn){
                flag = false;
                break;
            }    
        }
        if(flag){
            display(turn);
            flag1 = false;
            break;
        }
    }
    if(turn == "X"){
        turn = "0";
        document.getElementById("turn").innerHTML = "Turn : "+turn;
    }
    else{
        turn = "X";
        document.getElementById("turn").innerHTML = "Turn : "+turn;
    }
    if(arrayStatus.indexOf("")==-1 && flag1){
        alert("Draw!");
        flag1 = false;
    }
    if(!flag1)
        reset();
}

function display(turn){
    if(turn=="X")
        alert("Congratulations! Player1 wins");
    else
        alert("Congratulations! Player2 wins"); 
    document.querySelectorAll(".grid").forEach((cell)=>cell.removeEventListener("click", clickGrid));
}

function reset(){
    turn = "X";
    flag1 = true;
    arrayStatus = ["","","","","","","","",""];
    document.getElementById("turn").innerHTML = "Turn : X";
    document.querySelectorAll(".grid").forEach((cell)=>cell.style.removeProperty("background-image"));
    document.querySelectorAll(".grid").forEach((cell)=>cell.addEventListener("click", clickGrid));

}
document.querySelectorAll(".grid").forEach((cell)=>cell.addEventListener("click", clickGrid));
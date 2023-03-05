function startgame(){
    var p1name=document.getElementById("name1").value
    var p2name=document.getElementById("name2").value

    localStorage.setItem("player1name",p1name)
    localStorage.setItem("player2name",p2name)

    window.location="maths.html"
}
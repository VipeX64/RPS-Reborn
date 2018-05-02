var player1;
var player2;
var time;
var turn; //either player1 || player2
var gameOver = false;
var x;//coordinates of rows
var y;//coordinates of cells, collums



var playground = [
    [$("#playGround tr:eq(0) td:eq(0)"), $("#playGround tr:eq(0) td:eq(1)"), $("#playGround tr:eq(0) td:eq(2)"), $("#playGround tr:eq(0) td:eq(3)"), $("#playGround tr:eq(0) td:eq(4)"), $("#playGround tr:eq(0) td:eq(5)"), $("#playGround tr:eq(0) td:eq(6)"), $("#playGround tr:eq(0) td:eq(7)")],
    [$("#playGround tr:eq(1) td:eq(0)"), $("#playGround tr:eq(1) td:eq(1)"), $("#playGround tr:eq(1) td:eq(2)"), $("#playGround tr:eq(1) td:eq(3)"), $("#playGround tr:eq(1) td:eq(4)"), $("#playGround tr:eq(1) td:eq(5)"), $("#playGround tr:eq(1) td:eq(6)"), $("#playGround tr:eq(1) td:eq(7)")],
    [$("#playGround tr:eq(2) td:eq(0)"), $("#playGround tr:eq(2) td:eq(1)"), $("#playGround tr:eq(2) td:eq(2)"), $("#playGround tr:eq(2) td:eq(3)"), $("#playGround tr:eq(2) td:eq(4)"), $("#playGround tr:eq(2) td:eq(5)"), $("#playGround tr:eq(2) td:eq(6)"), $("#playGround tr:eq(2) td:eq(7)")],
    [$("#playGround tr:eq(3) td:eq(0)"), $("#playGround tr:eq(3) td:eq(1)"), $("#playGround tr:eq(3) td:eq(2)"), $("#playGround tr:eq(3) td:eq(3)"), $("#playGround tr:eq(3) td:eq(4)"), $("#playGround tr:eq(3) td:eq(5)"), $("#playGround tr:eq(3) td:eq(6)"), $("#playGround tr:eq(3) td:eq(7)")],
    [$("#playGround tr:eq(4) td:eq(0)"), $("#playGround tr:eq(4) td:eq(1)"), $("#playGround tr:eq(4) td:eq(2)"), $("#playGround tr:eq(4) td:eq(3)"), $("#playGround tr:eq(4) td:eq(4)"), $("#playGround tr:eq(4) td:eq(5)"), $("#playGround tr:eq(4) td:eq(6)"), $("#playGround tr:eq(4) td:eq(7)")],
    [$("#playGround tr:eq(5) td:eq(0)"), $("#playGround tr:eq(5) td:eq(1)"), $("#playGround tr:eq(5) td:eq(2)"), $("#playGround tr:eq(5) td:eq(3)"), $("#playGround tr:eq(5) td:eq(4)"), $("#playGround tr:eq(5) td:eq(5)"), $("#playGround tr:eq(5) td:eq(6)"), $("#playGround tr:eq(5) td:eq(7)")],
    [$("#playGround tr:eq(6) td:eq(0)"), $("#playGround tr:eq(6) td:eq(1)"), $("#playGround tr:eq(6) td:eq(2)"), $("#playGround tr:eq(6) td:eq(3)"), $("#playGround tr:eq(6) td:eq(4)"), $("#playGround tr:eq(6) td:eq(5)"), $("#playGround tr:eq(6) td:eq(6)"), $("#playGround tr:eq(6) td:eq(7)")],
    [$("#playGround tr:eq(7) td:eq(0)"), $("#playGround tr:eq(7) td:eq(1)"), $("#playGround tr:eq(7) td:eq(2)"), $("#playGround tr:eq(7) td:eq(3)"), $("#playGround tr:eq(7) td:eq(4)"), $("#playGround tr:eq(7) td:eq(5)"), $("#playGround tr:eq(7) td:eq(6)"), $("#playGround tr:eq(7) td:eq(7)")],
]

for (x = 0; x < 8; x++) {
    for (y = 0; y < 8; y++) {

       // $(playground[x][y]).css("background-color", "white");
        $(playground[x][y]).html([x]+[y]);
    }
}
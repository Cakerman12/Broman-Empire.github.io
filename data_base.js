const keys =[
"Hockey Ice Rules skates play nhl",
"Basketball ball basket dribble nba rules",
];
const info =[
"Ice hockey (or simply hockey) is a team sport played on ice skates, usually on an ice skating rink with lines and markings specific to the sport. It belongs to a family of sports called hockey. In ice hockey, two opposing teams use ice hockey sticks to control, advance, and shoot a closed, vulcanized, rubber disc called a puck into the other team's goal. Each goal is worth one point. The team which scores the most goals is declared the winner. In a formal game, each team has six skaters on the ice at a time, barring any penalties, one of whom is the goaltender. Ice hockey is a full contact sport, and is considered to be one of the more physically demanding team sports.",
"Basketball is a team sport in which two teams, most commonly of five players each, opposing one another on a rectangular court, compete with the primary objective of shooting a basketball (approximately 9.4 inches (24 cm) in diameter) through the defender's hoop (a basket 18 inches (46 cm) in diameter mounted 10 feet (3.048 m) high to a backboard at each end of the court), while preventing the opposing team from shooting through their own hoop. A field goal is worth two points, unless made from behind the three-point line, when it is worth three. After a foul, timed play stops and the player fouled or designated to shoot a technical foul is given one, two or three one-point free throws. The team with the most points at the end of the game wins, but if regulation play expires with the score tied, an additional period of play (overtime) is mandated."
];

function textreset(){
	
  const z = document.getElementById("name").value;
  var p=-1;
  var rec =0;
  var rec2 =0;
  for(var ky in keys){
     var i=0;
     const op = ky.split();
     for(var ol in op){
 	if(ol.toLowerCase() in z.toLowerCase()){
 	  i++;
        }
     }
     if(p<i){
 	p=i;
	rec2=rec;
     }
     rec++;
  }
 
  document.getElementById("out").innerHTML = info[rec2];

}

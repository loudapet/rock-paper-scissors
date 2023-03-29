function	getComputerChoice()
{
	let	rand;
	let	choice;

	rand = Math.floor(Math.random() * 3);
	if (rand === 0)
		choice = "rock";
	else if (rand === 1)
		choice = "paper";
	else
		choice = "scissors";
	return (choice);
}
//console.log(getComputerChoice());

function	getPlayerChoice()
{
	let	choice;

	choice = prompt("Make your choice").toLowerCase();
	return (choice);
}
//console.log(getPlayerChoice());

function	playRound(playerSelection, computerSelection)
{

}
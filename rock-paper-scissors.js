function	getComputerChoice()
{
	let	rand;
	let	choice;

	rand = Math.floor(Math.random() * 3);
	if (rand === 0)
		choice = "Rock";
	else if (rand === 1)
		choice = "Paper";
	else
		choice = "Scissors";
	return (choice);
}
console.log(getComputerChoice());

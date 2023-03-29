function getComputerChoice ()
{
	let	rand;
	let	choice;

	rand = Math.random();
	if (rand <= 0.33)
		choice = "Rock";
	else if (rand > 0.33 && rand <= 0.66)
		choice = "Paper";
	else if (rand > 0.66)
		choice = "Scissors";
	return (choice);
}
console.log(getComputerChoice());
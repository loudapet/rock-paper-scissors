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

function	getPlayerChoice()
{
	let	choice;

	choice = prompt("Make your choice");
	if (choice)
		choice.toLowerCase();
	return (choice);
}

function	printWinLose(result, playerSelection, computerSelection)
{
	if (result === 0)
		console.log(`It's a draw, you both chose ${playerSelection}.`);
	else if (result === 1)
		console.log(`You won, ${playerSelection} beats ${computerSelection}.`);
	else if (result === -1)
		console.log(`You lose, ${computerSelection} beats ${playerSelection}.`);
	else
		console.log(`"${result}" is not a valid input.`);
}

function	playRound(playerSelection, computerSelection)
{
	let	result;

	console.log(playerSelection);
	console.log(computerSelection);

	if (playerSelection === computerSelection)
		result = 0;
	else if (playerSelection === "rock")
	{
		if (computerSelection === "paper")
			result = -1;
		else if (computerSelection === "scissors")
			result = 1;
	}
	else if (playerSelection === "paper")
	{
		if (computerSelection === "scissors")
			result = -1;
		else if (computerSelection === "rock")
			result = 1;
	}
	else if (playerSelection === "scissors")
	{
		if (computerSelection === "rock")
			result = -1;
		else if (computerSelection === "paper")
			result = 1;
	}
	else
		result = null;
	printWinLose(result, playerSelection, computerSelection);
	return (result);
}

playRound(getPlayerChoice(), getComputerChoice());
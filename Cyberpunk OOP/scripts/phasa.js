export function getTimerToString(){
	let PhasaTimer =  runtime.globalVars.PhasaTimer;
	return `0${parseInt(PhasaTimer/60)}:${PhasaTimer%60}`;
}
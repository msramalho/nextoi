export class Idea {

	constructor(public title: string, public description: string, public archived: boolean, public date: Date, public scores: { name: string, value: number }[]) { }

	getScore(): number {
		return this.scores.map(score => score.value).reduce((s, v) => s + v) / this.scores.length;
	}
}

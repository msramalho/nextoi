export class Idea {

	constructor(public title: string, public description: string, public archived: boolean, public date: Date, public scores: { name: string, value: number }[]) { }

	public static getScoreTopics(): string[] {
		return ['motivation', 'social status', 'profitability', 'workload', 'educational', 'door opening', 'usefulness', 'scalability', 'costs'];
	}

	public getScore(): number {
		if (this.scores.length === 0) { return 0; }
		return this.scores.map(score => score.value).reduce((s, v) => s + v) / this.scores.length;
	}
}

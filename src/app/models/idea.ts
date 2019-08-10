
export class Idea {
	public id: string;

	constructor(public title: string, public description: string, public archived: boolean, public date: Date, public topics: {}) {
		const uuidv4 = require('uuid/v4');
		this.id = uuidv4();
	}

	public static getScoreTopics(): string[] {
		return ['motivation', 'social status', 'profitability', 'workload', 'educational', 'door opening', 'usefulness', 'scalability', 'costs'];
	}

	public getScore(): number {
		return Object.keys(this.topics).map((k, _) => this.topics[k]).reduce((s, v) => s + v) / Object.keys(this.topics).length;
	}
}

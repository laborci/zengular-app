import Task from "models/task"

/**
 * @property {Array<Task>} tasks
 */
class DataService {

	constructor() {this.tasks = [];}

	/**
	 * @param  {string} task
	 */
	add(task) {
		this.tasks.unshift({text: task, done: false});
	}

	/**
	 * @param {number} index
	 */
	notDone(index) {
		this.tasks[index].done = false;
	}

	/**
	 * @param {number} index
	 */

	done(index) {
		this.tasks[index].done = true;
	}
	/**
	 * @param {number} index
	 */

	delete(index) {
		this.tasks.splice(index, 1);
	}

}

let dataService = new DataService();
export default dataService;


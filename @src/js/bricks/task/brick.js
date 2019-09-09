import Brick from "zengular/core/brick";
import twig  from "./template.twig";
import "./style.less";

/**
 * @property {string} text
 */
@Brick.register('task', twig)
export default class Task extends Brick {

	onInitialize() {
		this.text = this.root.innerHTML;
	}

	createViewModel() {
		return {
			text: this.text,
			index: this.dataset.index,
			done: (this.dataset.done === 'true')
		};
	}

	onRender() {
		this.$('input[type=checkbox]').listen('change', (event, target) => {
			this.fire(target.checked ? 'TASK_DONE' : 'TASK_NOT_DONE', {index: this.dataset.index})
		});
		this.$$('remove').listen('click', (event) => {
			this.fire('TASK_DELETE', {index: this.dataset.index})
		});
	}

}
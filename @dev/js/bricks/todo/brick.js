import Brick       from "zengular/core/brick";
import twig        from "./template.twig";
import "./style.less";
import dataService from "services/data-service";
import TaskList    from "bricks/task-list/brick";

/**
 * @property {TaskList} tasklist
 */
@Brick.register('todo-app', twig)
@Brick.registerSubBricksOnRender()
export default class Todo extends Brick{

	onInitialize(){
		this.listen(['TASK_DONE', 'TASK_NOT_DONE', 'TASK_DELETE', 'TASK_ADD'], (event) => {
			switch(event.type){
				case 'TASK_DONE':
					dataService.done(event.data.index);
					break;
				case 'TASK_NOT_DONE':
					dataService.notDone(event.data.index);
					break;
				case 'TASK_DELETE':
					dataService.delete(event.data.index);
					break;
				case 'TASK_ADD':
					dataService.add(event.data.text);
					break;
			}
			this.tasklist.render({tasks: dataService.tasks});
		});
	}

	onRender(){
		this.tasklist = this.$(TaskList.selector).node.controller;
		this.tasklist.render({tasks: dataService.tasks});

		this.$('input[type=text]').listen('keydown',(event, target) => {
			if(event.key === 'Enter' && target.value.length){
				this.fire('TASK_ADD', {text: target.value});
				target.value = '';
			}
		});
	}

}
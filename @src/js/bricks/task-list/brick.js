import Brick from "zengular/core/brick";
import twig from "./template.twig";
import "./style.less";


/**
 * @property {Array<string>} tasks
 */
@Brick.register('task-list', twig)
export default class TaskList extends Brick {

    beforeRender(args) {
        if(typeof args !== 'undefined')
        this.tasks = args.tasks;
    }

    createViewModel() {
        return {tasks: this.tasks};
    }

}
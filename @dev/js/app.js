import Application from "zengular/core/application";
import User        from "models/user";
import "bricks/todo/brick";
import "bricks/task/brick";
import "bricks/task-list/brick";

new (class extends Application {
	run() {}
})();

User.repository.store({name: "elvis", email: "elvis@elvis.hu"});
User.repository.store({name: "ewer", email: "elvis@elvis.hu"});
console.log(User.repository.storage)

console.log(User.repository.get(4)._.name)
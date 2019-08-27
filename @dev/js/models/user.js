import Model      from "zengular/model/model";
import Repository from "zengular/model/repository";

export default class User extends Model{

	static get Repository(){
		return class extends Repository{
			constructor(args){
				super(args);
				this.autoincrementId = 4;
			}
		}
	}

}

User.viewHelpers.name = function () {return this.name + "hejj";}
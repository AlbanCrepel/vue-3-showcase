import TodoItemStatus from "./TodoItemStatus";

export default class TodoItem {
    constructor(label = "", status = TodoItemStatus.TODO) {
        this.label = label
        this.status = status
    }
}

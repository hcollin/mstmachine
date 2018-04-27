import { types, actions } from 'mobx-state-tree';
import { TodoModel } from './TodoModel';

export const StoreModel = types.model({
    todos: types.optional(types.array(TodoModel), [])
}).actions(self => ({
    addTodo(text) {
        self.todos.push(TodoModel.create({text: text}));
    }
}));


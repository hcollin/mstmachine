
import {types} from 'mobx-state-tree';

export const TodoModel = types.model({
    done: types.boolean,
    text: types.string,
});




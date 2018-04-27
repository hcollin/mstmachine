
import { observer } from 'mobx-react';
import { observable } from 'mobx';
import * as React from 'react';


class TodoList extends React.Component {

    public render() {
        return (
            <div className="todo-list">
                TodoList!


                <div>
                    <input type="text" value={this.newToDo} />

                </div>
            </div>
        )
    }
}

export default observer(TodoList);
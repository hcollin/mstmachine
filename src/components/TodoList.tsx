
import { observable } from 'mobx';
import { observer } from 'mobx-react';

import * as React from 'react';

@observer
class TodoList extends React.Component {

    @observable private newText: string = '';

    public render() {
        return (
            <div className="todo-list">
                TodoList!
                <div>
                    <input type="text" value={this.newText} onChange={this.handleChange}/>
                    <button onClick={this.submit}>Add</button>
                </div>
            </div>
        );
    }

    private handleChange = (e: React.FormEvent<HTMLInputElement>) => {
        console.log(e.currentTarget.value);
    }

    private submit = (e: any) => {
        console.log(e);
    }

}

export default TodoList;

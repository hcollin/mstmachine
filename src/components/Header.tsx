
import * as React from 'react';

interface IProps {
    name?: string;
}

const headerComponent: React.SFC<IProps> = (props: IProps) => (
    <h1>
        Hello, {props.name}! Welcome to React and TypeScript.
    </h1>
);

headerComponent.defaultProps = {
    name: 'world',
};

export default headerComponent;

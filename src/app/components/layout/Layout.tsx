import * as React from 'react';

interface IProps {
   compiler: string,
   framework: string,
   bundler: string
}

export class Layout extends React.Component<IProps, {}> {
    render() {
        return <h1>hello</h1>
    }
}
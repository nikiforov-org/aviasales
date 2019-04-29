import * as React from "react";

export interface AviasalesProps { compiler: string; framework: string; }

// 'AviasalesProps' describes the shape of props.
// State is never set so we use the '{}' type.
export class Aviasales extends React.Component<AviasalesProps, {}> {
    render() {
        return <h1>Aviasales from {this.props.compiler} and {this.props.framework}!</h1>;
    }
}
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Layout } from './components/layout/Layout';

ReactDOM.render(<Layout compiler="Typescript" framework="React" bundler="Webpack" />,
document.getElementById('main'));
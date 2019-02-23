import React from 'react'
import ReactDOM from 'react-dom'
import Button from 'components/Button';
// import { Button } from 'antd';

import 'antd/dist/antd.css';

function App() {
  return <Button>Test</Button>
}

const selector = document.querySelector('#app')

ReactDOM.render(<App />, selector);
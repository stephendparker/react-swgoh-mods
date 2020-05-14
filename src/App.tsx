import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Input } from "antd";

// Don't forget to include the CSS styles for antd!
import "antd/dist/antd.css";

function App() {
  return (
    <div className="App">
        <Input
          placeholder="What needs to be done?"
        />
    </div>
  );
}

export default App;

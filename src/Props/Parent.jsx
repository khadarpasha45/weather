import React, { Component } from "react";

class Child extends Component {
    render() {
        return (
            <div>
                <Grandchild />
            </div>
        );
    }
}

class Grandchild extends Component {
    render() {
        return <div>This is the Grandchild component.</div>;
    }
}

export default class Parent extends Component {
    render() {
        return (
            <div>
                <h1>Parent Component</h1>
                <Child />
            </div>
        );
    }
}
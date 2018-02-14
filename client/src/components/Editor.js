import React, {Component} from 'react';


class Editor extends Component {

    constructor(props){
        super(props);
        this.state = {
            components: ["sadasd"]
        }
    }

    addBtn() {
        this.setState({components: this.state.components.concat('cos nowego')});
        console.log(this.state);
    }

    render() {
        return(
            <div className="editorBoxContainer">
                    <button onClick={() => this.addBtn()}>Add button </button>
                <div className="output">
                    {this.state.components}
                </div>
            </div>
        )
    }
}



export default Editor;
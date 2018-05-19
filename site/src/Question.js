import React, {Component} from 'react'

export default class Question extends Component{
    render() {
        return (
            <div>
                <p>{this.props.question}</p>
                <button onClick={this.props.onClick} value={this.props.answers[1]} />
            </div>
        )
    }
}

<Question question="what is 2 + 2?" answers={["foo", "bar", "whizz", "buzz"]} onClick={myfunc} />

function myfunc(e) {
    picked = e.target.value
    if (picked == this.state.correct){
        alert('hi')
    }
}
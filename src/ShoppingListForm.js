import React,{Component} from "react";
class ShoppingListForm extends Component {

constructor(props){
    super(props);

    this.state = {

        name : "",
        qty: ""
    }
   this.handleChange = this.handleChange.bind(this);
   this.handleSubmit = this.handleSubmit.bind(this);
}

handleChange(event){
    this.setState({
        [event.target.name]: event.target.value
    })
}

handleSubmit(event){
    event.preventDefault();
    this.props.addItem(this.state);
    this.setState({
        name:"",
        qty:""
    })
}

render(){
    return(
        <form onSubmit={this.handleSubmit} >
            <label name = "name">Name:</label>
            <input
             HtmlFor = "name"
             name = "name"
             id="name"
             value={this.state.name}
             onChange={this.handleChange}
             />
            
            <label name = "name">Quantity:</label>
            <input
             HtmlFor = "qty"
             name = "qty"
             id="qty"
             value={this.state.qty}
             onChange={this.handleChange}
             />
            <button>Add item</button>
        </form>
    );
}

}

export default ShoppingListForm;
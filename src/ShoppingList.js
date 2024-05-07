import React,{Component} from "react";
import ShoppingListForm from "./ShoppingListForm";
class ShoppingList extends Component{
    constructor(props){
        super(props);

        this.state = {
            items :
            [
             {name:"Milk",qty:"2liters"},
             {name:"Water",qty:"3liters"}
            ]
        }
        this.addItem = this.addItem.bind(this);
        this.renderItems = this.renderItems.bind(this);
    }

    addItem(item){
            this.setState(state =>  ({
                items: [...state.items, item]
            }));
    }

    renderItems(){
        return(
            <div>
                
                <ul>
                    {this.state.items.map(item=>
                    (
                        <li>
                            {item.name} , {item.qty}
                        </li>
                    )
                    
                    )}
                </ul>
            </div>
        );
    }

    render(){
        return(
            <div>
                <h1>ShoppingList</h1>
                {this.renderItems()}
                <ShoppingListForm addItem = {this.addItem} />
                
            </div>
        )
    }

}

export default ShoppingList;
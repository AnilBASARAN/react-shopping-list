import React,{Component} from "react";
import ShoppingListForm from "./ShoppingListForm";
import { v4 as uuid } from 'uuid';
class ShoppingList extends Component{
    constructor(props){
        super(props);

        this.state = {
            items :
            [
             {name:"Milk",qty:"2liters",id:uuid()},
             {name:"Water",qty:"3liters",id:uuid()}
            ]
        }
        this.addItem = this.addItem.bind(this);
        this.renderItems = this.renderItems.bind(this);
    }

    addItem(item){
        let newItem = {...item,id:uuid()}
            this.setState(state =>  ({
                items: [...state.items, newItem]
            }));
    }

    renderItems(){
        return(
            <div>
                
                <ul>
                    {this.state.items.map(item=>
                    (
                        <li key={item.id} >
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
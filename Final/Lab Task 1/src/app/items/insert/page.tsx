'use client' 
'use state'
import { Item, items } from '../../data'; 

export default function AddItemPage() {

  const addItem = (item: Item) => {  
    items.push(item);
  }

  const test = (e:any)=>{  
    const id = e.target.elements["id"].value;
    const name = e.target.elements["name"].value;
    console.log(id + name);
  }

  function handleSubmit(e:any) {
    e.preventDefault();
    
    const id = e.target.elements["id"].value;
    const name = e.target.elements["name"].value;
    
    addItem({
      id: parseInt(id), 
      name   
    });
  }
  
  return (
    <div>
      <h1>Add Item</h1>
      
      <form>
        <label>
          ID:
          <input type="text" name="id" />  
        </label>
        <br></br><br></br>
        <label>
          Item Name:
          <input type="text" name="name" />  
        </label>
        <br></br><br></br>
        <button onClick={test}>
          Add Item
        </button>
      </form>
    </div>
  );
}
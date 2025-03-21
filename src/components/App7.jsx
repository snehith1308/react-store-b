import "./App7.css"
export default function App7() {
  return (
    <div className="App-Row">
      <div>
        <h3>Billing Form</h3>
        <p><input type="text" placeholder="Product Name"></input></p>
        <p><input type="number" placeholder="Price"></input></p>
        <p><input type="number" placeholder="Quantity"></input></p>
        <p style={{textAlign:'center'}}><button>Submit</button></p>
      </div>
      <div>
        <h4>Items</h4>
      </div>
    </div>
  );
}
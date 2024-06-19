import {useReducer } from 'react';
import './App.css';

const reducer = (state, action) => {
  if(action.type === 'buy_ingredients') return {money: state.money - 10};
  if(action.type === 'sell_a_meal') return {money: state.money + 10};
  if(action.type === 'celebrity_visit') return {money: state.money + 5000};
  if(action.type === 'thugs_bugglers') return {money: state.money - 6000};
  return state;
}


function App() {

  const initialState = {money: 100};
  
  const Buy = () => {
    dispatch({type: "buy_ingredients"});
    }
    
    const Sell = () => {
      dispatch({type : "sell_a_meal"});
      }
      
      const Celebrity = () => {
        dispatch({type : "celebrity_visit"});
        }

      const Thugs = () => {
        dispatch({type : "thugs_bugglers"})
      }
        
    const [state, dispatch] = useReducer(reducer, initialState);
        return (
    <div className='App'>
      <h1>Wallet: {state.money}</h1>
      <div>
        {/* <button onClick={() =>dispatch({type: 'buy_ingredients'})}>Shopping for Veggies</button> */}
        <button onClick={Buy}>Shopping for Veggies</button>

        {/* <button onClick={() =>dispatch({type: 'sell_a_meal'})}>Serve a meal to the customer</button> */}
        <button onClick={Sell}>Serve a meal to the customer</button>

        {/* <button onClick={() =>dispatch({type: 'celebrity_visit'})}>Celebrity Visit</button> */}
        <button onClick={Celebrity}>Celebrity Visit</button>

        <button onClick={Thugs}>Boring</button>
      </div>
    </div>
  );
}

export default App;

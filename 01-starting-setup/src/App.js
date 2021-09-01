import Expenses from './components/Expenses/Expenses.js';

const App = () => {
  const expenses = [
    { id: "e1", title: "Cellphone Bill", amount: 66.6, date: new Date(2021,21,12) },
    { id: "e2", title: "Dentist", amount: 80.0, date: new Date(2021, 2, 28) },
    { id: "e3", title: "Udemy Course", amount: 50.0, date: new Date(2021, 5, 12) },
    { id: "e4", title: "Chocolate", amount: 5.69, date: new Date(2021, 4, 1) },
  ];
  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;

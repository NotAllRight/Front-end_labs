// // components/Expenses.js
// import React from 'react';
// import ExpenseItem from './ExpenseItem';
// import ExpensesFilter from './ExpensesFilter';
// import ExpensesChart from './ExpensesChart';

// function Expenses(props) {
//   // Подготовка данных для гистограммы
//   const chartData = Array(12).fill(0);
//   for (let expense of props.items) {
//     const month = expense.date.getMonth(); // (0 = январь, 11 = декабрь)
//     chartData[month] += expense.amount; // Добавляем сумму расхода к соответствующему месяцу
//   }

//   // Преобразовываем данные в формат, подходящий для recharts
//   const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
//   const transformedData = chartData.map((amount, index) => {
//     return { name: monthNames[index], Expenses: amount };
//   });

//   return (
//     <div className="expenses">
//       <ExpensesFilter />
//       <ExpensesChart data={transformedData} />
//       {props.items.map((expense) => (
//         <ExpenseItem
//           key={expense.id}
//           title={expense.title}
//           amount={expense.amount}
//           date={expense.date}
//         />
//       ))}
//     </div>
//   );
// }

// export default Expenses;


// components/Expenses.js
import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';
import ExpensesChart from './ExpensesChart';

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState('2022');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  // Подготовка данных для гистограммы
  const chartData = Array(12).fill(0);
  for (let expense of filteredExpenses) {
    const month = expense.date.getMonth(); // (0 = январь, 11 = декабрь)
    chartData[month] += expense.amount; // Добавляем сумму расхода к соответствующему месяцу
  }

  // Вычисляем максимальное значение для масштабирования оси Y
  const maxExpense = Math.max(...chartData);

  // Преобразовываем данные в формат, подходящий для recharts
  const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const transformedData = chartData.map((amount, index) => {
    return { name: monthNames[index], Expenses: amount };
  });

  return (
    <div className="expenses">
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
      <ExpensesChart data={transformedData} maxExpense={maxExpense} />
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </div>
  );
}

export default Expenses;

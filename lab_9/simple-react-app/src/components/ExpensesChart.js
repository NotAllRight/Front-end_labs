// // components/ExpensesChart.js
// import React from 'react';
// import { BarChart, Bar, XAxis, Tooltip } from 'recharts';

// function ExpensesChart(props) {
//   const data = props.data;

//   return (
//     <BarChart
//       width={770}
//       height={200}
//       data={data}
//     >
//       <XAxis dataKey="name" axisLine={false} tickLine={false} />
//       <Tooltip />
//       <Bar dataKey="Expenses" fill="#8884d8" barSize={20} radius={10} background={{ fill: 'transparent', stroke: 'black', radius: 10}} />
//     </BarChart>
//   );
// }

// export default ExpensesChart;


// components/ExpensesChart.js
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';

function ExpensesChart(props) {
  const data = props.data;

  return (
    <div class="expenses-chart">
      <BarChart
        width={750}
        height={180}
        data={data}
      >
        <XAxis dataKey="name" axisLine={false} tickLine={false} stroke='black' />
        <YAxis domain={[0, props.maxExpense]} hide={true} />
        <Tooltip />
        <Bar dataKey="Expenses" fill="#4826b9" barSize={15} radius={10} background={{ fill: '#c3b4f3', stroke: 'black', radius: 10}} />
      </BarChart>
    </div>
  );
}

export default ExpensesChart;
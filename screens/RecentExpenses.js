import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput';

function RecentExpenses() {
  return <ExpensesOutput expensesPeriod="Last 7 Days" expenses={[]} />;
}

export default RecentExpenses;

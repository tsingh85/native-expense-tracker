import { FlatList, Text } from 'react-native';
import ExpenseItem from './ExpenseItem';

function RenderExpenseItem({ item }) {
  return <ExpenseItem {...item} />;
}

function ExpensesList({ expenses }) {
  return (
    <FlatList
      data={expenses}
      renderItem={RenderExpenseItem}
      keyExtractor={item => item.id}
      showsVerticalScrollIndicator={false}
    />
  );
}

export default ExpensesList;

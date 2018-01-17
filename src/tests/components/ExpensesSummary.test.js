import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';

test('should correctly render expensesSummary with one expense', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={15} expensesTotal={456.55}/>);
    expect(wrapper).toMatchSnapshot();
})

test('should correctly render expensesSummary with multiple expense', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={2256} expensesTotal={25656.00}/>);
    expect(wrapper).toMatchSnapshot();
})
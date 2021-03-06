import expensesReducer from '../../reducers/expenses'
import expenses from '../fixtures/expenses'


test('should set default state', () => {
    const state = expensesReducer(undefined, { type: '@@INIT' })
    expect(state).toEqual([])
})

test('should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[2]]);
})

test('should NOT remove expense if id not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: 5
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
})

test('should add an expense', () => {
    const action = {
        type: 'ADD_EXPENSE',
        expense: [{
            id: '4',
            description: 'gumdsadsa',
            note: '',
            amount: 195423,
            createdAt: 0
        }]
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([...expenses, action.expense])
})

test('should edit an expense', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: '1',
        updates: {
            description: 'gum123'
        }
    }
    const state = expensesReducer(expenses, action);
    expect(state[0].description).toBe('gum123');
})

test('should NOT edit expense if id not found', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: '77',
        updates: {
            description: 'gum123'
        }
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
})

test('should set expenses', () => {
    const action = {
        type: 'SET_EXPENSES',
        expenses: [expenses[1]]
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[1]]);
})
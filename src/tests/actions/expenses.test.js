import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test('should setup remove expense action object', () => {
    const action = removeExpense({ id: '123abc' });
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    })
});

test('should setup remove expense action object', () => {
    const action = editExpense('123eee', { note: 'new note' });
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123eee',
        updates:
            { note: 'new note' }
    })
});

test('should setup addexpense object with provided values', () => {
    const expenseData = {
        description: 'rent',
        amount: 124500,
        createdAt: 1000,
        note: 'this was last m rent'
    }
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    });
});

test('should setup addexpense object with default values', () => {
    const action=addExpense();
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            description: '',
            note: '',
            amount: 0,
            createdAt: 0,
            id: expect.any(String)
        }
    });
});
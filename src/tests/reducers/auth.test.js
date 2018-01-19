import authReducer from '../../reducers/auth'

test('should set uid for login', () => {
    const action = {
        type: 'LOGIN',
        uid: '159aaa'
    }
    const state = authReducer({}, action);
    expect(state.uid).toBe(action.uid)
})

test('should clear uid for logout', () => {
    const action = {
        type: 'LOGIN'
    }
    const state = authReducer({uid: 'dsada'}, action);
    expect(state).toEqual({});
})
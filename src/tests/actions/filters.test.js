import moment from 'moment'
import { setStartDate, setEndDate, sortByAmount, sortByDate, setTextFilter } from '../../actions/filters';

test('should generate set start date action object', () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: 'SET_START_DATE',
        date: moment(0)
    })
})

test('should generate set end date action object', () => {
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type: 'SET_END_DATE',
        date: moment(0)
    })
})

test('should sortByDate', () => {
    const action = sortByDate();
    expect(action).toEqual({
        type: 'SORT_BY_DATE'
    })
})

test('should sortByAmount', () => {
    const action = sortByAmount();
    expect(action).toEqual({
        type: 'SORT_BY_AMOUNT'
    })
})

test('should setTextFilter values given', () => {
    const action = setTextFilter('rent');
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: 'rent'
    })
})

test('should setTextFilter default values', () => {
    const action = setTextFilter();
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: '' 
    })
})
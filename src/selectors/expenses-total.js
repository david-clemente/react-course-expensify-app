export default (expenses) => {
    if (expenses.length == 0) {
        return 0;
    } else {
        var res = 0;
        expenses.forEach(function(expense) {
            res += expense.amount;
        });
        return res;
    }
}
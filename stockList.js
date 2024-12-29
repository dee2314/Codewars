/**
 * A bookseller has lots of books classified in 26 categories labeled A, B, C, ..., Z. Each book has a code of at least 3 characters. The 1st character of a code is a capital letter which defines the book category.

In the bookseller's stocklist each code is followed by a space and by a positive integer, which indicates the quantity of books of this code in stock.

Task
You will receive the bookseller's stocklist and a list of categories. Your task is to find the total number of books in the bookseller's stocklist, with the category codes in the list of categories. Note: the codes are in the same order in both lists.

Return the result as a string described in the example below, or as a list of pairs (Haskell/Clojure/Racket/Prolog).

If any of the input lists is empty, return an empty string, or an empty array/list (Clojure/Racket/Prolog).
 */

//SOLUTION
function stockList(books, categories) {

    if (books.length === 0 || categories.length === 0) {
        return '';
    }


    const categoryTotals = {};

    categories.forEach(category => {
        categoryTotals[category] = 0;
    });

 
    books.forEach(book => {
 
        const category = book[0];
        const quantity = parseInt(book.split(' ')[1], 10);

       
        if (category in categoryTotals) {
            categoryTotals[category] += quantity;
        }
    });

    return categories
        .map(category => `(${category} : ${categoryTotals[category]})`)
        .join(' - ');
}
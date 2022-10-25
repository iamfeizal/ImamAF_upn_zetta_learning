function priceCalculator(book, discount, tax) {
    let result = 0;
    if (book && book.price) {
        const print = book.printing_status;
        const price = book.price;
        const title = book.title;
        const totalDiscount = price * (discount/100);
        const priceAfterDiscount = price - totalDiscount;
        const totalTax = priceAfterDiscount * (tax/100);
        const priceAfterTax = priceAfterDiscount + totalTax;

        if (print == true) {
            console.log('Book Title', title);
            console.log('Original Price', price);
            console.log('Discount Amount', totalDiscount);
            console.log('Price After Discount', priceAfterDiscount);
            console.log('Tax Amount', totalTax);
            console.log('Price After Tax', priceAfterTax);
            console.log('TOTAL', priceAfterTax);
        }
    }
    return result;
}

let finalPrice = priceCalculator({title: 'Harpot', price:10000, printing_status: true}, 10, 10)
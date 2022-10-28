function priceCalculator(book, discount, tax, stock, amount_purchase, credit) {
    if (book && book.price) {
        const print = book.printing_status;
        const price = book.price;
        const title = book.title;
        const totalDiscount = price * (discount/100);
        const priceAfterDiscount = price - totalDiscount;
        const totalTax = priceAfterDiscount * (tax/100);
        const priceAfterTax = priceAfterDiscount + totalTax;
        let total = 0;
        let total_book = 0;

        for (let i = 0; i < amount_purchase; i++) {
            stock -= 1;
            total_book += 1;
            total = total + priceAfterTax;
            if (stock == 0) {
                break;
            }
        }
        if (print == true) {
            console.log('Book Title\t\t', title);
            console.log('Original Price\t\t', price);
            console.log('Discount Amount\t\t', totalDiscount);
            console.log('Price After Discount\t', priceAfterDiscount);
            console.log('Tax Amount\t\t', totalTax);
            console.log('Price After Tax\t\t', priceAfterTax);
            console.log(total_book, 'Book, TOTAL \t\t', total);
            console.log('=======================================');
            if (stock == 0) {
                console.log(title, 'Book is Already Out of Stock');
                console.log(title, 'Book CANNOT be Purchased Again')
            } else{
                console.log(title, 'Book CAN be Purchased Again')
            }
            console.log('STOCK:', stock);
            console.log('========= CREDIT =========');
        }
        let creditPerMonth = total / credit;
        let creditToPay = [];
        let i = 0;
      
        while (i < credit) {
          creditToPay.push({
            cicilan_ke: i + 1,
            pembayaran: creditPerMonth,
          });
          i++;
        }
        console.log(Array.from(creditToPay));
    }
}

let finalPrice = priceCalculator({title: 'Bacaan ABC', price:10000, printing_status: true}, 10, 10, 10, 5, 5)
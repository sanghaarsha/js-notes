showPrime(20);


function showPrime(limit) {
    for (let i = 1; i <= limit; i++) {
        let count = 0;
        for (let j = 1; j <= i; j++) {
            if (i % j == 0) {
                count += 1;
            }
        }

        if (count == 2)
            console.log(i);
    }
}
module.exports = {
     async calculate(req, res) {

        const { number } = req.body;
        console.log(18)
        const dividers = [];
        let isPrime = false;
       
        for (let n = 1; n <= number; n++) {
            if(number % n == 0) {
                dividers.push(n);
            }
        }
        if(dividers.length == 2) {
            isPrime = true;
        }

        return res.json({ number: number, isPrime: isPrime, dividers: dividers });

    }    
}
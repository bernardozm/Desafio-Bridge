module.exports = {
    async calculate(req, res) {

        const { number } = req.body;
        const dividers = [];
        let isPrime = false;
       
        for (let n = 1; index <= number; n++) {
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

    

        const rate = 1500; // 1 USD = 1500 RWF

        // Function to convert RWF to USD
        function toUSD() {
            let rwf = document.getElementById("rwf").value;
            if(rwf){
                let usd = rwf / rate;
                document.getElementById("usd").value = usd.toFixed(2);
            }
        }

        // Function to convert USD to RWF
        function toRWF() {
            let usd = document.getElementById("usd").value;
            if(usd){
                let rwf = usd * rate;
                document.getElementById("rwf").value = rwf.toFixed(2);
            }
        }
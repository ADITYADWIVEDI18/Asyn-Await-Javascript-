let order = (call_production) => {

    console.log("order placed, please calll production");

    call_production();
}

let production = () => {
    console.log("order recieved , starting production");
}

order(production);


let stocks = {
    Fruits: ["strawberry", "grapes", "banana", "apple"],
    liquid: ["water", "ice"],
    holder: ["cone", "cup", "stick"],
    toppings: ["chocolate", "peanuts"]
};

//Place the Order first which take e.g 2s
let order = (Fruit_name, call_production) => {

    setTimeout(() => {
        console.log(`${stocks.Fruits[Fruit_name]} was selected`)
    }, 2000);

    call_production();
}

let production = () => {
    setTimeout(() => {
        console.log("proudction has started");

        //Cut the Fruits which take e.g 2s
        setTimeout(() => {
            console.log("The fruits has been chopped");

            //Adding water anc ice which take e.g 1s 
            setTimeout(() => {
                console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`);

                // Machine started which takes e.g 1s 
                setTimeout(() => {
                    console.log("The machine was started");

                    //Holder was selected which take e.g 2s
                    setTimeout(() => {
                        console.log(`ice cream was placed on ${stocks.holder[0]}`);

                        //Topping was added which take e.g 3s
                        setTimeout(() => {
                            `${stock.toppings[0]} was added as toppings`

                            setTimeout(() => {
                                console.log("Serve Ice-Cream")
                            }, 2000);

                        }, 3000);

                    }, 2000);
                }, 1000);
            }, 1000)

        }, 2000);

    },0000);
}
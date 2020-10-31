var mobileList = 
    [{
        brand: "Samsung",
        colour: "Black",
        price: 20000,
        features:{
            RAM: "2Gb",
            Camera: "32",
            Storage: 32
        },
        accessories: ['Charger','Ear Phone','cable']
    },
    {
        brand: "Apple",
        colour: "JetBlack",
        price: 60000,
        features:{
            RAM: "6Gb",
            Camera: "32",
            Storage: 64
        },
        accessories: ['Chargers','Ear Phones','cables']
    }]
 
    // for(const props in mobileList )
    // {
    //     var pro=mobileList[props];
    //     if(pro instanceof Array)
    //     {for(let i in pro){
    //         console.log(pro[i]);
    //     }}
    //     else if(typeof pro == 'object')
    //     {
    //         for(let i in pro)
    //         {
    //             console.log(pro[i]);
    //         }
    //     }
    //     else{
    //         console.log(prop);
    //     }
    // }
    mobileList.forEach(mobile => {
        for (const prop in mobile){
        var mob=mobile[prop];
        if (mob instanceof Array){
        for (const i in mob)
        console.log('accessory: '+mob[i]);
        }else if(typeof mob == 'object'){
        for(const key in mob){
        console.log(key+" : "+mob[key]);
        }
        }else if(typeof mob == 'function'){
        mob();
        }else
        console.log(mob);
        }
        
       });
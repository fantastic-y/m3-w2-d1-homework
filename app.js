var MongoClient = require("mongodb").MongoClient;

//create statsdb
var url = "mongodb://localhost:27017/statsdb";
var stats =[
    {
        'city': 'San Juan', 
        'zip': '00926', 
        'state': 'PR', 
        'income': '34781',
        'age': '44'
    },
    {
        'city': 'Corona', 
        'zip': '11368', 
        'state': 'NY', 
        'income': '50797',
        'age': '32'
    },
    {
        'city': 'Chicago', 
        'zip': '60629', 
        'state': 'IL', 
        'income': '42019',
        'age': '31'
    },
    {
        'city': 'El Paso', 
        'zip': '79936', 
        'state': 'TX', 
        'income': '54692',
        'age': '31'
    },
    {
        'city': 'Los Angeles', 
        'zip': '90011', 
        'state': 'CA', 
        'income': '36954',
        'age': '28'
    },
    {
        'city': 'Norwalk', 
        'zip': '90650', 
        'state': 'CA', 
        'income': '66453',
        'age': '35'
    }
];

//connect to the db
MongoClient.connect(url, {
    useNewUrlParser: true, useUnifiedTopology: true
}, function (err, db) {
    //if (err) throw err;
    //console.log("New Database created!");
    //db.close();

    var dbo= db.db("statsdb");
    //create collection uscensus
    /*dbo.createCollection("uscensus", function (err, res) {
        if (err) throw err;
        console.log("New collection created!");
        db.close();
    })*/
    //add data
    /*dbo.collection("uscensus").insertMany(stats, function(err, res) {
        if (err) throw err;
        console.log("Number of documents inserted: " + res.insertedCount);
        db.close();
    })*/
    
    //add new data
    /*var newstats =[
        {
            'city': 'Pacoima', 
            'zip': '91331', 
            'state': 'CA', 
            'income': '60360',
            'age': '33'
        },
        {
            'city': 'Ketchikan', 
            'zip': '99950', 
            'state': 'AK', 
            'income': '00000',
            'age': '00'
        }
    ];
    dbo.collection("uscensus").insertMany(newstats, function(err, res) {
        if (err) throw err;
        console.log("Number of documents inserted: " + res.insertedCount);
        db.close();
    })*/
    //find Corona zipcode
    /*dbo.collection("uscensus").findOne({city: "Corona"}, function (err, result) {
        if (err) throw err;
        console.log(result.zip);
        db.close();
    })*/
    //find CA all city incomes
    /*var query = { state: "CA" };
    dbo.collection("uscensus").find(query).toArray(function (err, result) {
        if (err) throw err;
        console.log(result);
        db.close();
    })*/
    //update AK info
    /*var myquery = { state: "AK" };
    var newvalues = { $set: {income: "38910", age: "46"}};
    dbo.collection("uscensus").updateOne(myquery, newvalues, function (err, res) {
        if (err) throw err;
        console.log("1 document updated");
        db.close();
    })*/
    var mysort = { state: 1 };
    dbo.collection("uscensus").find().sort(mysort).toArray(function (err, result) {
        if (err) throw err;
        console.log("ascending sort");
        console.log(result);
        db.close();
    })
});
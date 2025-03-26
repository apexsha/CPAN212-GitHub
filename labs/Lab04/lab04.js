// comparison queries
db.laptops.find({price: {eq: 999.99}})
db.laptops.find({price: {$ne: 1299.99}})
db.laptops.find({price: {$gt: 1500}})
db.laptops.find({price: {$lte: 1099.99}})

// logical queries
db.laptops.find({
    $or: [
        {price: {$lt: 1000}},
        {stock: {$gt: 10}}
    ]
})

db.laptops.find({
    $and: [
        {price: {$lt: 1000}},
        {stock: {$gt: 10}}
    ]
})

db.laptops.find(
    {
        price: {
            $not:{$eq:999.99}
        }
    }
)

// element operators
db.laptops.find(
    {
        description: {$exists: true}
    }
)

db.laptops.find(
    {
        reviews: {$exists: false}
    }
)

//array operators
db.laptops.find(
    {
        genres: "Gaming"
    }
)

db.laptops.find(
    {
        genres: {$in: ["Business", "all-in-ones"]}
    }
)

// text-search operators
db.laptops.find(
    {
        $text: {$search: "performance"}
    }
)

// array update operators
db.laptops.updateOne(
    {model: "Macbook Air"},
    {$push: {reviews: {user: "John Doe", rating: 4, comments: "It's great"}}}
)

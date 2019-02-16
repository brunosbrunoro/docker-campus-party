db.createUser(
    {
        user: "campus-party",
        pwd: "campus-party",
        roles: [
            {role: "dbAdmin", db: "campus-party"}
        ]
    }
    ,
    {
        w: "majority",
        wtimeout: 5000
    }
);

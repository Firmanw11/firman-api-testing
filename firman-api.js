const newman = require("newman")

newman.run({
    collection: "json-collection/firman.postman_collection.json",
    environment: "json-env/firman.postman_environment.json",
    reporters: ["cli", "htmlextra"]
})

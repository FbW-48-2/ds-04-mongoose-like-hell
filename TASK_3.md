# Mongoose - Exercise 3

## Bonus Task (Advanced - Research involved)

Add a new field "role" to your schema.

The role can have one of the following values: "User" or "Admin". All other values are not allowed. 

The default role should be "User".

New students that you create will now automatically get assigned a role.

But we have the problem. All our existing students do NOT have any role set. We need to update them.

* Create a new GET route /migration
    * Research the mongoose `updateMany()` method
        * The method is available on every model
        * e.g. `Student.updateMany(queryObject, updateObject, options)`
    * Write an updateMany statement which checks which students have no role field set and set it to "User"
        * Use the $exists operator to find these students
        * Use the $set operator to update a field
    * The updateMany does not deliver back the updated records. Instead it returns an object with statistics on the changed records
        * Return back this result object with res.json 

module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      name: String,
      email:String,
      published:Boolean
    },
    { timestamps: true }
  );

  schema.method("toJSON", function() {
  
    const {  _id, ...object } = this.toObject();
    object.id = _id;

    return object;
  });

  const Users = mongoose.model("users", schema);
  return Users;
};

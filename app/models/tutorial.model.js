module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      title: String,
      description:String,
      location:{
        lat: String,
        lng: String
      },
      published:Boolean
    },
    { timestamps: true }
  );

  schema.method("toJSON", function() {
  
    const {  _id, ...object } = this.toObject();
    object.id = _id;
    console.log('obj',object)

    return object;
  });

  const Tutorial = mongoose.model("tutorial", schema);
  return Tutorial;
};

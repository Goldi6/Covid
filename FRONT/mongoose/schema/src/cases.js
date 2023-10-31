const mongoose = require("mongoose");

///goes to Content tSchema
const lineTypeSchema = new mongoose.Schema({
  // class: String,
  fontSize: {type:String,default:"0.75rem"},
  mainFontSize: {type:String,default:"1.4rem"},
  mobileMainFontSize: {type:String,default:"1rem"},
  className: {type:String,default:"line",enum:["line", "line-end","line-flex"]},
  lines: [
    {
      //name: { type: String },
      title: String,
      ballColor: String,
      type: { type: String, enum: ["sub", "main","br"] },
      //data: [Number],
    },
  ],
});

////////////////////
const graphAxisTypeSchema = new mongoose.Schema({
  name: String,
  type: String,
  label: String,
});
//TODO
const graphLineSchema = new mongoose.Schema({
  symbol: {
    type: String,
    default: "circle",
    enum: [
      "circle",
      "rect",
      "roundRect",
      "triangle",
      "diamond",
      "pin",
      "arrow",
      "none",
    ],
  }, // Set the symbol type to 'circle'
  symbolSize: { type: Number, default: 8 }, // Set the size of the symbol
  itemStyle: {
    color: String, // Set the fill color of the symbol
  },
  areaStyle: {},
  emphasis: {
    focus: {type:String,default:"self",enum:["self","series","none"]},
  },
});


///goes to Content tSchema
const graphTypeSchema = new mongoose.Schema({
  xAxis: graphAxisTypeSchema,
  yAxis: graphAxisTypeSchema,
  series: [],
});
/////////////////////////////
const documentSchema = new mongoose.Schema({
  order:Number,
  name: { type: String, required: true, unique: true },
  title: { type: String, required: true },
  defaultApiParams: String, //filtering options
  view: { type: String },
  proc : { type: String },
  section: { type: String },
  subGroup: { type: Boolean, default: false },
  tooltip: { type: String },
  shareable: { type: Boolean,default:false },
  timeGroupingCount:Boolean,
  fieldsToCount:[{type:String,default:undefined}],
  fieldsToSelect:[{type:String,default:undefined}],
  fieldsToGroupBy:[{type:String,default:undefined}],
  content: {
    filters:[], //NOTE: if type graph
   

    type: {
      type: String,
      enum: ["line", "graph",  "table"],
      required: true,
    },
    data: { type: mongoose.Schema.Types.Mixed }, //above schemas
  },
});



documentSchema.index({ section: 1, name: 1 }, { unique: true });

documentSchema.index({ order: 1 });


const Case = mongoose.model("cases", documentSchema);


module.exports = Case  ;

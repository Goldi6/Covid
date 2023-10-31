const mongoose = require("mongoose");

const relatedLinkSchema = new mongoose.Schema({
  title: { type: String, required: true },
  href: { type: String, required: true },
  subTitle: String,
  subLinkText: String,
});

const documentSchema = new mongoose.Schema({
  order: Number,
  name: { type: String, unique: true, required: true },
  title: { type: String, unique: true, required: true },
  relatedLinks: [relatedLinkSchema],
  cases: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "cases",
      default: [],
    },
  ],
  subTitle: String,
  subGroupCases: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "cases",
      default: [],
    },
  ],
  casesGridClass: {type:String ,default:""},
  subCasesGridClass: {type:String ,default:"solid"},
});

documentSchema.index({ order: 1 });

const Section = mongoose.model("sections", documentSchema);

module.exports = Section;

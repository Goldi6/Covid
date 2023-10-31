const tableName = 'tblTests';


const fields = [
{id:'Id', type:'int primary key IDENTITY(1,1)'},
{id:'DateTime', type:'datetime', descIndex: true },
{id:'Type', type:'int'}, //PCR, Antigen
{id:'isDetection', type:'bit'}, //0 = not detection, 1 = detection
{id:'isPositive', type:'bit'}, //0 = not positive, 1 = positive
{id:'age',type:'int'}, //0=0-19, 1=20-29, 2=30-39, 3=40-49, 4=50-59, 5=60-69, 6=70-79, 7=80+
{id:'vaccinationGroup',type:'int'}, //0=not vaccinated, 1=first dose, 2=second dose, 3=third dose, 4=fourth dose, 5=booster dose
{id:'LocationId',type:'int'},
{id:'PersonId' , type:'int FOREIGN KEY REFERENCES tblPeople(Id)'},
{id:'PassportId',type:'int'},


]

module.exports = { fields, tableName };

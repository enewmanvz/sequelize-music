const {sequelize} = require('./db')
const {Musician} = require('./index')

//test musician database CRUD
describe('Muscian Database', () => {
    //force sync database
    beforeAll(async() => {
        await sequelize.sync({force:true})
    })

    //create instances of Musician Model for testing
    const arrayOfMusicians =[
        {name: 'Prince', instrument: 'guitar', song: '1999'},
        {name: 'Phil Collins', instrument: 'drums', song: 'In the Air Tonight'},
        {name: 'Alicia Keys', instrument: 'piano', song: 'New York'},
        {name: 'Shelia E.', instrument: 'piano', song: 'The Glamorous Life'},
    ]
   
    
    test('musicians have name', async() => {
        await Musician.bulkCreate(arrayOfMusicians)
        // await Musician.create({name: 'Prince', instrument: 'guitar'})
        // const musicians = await Musician.findAll();
        //read test instance from db
        const testMusician = await Musician.findOne({
            where: {
              name: 'Prince'
            }
          });
        console.log(testMusician.name)
        expect(testMusician.name).toBe('Prince')
    })

    test('musicians have an instrument', async() => {
        await Musician.bulkCreate(arrayOfMusicians)
        // await Musician.create({name: 'Prince', instrument: 'guitar'})
        // const musicians = await Musician.findAll();
        //read test instance from db
        const testMusician = await Musician.findOne({
            where: {
              name: 'Prince'
            }
          });
        console.log(testMusician.name)
        expect(testMusician.instrument).toBe('guitar')
    })

})
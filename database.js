const knex=require('knex')({
    client:'mysql',
    connection:{
        host:'localhost',
        user:'root',
        password:'Aniket@123',
        database:'crud_knex'
    }
});
// knex.schema.createTable('student',(table)=>{
//     table.increments('id').primary()
//     table.string('name').notNullable()
//     table.string('email').unique().notNullable()
//     table.string('password')
//     table.integer('age')
// })
// .then(()=>{
//     console.log('table created successfully.....');
// }).catch(()=>{
//     console.log('table already exist......');
// })

module.exports=knex
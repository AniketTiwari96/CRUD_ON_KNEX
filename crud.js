const knex = require('./database');
const input = require('readline-sync');

// create user 
const CreateUser = async ()=>{
    let data= {name : input.question('Enter your Name => '),
    email:input.question('Enter your E-mail ID => '),
    password:input.question('Enter your Password => '),
    age:input.questionInt('Enter your Age => ')
    }
    let d=  await knex('student').insert(data);
    // console.log(d,';');
    c();


}
const read = async ()=>{
    let table=input.question('\nWhich table data you want to Read\nEnter your table name => ');
    console.log('\nPress 1. For read ID Data\nPress 2. For Read all Data\n');
    let choice = input.questionInt('Enter your choice => ');
    if(choice === 1){
        let id=input.questionInt('\nWhich id you want to Read\nEnter your ID Number => ')
        let data=await knex.from(table).whereIn('id',[id]);
        if(data.length>0){
            console.log('This is your ID data ',data);
            c();

        }else{
            console.log('Sorry This ID dose not exist ');
        }
    }else if(choice === 2 ){
        let data=await knex.from(table).select();
        if(data.length>0){
            console.log('This is your all data ',data);
            c();  
        }else{
            console.log('\nThere is no data Sorry ');
        }
    }
}
const Updata = async () => {
    let table=input.question('\nWhich table data you want to Update\nEnter your table name => ')
    let id=input.question('\nWhice ID data you want to Update\nEnter your ID Number => ');
    let data=await knex.from(table).whereIn('id',[id])
    console.log('\nThis is your ID data ',data);

    console.log('\nPress 1. For Update Name\nPress 2. For Update E-mail\nPress 3. For Update Password\nPress 4. For Update Age\nPress 5. For all Data\nPress 6. For break\n');
    let choice = input.questionInt('What you want Update\nEnter your choice => ');
    if( choice === 1 ){
        let name=input.question('Enter your new Name => ');
        await knex(table).whereIn('id',[id]).update({name:name});
        console.log('Your name is updated ;');
        c();
    }
    else if( choice === 2 ){
        let email=input.question('Enter your new E-mail ID => ');
        await knex(table).whereIn('id',[id]).update({email:email});
        console.log('Your E-mail ID is updated ;');
        c();
    }
    else if ( choice === 3 ){
        let password=input.question('Enter your new Password => ');
        await knex(table).whereIn('id',[id]).update({password:password});
        console.log('Your Password is updated ;');
        c();
    }
    else if( choice === 4 ){
        let age=input.questionInt('Enter your new Age => ');
        await knex(table).whereIn('id',[id]).update({age:age});
        console.log('Your Password is updated ;');
        c();
    }
    else if( choice === 5 ){
        let data={
            name:input.question('Enter your new Name => '),
            email:input.question('Enter your new E-mail ID => '),
            password:input.question('Enter your new Password => '),
            age:input.questionInt('Enter your new Age => '), 
        }
        await knex(table).whereIn('id',[id]).update(data);
        console.log('Your all data updated ;');
        c();
    }
    else if(choice === 6 ){
        console.log('your program is stoped ;');
        process.exit();
    }
}
const Delete1=async () => {
    let table=input.question('Which table data you want to delete\nEnter your table Name => ');
    console.log('\nPress 1. For delete ID data\nPress 2. For delete all data\nPress 3. For stoped\n');
    let choice=input.questionInt('Enter your choice => ');
    if(choice === 1){
        let id=input.questionInt('\nWhich id you want to Delete\nEnter your ID Number => ');
        let data=await knex.from(table).whereIn('id',[id]);
        console.log('this is your data ',data);

        const confirm = input.question("Are you sure to Delete your account ? Press y or n :- ");
        if(confirm=='y'){
            await knex(table).where('id',[id]).del();
            console.log('Your id data has been Deleted  successfully....');
            c();
        }

    }else if( choice === 2){
        let data=await knex.from(table).select();
        console.log(data);
        const confirm = input.question("Are your sure to Delete your account ? press y or n :- ");
        if(confirm=='y'){
            await knex(table).truncate();
            console.log('Your all data has been Deleted  successfully....');
            c();
        }
    }else if(choice === 3){
        console.log('your program is stoped ;');
        process.exit();
    }
    
}
function c(){
    console.log('\nPress 1. For create.\nPress 2. For Read.\nPress 3. For Update.\nPress 4. For Delete.\nPress 5. For stop.\n');
    let Choice = input.questionInt('Enter your choice => ');
    if(Choice === 1){
        CreateUser();
    }else if(Choice === 2 ){
        read();
    }else if(Choice === 3 ){
        Updata();
    }else if(Choice === 4 ){
        Delete1();
    }else if(Choice === 5){
        console.log('Your program is stoped ;'),
        process.exit();
    }
}
c();

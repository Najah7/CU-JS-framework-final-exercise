require('dotenv').config();
const HOME = process.env.HOME_PATH
const { client } = require(`${HOME}/db/client`);
const { uri } = require(`${HOME}/db/client`);

const createUsers = async () => {
    console.log("Creating users...");
    const db = client.db('cu-final-exercise');
    const users = db.collection('users');

    const query = [
        { name: 'Yasushi', mail: 'osonoi@cu', tel: '1111' },
        { name: 'Koh', mail: 'kojima@cu', tel: '2222' },
        { name: 'Alice', mail: 'alice@example.com', tel: '3333' },
        { name: 'Bob', mail: 'bob@example.com', tel: '4444' },
        { name: 'Charlie', mail: 'charlie@example.com', tel: '5555' },
        { name: 'David', mail: 'david@example.com', tel: '6666' },
        { name: 'Eve', mail: 'eve@example.com', tel: '7777' },
        { name: 'Frank', mail: 'frank@example.com', tel: '8888' },
        { name: 'Grace', mail: 'grace@example.com', tel: '9999' },
        { name: 'Henry', mail: 'henry@example.com', tel: '0000' },  
    ];

    const user = await users.insertMany(query);
    console.log(user);

    await client.close();
}

if (require.main === module) {
    createUsers();
}

require('dotenv').config();
const HOME = process.env.HOME_PATH
const { client } = require(`${HOME}/db/client`);

const fetchAllUsers = async () => {
    const db = client.db('cu-final-exercise');
    const users = db.collection('users');

    const response = await users.find({}).toArray();
    console.log(response);

    await client.close();

    return response;
}

if (require.main === module) {
    const run = async () => {
        const users = await fetchAllUsers();
        console.log(users);
    };
    run();
}

exports.fetchAllUsers = fetchAllUsers;

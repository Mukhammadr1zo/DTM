const LOGIN = `
        select * from users where contact = $1 and password = $2
`;

const REGISTER = `
        insert into users(fullname, contact, region_id, password, gender) values ($1, $2, $3, $4, $5) returning *
        `


module.exports = { LOGIN, REGISTER }

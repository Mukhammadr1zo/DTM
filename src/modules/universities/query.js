const GET = `
        select u.*, json_agg(f.*) as faculties from faculties as f left join universities as u 
            on u.university_id = f.university_id 
            where f.first_subject = $1 and f.second_subject = $2 
        group by u.university_id
        `



module.exports = { GET }

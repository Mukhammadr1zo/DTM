const GETFIRST = `
        select s.* from faculties as f left join subjects as s on s.subject_id = f.first_subject group by s.subject_id
`;

const GETSECOND = `
select s.* from faculties as f left join subjects as s on s.subject_id = f.second_subject where f.first_subject = $1 group by s.subject_id 
`



module.exports = { GETFIRST, GETSECOND }

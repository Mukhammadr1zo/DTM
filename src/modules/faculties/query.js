const GET = `
        select 
            f.*, 
            (select region_name from regions where region_id = (select region_id from universities where university_id = f.university_id)) 
        from faculties as f where faculty_id = $1
`;



module.exports = { GET }

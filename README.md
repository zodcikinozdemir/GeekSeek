# GeekSeek (screening tool for recruiters and job seekers) 
 
## SUMMARY
This application is a candidate screening service connecting Seekers(recruiters) with Geeks(candidates, or students) using a skill ranking system allowing the Seeker to review the best Geeks who meet their technical skill requirements, without knowing their name, or other personal contact information. Candidates are selected solely based on their skills.

## PAGES & FUNCTIONALITY
### LANDING PAGE(before logging in)
About
Brief description of platform.

### SIGN UP
All users sign up with an email address and a password.
Users can rate their skills from 1 to 5. These are "Geek" skills and are stored in the Geek table.
Users can also search for Geeks with a set of skills. Perhaps a user is looking for help with a project or is looking to hire someone. Searching for a Geek will return those Geeks with the minimum set of skills the Seeker is looking for.

### LOGIN
User logs in with registered email address and pasword.

### DASHBOARD (logged in)
#### SEEKERS - the recruiter (/seekers)
A Seeker is looking for Geeks with a specific skillset. Once found, a Seeker will send the geek(s) an email of interest.

#### GEEKS- the candidate (/geeks)
A Geek is a candidate/student who has a technical skillset and available for scouting by a Seeker or collaboration by another Geek. A Geek has the same permissions as a Seeker, except they can also save their own skill rankings.

### SIDEBAR Navigation
* Run Query
* View & Select Skills for Query, 
* Set Skill Ranking
* Submit Query
* View Query Results
* Select Geek(s)
* Contact Geek(s)
* Clear Query, Run Another Query 
* Saved Queries
* Edit queries, re-run
* Edit Profile
* Edit Username(email), password, zip code
* GEEKS ONLY | Set it & Forget It: Save Personal Ranking to Skills

## About Set It & Forget It
A Geek must choose a ranking for all skills even if they don't have experience.
A Geek, like a seeker, can look for other geeks to collaborate by running a query.

## Data
For a complete list of skills: /skills
For a complete list of Geeks and their skills: /geeks
For a complete list of Seekers: /seekers

## SKILLS:  Initially, 5 skills will be presented: 
* HTML, 
* CSS, 
* JS, 
* MYSQL, 
* NODE

## Rankings: There are 5 rankings:
* 1 None – not able to apply this skill 
* 2 Basic – able to handle only the simplest assignments or tasks  
* 3 Intermediate – able to handle independently many types of assignments or tasks 
* 4 Advanced – able to handle independently nearly all types of assignments or tasks 
* 5 Expert – able to handle independently all types of assignments or tasks and serves as a role model or coach for others

For example, I'm a geek, and my skills and rankings are as follows:
HTML 4, CSS 4 ,JS 3, MYSQL 4, NODE 4

## Futures 
* Geek endorsements
* Transferrable, soft skills
* Sending messages internally
* Zip code queries 

## Example:
### Query
Node 5, SQL 3, Javascript 4, HTML 4
Skills Searched Against Geeks In the order they are provided on query, i.e. NODE is more important than HTML in this example
Must choose a minimum of 1 skill to query

### Search Against Geeks
Begin search against Geeks:
Select * from Geeks where NODE = 5, return results;
Of Results, select * from Geeks where SQL = 3* (or better, up to 5), return results;
of Results, select * from Geeks where Javascript = (or better, up to 5), return results;
of results, select * from Geeks where HTML =(or better, up to 5)

### Show results
Candidate 1 Skills: Node 5, SQL 4, Javascript, 4, HTML 4, CSS 5
Candidate 2 Skills: Node 5, SQL 5, Javascript 5, HTML 5, CSS 3
Candidate 3 Skills: Node 5, SQL 3, Javascript 3, HTML 4, CSS 2


const assert = require('assert');
const { fetchIndeedJobs, fetchIndeedJob, fetchReedJob } = require('..');


describe('Job fetcher', () => {
  describe('fetch Reed job data', () => {
    it('should return object with job data', async () => {
      const url = 'https://www.reed.co.uk/jobs/front-end-developer-london-350-400-per-day/35374312';
      const expected = {
        jobId: '35374312',
        jobUrl: 'https://www.reed.co.uk/company-profile/Pearson-Frank-49241?jobId=35374312',
        companyLogo: 'https://resources.reed.co.uk/profileimages/logos/thumbs/Logo_40437.png',
        jobTitle: 'Front End Developer',
        datePosted: '2018-06-12',
        expirationDate: '2018-07-24T23:55:00.0000000',
        employerName: 'Pearson Frank',
        industry: 'IT & Telecoms',
        employmentType: 'FULL_TIME, CONTRACTOR',
        workHours: 'full-time',
        locationName: 'London',
        salary: '350.0000',
        salaryType: 'DAY',
        jobDescription: 'ReactJS Developer - London - £350 - £400 per day - 6 month contract (minimum)  \nCity of London  \nGreenfield Banking Project  \n  \nPearson Frank are currently working in partnership with a Global Consultancy who are searching for Front End Developers with expertise and commercial experience with ReactJS for a 6 month contract with possible extensions and an immediate start. Contract rates on offer are between £350 - £400 per day.  \n  \nSkills & Experience:  \n  \nFront End Developer:  \n\\- ReactJS is a mandatory skill and all other Web Technologies are a bonus  \n  \nIf you meet the above requirements and believe you would be a suitable candidate, apply now to avoid missing out on this fantastic opportunity as the role will not be on the market long.  \n  \nPearson Frank International is the UK Market Leader in Open Source and Digital recruitment. All our years of experience in the IT industry have allowed us to branch out and specialise in specific markets and we now also have dedicated teams working with in Open Source Development Technologies, Mobile Application Development and Web Application Development.  \n  \nApply now by sending your CV to -  \n  \nOr call Ben Townsend - (+44)  \n  \nFront End Developer HTML5 CSS3 JQuery Javascript DOJO NodeJS AngularJS ReactJSFront End Developer HTML5 CSS3 JQuery Javascript DOJO NodeJS AngularJS ReactJSJava, Front End, Developer, J2EE, Spring, Web Service, SQL, SQL Queries , XML, Spring MVC, Hibernate, Web Application, HTML, Javascript, TDD, Junit, Mockito, Jmock, London, Central London, Essex, Hertfordshire, Buckinghamshire, Berkshire, Surrey, Sussex, Kent REACT REACT REACT',
        skills: 'Front End Developer HTML5 CSS3 JQuery Javascript DOJO NodeJS AngularJS ReactJS React ReactJS',
      };

      const response = await fetchReedJob(url);
      assert.deepEqual(response, expected);
      return true;
    });
  });

  describe('fetching Indeed jobs list data', () => {
    it('should return array of 10 objects with all jobs data', async () => {
      const url = 'https://www.indeed.co.uk/jobs?q=react&l=london&start=0';
      const expected = 10;
      const response = await fetchIndeedJobs(url);
      assert.deepEqual(response.jobs.length, expected);
      return true;
    });
  });

  describe('fetch Indeed job data', () => {
    it('should return object with job data', async () => {
      const url = 'https://www.indeed.co.uk/viewjob?jk=76ba8672a95f102e&from=serp&vjs=3';
      const expected = {
        jobTitle: 'Frontend Engineer (React)',
        locationName: 'London',
        employerName: 'PlentificExpend LtdSport WhispersClient ServerAmpers & ConsultingiGenius',
        jobDescription: '**The company**\n\nPlentific is one of UK’s fastest growing technology start-ups. We provide homeowners, landlords and property managers a transactional marketplace to find and hire repairs, maintenance and home improvement professionals.\n\n**The team**\n\nThe engineering team sits at the centre of everything we do at Plentific and is constantly tackling challenging problems, such as online payments, quoting, invoicing, booking, search / scoring algorithms, ETL, data pipelines, in-app messaging, real-time notifications and fraud prevention. Our frontend engineers mostly work with JavaScript (ES6, React, TypeScript, Alt.js, Node.js, Express) on an increasingly more service-oriented architecture. The rest of the tech stack include Django REST Framework, PostgreSQL, PostGIS, AWS, Amazon Redshift, Kubernetes, Docker, Redis, Celery, Pandas, Numpy, Scrapy, Git with Zenhub, Jenkins, Elasticsearch, Logstash and lots of raw SQL for analytics. We have a very large but clean code base as we put significant emphasis on design patterns, code readability, testability, maintainability and extendability.\n\n**The job**\n\nWe’re looking for an experienced frontend engineer to join the engineering team. You’ll be working alongside a highly technical and motivated team and report to the technical co-founder. There is a specific reason why we use the term \\`engineer\\` over \\`developer\\`. You would be expected to apply fundamental engineering and mathematical skills to solve problems and overcome challenges, not just develop code. For people with the right mindset, this frame of mind provides an intellectually stimulating environment.\n\n**Requirements**\n\n*   Expert level knowledge of JavaScript (ES6, TypeScript)\n*   Strong computer science fundamentals and JavaScript design patterns\n*   1+ year commercial React experience using one of the Flux frameworks\n*   Strong understanding of UI/UX best practices and considerations\n*   Passion for writing clean, modular, well-commented, readable and reusable code\n*   Ability to think out of the box with a can-do attitude to get things done efficiently\n*   Excellent communication skills with ability to articulate technical concepts in plain English\n*   Top academics (BSc, MSc) in computer science, engineering, physics, mathematics or another field with strong programming curriculum\n\n**Benefits**\n\n*   Competitive compensation package\n*   A new 15’’ MacBook pro and supporting hardware of your choice\n*   Learning and development fund\n*   23 day holidays\n*   A stylish office in the heart of Old Street, London\n*   Stocked kitchen and breakfast bar with great coffee',
        jobUrl: 'https://www.indeed.co.uk/viewjob?jk=76ba8672a95f102e&from=serp&vjs=3',
        jobId: '76ba8672a95f102e',
      };
      const response = await fetchIndeedJob(url);
      assert.deepEqual(response, expected);
      return true;
    });
  });
});

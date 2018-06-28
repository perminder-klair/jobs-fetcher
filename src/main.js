import Turndown from 'turndown';
import scrapeIt from 'scrape-it';
import striptags from 'striptags';
import Url from 'url';

export async function fetchIndeedJobs(url) {
  try {
    const result = await new Promise(((resolve, reject) => {
      scrapeIt(url, {
        jobs: {
          listItem: '.row.result',
          data: {
            jobTitle: {
              selector: '.jobtitle > a',
              how: 'html',
              convert: x => striptags(x),
            },
            jobUrl: {
              selector: '.jobtitle > a',
              attr: 'href',
              convert: x => `https://www.indeed.co.uk${x}`,
            },
            locationName: '.location',
            employerName: '.company',
          },
        },
      })
        .then(({ data, response }) => {
          if (response.statusCode !== 200) reject(new Error('data fetch failed'));
          resolve(data);
        });
    }));

    // console.log('result', result);
    return result;
  } catch (error) {
    console.error(error);
    return error;
  }
}


export async function fetchIndeedJob(url) {
  try {
    const result = await new Promise(((resolve, reject) => {
      scrapeIt(url, {
        jobTitle: '.jobtitle font',
        locationName: '#job-content span.location',
        employerName: '#job-content span.company',
        jobDescription: {
          selector: '#job_summary div',
          how: 'html',
          convert: (x) => {
            if (x === null) {
              return '';
            }
            const turndown = new Turndown();
            return turndown.turndown(x);
          },
        },
        salary: 'span.no-wrap',
      })
        .then(({ data, response }) => {
          if (response.statusCode !== 200) reject(new Error('data fetch failed'));
          resolve(data);
        });
    }));
    // console.log('result', result);

    const urlParts = Url.parse(url, true);
    const jobId = urlParts.query.jk;
    const data = {
      ...result,
      jobUrl: url,
      jobId,
    };
    // console.log('data', data);
    return data;
  } catch (error) {
    console.error(error);
    return error;
  }
}

export async function fetchReedJob(url) {
  try {
    const result = await new Promise(((resolve, reject) => {
      scrapeIt(url, {
        jobTitle: {
          selector: 'meta[itemprop="title"]',
          attr: 'content',
        },
        companyLogo: {
          selector: '.logo-wrap meta[itemprop="image"]',
          attr: 'content',
          convert: x => (x ? x.slice(0, -17) : null),
        },
        datePosted: {
          selector: 'meta[itemprop="datePosted"]',
          attr: 'content',
        },
        expirationDate: {
          selector: 'meta[itemprop="validThrough"]',
          attr: 'content',
        },
        employerName: {
          selector: '.posted span[itemprop="name"]',
          how: 'text',
        },
        industry: {
          selector: 'meta[itemprop="industry"]',
          attr: 'content',
        },
        employmentType: {
          selector: 'span[itemprop="employmentType"]',
          attr: 'content',
        },
        workHours: {
          selector: 'meta[itemprop="workHours"]',
          attr: 'content',
        },
        locationName: {
          selector: 'meta[itemprop="addressRegion"]',
          attr: 'content',
        },
        salary: {
          selector: 'span[itemprop="baseSalary"] meta[itemprop="value"]',
          attr: 'content',
        },
        salaryType: {
          selector: 'span[itemprop="baseSalary"] meta[itemprop="unitText"]',
          attr: 'content',
        },
        jobDescription: {
          selector: '.description span[itemprop="description"]',
          how: 'html',
          convert: (x) => {
            if (x === null) {
              return '';
            }
            const turndown = new Turndown();
            return turndown.turndown(x);
          },
        },
        skills: {
          selector: 'ul[itemprop="skills"] li[itemprop="experienceRequirements"]',
          how: 'text',
        },
        jobUrl: {
          selector: 'meta[itemprop="url"]',
          attr: 'content',
        },
        jobId: {
          selector: 'input#JobId',
          how: 'val',
        },
      })
        .then(({ data, response }) => {
          if (response.statusCode !== 200) reject(new Error('data fetch failed'));
          resolve(data);
        });
    }));

    // console.log('result', result);
    return result;
  } catch (error) {
    console.error(error);
    return error;
  }
}

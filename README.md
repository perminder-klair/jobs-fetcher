# Jobs data fetcher

Fetch data from REED.co.uk and Indeed.co.uk and turn into JSON.

## Scripts

- `yarn dev` - starts the server with hot-reloading
- `yarn build` - build the code using Rollup
- `yarn test` - execute all unit tests
- `yarn run lint` - fixes all the possible linting errors

## Usage

Have a look in `./test/test.js` directory for usage examples.

#### Fetch Indeed jobs list

```
import { fetchIndeedJobs } from 'jobs-fetcher';
const url = 'https://www.indeed.co.uk/jobs?q=react&l=london&start=0';
const response = await fetchIndeedJobs(url);
console.log(response);
```

#### Fetch Indeed single job details

```
import { fetchIndeedJob } from 'jobs-fetcher';
const url = 'https://www.indeed.co.uk/viewjob?jk=76ba8672a95f102e&from=serp&vjs=3';
const response = await fetchIndeedJob(url);
console.log(response);
```

#### Fetch Reed single job details

```
import { fetchReedJob } from 'jobs-fetcher';
const url = 'https://www.reed.co.uk/jobs/front-end-developer-london-350-400-per-day/35374312';
const response = await fetchReedJob(url);
console.log(response);
```

## License

[MIT](LICENSE)

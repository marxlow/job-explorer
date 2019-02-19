import githubBaseApi from './githubBaseApi';

const githubSearchJobs = (async ({description, location, fullTime}) => {
  // Assume No errors in response all the time
  // const response = await githubBaseApi.get("/positions.json", {
  //   params: {
  //     description,
  //     location,
  //     full_time: fullTime,
  //   },
  //   headers: {
  //     'Content-Type': 'application/json',
  //     'Access-Control-Allow-Origin': '*',
  //   },
  //   crossDomain: true,
  // });
  const tempResponse =
  [
    {
        "id": "03507fc5-de67-41dc-af3e-617f4bfe1c60",
        "type": "Full Time",
        "url": "https://jobs.github.com/positions/03507fc5-de67-41dc-af3e-617f4bfe1c60",
        "created_at": "Mon Feb 18 12:27:16 UTC 2019",
        "company": "Sticker Mule",
        "company_url": "https://www.stickermule.com/careers",
        "location": "Remote",
        "title": "Sr. front end developer",
        "description": "<p>We created Sticker Mule to be the best place to work and shop. That means making ordering fast, simple and fun while creating a stable, low stress and enjoyable place for talented people to work.</p>\n<p>We're searching for more to join us as we look to build one of the Internet's best technical teams. Some of our current projects include migrating to a service architecture, inter-service communication with GCloud PubSub and GRPC, API Gateway based GraphQL, event sourcing persistence and CQRS, and manufacturing and artwork processing automation.</p>\n<p><a href=\"https://www.stickermule.com/about\">Watch a brief video to learn more</a></p>\n<p><strong>Why we enjoy working here</strong></p>\n<ol>\n<li>We work flexible hours with an asynchronous culture. </li>\n<li>We work at a sustainable pace without unreasonable external deadlines.</li>\n<li>Varied, interesting technical challenges to work on.</li>\n<li>Opportunities to make a large impact as part of a small, highly motivated team.</li>\n</ol>\n<p><strong>Our tech stack</strong></p>\n<ol>\n<li>Backend: Ruby on Rails, NodeJS, Go</li>\n<li>DB: Postgres, MySQL, Redis</li>\n<li>Frontend:  React, Redux, Webpack</li>\n<li>APIS: GraphQL, GRPC, GCloud PubSub</li>\n<li>Google Cloud Platform</li>\n<li>Docker, Kubernetes</li>\n</ol>\n<p><strong>What you will do</strong></p>\n<ol>\n<li>Design, build, test and maintain single page applications and front-end features</li>\n<li>Look for ways to improve the performance and user experience of our site</li>\n<li>Write clean, performant code in accordance with our team’s code style guidelines</li>\n<li>Work to improve and maintain the health of our front end code</li>\n<li>Collaborate with team leads and stakeholders to ensure that we’re always building the best possible solution in the optimal way</li>\n<li>Participate in peer code reviews, share expertise with other members of the team and mentor junior developers</li>\n</ol>\n<p><strong>About you</strong></p>\n<ol>\n<li>You have a minimum of 3 years professional software development experience</li>\n<li>You’re passionate about front end</li>\n<li>You’re highly competent in JavaScript with a strong understanding of both the language fundamentals and browser APIs</li>\n<li>You're experienced in building single page applications with React or similar libraries</li>\n<li>You possess strong analytical and critical thinking skills</li>\n<li>You have great written and verbal communication skills in English</li>\n</ol>\n<p><strong>Requirements</strong></p>\n<ol>\n<li>Applicants will be sent a Hackerrank test within 1-3 days of applying.</li>\n<li>Test must be completed within 5 days.</li>\n</ol>\n<p><strong>Compensation</strong></p>\n<ol>\n<li>$90,000-$115,000+ depending on experience</li>\n<li>Signing bonus</li>\n<li>28 days vacation</li>\n</ol>\n",
        "how_to_apply": "<p>Apply here only:\n<a href=\"https://www.stickermule.com/career/36088186-191e-4471-b730-c939788adcce\">https://www.stickermule.com/career/36088186-191e-4471-b730-c939788adcce</a></p>\n",
        "company_logo": "https://jobs.github.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBcjllIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--20bbc815156bb11bcbbdd0ae9c53e82002da663a/01-sticker-mule-logo-dark-stacked.png"
    },
    {
        "id": "de930ba0-4f10-46ab-be18-17cfe7e26f47",
        "type": "Full Time",
        "url": "https://jobs.github.com/positions/de930ba0-4f10-46ab-be18-17cfe7e26f47",
        "created_at": "Fri Jan 18 09:54:10 UTC 2019",
        "company": "Sticker Mule",
        "company_url": "https://www.stickermule.com/careers",
        "location": "Remote",
        "title": "Sr. full-stack software engineer - JS + Ruby",
        "description": "<p>We created Sticker Mule to be the best place to work and shop. That means making ordering fast, simple and fun while creating a stable, low stress and enjoyable place for talented people to work.</p>\n<p>We're searching for more to join us as we look to build one of the Internet's best technical teams. Some of our current projects include migrating to a service architecture, inter-service communication with GCloud PubSub and GRPC, API Gateway based GraphQL, event sourcing persistence and CQRS, and manufacturing and artwork processing automation.</p>\n<p><a href=\"https://www.stickermule.com/about\">Watch a brief video to learn more</a></p>\n<p><strong>Why we enjoy working here</strong></p>\n<ol>\n<li>We work flexible hours with an asynchronous culture. </li>\n<li>We work at a sustainable pace without unreasonable external deadlines.</li>\n<li>Varied, interesting technical challenges to work on.</li>\n<li>Opportunities to make a large impact as part of a small, highly motivated team.</li>\n</ol>\n<p><strong>Our tech stack</strong></p>\n<ol>\n<li>Backend: Ruby on Rails, NodeJS, Go</li>\n<li>DB: Postgres, MySQL, Redis</li>\n<li>Frontend:  React, Redux, Webpack</li>\n<li>APIS: GraphQL, GRPC, GCloud PubSub</li>\n<li>Google Cloud Platform</li>\n<li>Docker, Kubernetes</li>\n</ol>\n<p><strong>What you will do</strong></p>\n<ol>\n<li>Design, build, test, deploy and maintain web applications and services</li>\n<li>Write clean, performant code in accordance with our team’s code style guide</li>\n<li>Work to improve and maintain the code health of all our software</li>\n<li>Collaborate with team leads and stakeholders to ensure that we’re always building the best possible solution in the optimal way</li>\n<li>Participate in peer code reviews, share expertise with other members of the team, mentor junior developers</li>\n</ol>\n<p><strong>About you</strong></p>\n<ol>\n<li>You have a minimum of 3 years professional software development experience</li>\n<li>You’re highly competent in JavaScript and have some experience with Ruby</li>\n<li>You have experience building single page applications, ideally with React</li>\n<li>You possess strong analytical and critical thinking skills</li>\n<li>You have great written and verbal communication skills in English</li>\n</ol>\n<p><strong>Requirements</strong></p>\n<ol>\n<li>Applicants will be sent a Hackerrank test within 1-3 days of applying.</li>\n<li>Test must be completed within 5 days.</li>\n</ol>\n<p><strong>Compensation</strong></p>\n<ol>\n<li>$90,000-$115,000+ depending on experience</li>\n<li>Signing bonus</li>\n<li>28 days vacation</li>\n</ol>\n",
        "how_to_apply": "<p>Apply here only:\n<a href=\"https://www.stickermule.com/career/178e2cdf-2e15-47e8-9d32-b24ac89032bf\">https://www.stickermule.com/career/178e2cdf-2e15-47e8-9d32-b24ac89032bf</a></p>\n",
        "company_logo": "https://jobs.github.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBZ0pjIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--6d2fb3226ee8f4c00f92f2b69bdd86bdf5d884a6/01-sticker-mule-logo-dark-stacked.png"
    },
  ];
  return tempResponse;
});

export default {
  githubSearchJobs,
}
const ghpages = require('gh-pages');

ghpages.publish(
  'dist',
  {
    repo: 'https://github.com/BattyAlex/Timeline.git',
    branch: 'gh-pages',
    message: 'Deploying to GitHub Pages'
  },
  function (err) {
    if (err) {
      console.error('Deployment failed:', err);
    } else {
      console.log('Deployment successful!');
    }
  }
);

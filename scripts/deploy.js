const ghpages = require('gh-pages');
const path = require('path');

ghpages.publish('build', function (err) {
        if (err) {
            console.error('Failed to publish', err);
            process.exit(1);
        } else {
            console.log('Successfully published');
            process.exit(0);
        }
    }
);
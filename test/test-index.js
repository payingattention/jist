var page = require('webpage').create();

var test_url = 'http://127.0.0.1.xip.io:8080';

page.open(test_url, function(status) {
    if (status !== 'success') {
        console.error('Failed in opening page...');
        phantom.exit(1);
    } else {
        if (page.content.indexOf('zhuzhuor') === -1) {
            console.error("Index isn't shown well...");
            phantom.exit(2);
        } else {
            phantom.exit(0);
        }
    }
});

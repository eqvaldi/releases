/* A short script to get the total number of downloads of files in a
   repository's releases. I just discovered that GitHub provides this info
   through its API! I thought I'd traded the loss of such metrics for the
   goodness of GitHub... */

// Use LOOT as an example.
var owner = 'loot';
var repo = 'loot';

var xhr = new XMLHttpRequest();
xhr.addEventListener('load', function(){
    var releases = JSON.parse(this.responseText);
    var count = 0;
    for (var i = 0; i < releases.length; ++i) {
        for (var j = 0; j < releases[i].assets.length; ++j) {
            count += releases[i].assets[j].download_count;
        }
    }
    console.log(count);
});
xhr.open('GET', 'https://api.github.com/repos/' + owner + '/' + repo + '/releases');
xhr.send();
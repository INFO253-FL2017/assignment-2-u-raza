//define variables for form inputs
var button = document.querySelector("input[name='input_submit']");
var inName = document.querySelector("input[name='Name']");
var inMsg = document.querySelector("textarea[name='Message']");
var comments = document.querySelector(".previous");
var postNum = comments.getAttribute('id');

window.onload = function() {
    var postNum = comments.getAttribute('id');
    loadComments(postNum);
};

function loadComments(postNum) {
    if (localStorage.getItem(postNum) != null)  {
        var commentList = JSON.parse(localStorage.getItem(postNum));
        for (each in commentList) {
            var username = commentList[each][0];
            var commenttxt = commentList[each][1];
            var div = document.createElement('div');
            div.setAttribute('id', each);
            insert_comment = "<p class='comment_txt'>" + username + "</p>";
            insert_comment += "<p class='comment_usr'> -- " + commenttxt + "</p>";
            div.innerHTML = insert_comment;
            comments.appendChild(div);
        };
    };
};

//Add event listner to submit button
button.addEventListener("click", function () {
    if (inName.value!="" && inMsg.value!="") {
        var currComments = JSON.parse(localStorage.getItem(postNum));
        var numDivs = comments.getElementsByTagName('div').length + 1;
        var div = document.createElement('div');
        div.setAttribute('id', numDivs);
        insert_comment = "<p class='comment_txt'>" + inMsg.value + "</p>";
        insert_comment += "<p class='comment_usr'> -- " + inName.value + "</p>";
        div.innerHTML = insert_comment;
        comments.appendChild(div);
        
        var comment_num = numDivs;
        var comment_data = [inName.value, inMsg.value];
        if (currComments==null) {
            var currComments = {};
        };
        currComments[comment_num] = comment_data;
        localStorage.setItem(postNum, JSON.stringify(currComments));
        var form = document.getElementById("cmntbox");
        form.reset();
        return false;
    };
});
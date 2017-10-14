function validateForm() {
    var button = document.querySelector("input[name='input_submit']");
    var inName = document.querySelector("input[name='Name']");
    var inEmail = document.querySelector("input[name='Email']");
    var inSubj = document.querySelector("input[name='Subject']");
    var inMsg = document.querySelector("textarea[name='Message']");
    var form_to_submit = document.getElementById("contact_form");
    var inList = [inName, inEmail, inSubj, inMsg];
    var notice = document.querySelector("#notification");
    notice.style.visibility = "hidden";
    notice.innerHTML = "";
    var missing = "";
    var missed = false;

    // Check all input fields
    for (x in inList) {
        if (inList[x].value == "") {
            missing += (inList[x].name) + ", ";
            missed = true;
        };
    };
    if (missed) {
        missing = missing.slice(0, missing.length - 2);
        notice.innerHTML = ("Please fill in these fields before submitting: " + missing);
        notice.className = "missing-notice";
        notice.style.visibility = "visible";
        return false;
    } else {
        notice.innerHTML = (inName.value + ", your message has been sent!");
        notice.className = "sent-notice";
        notice.style.visibility = "visible";
        document.getElementById("contact_form").submit();
        return true;
    };
};

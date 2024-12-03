var _a;
var uploadedImageUrl = '';
(_a = document.getElementById('resumeForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    event.preventDefault();
    var nameElement = document.getElementById('name');
    var emailElement = document.getElementById('email');
    var phoneElement = document.getElementById('phone');
    var educationElement = document.getElementById('education');
    var experienceElement = document.getElementById('experience');
    var skillsElement = document.getElementById('skills');
    if (nameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement) {
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var education = educationElement.value;
        var experience = experienceElement.value;
        var skills = skillsElement.value;
        var resumeOutput = "\n            <div class=\"resume-page\">\n                <div class=\"resume-header\">\n                    <div class=\"header-left\">\n                        <img src=\"".concat(uploadedImageUrl, "\" alt=\"Profile Image\" class=\"profile-image\">\n                        <h2>").concat(name_1, "</h2>\n                        <p>").concat(email, "</p>\n                        <p>").concat(phone, "</p>\n                    </div>\n                </div>\n                <hr class=\"divider\">\n                <div class=\"resume-body\">\n                    <div class=\"resume-section\">\n                        <h3>Education</h3>\n                        <p>").concat(education, "</p>\n                    </div>\n                    <div class=\"resume-section\">\n                        <h3>Experience</h3>\n                        <p>").concat(experience, "</p>\n                    </div>\n                    <div class=\"resume-section\">\n                        <h3>Skills</h3>\n                        <p>").concat(skills, "</p>\n                    </div>\n                </div>\n            </div>\n        ");
        var resumeOutputElement = document.getElementById('resumeOutput');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
            resumeOutputElement.style.display = "flex";
            resumeOutputElement.style.justifyContent = "center";
            resumeOutputElement.style.padding = "20px";
            disableFormFields();
        }
    }
});
var inputFile = document.getElementById('file');
inputFile === null || inputFile === void 0 ? void 0 : inputFile.addEventListener('change', function () {
    var image = inputFile.files ? inputFile.files[0] : null;
    if (image && image.size < 2000000) {
        var reader_1 = new FileReader();
        reader_1.onload = function () {
            uploadedImageUrl = reader_1.result;
        };
        reader_1.readAsDataURL(image);
    }
    else {
        alert("Image must be less than 2MB.");
    }
});
function disableFormFields() {
    var formElements = document.querySelectorAll('#resumeForm input, #resumeForm textarea, #resumeForm button');
    formElements.forEach(function (element) {
        element.disabled = true;
    });
    var resumeForm = document.getElementById('resumeForm');
    if (resumeForm) {
        resumeForm.style.opacity = '0.5';
    }
}

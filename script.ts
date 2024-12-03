let uploadedImageUrl: string = '';

document.getElementById('resumeForm')?.addEventListener('submit', function (event: Event) {
    event.preventDefault();

    const nameElement = <HTMLInputElement>document.getElementById('name');
    const emailElement = <HTMLInputElement>document.getElementById('email');
    const phoneElement = <HTMLInputElement>document.getElementById('phone');
    const educationElement = <HTMLTextAreaElement>document.getElementById('education');
    const experienceElement = <HTMLTextAreaElement>document.getElementById('experience');
    const skillsElement = <HTMLTextAreaElement>document.getElementById('skills');

    if (nameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement) {
        const name = nameElement.value;
        const email = emailElement.value;
        const phone = phoneElement.value;
        const education = educationElement.value;
        const experience = experienceElement.value;
        const skills = skillsElement.value;

        const resumeOutput = `
            <div class="resume-page">
                <div class="resume-header">
                    <div class="header-left">
                        <img src="${uploadedImageUrl}" alt="Profile Image" class="profile-image">
                        <h2>${name}</h2>
                        <p>${email}</p>
                        <p>${phone}</p>
                    </div>
                </div>
                <hr class="divider">
                <div class="resume-body">
                    <div class="resume-section">
                        <h3>Education</h3>
                        <p>${education}</p>
                    </div>
                    <div class="resume-section">
                        <h3>Experience</h3>
                        <p>${experience}</p>
                    </div>
                    <div class="resume-section">
                        <h3>Skills</h3>
                        <p>${skills}</p>
                    </div>
                </div>
            </div>
        `;

        const resumeOutputElement = <HTMLElement>document.getElementById('resumeOutput');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
            resumeOutputElement.style.display = "flex";
            resumeOutputElement.style.justifyContent = "center";
            resumeOutputElement.style.padding = "20px";
            disableFormFields();
        }
    }
});

const inputFile = <HTMLInputElement>document.getElementById('file');
inputFile?.addEventListener('change', function () {
    const image = inputFile.files ? inputFile.files[0] : null;

    if (image && image.size < 2000000) {
        const reader = new FileReader();
        reader.onload = () => {
            uploadedImageUrl = reader.result as string;
        };
        reader.readAsDataURL(image);
    } else {
        alert("Image must be less than 2MB.");
    }
});

function disableFormFields() {
    const formElements = document.querySelectorAll('#resumeForm input, #resumeForm textarea, #resumeForm button');
    formElements.forEach(element => {
        (<HTMLInputElement>element).disabled = true;
    });

    const resumeForm = <HTMLFormElement>document.getElementById('resumeForm');
    if (resumeForm) {
        resumeForm.style.opacity = '0.5';
    }
}

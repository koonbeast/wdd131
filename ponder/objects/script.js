const courseInformation = {
    code: "WDD131",
    name:"Dynamic Web Fundamentals",
    sections: [
{
    sectionNum: 1,
    room: 'STC 353',
    enrolled: 20,
    days: 'TTH',
    instructor: 'Bro T'
},
{
    sectionNum: 2,
    room: 'STC 347',
    enrolled: 13,
    days: 'TTH',
    instructor: 'Sis A'
}],
    enrollStudent: function(sectionNum) {
        // find the section from the array and enroll one more student into that section
        const sectionIndex = this.sections.findIndex(section => section.sectionNum == sectionNum);
        this.sections[sectionIndex].enrolled++;
        renderSections(this.sections);
    }
}



function sectionTemplate(section) {
    return `<tr>
      <td>${section.sectionNum}</td>
      <td>${section.room}</td>
      <td>${section.enrolled}</td>
      <td>${section.days}</td>
      <td>${section.instructor}</td></tr>`
}

function renderSections(sections) {
const html = sections.map(sectionTemplate);
document.querySelector("#sections").innerHTML = html.join("");
}

renderSections(courseInformation.sections);

document.querySelector("#enrollStudent").addEventListener("click", function () {
    const sectionNum = document.querySelector("#sectionNumber").value;
    courseInformation.enrollStudent(sectionNum);
});
var ninja = 'Hazel Hoi Ching Chan';
var firstNm = ninja.substring(0, ninja.indexOf(' '));
var lastNm = ninja.substring(ninja.indexOf(' ') + 1);
var lastNmInitial = lastNm.substring(0, 1);

var studentScope = angular.element(document.getElementsByClassName('body')).scope();
var studentsList = studentScope.tmpallStudentListwithLetter;
var ninjaScope = null;
var classSelected = null;
var data = null;

$.each(studentsList[lastNmInitial], function(index, value) {
	if (studentsList[lastNmInitial][index].participant_first_name == firstNm && studentsList[lastNmInitial][index].participant_last_name == lastNm) {
		ninjaScope = studentsList[lastNmInitial][index];
		return ninjaScope;
	}
});

var element = $( "span.ng-binding:contains(" + ninja + ")" );
document.querySelector('#' + element[1].id).click();
setTimeout(function() { document.querySelector('.close_icon').click()}, 800);
var classScope = angular.element(document.getElementById('modaldialog')).scope();

setTimeout(function() {
$.each(classScope.allClassList, function(index, value) {
	if (classScope.allClassList[index].class_reg_id == ninjaScope.class_reg_id) {
		classSelected = classScope.allClassList[index];
		return classSelected;
	}
});

data  = {
	company_id:  studentScope.company_id,
	token:  studentScope.attendance_token,
	email: studentScope.user_email_id,
	user_login_type: studentScope.user_login_type,
	from: "attendance", 
	program_date: studentScope.selectedDate,
	class_appointment_id: classSelected.class_appointment_id,
	class_appointment_times_id: classSelected.class_appointment_times_id,
	class_appointment_occurrence_id: classSelected.class_appointment_occurrence_id,
	class_registration_detail_id: classSelected.class_registration_detail_id,
	participant_id: ninjaScope.participant_id,
	membership_id: ninjaScope.membership_id,
	membership_option_id: ninjaScope.membership_option_id,
	reg_id: ninjaScope.membership_registration_id,
	class_reg_id: ninjaScope.class_reg_id,
	flag: "A",	
	reg_type: "M",
	drop_in_flag: "N",
	attendance_date_time: "",
	student_id: ninjaScope.student_id

}
}, 1000 );

const xhr = new XMLHttpRequest()
xhr.open("POST", "https://cn.mystudio.io/Api/v2/memberCheckin")
xhr.setRequestHeader("Content-Type", "'application/json; charset=utf-8'");
xhr.send(JSON.stringify(data));


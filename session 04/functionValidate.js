function validate(){
  if(document.myApplication.Name.value =="")
  {
    alert("Please provide your name!!");
    document.myApplication.name.focus();
    return false;
  }

  if(document.myApplication.Email.value =="")
  {
    alert("Please provide your Email!!");
    document.myApplication.Email.focus();
    return false;
  }
  var emailId = document.myApplication.Email.value;
  atpos =emailId.indexof("@");
  dotpos =emailId.lastIndexof(".");

  if(atpos <1 || (dotpos - atpos <2)){
    alert("Please enter email in correct format!!")
    document.myApplication.Email.focus();
    return false;
  }

 if(document.myApplication.postcode.value ==""){
   alert("Please provide postcode in correct format.. e.g A4 0BC");
   document.myApplication.postcode.focus();
   return false;
 }

 if(document.myApplication.months.value=="-1"){
   alert("Please select How many month(s) you want to stay!!");
   return false;
 }
 return (true);
}

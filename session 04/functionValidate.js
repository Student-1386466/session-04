function validate(){
  if( document.myForm.Name.value == "")
  {
    alert("Please provide your name!!");
    document.myForm.Name.focus();
    return false;
  }

  if(document.myForm.Email.value =="")
  {
    alert("Please provide your Email!!");
    document.myForm.Email.focus();
    return false;
  }
  var emailId = document.myForm.Email.value;
  atpos =emailId.indexof("@");
  dotpos =emailId.lastIndexof(".");

  if((atpos < 1 )|| (dotpos <2)) {
    alert("Please enter email in correct format!!")
    document.myForm.Email.focus();
    return false;
  }

 if(document.myForm.postcode.value ==""){
   alert("Please provide postcode in correct format.. e.g A4 0BC");
   document.myForm.postcode.focus();
   return false;
 }

 if(document.myForm.months.value=="-1"){
   alert("Please select How many month(s) you want to stay!!");
   return false;
 }
 return (true);
}

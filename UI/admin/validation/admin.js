//function to handle login-form validation
function loginValidate(loginForm){

var validationVerified=true;
var errorMessage="";

if (loginForm.login.value=="")
{
errorMessage+="Username not filled!\n";
validationVerified=false;
}
if(loginForm.password.value=="")
{
errorMessage+="Password not filled!\n";
validationVerified=false;
}
if(!validationVerified)
{
alert(errorMessage);
}
return validationVerified;
}

function updateValidate(updateForm) {
    var validationVerified=true;
var errorMessage="";

if (updateForm.opassword.value=="")
{
errorMessage+="Please provide your current password.\n";
validationVerified=false;
}
if (updateForm.npassword.value=="")
{
errorMessage+="Please provide a new password.\n";
validationVerified=false;
}
if(updateForm.cpassword.value=="")
{
errorMessage+="Please confirm your new password.\n";
validationVerified=false;
}
if(updateForm.cpassword.value!=updateForm.npassword.value)
{
errorMessage+="Confirm password and new password do not match!\n";
validationVerified=false;
}
if(!validationVerified)
{
alert(errorMessage);
}
return validationVerified;
}

//validate staffForm
function staffValidate(staffForm) {
    var validationVerified=true;
var errorMessage="";

if (staffForm.fName.value=="")
{
errorMessage+="Please provide the staff first name.\n";
validationVerified=false;
}
if (staffForm.lName.value=="")
{
errorMessage+="Please provide the staff last name.\n";
validationVerified=false;
}
if (staffForm.sAddress.value=="")
{
errorMessage+="Please provide the staff street address.\n";
validationVerified=false;
}
if(staffForm.mobile.value=="")
{
errorMessage+="Please provide the staff mobile/telephone number.\n";
validationVerified=false;
}
if(!validationVerified)
{
alert(errorMessage);
}
return validationVerified;
}

//code for function to handle specialsForm validation goes here


//function to handle foodsForm validation
function foodsValidate(foodsForm){

var validationVerified=true;
var errorMessage="";

if(foodsForm.name.value=="")
{
errorMessage+="food name not filled!\n";
validationVerified=false;
}
if(foodsForm.price.value=="")
{
errorMessage+="food price not filled!\n";
validationVerified=false;
}
if(foodsForm.category.selectedIndex==0)
{
errorMessage+="please select a food category!\n";
validationVerified=false;
}
if(foodsForm.photo.value=="")
{
errorMessage+="food photo not selected!\n";
validationVerified=false;
}
if(!validationVerified)
{
alert(errorMessage);
}
return validationVerified;
}

//function to handle categoriesForm validation
function categoriesValidate(categoriesForm){

var validationVerified=true;
var errorMessage="";

if (categoriesForm.name.value=="")
{
errorMessage+="category name not filled!\n";
validationVerified=false;
}
if (categoriesForm.category.selectedIndex==0)
{
errorMessage+="please select a category to remove.\n";
validationVerified=false;
}
if(!validationVerified)
{
alert(errorMessage);
}
return validationVerified;
}

//function to handle quantitiesForm validation
function quantitiesValidate(quantitiesForm){

var validationVerified=true;
var errorMessage="";

if (quantitiesForm.name.value=="")
{
errorMessage+="quantity value not filled!\n";
validationVerified=false;
}
if (quantitiesForm.quantity.selectedIndex==0)
{
errorMessage+="please select a quantity value to remove.\n";
validationVerified=false;
}
if(!validationVerified)
{
alert(errorMessage);
}
return validationVerified;
}

//function to handle currenciesForm validation
function currenciesValidate(currenciesForm){

var validationVerified=true;
var errorMessage="";

if (currenciesForm.name.value=="")
{
errorMessage+="currency/symbol not filled!\n";
validationVerified=false;
}
if (currenciesForm.currency.selectedIndex==0)
{
errorMessage+="there is no currency selected!\n";
validationVerified=false;
}
if(!validationVerified)
{
alert(errorMessage);
}
return validationVerified;
}

//function to handle foodStatusForm validation
function statusValidate(foodStatusForm){

var validationVerified=true;
var errorMessage="";

if (foodStatusForm.food.selectedIndex==0)
{
errorMessage+="food not selected!\n";
validationVerified=false;
}
if(!validationVerified)
{
alert(errorMessage);
}
return validationVerified;
}

//function to handle ordersAllocation form validation
function ordersAllocationValidate(allocationForm){

var validationVerified=true;
var errorMessage="";

if (allocationForm.orderid.selectedIndex==0)
{
errorMessage+="Order ID not selected!\n";
validationVerified=false;
}
if(allocationForm.staffid.selectedIndex==0)
{
errorMessage+="Staff ID not selected!\n";
validationVerified=false;
}
if(!validationVerified)
{
alert(errorMessage);
}
return validationVerified;
}
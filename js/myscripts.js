var caveStatus = 0;

function openCave() {
  $("#bench").click(function () {
    $("#bench").removeClass("glow");
    $(this).css({
      cursor: "default",
    });

    setTimeout(function () {
      if (!caveStatus) {
        var userInput = prompt(
          "פססט... מהי הסיסמא הסודית לכניסה למערה החשמלית?"
        );
        if (userInput == "חסמבה חסמבה חסמבה" || userInput == "5897631") {
          caveStatus = 1;
          $("#bench").addClass("moving");
          $("#rock").addClass("moving");

          // Black screen
          setTimeout(function () {
            $("#blackScreen2").fadeIn(3000);
          }, 3000);

          // Change objects
          setTimeout(function () {
            $("#blackScreen2").fadeOut(3000);
            $("#bg2").css("visibility", "visible");
        
            $("#rock").css({
              display: "none",
            });
            $("#bench").css({
              display: "none",
            });
            $("#blackScreen1").css({
              display: "none",
            });
            $("#paper").css({
              display: "block",
            });
          }, 6000);
        } else {
          alert("רמז: הסיסמא הסודית נמצאת בפזמון השיר");
          setTimeout(function () {
            $("#bench").addClass("glow");
            $("#bench").css({
              cursor: "pointer",
            });
          }, 200);
        }
      }
    }, 200);
  });
}

function fadeForm() {
  var modal = document.getElementById("myModal");
  var btn = document.getElementById("paper");
  btn.onclick = function () {
    $("#myModal").fadeIn(1000);
  };
  window.onclick = function (event) {
    if (event.target == modal) {
      $("#myModal").fadeOut(500);
    }
  };
}

// Validators
function validName(id) {
var regex = "^[\u0590-\u05FF ']+$";
  var cnt = 0;
  var flag = 0;
  var fullName = $(id).val();
  var fullNameLen = fullName.length;

  if (fullName.charAt(0) == " " || fullName.charAt(fullNameLen - 1) == " ")
    return false;

  for (let i = 0; i < fullNameLen; i++) {
    if (fullName.charAt(i) == " ") {
      cnt++;
      flag = 1;
    }
    if (i + 1 != fullNameLen) {
      if (flag && fullName.charAt(i + 1) == " ") {
        return false;
      }
      flag = 0;
    }
  }
  if (fullName.match(regex) && cnt > 0) return true;
  return false;
}
function validPassword(id) {
    var pass = $(id).val();
    var regex = "^[\u0590-\u05FF ']+$";
    if (pass.match(regex)) return true;
    return false;
}
function validMail(id) {
  var mail = $(id).val();
  var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (mail.match(regex)) return true;
  return false;
}
function validWebsite(id) 
{
    var website = $(id).val();
    var regex = "(\w*\W*)?\w*(\.(\w)+)+(\W\d+)?(\/\w*(\W*\w)*)*";
    if (website.match(regex)) return true;
    return false;
}
function validPhone(id) {
  var phone = $(id).val();
  var regexA = /^\d{10}$/;
  var regexB = /^\d{9}$/;
  if (phone.match(regexA) || phone.match(regexB)) return true;
  return false;
}
function validAge(id)
{
  var age = $(id).val();
  if (age != null) return true;
  else return false;
}
function validCheckbox(id)
{
  var checkboxes = $(id);
  var checkboxLen = checkboxes.length;
  for (let i = 0; i < checkboxLen; i++) {
    if (checkboxes[i].checked) return true;
  }
    return false;
}

// Submitters
function submitName(id)
{
  if(validName(id))
  {
      if($(id).hasClass("is-invalid"))
          $(id).removeClass("is-invalid");

      if(!$(id).hasClass("is-valid"))
      $(id).addClass("is-valid");
      return true;
  }
  else
  {
      if($(id).hasClass("is-valid"))
       $(id).removeClass("is-valid");

      if(!$(id).hasClass("is-invalid"))
       $(id).addClass("is-invalid");
       return false;
  }
}
function submitPassword(id)
{
  if(validPassword(id))
  {
      if($(id).hasClass("is-invalid"))
          $(id).removeClass("is-invalid");

      if(!$(id).hasClass("is-valid"))
      $(id).addClass("is-valid");
      return true;
  }
  else
  {
      if($(id).hasClass("is-valid"))
       $(id).removeClass("is-valid");

      if(!$(id).hasClass("is-invalid"))
       $(id).addClass("is-invalid");
       return false;
  } 
}
function submitMail(id)
{
  if(validMail(id))
    {
        if($(id).hasClass("is-invalid"))
            $(id).removeClass("is-invalid");

        if(!$(id).hasClass("is-valid"))
        $(id).addClass("is-valid");
        return true;
    }
    else
    {
        if($(id).hasClass("is-valid"))
         $(id).removeClass("is-valid");

        if(!$(id).hasClass("is-invalid"))
         $(id).addClass("is-invalid");
         return false;
    }
}
function submitWebsite(id)
{
  if(validWebsite(id))
  {
      if($(id).hasClass("is-invalid"))
          $(id).removeClass("is-invalid");

      if(!$(id).hasClass("is-valid"))
      $(id).addClass("is-valid");
      return true;
  }
  else
  {
      if($(id).hasClass("is-valid"))
       $(id).removeClass("is-valid");

      if(!$(id).hasClass("is-invalid"))
       $(id).addClass("is-invalid");
       return false;
  }
}
function submitPhone(id)
{
  if(validPhone(id))
  {
      if($(id).hasClass("is-invalid"))
          $(id).removeClass("is-invalid");

      if(!$(id).hasClass("is-valid"))
      $(id).addClass("is-valid");
      return true;
  }
  else
  {
      if($(id).hasClass("is-valid"))
       $(id).removeClass("is-valid");

      if(!$(id).hasClass("is-invalid"))
       $(id).addClass("is-invalid");
       return false;
  }
}
function submitAge(id)
{
  if(validAge(id))
  {
      if($(id).hasClass("is-invalid"))
          $(id).removeClass("is-invalid");

      if(!$(id).hasClass("is-valid"))
      $(id).addClass("is-valid");
      return true;
  }
  else
  {
      if($(id).hasClass("is-valid"))
       $(id).removeClass("is-valid");

      if(!$(id).hasClass("is-invalid"))
       $(id).addClass("is-invalid");
       return false;
  }
}
function submitCheckBox(id)
{
  var checkboxes = $(id);
  var checkboxLen = checkboxes.length;
   if(!validCheckbox(id)) 
   {
      for (let i = 0; i < checkboxLen; i++)
      {  
          if(!$(checkboxes).hasClass("is-invalid"))
           $(checkboxes).addClass("is-invalid");
      }
      return false;
   }
   else
   return true;
}
function submitForm()
{
  if(submitName("#fullName") &&  submitPassword("#pass") && submitMail("#mail")
   && submitWebsite("#website") && submitPhone("#phone") && submitAge("select[name=age]")
   && submitCheckBox("input[type=checkbox]"))
   $("#form_id").submit();
}

$(document).ready(function () {
  openCave();
  fadeForm();

  $("#fullName").focusout(function () {
  submitName(this);
  });
  
  $("#pass").focusout(function () {
  submitPassword(this);
   });

  $("#mail").focusout(function () {
  submitMail(this);
  });

  $("#website").focusout(function () {
  submitWebsite(this);
  });
  
  $("#phone").focusout(function () {
  submitPhone(this);
  });

  $("select[name=age]").change(function () {
    submitAge(this);
  });

  $("input[type=checkbox]").change(function () {
    submitCheckBox(this);
  });

});
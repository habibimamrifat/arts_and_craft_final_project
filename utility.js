function viewHiddenSection(elementID)
{
  if (elementID == 'code-match')
  {
    function code_generator()
    {
      const tryCode = Math.random()*10000;
      const code_Int = parseInt(tryCode);
      const code_str = code_Int+'';
      const code_length = code_str.length
      if(code_length == 4)
      {
        const send_code = document.getElementById('gen_code');
        send_code.innerText=code_str;

        const addClassTo = document.getElementById(elementID);
        addClassTo.classList.remove('hidden')
        return code_str;
      }
      else{
        console.log(code_length);
        code_generator();
      }
    }
    code_generator(); 
       
  }

  else if (elementID == 'dash-create-pass')
  {
    console.log('create password');
    const send_code = document.getElementById('gen_code');
    const code = send_code.innerText;
   const code_field = document.getElementById('code_field')
   const user_code = code_field.value;
   if(code == user_code)
   {
    const addClassTo = document.getElementById(elementID);
    addClassTo.classList.remove('hidden')
   }
   else{

    alert('wrong code');

  //   const show_message = document.getElementById('code-match');
  //   const show_warning = document.createElement("div");
  //   show_warning.innerHTML= `
  //   <div>
  //   <p>erong code</p>
  // </div>
  //   `
  //   show_message.appendChild(show_warning);

   }
    
  }


  else{
    const addClassTo = document.getElementById(elementID);
      addClassTo.classList.remove('hidden')

  }
 
  
}


function closeViewedSection(elementID)
{
  const addClassTo = document.getElementById(elementID);
  addClassTo.classList.add('hidden')
 
}



function dataCollectorIsStudent(isStudent)
{
  const create_password = document.getElementById('create_password')
  const createPassword = create_password.value;
  
  const confirm_password = document.getElementById('confirm_password')
  const confirmPassword = confirm_password.value;
  
  if(createPassword == confirmPassword)
  {
    const name = document.getElementById('name').value;
    console.log(name);

    const Last_name = document.getElementById('Last_name').value;
    console.log(Last_name);

    const email = document.getElementById('email').value;
    console.log(email);

    const mobileno = document.getElementById('mobileno').value;
    console.log(mobileno);

    const birthday = document.getElementById('birthday').value;
    console.log(birthday);

    const address = document.getElementById('address').value;
    console.log(address);
    


    if (isStudent != 'true')
    {

      const shop_name = document.getElementById('shop_name').value;
      console.log(shop_name);

      const Owner_name = document.getElementById('Owner_name').value;
      console.log(Owner_name);

      const shop_email = document.getElementById('shop_email').value;
      console.log(shop_email);

      const shop_Contact_number = document.getElementById('Contact_number').value;
      console.log(shop_Contact_number);

      const Shop_address = document.getElementById('Shop_address').value;
      console.log(Shop_address);

      const shop_type = document.getElementById('shop_collector').innerText;
      console.log(shop_type);
    
      
    }
    else{
      const hobby = document.getElementById('hobby_collector').innerText;
      console.log(hobby);

    }

  }

}




var allfaqs = document.querySelectorAll('.faq');
allfaqs.forEach((faqElem,index )=> {
    faqElem.addEventListener("click", () => {
        faqElem.lastElementChild.classList.toggle('show');
        
        allfaqs.forEach( (items,i)=>{
            if(index!=i){
                items.lastElementChild.classList.remove('show');
                items.firstElementChild.firstElementChild.innerHTML = '+'
            }
        })

        if (faqElem.firstElementChild.firstElementChild.innerHTML == '+') {
            faqElem.firstElementChild.firstElementChild.innerHTML = '-'
        }
        else {
            faqElem.firstElementChild.firstElementChild.innerHTML = '+'
        }
    })
})



let formElem=document.querySelector('form .form-box button');
let form=document.querySelector('form .form-box');
console.log(formElem)

formElem.addEventListener('click',(Event)=>{

    let name=document.querySelector('form .form-box input[name="uname"]').value;
    let email=document.querySelector('form .form-box input[name="email"]').value;
    let phoneNumber=document.querySelector('form .form-box input[name="telephone"]').value;

    let userdata=JSON.parse(localStorage.getItem('userdetails')) ?? [];
    userdata.push({
        'name':name,
        'email':email,
        'phoneNumber':phoneNumber
    });
    localStorage.setItem('userdetails',JSON.stringify(userdata));
    form.reset();
    Event.preventDefault();
})

const e={form:document.querySelector(".feedback-form"),textarea:document.querySelector("textarea"),input:document.querySelector('input[name="email"]')},t={};e.form.addEventListener("submit",(function(e){e.preventDefault(),formData=new FormData(e.currentTarget),formData.forEach(((e,t)=>{console.log(`${t}: ${e}`)})),localStorage.removeItem("feedback-form-state"),e.currentTarget.reset()})),e.form.addEventListener("input",(function(e){const{elements:{email:a,message:r}}=e.currentTarget;t.email=a.value,t.message=r.value,localStorage.setItem("feedback-form-state",JSON.stringify(t))})),window.addEventListener("load",(function(t){const a=JSON.parse(localStorage.getItem("feedback-form-state"));a&&(e.textarea.value=a.message,e.input.value=a.email)}));
//# sourceMappingURL=03-feedback.0a4ad01b.js.map

!function(){var e={form:document.querySelector(".feedback-form"),textarea:document.querySelector("textarea"),input:document.querySelector('input[name="email"]')},t={};e.form.addEventListener("submit",(function(e){e.preventDefault();var t=e.currentTarget.elements,a=t.email,r=t.message;if(!a.value||""===r.value)return alert("Нужно заполнить все поля формы");new FormData(e.currentTarget).forEach((function(e,t){console.log("".concat(t,": ").concat(e))})),localStorage.removeItem("feedback-form-state"),e.currentTarget.reset()})),e.form.addEventListener("input",(function(e){var a=e.currentTarget.elements,r=a.email,n=a.message;t.email=r.value,t.message=n.value,localStorage.setItem("feedback-form-state",JSON.stringify(t))})),window.addEventListener("load",(function(t){var a=JSON.parse(localStorage.getItem("feedback-form-state"));a&&(e.textarea.value=a.message,e.input.value=a.email)}))}();
//# sourceMappingURL=03-feedback.cad9112b.js.map

class Cliente{constructor(name,email,password){this.name=name;this.email=email;this.password=password}
imprimiRegsitro(){let datos=this.email+" "+this.password
return datos}}
let boton=document.getElementById("btnForm")
const registro=(e)=>{e.preventDefault()
const Name=document.getElementById("name")
const Email=document.getElementById("email")
const Password=document.getElementById("password")
const cliente=new Cliente(Name.value,Email.value,Password.value)
console.log(cliente.imprimiRegsitro())
let pasoJson=JSON.stringify(cliente)
localStorage.setItem("usuario",pasoJson)
console.log(localStorage)
Name.value=""
Email.value=""
Password.value=""}
boton.addEventListener("click",registro)
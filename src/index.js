document.addEventListener('DOMContentLoaded',function(){  console.log("The DOM has loaded");

const form = document.getElementById('create-task-form')
form.addEventListener('submit', (e)=>{e.preventDefault()
handleMyTask(e.target['new-task-description'].value)
form.reset()
})
})

function handleMyTask(myParameter){
  const li = document.createElement('li')
  li.style.listStyle = 'none'
  li.textContent = `${myParameter}`
  const btn = document.createElement('button')
  btn.addEventListener('click',deleteButton)
  btn.textContent = "X"
 
  const ul = document.getElementById('tasks')
  ul.appendChild(li)


}

function deleteButton(e){
e.target.parentNode.remove()
}

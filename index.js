const users = {
  name: 'Cristian Soares',
  github: 'criric',
  instagram: 'soarescristian_',
  twitter: 'criricyt'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `https://${social}.com/${users[social]}`
  }
}

changeSocialMediaLinks()

async function getAPI() {
  const url = `https://api.github.com/users/${users.github}`
  const response = await fetch(url)
  const data = await response.json()
  return data
}

async function changeTitle() {
  const object = await getAPI()
  const title = document.querySelector('title')
  title.innerText = `${object.name} - DoWhile 2021`
}

async function changeNameOnTag() {
  const object = await getAPI()
  const userName = document.getElementById('userName')
  userName.innerText = object.name
}

async function changeGitUser() {
  const object = await getAPI()
  userGit.href = object.html_url
  userLogin.textContent = object.login
}

async function changeTagImage() {
  const object = await getAPI()
  const image = document.querySelector('img[alt="Eu"]')
  image.src = object.avatar_url
}

async function changeTagBio() {
  const object = await getAPI()
  const bio = document.querySelector('p')
  bio.innerText = object.bio
}

changeTitle()
changeNameOnTag()
changeGitUser()
changeTagImage()
changeTagBio()

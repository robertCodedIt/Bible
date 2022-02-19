import axios from 'axios'


const getRandomImage = async() =>{
let myUrl = ''
    try{
        await axios.get('https://api.unsplash.com/photos/random?client_id=KJBJqoRXA7LeczoEwwW4ch2Mzy1pBxtCZOCdWXvEqbg')
        .then(function (response) {
            console.log(response.data.urls.small)
            myUrl = response.data.urls.small;
        })
        .catch(function (err) {
            console.log(err)
        })
    }
    catch (err) {
        console.log(err)
    }
return myUrl
}

const RandomImageStr = getRandomImage()
export {RandomImageStr}



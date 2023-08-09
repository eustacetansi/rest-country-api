const container = document.querySelector('.blog')

const getData = async () =>{

    const response = await fetch('https://restcountries.com/v3.1/all');

    if(response.status !==200){
        throw new Error('cannot fetch');
    }
    const posts = await response.json();

    let template = '';
    posts.forEach(post => {
        template += `
        <div class="post container">
          <div class="col-3">
          <img src=${post.flags.png}> 
          <h2 class="col-3">${post.name.common}</h2>
          <p class="col-3">${post.population}</p>
          <p class="col-3">${post.region}</p>
          <p class="col-3">${post.capital}</p>
          </div>
        </div>
     `
    });
    container.innerHTML += template;

    return posts;

}
getData().then(data => console.log('resolved', data))
         .catch(err => console.log('rejected', err.message)) //
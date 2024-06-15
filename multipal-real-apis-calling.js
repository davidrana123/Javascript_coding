const fetchData = async(url) => {
    const res = await fetch(url)
    if(!res.ok){
        throw new Error(`Failed to featch data from ${url}`)
    }
    return res.json();
}

const multiapis = async() => {
    apiUrl = [
        'https://jsonplaceholder.typicode.com/posts/1',
    'https://jsonplaceholder.typicode.com/users/1',
    'https://jsonplaceholder.typicode.com/comments/1'
    ]


    try{
        const results = await Promise.all(apiUrl.map(url => fetchData(url)))

        const combinedResult = {
            post: results[0],
            user: results[1],
            comment: results[2]
          };

          console.log('combinedResult',combinedResult)

          return combinedResult;
    }catch(error){
        console.log(error.message)
        throw error
    }
}

console.log('multiapis',multiapis())
async function getPosts() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');

    return await response.json();
}

async function getUsers() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');

    return await response.json();
}

async function getComments() {
    const response = await fetch('https://jsonplaceholder.typicode.com/comments');

    return await response.json();
}

const getComments = async() => {
    const response = await fetch('https://jsonplaceholder.typicode.com/comments');

    return await response.json();
}

const getComments = async() => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/comments');
        return await response.json();
    } catch (error) {
        console.warn(error);
        return error;
    }
}

const getComments = async() => {
    const response = await fetch('https://jsonplaceholder.typicode.com/comments')
    .catch(error => {
        console.warn(error);
        return error;
    });
    return await response.json();
}

// Promise.all([
//     getPosts(),
//     getUsers(),
//     getComments()
// ]).then(console.log)

//пофиг на падения
// Promise.allSettled([
//     getPosts(),
//     getUsers(),
//     getComments()
// ]).then(console.log)

//только первый fulfilled/resolved ответ
// Promise.race([
//     getPosts(),
//     getUsers(),
//     getComments()
// ]).then(console.log)

//только reject
    // return Promise.reject('server error!');

//только response
    // return Promise.response([
    //     {
    //         id: 1, 
    //         src: 'https://jsonplaceholder.typicode.com/images/1.jpg', 
    //         alt: 'image',
    //     },
    // ]);

async function getImages(){
    // const response = await fetch('https://jsonplaceholder.typicode.com/images');

    // return await response.json();
    return Promise.reject('server error!');
    return Promise.resolve([
        {
            id: 1, 
            src: 'https://jsonplaceholder.typicode.com/images/1.jpg', 
            alt: 'image',
        },
    ]);
}

getImages().then(console.log).then(console.warn);

// console.log(posts.then(console.log));
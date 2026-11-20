const APIURL = 'https://jsonplaceholder.typicode.com/'

//GET 
// async function getPost (){
//     const response = await axios.get(APIURL+`post/1`);
//     console.log(response.data);
//     const titlepost = document.querySelector('.title');
//     console.log(firstPost.title);
//     titlepost.textContent = firstPost.title;

//     const postDescription = document.querySelector('.post');
//     postDescription.textContent = firstPost.body;
// }
// getPost();

async function getPost() {
  try {
    const response = await axios.get(APIURL + `posts/`);
    const firstPost = response.data;
    
    console.log(firstPost);

    const titlePost = document.querySelector('.title');
    titlePost.textContent = firstPost.title;

    const postDescription = document.querySelector('.post');
    postDescription.textContent = firstPost.body;
  } catch (error) {
    console.error("Error fetching post:", error);
  }
}

getPost();

// comment
async function getComment(){
    const response = await axios.get(APIURL + 'comments')
    console.log (response.data);

    const allcomments = response.data;
    const commentInHTML = document.querySelector('.comments');
    commentInHTML.innerHTML = allcomments.map((Comment) => {
        return '<li> ${commentInHTML.name} - ${ Comment}</li>' 
    }).join('')

}
getComment();

//
async function sendPost(name){
  const data = await axios.post(APIURL + 'post/1',{
    title: 'foo',
    body: 'bar',
    userId: 1,
  })
  console.log(data)
}

sendPost();

 //
async function sendComment(comment){
  const data = await axios.post(APIURL + 'comment/',{
  title: 'I want bananas',
  body: 'comment',
  userId: 20,
  })
  console.log(data.status);
}
sendComment('Banans are nutritious and vital to the body');

//
async function updatePost(body, comment){
  // const data = await axios .patch(APIURL + 'posts/1'){
  const data = await axios.put(APIURL + 'posts/1',{
    title: body,
    body:comment,
    userId:20,
  })
  console.log(data.status);
  }
  updatePost('i want mangoes','Banans are nutritious and vital to the body' );

  //
async function deletePost(){
  const response = await axios.daelete(APIURL + 'post/1/');
  console.log(response);
}
deletePost();

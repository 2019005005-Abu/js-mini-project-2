// const posts=[
//     {
//         title:"What is Lorem Ipsum?",
//         body:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
//     },
//     {
//         title:"Why do we use it?",
//         body:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)"
//     },
//     {
//         title:"Where does it come from?",
//         body:`It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)`
//     },
//     {
//         title:"Where can I get some?",
//         body:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)"
//     }
// ]

const fetchingData=async(config)=>{
    try{
        const response=await axios(config);
        return  response.data;
    }catch(err){
     throw Error('Data is not fetched');
    }
    
}

const  postsElement=document.querySelector('.posts');


const loadAllData= async()=>{
const posts= await fetchingData('https://jsonplaceholder.typicode.com/posts')
    posts.map((post)=>{
       const postElement=document.createElement("div");
       postElement.classList.add("post");
      postElement.innerHTML=` 
      <h4 class="post-title">${post.title}</h4>
      <p>${post.body}</p>
      `;
      postsElement.appendChild(postElement);
    });
}
loadAllData();
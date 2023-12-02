// CARDS

// const cardsBlock = document.querySelector('.cardsBlock');
//
// const cards = async () => {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/posts?Id=1');
//         const data = await response.json();
//
//         const posts = Array.isArray(data) ? data.slice(0, 20) : [data];
//
//         cardsBlock.innerHTML = posts.map(post => `
//             <div class="card">
//                 <img src="../img/y_bin.png">
//                 <h4>${post.title}</h4>
//                 <p>${post.body}</p>
//             </div>
//         `).join('');
//     } catch (e) {
//         console.error(e);
//     }
// }
//
// window.onload = cards;





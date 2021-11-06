//Enter your code here..
function getcontacts()
{
fetch('https://jsonplaceholder.typicode.com/users').then(res=>{
    return(res.json());
})
.then(res2 =>{
    console.log(res2);
    var player='<h2>Users Lists</h2>';
                    res2.forEach(function(user) {
                     player+=
                    `<div class="player">
                      <div class="strength">Name : ${user.name}</div>
                      <div>Email   : ${user.email}</div>
                      <div>Phone   : ${user.phone}</div>
                      <div>Website : ${user.website}</div>
                      <div>Company : ${user.company.name}</div>
                      <div>City    : ${user.address.city}</div>
                      <div>Zipcode : ${user.address.zipcode}</div>
                     </div>
                    `
                    })
                    document.getElementById('message').innerHTML=player;
})
.catch(err=>{
    console.log(err);
})
}
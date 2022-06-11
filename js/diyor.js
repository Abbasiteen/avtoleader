let wrapper = document.querySelector(".wrapper");


// fetch("https://jsonplaceholder.typicode.com/users")
// .then((res) => res.json())
// .then((users) =>  console.log(users))


fetch("#A")
.then((res) => res.json())
.then((A) => console.log(A),

        A.Search.forEach(element => {
            console.log(element);
            wrapper.innerHTML +=`
            <div class="card">
            <div class="img">
            <p>${element.name}</p>
            </div>
                <h2>${element.Title}</h2>
                <p>${element.Year}</p>
            </div>
            `
            ;
        })
);
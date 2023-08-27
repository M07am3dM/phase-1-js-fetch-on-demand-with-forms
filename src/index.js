const init = () => {
    const inputForm = document.querySelector('form').addEventListener('submit', (e) => {
        e.preventDefault();
        // console.log(e);
        // console.log(e.target.children[1].value);
        const input = document.querySelector('#searchByID');
        
        // console.log(input.value);

        fetch(`http://localhost:3000/movies/${input.value}`)
        .then(resp => resp.json())
        .then(data => {
            // console.log(data);
            const title = document.querySelector('#movieDetails h4');
            const summary = document.querySelector('#movieDetails p');

            title.innerText = data.title;
            summary.innerText = data.summary;
        });

    });
}

document.addEventListener('DOMContentLoaded', init);


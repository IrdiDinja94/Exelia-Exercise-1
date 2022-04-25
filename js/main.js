$(document).ready(()=>{
    $('#searchForm').on('submit', (e)=>{
        let searchText = $('#searchText').val();
        getMovies(searchText);
        e.preventDefault();
    })
});

function getMovies(searchText){
    axios.get('https://www.omdbapi.com?apikey=3472fea3&s='+searchText)
        .then((response) => {
            console.log(response)
            let movies = response.data.Search;
            let output = '';
            
            $.each(movies.slice(0,3), (index,movie) => {
                output += `
                    <div class="col-md-3">
                        <div class="well text-center">
                            <img src="${movie.Poster}" onClick="movieSelected()">
                            <h5>${movie.Title}</h5>                        
                        </div>
                    </div>
                `;
            });


                $('#movies').html(output);


        })
        .catch((err) => {
            console.log(err);
        });
}

function movieSelected(){   
    window.location = 'index.html';    
    return false;
}


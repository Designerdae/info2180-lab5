window.addEventListener('load', function(){
    let lookup = document.getElementById('lookup_country');
    let city_button = document.getElementById('lookup_city');
    lookup.addEventListener('click', () => {performLookup('country')} )
    city_button.addEventListener('click', () => {performLookup('city')} )
});

async function performLookup(lookup_Type){
    let fieldinput = document.getElementById('country');
    let fieldresult = document.getElementById('result');
    let lookup_url = '';
    if (lookup_Type === 'city'){
        lookup_url = `./world.php?country=${fieldinput.value}&context=cities`;
    }else{
        lookup_url = `./world.php?country=${fieldinput.value}&context=''`;
    }
    const response = await fetch(lookup_url).then((response) => {
        let data = response.text();
        return data;
   })
        
   console.log (response);
   fieldresult.innerHTML = response;
}


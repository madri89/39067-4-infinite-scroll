console.log('Ajax Jquery - Warsztat - Scrol');

let endOfThePage = 0

let preLoading = false;


const showLoading = () => {
    let loading = document.getElementById('loading');
    loading.style.display = 'block';
    preLoading = true;
}

const hideLoading = () => {
    let loading = document.getElementById('loading');
    loading.style.display = 'none';
    preLoading = false;
}


const getData = () => {

    if (!preLoading) {

        showLoading();
        
        fetch('https://akademia108.pl/api/ajax/get-users.php')
        .then(res => res.json())
        .then(data => {

            let body = document.body;
            let hr = document.createElement('hr');
            body.appendChild(hr);

            for (let user of data) {
                let pId = document.createElement('p'); 
                let pName = document.createElement('p'); 
                let pWebsite = document.createElement('p'); 

                pId.innerText = `User ID: ${user.id}`;
                pName.innerText = `User Name: ${user.name}`;
                pWebsite.innerHTML = `User URL: ${user.website}<br />---------`;

                
                body.appendChild(pId);
                body.appendChild(pName);
                body.appendChild(pWebsite);

            }

            hideLoading();
            console.log(data);
        })
        .catch(error => {
            console.log(error);
        });
    }  
};

const scrollToEndOfPage =  () =>{
    console.log('scrollToEndOfPage');

    let d = document.documentElement;

    let scrollHeight = d.scrollHeight;

    let scrollTop = d.scrollTop;

    let clientHeight = d.clientHeight;

    let sumScrollTopClientHeight = Math.ceil(scrollTop + clientHeight);

    console.log(`scrollHeight: ${scrollHeight}`);
    console.log(`sumScrollTopClientHeight: ${sumScrollTopClientHeight}`);
    console.log(`scrollTop: ${scrollTop}`);
    console.log(`clientHeight: ${clientHeight}`);
    console.log(`clientHeight: ${clientHeight}`);
    console.log(`========================`);

    if (sumScrollTopClientHeight >= scrollHeight) {

       endOfThePage += 1;
        console.log(`Ilość scroll: ${endOfThePage}`);
        showLoading();
        getData();
    }

    
};

window.addEventListener('scroll', scrollToEndOfPage)
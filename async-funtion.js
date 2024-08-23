//EE7830CB-3C9B-4DD0-9F71-C493E149C57E
//const APIKey= 'EE7830CB-3C9B-4DD0-9F71-C493E149C57E'
//const URL = ('https://rest.coinapi.io/v1/exchanges')

//asi se conecta con el archivo html
document.addEventListener('DOMContentLoaded', async () => {
    const dataContainer = document.getElementById('data-container');
    const coin = async () => {
        try {
            const response = await fetch('https://rest.coinapi.io/v1/exchanges', {
                method: 'GET',
                headers: {
                    'X-CoinAPI-Key': 'EE7830CB-3C9B-4DD0-9F71-C493E149C57E'
                }
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);//si no encuentra nada la respuestaes esta
            }

            const data = await response.json(); //respuesta JSON

            data.forEach((item, index) => {
                const itemDiv = document.createElement('div');
                itemDiv.className = 'item';
                itemDiv.innerHTML = `
                    <h3>Item ${index + 1}</h3> 
                    <p><strong>Name:</strong> ${item.name}</p>
                    <p><strong>Volume 1 Day USD:</strong> ${item.volume_1day_usd}</p>
                    <p><strong>Volume 1 Hour USD:</strong> ${item.volume_1hrs_usd}</p>
                   
                `;
                dataContainer.appendChild(itemDiv);
            });
            
        } catch(error) {
            dataContainer.innerHTML = `<p>Error: ${error.message}</p>`;
        }
    };

    coin(); 
});




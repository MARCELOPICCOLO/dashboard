$(document).ready(function(){
    loadGrafico();
    loadgrafico2();
    loadtextos();
})

let dados = [{
            label: 'Veículos monitorados em 2021',
            data: [300, 450, 700, 1200, 1250, 1500],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',              
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',            
            ],
            borderWidth: 1
        }];

let ctx1;
let ctx2;

let dados2 =[700,500,800,1200,950];

function loadtextos(){
    txt = '<div>'
            +'<h5>veículos monitorados: '+dados2[4] +'</h5>'
            +'<h5>veículos de carga: '+parseInt((60*dados2[4])/100)+'</h5>'
            +'<h5>veículos pessoais: '+parseInt((25*dados2[4])/100)+'</h5>'
            +'<h5>veículos carros fortes: '+parseInt((15*dados2[4])/100)+'</h5>'
          +'</div>';

    $("#textos").html(txt); 
}

function reset(){
    var elemento = document.querySelector("#cv-veic");
    var elemento2 = document.querySelector("#cv-veic-years");
    elemento.parentNode.removeChild(elemento);
    elemento2.parentNode.removeChild(elemento2);

    var txt = '<canvas id="cv-veic"></canvas>';
    var txt2 = '<canvas id="cv-veic-years"></canvas>';
    $("#grafP").html(txt); 
    $("#grafP2").html(txt2); 
}

function loadGrafico(){
   
    ctx1 = document.getElementById('cv-veic').getContext('2d');
    
        var myChart = new Chart(ctx1, {
            type: 'line',
            data: {
                labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul','Ago','Set','Out','Nov','Dez'],
                datasets: dados,
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });

}


$("#calc").click(function(){
    dados[0].data[5] += parseInt($("#valor").val(), 10);
    dados2[4]+=parseInt($("#valor").val(), 10);
    reset();
    loadGrafico();
    loadgrafico2();
    loadtextos();
})


function loadgrafico2(){

    ctx2 = document.getElementById('cv-veic-years').getContext('2d');

    var myChart = new Chart(ctx2, {
        type: 'bar',
        data: {
            labels: ['2017','2018','20190','2020','2021'],
            datasets: [{
                label: 'Veículos monitorados anualmente',
                data: dados2,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',              
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',          
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

}






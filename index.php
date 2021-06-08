<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/3.2.1/chart.min.js">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css?v=3">
    
    <title>DashBoard</title>
</head>
<body>
  <header class="text-center text-white">
      <h3>Security E&I</h3>
  </header>
  <main class="section">
      <div class="lateral">
            <div class="form-group text-white">
            <label for="exampleInputPassword1">Entrada do mês</label>
            <input type="text" class="form-control" id="valor">
            <button type="button" class="btn btn-primary mt-3" id="calc">Lançar Contrato</button>
        </div>
      </div>
      <div class="painel">
            <div class="grafico" id="grafP">
                <canvas id="cv-veic"></canvas>                               
            </div>

            <div class="grafico" id="grafP2">
                <canvas id="cv-veic-years"></canvas>
            </div>

            <div class="textos" id="textos">
                
            </div>

        </div>
  </main>
    
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <script src="chart.js?v=2"></script>
</body>
</html>

<!--
     <div class="col-2 bg-dark text-white p-3">
           
           </div>
           <div class="col">
               <div class="row d-flex wrap">
                    <div class="col mt-3">
                            <canvas id="cv-veic"></canvas>
                    </div>                      
                    <div class="col mt-3">
                            <canvas id="cv-veic-years"></canvas>
                    </div>
                </div>
                <div class="row mt-4">
                    <div class="col mt-3" >
                            <canvas id="cv-services"></canvas>
                    </div>

                    <div class="col mt-4">
                             
                    </div>
                </div>

           </div>
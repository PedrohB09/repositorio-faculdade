<?php

//Percorrer array
$nomes = ["Caio", "Marcos", "Diego"];

foreach ($nomes as $nome) {
    echo $nome . "<br>";
};

//Percorrer array associativo
$notasAtividades = [
    "Caio" => 10, 
    "Marcos" => 8, 
    "Diego" => 9
];

foreach ($notasAtividades as $nome => $valor) {
    echo $nome . "nota " . $valor. "<br>";
};

//Percorrer dois arrays associativos
$notasAtividades = [
    "Caio" => 9, 
    "Marcos" => 8, 
    "Diego" => 10
];

$notasProvas = [
    "Caio" => 10, 
    "Marcos" => 8, 
    "Diego" => 9
];
foreach ($notasAtividades as $nome => $valor) {
    $prova = $notasProvas[$nome];

    echo $nome . " nota da prova: " . $prova. "<br>";
    echo $nome . " nota da atividade: " . $valor. "<br>";

};
?>
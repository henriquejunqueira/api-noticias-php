<?php
header('Content-Type: application/json');
error_reporting(E_ALL);
ini_set('display_errors', 1);

$url = 'https://gnews.io/api/v4/top-headlines?country=br&token=25e25dbe041f04f2d5ea4b3782528e33';

// Inicializa o cURL
$ch = curl_init();

// Configurações do cURL
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

// Executa a requisição e obtém a resposta
$response = curl_exec($ch);

// Fecha a conexão cURL
curl_close($ch);

// Decodifica a resposta JSON
$newsData = json_decode($response, true);

// Verifica se há artigos disponíveis
if (isset($newsData['articles'])) {
    echo json_encode($newsData['articles']); // Retorna os artigos em formato JSON
} else {
    echo json_encode(['message' => 'Nenhuma notícia encontrada.']);
}
?>

document.getElementById('download-btn').addEventListener('click', function() {
    // Substitua o URL abaixo pelo caminho do seu ficheiro
    const fileUrl = './src/arquivos/SEU_PORTIFOLIO.zip';
    
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = './SEU_PORTIFOLIO.zip';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    alert('O seu download começou!');
});

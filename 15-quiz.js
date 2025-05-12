document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('diagnosticForm');
    const evaluateBtn = document.getElementById('evaluateBtn');
    const resultsDiv = document.getElementById('results');
    const scoreSpan = document.getElementById('score');
    const feedbackP = document.getElementById('feedback');
    const generatePdfBtn = document.getElementById('generatePdfBtn');
    let resultsChart = null;

    evaluateBtn.addEventListener('click', evaluateAnswers);
    generatePdfBtn.addEventListener('click', generatePDF);

    function evaluateAnswers() {
        let score = 0;
        const totalQuestions = 5;
        const answers = [];

        for (let i = 1; i <= totalQuestions; i++) {
            const selectedOption = document.querySelector(`input[name="q${i}"]:checked`);
            if (selectedOption) {
                const points = parseInt(selectedOption.value);
                score += points;
                answers.push(points);
            } else {
                answers.push(0);
            }
        }

        scoreSpan.textContent = score;
        resultsDiv.classList.remove('hidden');

        // Mostrar retroalimentación
        if (score === totalQuestions) {
            feedbackP.textContent = "¡Super!";
        } else if (score >= totalQuestions * 0.7) {
            feedbackP.textContent = "¡Buen trabajo!";
        } else if (score >= totalQuestions * 0.4) {
            feedbackP.textContent = "Meh its ok";
        } else {
            feedbackP.textContent = "Damn...";
        }

        renderChart(answers);
    }

    function renderChart(answers) {
        const ctx = document.getElementById('resultsChart').getContext('2d');
        
        if (resultsChart) {
            resultsChart.destroy();
        }

        resultsChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Pregunta 1', 'Pregunta 2', 'Pregunta 3', 'Pregunta 4', 'Pregunta 5'],
                datasets: [{
                    label: 'Puntos obtenidos',
                    data: answers,
                    backgroundColor: [
                        'rgba(54, 162, 235, 0.7)',
                        'rgba(54, 162, 235, 0.7)',
                        'rgba(54, 162, 235, 0.7)',
                        'rgba(54, 162, 235, 0.7)',
                        'rgba(54, 162, 235, 0.7)'
                    ],
                    borderColor: [
                        'rgba(54, 162, 235, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(54, 162, 235, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 1,
                        ticks: {
                            stepSize: 1
                        }
                    }
                }
            }
        });
    }

    function generatePDF() {
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();

        doc.setFontSize(20);
        doc.text('Resultados', 105, 20, { align: 'center' });

        doc.setFontSize(16);
        doc.text(`Puntuación obtenida: ${scoreSpan.textContent}/5`, 105, 40, { align: 'center' });

        doc.setFontSize(12);
        const feedbackLines = doc.splitTextToSize(feedbackP.textContent, 180);
        doc.text(feedbackLines, 105, 50, { align: 'center' });

        const chartCanvas = document.getElementById('resultsChart');
        const chartImage = chartCanvas.toDataURL('image/png');
        doc.addImage(chartImage, 'PNG', 30, 70, 150, 80);

        const today = new Date();
        doc.setFontSize(10);
        doc.text(`Generado el: ${today.toLocaleDateString()}`, 10, 160);

        doc.save('diagnostico-programacion-web.pdf');
    }
});
const quizQuestions = [
    {
        question: "¿Cuál es el principal gas de efecto invernadero?",
        options: ["CO<sub>2</sub>", "O<sub>2</sub>", "N<sub>2</sub>", "CH<sub>4</sub>"],
        answer: 0,
        image: "https://services.meteored.com/img/article/calentamiento-global-capturar-co2-del-aire-es-o-no-la-gran-solucion-cambio-climatico-1680997065019_1280.jpg"
    },
    {
        question: "¿Qué porcentaje de especies se estima que están en peligro de extinción?",
        options: ["10%", "25%", "50%", "75%"],
        answer: 1,
        image: "https://larepublica.cronosmedia.glr.pe/original/2022/02/23/6216c6aa4857812e2f6b89a8.jpg"
    },
    {
        question: "¿Cuál fue el año del Acuerdo de París?",
        options: ["2010", "2015", "2020", "2022"],
        answer: 1,
        image: "https://www.smasa.net/wp/wp-content/uploads/2015/12/COP21-LOGO.jpg"
    },
    {
        question: "¿Qué fenómeno está relacionado con el aumento del nivel del mar?",
        options: ["Deshielo de glaciares", "Volcanes", "Terremotos", "Tsunamis"],
        answer: 0,
        image: "https://media.ambito.com/p/282b1c922476b06ec662bc13a3d49989/adjuntos/239/imagenes/041/067/0041067991/deshielojpg.jpg"
    },
    {
        question: "¿Qué país se comprometió a reducir sus emisiones de carbono a cero para 2050?",
        options: ["Estados Unidos", "Reino Unido", "China", "India"],
        answer: 1,
        image: "https://oficinista.mx/wp-content/uploads/2024/08/3372.jpg"
    }
];

function createQuiz() {
    const quizContainer = document.getElementById('quiz-container');
    quizQuestions.forEach((q, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('col-md-6'); // Columna para la pregunta y respuestas
        questionDiv.innerHTML = `
            <h5>${q.question}</h5>
            ${q.options.map((option, i) => `
                <label><input type="radio" name="question${index}" value="${i}"> ${option}</label><br>
            `).join('')}
            <img src="${q.image}" class="quiz-image" alt="Imagen para la pregunta ${index + 1}"/>
        `;
        quizContainer.appendChild(questionDiv);
    });
}

document.getElementById('submit-quiz').addEventListener('click', function () {
    let score = 0;
    quizQuestions.forEach((q, index) => {
        const selected = document.querySelector(`input[name="question${index}"]:checked`);
        const questionDiv = document.getElementById('quiz-container').children[index];
        const quizImage = questionDiv.querySelector('.quiz-image');

        if (selected) {
            if (parseInt(selected.value) === q.answer) {
                score++;
                selected.parentNode.classList.add('correct');
            } else {
                selected.parentNode.classList.add('incorrect');
                const correctOption = questionDiv.querySelector(`input[value="${q.answer}"]`);
                if (correctOption) {
                    correctOption.parentNode.classList.add('correct');
                }
            }
            quizImage.style.display = 'block'; // Mostrar la imagen
        }
    });
    document.getElementById('quiz-results').innerText = `Tu puntaje es: ${score} de ${quizQuestions.length}`;
});

createQuiz();
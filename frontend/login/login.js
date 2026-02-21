const form = document.getElementById('loginForm');
const errorMessage = document.getElementById('errorMessage');

form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        // Futuramente será integração com API
        const response = await fakeLoginRequest(email, password);

        if (response.success) {
            alert('Login realizado com sucesso!');
            window.location.href = "../home/home.html";
        } else {
            errorMessage.textContent = response.message;
        }

    } catch (error) {
        errorMessage.textContent = "Erro ao conectar com o servidor.";
    }
});

function fakeLoginRequest(email, password) {
    return new Promise((resolve) => {
        setTimeout(() => {
            if (email === "admin@email.com" && password === "123456") {
                resolve({ success: true });
            } else {
                resolve({ success: false, message: "Credenciais inválidas." });
            }
        }, 1000);
    });
}
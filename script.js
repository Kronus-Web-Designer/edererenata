// BANCO DE DADOS DE CONVIDADOS
let convidados = [
    { id: 1, nome: "Brendo Kenedy Marques Martins", confirmado: false },
    { id: 2, nome: "Amanda Araujo Cavalheiro", confirmado: false },
    { id: 3, nome: "Mara Alice", confirmado: false },
    { id: 4, nome: "Aldimar Eustaquio", confirmado: false },
    { id: 5, nome: "Hemily Marcela", confirmado: false },
    { id: 6, nome: "Tania Lourdes", confirmado: false },
    { id: 7, nome: "Darlan Martins", confirmado: false },
    { id: 8, nome: "Jesiel Caleb", confirmado: false },
    { id: 9, nome: "Geraldo Lima", confirmado: false },
    { id: 10, nome: "Valeria Lima", confirmado: false },
    { id: 11, nome: "Davi Lima", confirmado: false },
    { id: 12, nome: "Angela Lima", confirmado: false },
    { id: 13, nome: "Milton Lima", confirmado: false },
    { id: 14, nome: "Elizeth Martins (Tia Zete)", confirmado: false },
    { id: 15, nome: "Carlos Antonio", confirmado: false },
    { id: 16, nome: "Aparecida", confirmado: false },
    { id: 17, nome: "Diego e Namorada", confirmado: false },
    { id: 18, nome: "Sueli", confirmado: false },
    { id: 19, nome: "Selma e Marido", confirmado: false },
    { id: 20, nome: "Adriana, Carlos e Emanuela", confirmado: false },
    { id: 21, nome: "Ana e Igor", confirmado: false },
    { id: 22, nome: "Vanderley, Marilene e Lorrane", confirmado: false },
    { id: 23, nome: "Aldemir e Glacia", confirmado: false },
    { id: 24, nome: "Marlei e Edgar", confirmado: false },
    { id: 25, nome: "Gleysson", confirmado: false },
    { id: 26, nome: "Ana Lucia", confirmado: false },
    { id: 27, nome: "Renata e Marcelo", confirmado: false },
    { id: 28, nome: "Camila e Mãe do Marcelo", confirmado: false },
    { id: 29, nome: "Wanderson Kenedy", confirmado: false },
    { id: 30, nome: "Claudio Antonio e Juliana", confirmado: false },
    { id: 31, nome: "Neliane", confirmado: false },
    { id: 32, nome: "Giovanna", confirmado: false },
    { id: 33, nome: "Ana Livia e Lucas", confirmado: false },
    { id: 34, nome: "Rosangela e Valdir", confirmado: false },
    { id: 35, nome: "Paulo, Aline e Celine", confirmado: false },
    { id: 36, nome: "Pablo Faria", confirmado: false },
    { id: 37, nome: "Carol Faria", confirmado: false },
    { id: 38, nome: "Mario Lucio", confirmado: false },
    { id: 39, nome: "Elsa Faria", confirmado: false },
    { id: 40, nome: "Carmem Pereira", confirmado: false },
    { id: 41, nome: "Uadson Faria", confirmado: false },
    { id: 42, nome: "Roberta Faria e Filha", confirmado: false },
    { id: 43, nome: "Diane", confirmado: false },
    { id: 44, nome: "Leonardo MAM", confirmado: false },
    { id: 45, nome: "Rafael Farial", confirmado: false },
    { id: 46, nome: "Daiane Faria e Filho", confirmado: false },
    { id: 47, nome: "Rodrigo Faria", confirmado: false },
    { id: 48, nome: "Claudia Faria", confirmado: false },
    { id: 49, nome: "Henrique Faria", confirmado: false },
    { id: 50, nome: "Julia Faria", confirmado: false },
    { id: 51, nome: "Edinaldo Faria", confirmado: false },
    { id: 52, nome: "Leandro, Daniele e 2 Filhos", confirmado: false },
    { id: 53, nome: "Bruno Faria e Esposa", confirmado: false },
    { id: 54, nome: "Valdinei e Esposa", confirmado: false },
    { id: 55, nome: "Liberio e Esposa", confirmado: false },
    { id: 56, nome: "Arnaldo e Eusane", confirmado: false },
    { id: 57, nome: "Tina MAM", confirmado: false },
    { id: 58, nome: "Leandro, Lais MAM e 2 Filhos", confirmado: false },
    { id: 59, nome: "Pedro, Vania e 2 Filhos", confirmado: false },
    { id: 60, nome: "Kathlen, Marido e 2 Filhos", confirmado: false },
    { id: 61, nome: "Julio MAM", confirmado: false },
    { id: 62, nome: "Antonio MAM, Esposa e 2 Filhos", confirmado: false },
    { id: 63, nome: "Lucas e Zuma Figueiredo", confirmado: false },
    { id: 64, nome: "Junior e Cristiane", confirmado: false },
    { id: 65, nome: "Marli e Geraldo", confirmado: false },
    { id: 66, nome: "Graziele, Luiz e 2 Filhos", confirmado: false },
    { id: 67, nome: "Teresa Pereira", confirmado: false },
    { id: 68, nome: "Thiago Pereira e Hemily Pereira", confirmado: false },
    { id: 69, nome: "Vanda Maria", confirmado: false },
    { id: 70, nome: "Lucas Pontelo, Julia Pereira e Filhos", confirmado: false },
    { id: 71, nome: "Mara Alice, Diovane e Marcele", confirmado: false },
    { id: 72, nome: "Edir, Evaldo e Edivaldo", confirmado: false },
    { id: 73, nome: "Ricardo e Ana Paula", confirmado: false },
    { id: 74, nome: "Clayton Azevedo", confirmado: false },
    { id: 75, nome: "Layston Azevedo e Esposa", confirmado: false },
    { id: 76, nome: "Mariele, Marido e 2 Filhos", confirmado: false },
    { id: 77, nome: "Nizia", confirmado: false },
    { id: 78, nome: "Douglas", confirmado: false },
    { id: 79, nome: "Marlene", confirmado: false },
    { id: 80, nome: "Marcio (Tio)", confirmado: false },
    { id: 81, nome: "Adriana Jaba", confirmado: false },

];

let convidadoSelecionado = null;

function abrirModalConfirmacao() {
    document.getElementById('confirmationModal').style.display = 'block';
    document.getElementById('nameInput').focus();
}

function fecharModal() {
    document.getElementById('confirmationModal').style.display = 'none';
    document.getElementById('nameInput').value = '';
    document.getElementById('searchMode').style.display = 'block';
    document.getElementById('confirmationMode').style.display = 'none';
    document.getElementById('successMessage').style.display = 'none';
    document.getElementById('errorMessage').style.display = 'none';
    convidadoSelecionado = null;
}

function buscarConvidados() {
    const termo = document.getElementById('nameInput').value.toLowerCase();
    const guestList = document.getElementById('guestList');
    
    if (termo.trim() === '') {
        guestList.innerHTML = '';
        return;
    }

    const resultados = convidados.filter(c => 
        c.nome.toLowerCase().includes(termo) && !c.confirmado
    );

    if (resultados.length === 0) {
        guestList.innerHTML = '<div class="no-results">Nenhum convidado encontrado</div>';
        return;
    }

    guestList.innerHTML = resultados.map(convidado => `
        <div class="guest-item" onclick="selecionarConvidado(${convidado.id}, '${convidado.nome}')">
            ${convidado.nome}
        </div>
    `).join('');
}

function selecionarConvidado(id, nome) {
    convidadoSelecionado = { id, nome };
    document.getElementById('searchMode').style.display = 'none';
    document.getElementById('confirmationMode').style.display = 'block';
    document.getElementById('selectedGuestName').textContent = nome;
}

function voltarBusca() {
    document.getElementById('searchMode').style.display = 'block';
    document.getElementById('confirmationMode').style.display = 'none';
    document.getElementById('nameInput').focus();
    convidadoSelecionado = null;
}

function confirmarPresenca() {
    if (!convidadoSelecionado) return;

    const convidado = convidados.find(c => c.id === convidadoSelecionado.id);
    if (convidado) {
        convidado.confirmado = true;
    }

    const templateParams = {
        nome: convidadoSelecionado.nome
    };

    emailjs.send("service_ubn2rzp", "template_k87vzbj", templateParams)
        .then(function(response) {
            document.getElementById('successMessage').textContent = 
                `✅ Presença confirmada com sucesso! Recebemos sua confirmação.`;
            document.getElementById('successMessage').style.display = 'block';
            document.getElementById('confirmationMode').style.display = 'none';

            setTimeout(() => {
                fecharModal();
            }, 3000);
        }, function(error) {
            document.getElementById('errorMessage').textContent = 
                '❌ Erro ao enviar confirmação. Tente novamente.';
            document.getElementById('errorMessage').style.display = 'block';
        });
}

function copiarPix() {
    const chave = "553191564030";
    navigator.clipboard.writeText(chave);
    alert("Chave PIX copiada!");
}

// COUNTDOWN
function atualizarContagem() {
    const dataDoEvento = new Date('2026-04-11T16:30:00').getTime();
    const agora = new Date().getTime();
    const diferenca = dataDoEvento - agora;

    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

    document.getElementById('dias').textContent = dias;
    document.getElementById('horas').textContent = horas;
    document.getElementById('minutos').textContent = minutos;
    document.getElementById('segundos').textContent = segundos;
}

atualizarContagem();
setInterval(atualizarContagem, 1000);

// Fechar modal ao clicar fora
window.onclick = function(event) {
    const modal = document.getElementById('confirmationModal');
    if (event.target == modal) {
        fecharModal();
    }
}


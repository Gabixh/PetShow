const form = document.querySelector('#insert form');
const tabelaOutput = document.getElementById('table');
let id = 1;

form.addEventListener('submit', function (e) {
    e.preventDefault(); 

    const nomePet = document.getElementById('PetName').value;
    const racaPet = document.getElementById('PetRace').value;
    const nomeDono = document.getElementById('Owner').value;
    const telefone = document.getElementById('Phone').value;

    // Criar a tabela caso seja o primeiro cadastro
    if (tabelaOutput.querySelector('table') === null) {
        tabelaOutput.innerHTML = `
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome do Pet</th>
                        <th>Raça</th>
                        <th>Nome do Dono</th>
                        <th>Telefone</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                </tbody>
            </table>
        `;
    }

    const tabelaBody = tabelaOutput.querySelector('tbody');

    // Criar linha na tabela
    const linha = document.createElement('tr');
    linha.innerHTML = `
        <td>${id++}</td>
        <td>${nomePet}</td>
        <td>${racaPet}</td>
        <td>${nomeDono}</td>
        <td>${telefone}</td>
        <td class="delete-btn">🗑️</td>
    `;

    tabelaBody.appendChild(linha);

    // Adicionar funcionalidade de exclusão
    linha.querySelector('.delete-btn').addEventListener('click', function () {
        linha.remove();

        // Remover a tabela se ficar vazia
        if (tabelaBody.children.length === 0) {
            tabelaOutput.innerHTML = `
                <p id="table">
                    Nenhum agendamento encontrado. Preencha o formulário ao lado para criar um!
                </p>
            `;
        }
    });

    // Resetar formulário
    form.reset();
});



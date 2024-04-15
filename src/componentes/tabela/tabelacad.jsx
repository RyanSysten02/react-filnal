import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import { Button, Alert } from 'react-bootstrap';
import './style.css';

export default function TableCadastro() {
    const [listaCadastros, setListaCadastros] = useState([]);
    const [showSuccess, setShowSuccess] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("http://localhost:4000/motorista");
                const data = await response.json();
                setListaCadastros(data);
            } catch (error) {
                console.error("Erro ao buscar os dados:", error);
            }
        };

        fetchData();
    }, []);

    async function excluirCadastro(id) {
        try {
            const response = await fetch("http://localhost:4000/motorista", {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ id: id })
            });

            if (!response.ok) {
                throw new Error('Erro ao excluir o cadastro');
            }

            // Remova o cadastro da lista apenas se a solicitação for bem-sucedida
            const novaLista = listaCadastros.filter(item => item.id !== id);
            setListaCadastros(novaLista);

            // Mostra a mensagem de sucesso
            setShowSuccess(true);

            // Esconde a mensagem de sucesso depois de 3 segundos
            setTimeout(() => setShowSuccess(false), 3000);
        } catch (error) {
            console.error("Erro ao excluir o cadastro:", error);
        }
    }

    return (
        <div className='tabela'>
            {showSuccess && <Alert variant="success">Cadastro excluído com sucesso!</Alert>}
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Nome</th>
                        <th>CPF</th>
                        <th>Cnh</th>
                        <th>Data de Nascimento</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {listaCadastros.map((item, index) => {
                        return (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{item.nome}</td>
                                <td>{item.cpf}</td>
                                <td>{item.cnh}</td>
                                <td>{item.dnasc}</td>
                                <td>
                                    <Button variant="danger" onClick={() => { excluirCadastro(item.id) }}>Excluir</Button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </Table>
        </div>
    );
}

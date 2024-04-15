import React from 'react';
import Table from 'react-bootstrap/Table';
import { Button } from 'react-bootstrap';
import './style.css';

export default function TableCadastro(props) {
    function excluirCadastro(cpf){
        const novaLista = props.listaCadastros.filter(item => item.cpf !== cpf);
        props.setListaCadastros(novaLista);
    }
    
    function editarCadastro(cpf){
        const cadastroSelecionado = props.listaCadastros.find(item => item.cpf === cpf);
        props.setCadastroSelecionado(cadastroSelecionado);
        props.setExibirFormulario(true);
    }
    
    return (
        <div className='tabela'>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nome</th>
                        <th>CPF</th>
                        <th>Data de Nascimento</th>
                        <th>Celular</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {props.listaCadastros?.map((item, index) => {
                        return (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{item.cpf}</td>
                                <td>{item.nome}</td>
                                <td>{item.dtNasc}</td>
                                <td>{item.celular}</td>
                                <td>
                                    <Button variant="danger" onClick={() => {excluirCadastro(item.cpf)}}>Excluir</Button>
                                    <Button variant="primary" onClick={() => {editarCadastro(item.cpf)}}>Editar</Button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </Table>
        </div>
    );
}
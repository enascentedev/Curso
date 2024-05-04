import React from 'react';

// Array de objetos com informações dos usuários
const users = [
  { name: "João Silva", age: 28, job: "Engenheiro" },
  { name: "Maria Fernanda", age: 17, job: "Estudante" },
  { name: "Carlos Andrade", age: 34, job: "Médico" }
];

// Componente UserDetails para exibir as informações de cada usuário
function UserDetails({ user }) {
  return (
    <div>
      <p>Nome: {user.name}</p>
      <p>Idade: {user.age}</p>
      <p>Profissão: {user.job}</p>
      <p>{user.age >= 18 ? "Pode tirar carteira de habilitação." : "Não pode tirar carteira de habilitação ainda."}</p>
    </div>
  );
}

// Componente principal que renderiza UserDetails para cada usuário
function App() {
  return (
    <div>
      {users.map(user => (
        <UserDetails key={user.name} user={user} />
      ))}
    </div>
  );
}

export default App;

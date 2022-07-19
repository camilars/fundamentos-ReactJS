import React, { useState, useEffect } from "react";
// import "./styles.css";
import { Card } from "../../components/Card";
import { HomeWrapper, Header, Input, Button } from "./styles";

export function Home() {
  const [studentName, setStudentName] = useState("");
  const [students, setStudents] = useState([]);
  const [user, setUser] = useState({ name: "", avatar: "" });

  function handleAddStudent() {
    const newStudent = {
      name: studentName,
      time: new Date().toLocaleTimeString("pt-br", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      }),
    };
    setStudents((prevState) => [newStudent, ...prevState]);
  }

  useEffect(() => {
    fetch("https://api.github.com/users/camilars")
      .then((response) => response.json())
      .then((data) => {
        setUser({
          name: data.name,
          avatar: data.avatar_url,
        });
      });
    console.log("use useEffect foi chamado!!");
  }, [students]);

  return (
    <HomeWrapper>
      <Header>
        <h1>Lista de presença</h1>
        <div>
          <strong>{user.name}</strong>
          <img src={user.avatar} alt="Foto de perfil" />
        </div>
      </Header>
      <Input
        borderColor="#758bfd"
        type="text"
        placeholder="Digite seu nome"
        onChange={(e) => setStudentName(e.target.value)}
      />
      <Button type="button" onClick={handleAddStudent} bgColor="#758bfd">
        Adicionar
      </Button>
      {students.map((student) => (
        <Card key={student.time} name={student.name} time={student.time} />
      ))}
    </HomeWrapper>
  );
}

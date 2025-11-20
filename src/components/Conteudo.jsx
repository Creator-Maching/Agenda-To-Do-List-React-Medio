import { useState, useEffect } from 'react';

export default function Conteudo() {

  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState(() => {
  const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  function addTask(e) {
    e.preventDefault();
    if (task.trim() === "") return;

    setTasks([...tasks, task]);
    setTask("");
  }

  function removeTask(index) {
    setTasks(tasks.filter((_, i) => i !== index));
  }

  return (
    <main 
    style={{ 
      padding: "20px",
      textAlign: "center"
      }}>
      <form onSubmit={addTask}>
        <input 
          type="text"
          placeholder="Digite uma tarefa..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
          style={{
            padding: "10px",
            width: "250px",
            fontSize: "16px",
            marginRight: "10px",
            borderRadius: "8px"
          }}
        />
        <button type="submit" 
        style={{
          padding: "10px",
          fontSize: "16px",
          cursor: "pointer",
          backgroundColor: "orange",
          borderRadius: "8px"
        }}>Adicionar</button>
      </form>

      <ul style={{ 
        marginTop: "20px",
        listStyle: "none",
        padding: 0,
        display: "flex",
        flexWrap: "wrap",          // 🔥 manda quebrar para o LADO
        justifyContent: "center",
        gap: "10px",               // espaço entre as tarefas
        maxHeight: "60vh",         // altura limitada (não encosta no header/footer)
        overflowY: "hidden",       // sem scroll vertical
        overflowX: "auto",         // scroll horizontal se precisar
      }}>
        {tasks.map((t, index) => (
          <li 
            key={index}
            style={{
              background: "#eee",
              margin: "10px auto",
              padding: "10px",
              width: "250px",
              display: "flex",
              justifyContent: "space-between",
              borderRadius: "5px"
            }}
          >
            {t}

            <button 
              onClick={() => removeTask(index)}
              style={{
              background: "red",
              color: "white",
              borderRadius: "5px" 
            }}>
              X
            </button>
          </li>
        ))}
      </ul>
    </main>
  );
}

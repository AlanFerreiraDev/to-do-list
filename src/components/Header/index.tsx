import styles from './Header.module.css'
import todoLogo from '../../assets/todoLogo.svg'

import { AiOutlinePlusCircle } from 'react-icons/ai'
import { ChangeEvent, FormEvent, useState } from 'react'

interface Props {
  onAddTask: (taskTitle: string) => void
}

export const Header = ({ onAddTask }: Props) => {
  const [title, setTitle] = useState('')

  function handleSubmit(event: FormEvent) {
    event.preventDefault()

    onAddTask(title)
    setTitle('')
  }

  function onChangeTitle(event: ChangeEvent<HTMLInputElement>) {
    setTitle(event.target.value)
  }

  return (
    <header className={styles.header}>
      <img
        src={todoLogo}
        alt="Logotipo RocketSeat foguete roxo e legenda todo"
      />

      <form className={styles.newTaskForm} onSubmit={handleSubmit}>
        <input
          placeholder="Adicione uma nova tarefa"
          onChange={onChangeTitle}
          value={title}
        />
        <button>
          Criar
          <AiOutlinePlusCircle size={20} />
        </button>
      </form>
    </header>
  )
}

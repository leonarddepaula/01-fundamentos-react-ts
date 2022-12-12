import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar"

import styles from "./App.module.css";

import "./global.css";

//author: { avatar_url: "", name: "", role: ""}
// publishedAt: Date
// content: String

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/carolineviana.png',
      name: 'Caroline Viana',
      role: 'Programadora De Sistemas'
    },
    content: [
      {type: 'paragraph', content: 'Olá tudo bem? 👋',},  

      {type: 'paragraph', content: 'Gostaria de Saber sobre vagas disponiveis?😊',},

     {type: 'paragraph', content: '👉 Este é o meu' },
     {type:'link', content: "https://github.com/carolineviana"} 
                
    ],
    publishedAt: new Date('2022-12-01 12:06:05'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/maykbrito.png',
      name: 'Mayk Brito',
      role: 'Educador'
    },
    content: [
      {type: 'paragraph', content: 'Olá tudo bem? 👋',},

      {type: 'paragraph', content: 'vagas disponiveis?😊 Eu QUERO',},

     {type: 'paragraph', content: '👉 Este é o meu' },
     {type:'link', content: "https://github.com/maykbrito"} 
                
    ],
    publishedAt: new Date('2022-12-01 12:20:05'),
  },
]

export function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
         {posts.map(post => {
          return (
            <Post 
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
          )
         })}
        </main>
      </div>
    </>
  );
}

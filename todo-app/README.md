 Gestore Todo con Dark Mode

Questo progetto è una semplice applicazione To-Do List sviluppata con **React** e **Material UI**, con la gestione di **todo aperti** e **todo completati**, supporto per la **modalità Dark Mode** e navigazione tra pagine tramite **React Router**.

## Caratteristiche principali
- **Gestione dei todo aperti**: Gli utenti possono aggiungere nuovi todo e visualizzare la lista di quelli ancora da completare.
- **Gestione dei todo completati**: Una volta completati, i todo vengono spostati in una pagina separata.
- **Dark Mode**: Gli utenti possono attivare/disattivare la modalità dark con un pulsante.
- **Snackbar**: Notifiche visive vengono mostrate per confermare l'aggiunta e il completamento dei todo.
- **Navigazione tra pagine**: Usa **React Router** per spostarsi tra i todo aperti e completati.

## Struttura del progetto

Ecco un esempio di file README.md per il tuo progetto in formato Markdown:

markdown
Copy code
# Gestore Todo con Dark Mode

Questo progetto è una semplice applicazione To-Do List sviluppata con **React** e **Material UI**, con la gestione di **todo aperti** e **todo completati**, supporto per la **modalità Dark Mode** e navigazione tra pagine tramite **React Router**.

## Caratteristiche principali
- **Gestione dei todo aperti**: Gli utenti possono aggiungere nuovi todo e visualizzare la lista di quelli ancora da completare.
- **Gestione dei todo completati**: Una volta completati, i todo vengono spostati in una pagina separata.
- **Dark Mode**: Gli utenti possono attivare/disattivare la modalità dark con un pulsante.
- **Snackbar**: Notifiche visive vengono mostrate per confermare l'aggiunta e il completamento dei todo.
- **Navigazione tra pagine**: Usa **React Router** per spostarsi tra i todo aperti e completati.

## Struttura del progetto

src/ │ ├── components/ │ ├── Header.tsx // Header con navigazione e dark mode │ ├── Snackbar.tsx // Snackbar per notificare le azioni │ ├── TodoForm.tsx // Form per aggiungere nuovi todo │ ├── TodoItem.tsx // Componente che rappresenta un singolo todo │ ├── TodoList.tsx // Lista dei todo │ ├── context/ │ ├── TodoContext.tsx // Contesto per gestire i todo aperti e completati │ └── ThemeContext.tsx // Contesto per gestire il tema light/dark │ ├── pages/ │ ├── OpenTodosPage.tsx // Pagina per i todo aperti │ └── CompletedTodosPage.tsx// Pagina per i todo completati │ ├── App.tsx // Configurazione del router e layout generale └── index.tsx // Bootstrap dell'applicazione

## Requisiti

- **Node.js** (v16+)
- **npm** o **yarn**

## Installazione

1. Clona questo repository:
   ```bash
   git clone https://github.com/tuo-username/todo-dark-mode.git
   cd todo-dark-mode

2. Installa le dipendenze del progetto:
    ```bash
    npm install

3. Avvia l'applicazione in modalità sviluppo:
    ```bash
    npm start

L'app sarà disponibile su `http://localhost:3000`.

## Librerie utilizzate

- **React**: Libreria frontend per la costruzione di interfacce utente.
- **Material UI**: Libreria di componenti React per creare interfacce moderne e responsive.
- **React Router**: Libreria per gestire la navigazione tra le pagine.
- **React Context API**: Per la gestione globale dello stato, sia per i todo che per il tema.

## Funzionalità

1. **Aggiunta di todo**  
   Gli utenti possono aggiungere un nuovo todo dalla pagina principale. Il todo viene automaticamente aggiunto alla lista dei todo da completare.

2. **Completamento e riapertura dei todo**  
   Gli utenti possono marcare un todo come completato, il quale verrà spostato nella pagina dei todo completati. Allo stesso modo, un todo completato può essere riaperto e spostato di nuovo nella lista dei todo da completare.

3. **Modalità Dark/Light**  
   Cliccando sull'icona del tema nell'header, gli utenti possono passare dalla modalità chiara alla modalità scura e viceversa. L'icona cambia dinamicamente in base al tema attivo.

4. **Navigazione tra le pagine**  
   L'utente può navigare tra la lista dei todo da completare e quella dei todo completati usando i link nella barra di navigazione.

## Screenshot

### Modalità Light

![Modalità Light](screenshot-light.png)

### Modalità Dark

![Modalità Dark](screenshot-dark.png)
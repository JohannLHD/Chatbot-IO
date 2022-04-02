const Chat = class {
  constructor() {
    this.el = document.querySelector('#app');
  }

  renderHeader() {
    return `
      <nav class="navbar navbar-dark bg-dark">
        <div class="container-fluid">
          <span class="navbar-brand mb-0 h1">Chatbot</span>
        </div>
      </nav>
    `;
  }

  renderContacts() {
    return `
      <div id="contacts" class="row mt-4">
        <div class="col-12">
          ${this.renderContact()}
        </div> 
      </div>
    `;
  }

  renderContact() {
    return `
      <div class = "row">
        <div class="col-4">
          <img src="https://images.unsplash.com/photo-1608889175123-8ee362201f81?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" 
          class="img-fluid rounded-circle border border-2 border-danger" 
          alt="...">
        </div>  
        <div class="col-8 pt-1">
          <span class="h5">Deadpool</span>
          <p class="text-muted fs-6">Connected</p>
        </div>
      </div>
    `;
  }

  renderMessages() {
    return `
      <div id="messages" class="row">
        <div class="col-12" id = "box-messages">
          ${this.renderMessageReceived()}
        </div>
      </div>
    `;
  }

  renderMessageReceived() {
    return `
      <div class="messages--message--received row mt-2">
        <div class="col-6">
          <div class="card">
            <h5 class="card-header">Deadpool</h5>
            <div class="card-body">
              <h5 class="card-title">22/01/22 - 11:33</h5>
              <p class="card-text">Hello how are you ?</p>
            </div>
          </div>
        </div>
        <div class="col-6"></div>
      </div>
    `;
  }

  renderMessageSent(text) {
    return `
      <div class="messages--message-send row mt-2">
        <div class="col-6"></div>
        <div class="col-6">
          <div class="card">
            <h5 class="card-header">Johann</h5>
            <div class="card-body">
              <p class="card-title">${this.renderCurrentTime()}</p>
              <p class="card-text">${text}</p>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  renderCurrentTime() {
    const today = new Date();
    return today.toLocaleTimeString();
  }

  renderMessageSentTyping() {
    const content = document.getElementById('exampleFormControlInput1');
    const btnSend = document.getElementById('send-button');
    const messages = document.getElementById('box-messages');
    btnSend.addEventListener('click', () => {
      const message = document.createElement('div');
      message.innerHTML = this.renderMessageSent(content.value);
      messages.append(message);
      content.value = '';
    });
    window.addEventListener('keyup', (event) => {
      if (event.keyCode === 13) {
        const message = document.createElement('div');
        message.innerHTML = this.renderMessageSent(content.value);
        messages.append(message);
        content.value = '';
      }
    });
  }

  renderTyping() {
    return `
    <div id="typing" class="row align-items-center  mt-4">
      <div class ="col-10">
        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="type message">
      </div>
      <div class ="col-2">
        <button type="button" class="btn btn-primary px-4" id="send-button">Send</button>
      </div>
    </div>
    `;
  }

  render() {
    return `
      ${this.renderHeader()}
      <div class="container-fluid mt-4 h-100" id= "chatbox-container">
        <div class="row h-100">
          <div class="col-2">
            ${this.renderContacts()}
          </div>
          <div class="col-10">
            <div class="row h-100">
              ${this.renderMessages()}
              ${this.renderTyping()}
            </div>
          </div>
        </div>
      </div>
    `;
  }

  run() {
    this.el.innerHTML = this.render();

    this.renderMessageSentTyping();
  }
};

export default Chat;

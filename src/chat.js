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
          ${this.renderContact()}
          ${this.renderContact()}
          ${this.renderContact()}
          ${this.renderContact()}
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
          <p class="text-muted fs-6">FUCK you !</p>
        </div>
      </div>
    `;
  }

  renderMessages() {
    return `
      <div id="messages" class="row">
        <div class="col-12">
          ${this.renderMessageSent()}
          ${this.renderMessageReceived()}
        </div>
      </div>
    `;
  }

  renderMessageSent() {
    return `
      <div class="messages--message-send row">
        <div class="col-6"></div>
        <div class="col-6">
          <div class="card">
            <h5 class="card-header">Johann</h5>
            <div class="card-body">
              <h5 class="card-title">22/01/22 - 11:33</h5>
              <p class="card-text">Hello how are you ?</p>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  renderMessageReceived() {
    return `
      <div class="messages--message--received row">
        <div class="col-6">
          <div class="card">
            <h5 class="card-header">Johann</h5>
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

  render() {
    return `
      ${this.renderHeader()}
      <div class="container-fluid">
        <div class="row">
          <div class="col-2">
            ${this.renderContacts()}
          </div>
          <div class="col-10">
            <div class="row>
              ${this.renderMessages()}
              <div id="typing" class="row"></div>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  run() {
    this.el.innerHTML = this.render();
  }
};

export default Chat;

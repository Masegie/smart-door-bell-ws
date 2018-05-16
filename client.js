const clients = {
  data: [],

  generateId() {
    const id = Math.floor(Math.random() * 100);
    const duplicateIds = this.data.filter(item => item.id === id);

    if (duplicateIds.length > 0) {
      return this.generateId();
    }

    return id;
  },

  register(type, conn) {
    const id = this.generateId();

    this.data = [
      ...this.data,
      {
        id,
        type,
        conn
      },
    ];

    return id;
  },

  get(id = null) {
    if (id === null) {
      return this.data;
    }

    const client = this.data.filter(item => item.id === id);

    if (client.length === 0) {
      return null;
    }

    return client[0];
  },

  getClusters() {
    return this.data.filter(item => item.type === 'cluster');
  },

  getClients() {
    return this.data.filter(item => item.type === 'client');
  },
};

module.exports = clients;

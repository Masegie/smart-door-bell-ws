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

    register(id, type, conn) {
        this.data = this.data.filter(item => item.id !== id);

        this.data = [
            ...this.data,
            {
                id,
                type,
                conn
            },
        ];
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

    clientExists(id) {
        return this.getClients()
            .filter(item => item.id === id)
            .length === 1;
    },

    clusterExists(id) {
        return this.getClusters()
            .filter(item => item.id === id)
            .length === 1;
    },

    clientBroadcast(payload) {
        this.getClients().forEach((item) => {
            item.conn.send(JSON.stringify(payload));
        });
    },

    clusterBroadcast(payload) {
        this.getClusters().forEach((item) => {
            item.conn.send(JSON.stringify(payload));
        });
    },
};

module.exports = clients;
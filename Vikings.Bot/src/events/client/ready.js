module.exports = {
    name: 'ready',
    once: true,
    async execute(client) {
        console.log(`ODIN | Ready! ${client.user.tag} is logged in and online.`);
    }
}